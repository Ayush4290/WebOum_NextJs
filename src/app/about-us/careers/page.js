"use client";

import React, { useState, useRef } from "react";
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
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
    if (formError) setFormError("");
    if (formSuccess) setFormSuccess("");
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

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);

    try {
      const sanitizeInput = (input) => {
        if (!input) return "";
        return input
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;");
      };

      const sanitizedFormData = {
        firstName: sanitizeInput(formData.firstName),
        lastName: sanitizeInput(formData.lastName),
        email: sanitizeInput(formData.email),
        phone: sanitizeInput(formData.phone),
        post: sanitizeInput(formData.post),
        experience: sanitizeInput(formData.experience),
        message: sanitizeInput(
          formData.message || "No additional message provided"
        ),
      };

      const messageContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Job Application</title>
</head>
<body>
  <table width="100%" border="0" cellpadding="10" cellspacing="0" align="center">
    <tr>
      <td align="center">
        <h2>New Job Application</h2>
      </td>
    </tr>
    <tr>
      <td>
        <p>A new candidate has submitted an application for a position at Weboum Technology.</p>
      </td>
    </tr>
    <tr>
      <td>
        <table width="100%" border="1" cellpadding="5" cellspacing="0">
          <tr>
            <td width="30%"><strong>Name:</strong></td>
            <td>${sanitizedFormData.firstName} ${sanitizedFormData.lastName}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td><a href="mailto:${sanitizedFormData.email}">${sanitizedFormData.email}</a></td>
          </tr>
          <tr>
            <td><strong>Phone:</strong></td>
            <td>${sanitizedFormData.phone}</td>
          </tr>
          <tr>
            <td><strong>Position:</strong></td>
            <td>${sanitizedFormData.post}</td>
          </tr>
          <tr>
            <td><strong>Experience:</strong></td>
            <td>${sanitizedFormData.experience}</td>
          </tr>
          <tr>
            <td><strong>Message:</strong></td>
            <td>${sanitizedFormData.message.replace(/\n/g, "<br>")}</td>
          </tr>
          <tr>
            <td><strong>Resume:</strong></td>
            <td>${formData.resume ? "formData.resume" : "Not provided"}</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center">
        <p>© ${new Date().getFullYear()} Weboum Technology. All rights reserved.</p>
      </td>
    </tr>
  </table>
</body>
</html>
      `.trim();

      const plainTextContent = `
Job Application Submission:
------------------------
Name: ${sanitizedFormData.firstName} ${sanitizedFormData.lastName}
Email: ${sanitizedFormData.email}
Phone: ${sanitizedFormData.phone}
Position: ${sanitizedFormData.post}
Experience: ${sanitizedFormData.experience}
Message: ${sanitizedFormData.message}
Resume: ${formData.resume ? "Check in my attached PDF under the Email" : "Not provided"}

      `.trim();

      console.log("Submitting careers form with:", {
        email: sanitizedFormData.email,
        subject: `Job Application for ${sanitizedFormData.post} from ${sanitizedFormData.firstName} ${sanitizedFormData.lastName}`,
        message: messageContent.substring(0, 100) + "...",
        file: formData.resume ? formData.resume.name : "No attachment",
        formType: "careers",
      });

      const result = await sendContactForm({
        email: sanitizedFormData.email,
        subject: `Job Application for ${sanitizedFormData.post} from ${sanitizedFormData.firstName} ${sanitizedFormData.lastName}`,
        message: messageContent,
        text: plainTextContent,
        file: formData.resume,
        formType: "careers",
        replyTo: sanitizedFormData.email,
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
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        setFormError(
          result.message ||
            "Failed to submit your application. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormError(
        "Failed to submit your application. Please try again later or contact support@weboum.com."
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
                      ref={fileInputRef}
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
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzz6tIILsCKIN0knMR9sTn5Shad52WNMNpuw&s"
                      alt="Verification"
                      className="careers-captcha-image"
                      width={80}
                      height={40}
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
