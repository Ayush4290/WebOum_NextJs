"use client";

import SubHeader from "@/app/sub-header/page";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Days from "../days/page";
import "./contact.css";
import { useState } from "react";
import { sendContactForm } from "@/utils/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    notRobot: false,
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    // Validate inputs
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    if (!formData.notRobot) {
      setStatus("Please verify that you are not a robot.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Sanitize the message field to prevent HTML injection
      const sanitizeInput = (input) => {
        return input
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;");
      };

      const sanitizedMessage = sanitizeInput(
        formData.message || "No message provided."
      );

      // Modified HTML email template - now for job applications
      const messageContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>New Job Application</title>
  </head>
  <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f0f0f0;">
    <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 5px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
      <!-- Header -->
      <div style="background-color: #4a90e2; padding: 20px; text-align: center; border-radius: 5px 5px 0 0;">
        <h2 style="color: #ffffff; margin: 0; font-size: 24px;">New Job Application</h2>
      </div>
      
      <!-- Body -->
      <div style="padding: 30px 20px;">
        <p style="color: #333333; font-size: 16px; margin: 0 0 20px;">
          A new candidate has submitted an application for a position at Weboum Technology.
        </p>
        
        <div style="background-color: #f9f9f9; padding: 20px; margin: 15px 0; border-radius: 5px; border-left: 4px solid #4a90e2;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
                <strong style="color: #333333;">Name:</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #555555;">
                ${formData.name}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
                <strong style="color: #333333;">Email:</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #555555;">
                <a href="mailto:${formData.email}" style="color: #4a90e2; text-decoration: none;">${formData.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
                <strong style="color: #333333;">Phone:</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #555555;">
                ${formData.phone || "Not provided"}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
                <strong style="color: #333333;">Position:</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #555555;">
                ${formData.subject || "Not specified"}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
                <strong style="color: #333333;">Experience:</strong>
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #555555;">
                ${sanitizedMessage.includes("years of experience") ? sanitizedMessage.match(/\d+(?=\s*years of experience)/i)?.[0] || "Not specified" : "Not specified"}
              </td>
            </tr>
          </table>
          
          <!-- Message -->
          <div style="margin-top: 20px;">
            <h3 style="color: #333333; margin: 0 0 10px; font-size: 16px;">Message:</h3>
            <p style="color: #555555; line-height: 1.5; background-color: #ffffff; padding: 15px; border-radius: 5px; margin: 0;">
              ${sanitizedMessage}
            </p>
          </div>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #333333; margin: 0 0 10px; font-size: 16px;">Resume:</h3>
            <p style="color: #555555; line-height: 1.5; background-color: #ffffff; padding: 15px; border-radius: 5px; margin: 0;">
              Attached
            </p>
          </div>
        </div>
      </div>
      
      <!-- Footer -->
      <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666666; border-radius: 0 0 5px 5px; border-top: 1px solid #e0e0e0;">
        <p style="margin: 0;">© ${new Date().getFullYear()} Weboum Technology. All rights reserved.</p>
      </div>
    </div>
  </body>
  </html>
      `;
      
      // Plain text fallback
      const plainTextFallback = `
Job Application:
------------------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Position: ${formData.subject || "Not specified"}
Message: ${formData.message || "No message provided."}
Resume: Attached
      `;

      const result = await sendContactForm({
        email: formData.email,
        subject: formData.subject || `Job Application: ${formData.name}`,
        message: messageContent,
        text: plainTextFallback, // Adding plain text version as fallback
        isHtml: true, // Flag to indicate this is HTML content
      });

      if (result.success) {
        setStatus("Message sent successfully! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          notRobot: false,
        });
      } else {
        setStatus(
          result.message || "Failed to send your message. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus(
        "Failed to send your message. Please try again later or contact support@weboum.com directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SubHeader title="Contact Us" />
      <section className="approach-section">
        <div className="approach-row">
          {/* Left Section */}
          <div className="approach-left">
            <p className="approach-title">WEBOUM – SEND US A MESSAGE</p>
            <h2 className="approach-heading">
              Do You Have Any Questions?
              <br />
              We'll Be Happy To Assist!
            </h2>
            <div className="approach-icons">
              <a
                href="https://www.facebook.com/people/Weboum-Technology-PvtLtd/100091375563554/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/weboumtech33587"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitterX />
              </a>
              <a
                href="https://www.youtube.com/@WeboumTechnologyPvt.Ltd."
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/in/weboum-technology-pvt-76090626b"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/weboumtechnolgy/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="approach-form">
            <form onSubmit={handleSubmit} noValidate>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                disabled={isSubmitting}
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                disabled={isSubmitting}
              />

              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
              />

              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={isSubmitting}
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
                disabled={isSubmitting}
              ></textarea>

              <div className="captcha-box">
                <input
                  type="checkbox"
                  id="captcha"
                  name="notRobot"
                  checked={formData.notRobot}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  disabled={isSubmitting}
                />
                <label htmlFor="captcha">I'm not a robot</label>
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

              {status && (
                <p
                  className={`form-status ${
                    status.includes("Failed") || status.includes("Please")
                      ? "error"
                      : "success"
                  }`}
                  role="alert"
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
      <Days />
    </>
  );
}