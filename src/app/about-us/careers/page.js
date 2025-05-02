"use client";

import React, { useState } from "react";
import "./careers.css";
import Days from "../days/page";
import SubHeader from "@/app/sub-header/page";
import Image from "next/image";
import { sendContactForm } from "@/utils/api";

const Careers = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    post: "",
    experience: "",
    message: "",
    resume: null,
    notRobot: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
    if (formError) setFormError("");
  };

  const validateForm = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "post",
      "experience",
    ];
    for (const field of requiredFields) {
      if (!formData[field] || formData[field].trim() === "") {
        setFormError("Please fill in all required fields.");
        return false;
      }
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormError("Please enter a valid email address.");
      return false;
    }

    if (formData.resume) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (!allowedTypes.includes(formData.resume.type)) {
        setFormError("Please upload a PDF or Word document.");
        return false;
      }
      if (formData.resume.size > maxSize) {
        setFormError("Resume file size must be less than 5MB.");
        return false;
      }
    }

    if (!formData.notRobot) {
      setFormError("Please verify that you are not a robot.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Sanitize the message field to prevent HTML injection
      const sanitizeInput = (input) => {
        return input
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;");
      };
      const sanitizedMessage = sanitizeInput(
        formData.message || "No additional message provided."
      );

      // Basic HTML email template embedded directly in the function
      const messageContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Job Application</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f0f0f0;">
  <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #e0e0e0;">
    <!-- Header -->
    <div style="background-color: #4a90e2; padding: 15px; text-align: center;">
      <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Job Application</h2>
    </div>
    <!-- Body -->
    <div style="padding: 20px;">
      <p style="color: #333333; font-size: 16px; margin: 0 0 15px;">
        A new candidate has submitted an application for a position at Weboum Technology.
      </p>
      <div style="border-top: 1px solid #e0e0e0; padding-top: 15px;">
        <p style="color: #333333; font-size: 14px; margin: 5px 0;">
          <strong>Name:</strong> ${formData.firstName} ${formData.lastName}
        </p>
        <p style="color: #333333; font-size: 14px; margin: 5px 0;">
          <strong>Email:</strong> <a href="mailto:${
            formData.email
          }" style="color: #4a90e2; text-decoration: none;">${
        formData.email
      }</a>
        </p>
        <p style="color: #333333; font-size: 14px; margin: 5px 0;">
          <strong>Phone:</strong> ${formData.phone}
        </p>
        <p style="color: #333333; font-size: 14px; margin: 5px 0;">
          <strong>Position:</strong> ${formData.post}
        </p>
        <p style="color: #333333; font-size: 14px; margin: 5px 0;">
          <strong>Experience:</strong> ${formData.experience}
        </p>
        <p style="color: #333333; font-size: 14px; margin: 5px 0;">
          <strong>Message:</strong> ${sanitizedMessage}
        </p>
        <p style="color: #333333; font-size: 14px; margin: 5px 0;">
          <strong>Resume:</strong> ${
            formData.resume ? "Attached" : "Not provided"
          }
        </p>
      </div>
    </div>
    <!-- Footer -->
    <div style="background-color: #f5f5f5; padding: 10px; text-align: center; font-size: 12px; color: #666666;">
      <p style="margin: 0;">© ${new Date().getFullYear()} Weboum Technology. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
      `;

      // Plain text fallback in case the API or email client doesn't support HTML
      const plainTextFallback = `
Job Application Details:
------------------------
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Position: ${formData.post}
Experience: ${formData.experience}
Message: ${formData.message || "No additional message provided."}
Resume: ${formData.resume ? "Attached" : "Not provided"}
      `;

      const result = await sendContactForm({
        email: formData.email,
        subject: `Job Application for ${formData.post} from ${formData.firstName} ${formData.lastName}`,
        message: messageContent,
        attachment: formData.resume,
      });

      if (result.success) {
        setFormSuccess(
          "Your application has been submitted successfully! We'll review your information and get back to you soon."
        );
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          post: "",
          experience: "",
          message: "",
          resume: null,
          notRobot: false,
        });
        document.getElementById("resume").value = "";
      } else {
        setFormError(
          result.message ||
            "Failed to submit your application. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormError(
        "Failed to submit your application. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SubHeader title="Careers" />
      <section className="careers-application-section">
        <div className="careers-container">
          <div className="careers-row">
            <div className="careers-col-lg-7">
              <div className="careers-application-form">
                {formError && (
                  <div className="careers-error-message">{formError}</div>
                )}
                {formSuccess && (
                  <div className="careers-success-message">{formSuccess}</div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="careers-row">
                    <div className="careers-col-md-6">
                      <input
                        type="text"
                        name="firstName"
                        className="careers-form-control"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="careers-col-md-6">
                      <input
                        type="text"
                        name="lastName"
                        className="careers-form-control"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="careers-row">
                    <div className="careers-col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="careers-form-control"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="careers-col-md-6">
                      <input
                        type="tel"
                        name="phone"
                        className="careers-form-control"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="careers-row">
                    <div className="careers-col-md-6">
                      <input
                        type="text"
                        name="post"
                        className="careers-form-control"
                        placeholder="Apply For Post"
                        value={formData.post}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="careers-col-md-6">
                      <input
                        type="text"
                        name="experience"
                        className="careers-form-control"
                        placeholder="Experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="careers-mb-3">
                    <label htmlFor="resume" className="careers-form-label">
                      Attach Resume
                    </label>
                    <input
                      type="file"
                      name="resume"
                      className="careers-form-control"
                      id="resume"
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      accept=".pdf,.doc,.docx"
                    />
                  </div>

                  <textarea
                    name="message"
                    className="careers-form-control"
                    rows="5"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  ></textarea>

                  <div className="careers-captcha-box">
                    <input
                      type="checkbox"
                      id="robot-check"
                      name="notRobot"
                      checked={formData.notRobot}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                    <label htmlFor="robot-check">I'm not a robot</label>
                    <Image
                      src="/images/captcha-logo.png"
                      alt="Verification"
                      className="careers-captcha-image"
                      width={48}
                      height={48}
                    />
                  </div>

                  <button
                    type="submit"
                    className="careers-btn-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>

            <div className="careers-col-lg-5 careers-form-image">
              <Image
                src="/image/Careers.jpg"
                alt="Careers Image"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
      <Days />
    </>
  );
};

export default Careers;
