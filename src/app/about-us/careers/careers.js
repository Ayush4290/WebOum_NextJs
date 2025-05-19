"use client";

import React, { useState, useRef } from "react";
import "./careers.css";
import Days from "../days/page";
import SubHeader from "../../sub-header/page";
import Image from "next/image";
import { sendContactForm } from "../../../utils/api";

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

  const handleNumericKeyPress = (e) => {
    const charCode = e.charCode;
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
    }
  };

  const handleAlphabeticKeyPress = (e) => {
    const char = String.fromCharCode(e.charCode);
    if (!/^[a-zA-Z\s]*$/.test(char)) {
      e.preventDefault();
    }
  };

  const handlePhonePaste = (e) => {
    const pastedData = e.clipboardData.getData("text");
    const numericData = pastedData.replace(/\D/g, "");
    setFormData((prev) => ({
      ...prev,
      phone: numericData,
    }));
    e.preventDefault();
  };

  const validateForm = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "post",
      "experience",
      "message",
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

    if (!/^\d+$/.test(formData.phone)) {
      setFormError("Phone number must contain only numbers.");
      return false;
    }

    if (!/^\d+$/.test(formData.experience)) {
      setFormError("Experience must contain only numbers.");
      return false;
    }

    if (!formData.resume) {
      setFormError("Please upload a resume.");
      return false;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxSize = 5 * 1024 * 1024;
    if (!allowedTypes.includes(formData.resume.type)) {
      setFormError("Please upload a PDF or Word document.");
      return false;
    }
    if (formData.resume.size > maxSize) {
      setFormError("Resume file size must be less than 5MB.");
      return false;
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
          .replace(/&/g, "&")
          .replace(/</g, "<")
          .replace(/>/g, ">")
          .replace(/"/g, "")
          .replace(/'/g, "'");
      };

      const sanitizedFormData = {
        firstName: sanitizeInput(formData.firstName),
        lastName: sanitizeInput(formData.lastName),
        email: sanitizeInput(formData.email),
        phone: sanitizeInput(formData.phone),
        post: sanitizeInput(formData.post),
        experience: sanitizeInput(formData.experience),
        message: sanitizeInput(formData.message),
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
        <p>A new candidate has submitted an application for ${sanitizedFormData.post} at Weboum Technology.</p>
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
            <td>formData.resume</td>
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
Resume: Check in my attached PDF under the Email
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
          "Your application has been submitted successfully!"
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
                <form onSubmit={handleSubmit}>
                  <div className="careers-row">
                    <div className="careers-col-md-6">
                      <input
                        type="text"
                        name="firstName"
                        className="careers-form-control"
                        placeholder="First Name*"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        onKeyPress={handleAlphabeticKeyPress}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="careers-col-md-6">
                      <input
                        type="text"
                        name="lastName"
                        className="careers-form-control"
                        placeholder="LastName*"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        onKeyPress={handleAlphabeticKeyPress}
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
                        placeholder="Email*"
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
                        placeholder="Phone*"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onKeyPress={handleNumericKeyPress}
                        onPaste={handlePhonePaste}
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
                        placeholder="Apply For Post*"
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
                        placeholder="Experience*"
                        value={formData.experience}
                        onChange={handleInputChange}
                        onKeyPress={handleNumericKeyPress}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="careers-mb-3">
                    <label htmlFor="resume" className="careers-form-label">
                      Attach Resume*
                    </label>
                    <input
                      type="file"
                      name="resume"
                      className="careers-form-control"
                      id="resume*"
                      ref={fileInputRef}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      accept=".pdf,.doc,.docx"
                    />
                  </div>

                  <textarea
                    name="message"
                    className="careers-form-control"
                    rows="5"
                    placeholder="Message*"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  ></textarea>

                  <div className="careers-captcha-box">
                    <input
                      type="checkbox"
                      id="robot-check"
                      name="notRobot"
                      checked={formData.notRobot}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                    <label htmlFor="robot-check">I&apos;m not a robot</label>
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzz6tIILsCKIN0knMR9sTn5Shad52WNMNpuw&s"
                      alt="Verification"
                      className="careers-captcha-image"
                      width={80}
                      height={40}
                    />
                  </div>

                  {formError && (
                    <div
                      className={
                        formError.includes("email")
                          ? "careers-error-message careers-error-message-email"
                          : "careers-error-message"
                      }
                    >
                      {formError}
                    </div>
                  )}
                  {formSuccess && (
                    <div className="careers-success-message">{formSuccess}</div>
                  )}

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