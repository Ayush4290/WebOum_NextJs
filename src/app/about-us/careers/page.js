"use client";

import React, { useState } from "react";
import "./careers.css";
import Days from "../days/page";
import SubHeader from "@/app/sub-header/page";
import Image from "next/image";

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

    // Clear any error messages when user starts typing
    if (formError) {
      setFormError("");
    }
  };

  const validateForm = () => {
    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "post",
      "experience",
    ];
    for (const field of requiredFields) {
      if (
        !formData[field] ||
        (typeof formData[field] === "string" && formData[field].trim() === "")
      ) {
        setFormError(`Please fill in all required fields.`);
        return false;
      }
    }

    // Validate email format
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      setFormError("Please enter a valid email address.");
      return false;
    }

    // Check if the user has checked the "not a robot" checkbox
    if (!formData.notRobot) {
      setFormError("Please verify that you are not a robot.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset form status
    setFormError("");
    setFormSuccess("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare the message content by compiling all form data
      const messageContent = `
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

      // Create FormData object for API request
      const apiFormData = new FormData();
      apiFormData.append("wxmail", "true");
      apiFormData.append("email", formData.email);
      apiFormData.append(
        "subject",
        `Job Application for ${formData.post} from ${formData.firstName} ${formData.lastName}`
      );
      apiFormData.append("message", messageContent);

      // Append resume file if provided
      if (formData.resume) {
        apiFormData.append("attachment", formData.resume);
      }

      // Make the API request
      const response = await fetch("https://weboum.com/email-api/", {
        method: "POST",
        body: apiFormData,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      // Parse the response
      const result = await response.json();

      if (result.success) {
        setFormSuccess(
          "Your application has been submitted successfully! We'll review your information and get back to you soon."
        );
        // Reset form data after successful submission
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
                      Attached Resume
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
                    <label htmlFor="robot-check">I&apos;m not a robot</label>
                    <Image
                      src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                      alt="Captcha"
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
                    {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                  </button>
                </form>
              </div>
            </div>

            <div className="careers-col-lg-5 careers-form-image">
              <Image
                src="/image/Careers.jpg"
                alt="HR Image or Graphic"
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
