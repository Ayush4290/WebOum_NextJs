"use client";

import SubHeader from "@/app/sub-header/page";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Days from "../days/page";
import "./contact.css";
import { useState } from "react";
import { sendContactForm } from "@/utils/api";

// Optimized HTML Email Template with dynamic form data placeholders
const emailTemplate = (formData) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <title>Contact Us - Weboum Technology</title>
  <style>
    /* Reset styles */
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
      background-color: #f4f4f4;
    }
    table {
      border-collapse: collapse;
      width: 100%;
    }
    td {
      box-sizing: border-box;
    }
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
    }
    .container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border: 1px solid #e0e0e0;
    }
    .header {
      background-color: #1a73e8;
      padding: 20px;
      text-align: center;
    }
    .header h1 {
      color: #ffffff;
      margin: 0;
      font-size: 24px;
      line-height: 1.3;
    }
    .content {
      padding: 30px 20px;
      text-align: center;
    }
    .content h2 {
      color: #333333;
      font-size: 20px;
      margin: 0 0 20px;
      line-height: 1.4;
    }
    .content p {
      color: #555555;
      font-size: 16px;
      line-height: 1.6;
      margin: 0 0 20px;
    }
    .contact-details {
      background-color: #f9f9f9;
      padding: 20px;
      margin: 20px 0;
      border-radius: 5px;
    }
    .contact-details p {
      margin: 10px 0;
      color: #555555;
      font-size: 14px;
    }
    .social-links {
      margin: 20px 0;
    }
    .social-links a {
      margin: 0 10px;
      color: #1a73e8;
      text-decoration: none;
      font-size: 14px;
    }
    .footer {
      background-color: #f4f4f4;
      padding: 20px;
      text-align: center;
      font-size: 12px;
      color: #777777;
    }
    .button {
      display: inline-block;
      padding: 12px 25px;
      background-color: #1a73e8;
      color: #ffffff !important;
      text-decoration: none;
      border-radius: 5px;
      font-size: 16px;
      margin-top: 20px;
    }
    @media only screen and (max-width: 600px) {
      .container {
        width: 100% !important;
        border: none;
      }
      .content {
        padding: 20px;
      }
      .header h1, .content h2 {
        font-size: 18px;
      }
      .content p, .contact-details p, .social-links a {
        font-size: 14px;
      }
    }
  </style>
</head>
<body>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#f4f4f4">
    <tr>
      <td align="center">
        <table class="container" role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td class="header">
              <h1>Weboum Technology - Contact Us</h1>
            </td>
          </tr>
          <tr>
            <td class="content">
              <h2>New Contact Form Submission</h2>
              <p>
                You have received a new message from ${
                  formData.name || "a user"
                } via the Weboum Technology contact form.
              </p>
              <table class="contact-details" role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <p><strong>Name:</strong> ${
                      formData.name || "Not provided"
                    }</p>
                    <p><strong>Email:</strong> ${
                      formData.email || "Not provided"
                    }</p>
                    <p><strong>Phone:</strong> ${
                      formData.phone || "Not provided"
                    }</p>
                    <p><strong>Subject:</strong> ${
                      formData.subject || "Not provided"
                    }</p>
                    <p><strong>Message:</strong> ${
                      formData.message || "Not provided"
                    }</p>
                  </td>
                </tr>
              </table>
              <p>
                You can also connect with us on social media:
              </p>
              <div class="social-links">
                <a href="https://www.facebook.com/people/Weboum-Technology-PvtLtd/100091375563554/">Facebook</a> |
                <a href="https://x.com/weboumtech33587">X</a> |
                <a href="https://www.youtube.com/@WeboumTechnologyPvt.Ltd.">YouTube</a> |
                <a href="https://www.linkedin.com/in/weboum-technology-pvt-76090626b">LinkedIn</a> |
                <a href="https://www.instagram.com/weboumtechnolgy/">Instagram</a>
              </div>
              <a href="https://weboum.com/contact" class="button">Visit Our Contact Page</a>
            </td>
          </tr>
          <tr>
            <td class="footer">
              <p>© 2025 Weboum Technology Pvt. Ltd. All rights reserved.</p>
              <p>
                <a href="https://weboum.com/privacy" style="color: #777777; text-decoration: none;">Privacy Policy</a> | 
                <a href="https://weboum.com/terms" style="color: #777777; text-decoration: none;">Terms of Service</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

    try {
      // Generate the email content with form data
      const emailContent = emailTemplate(formData);

      const response = await sendContactForm({
        ...formData,
        html: emailContent, // Pass the HTML content explicitly
      });

      // Check if response is valid
      if (!response || typeof response.ok !== "boolean") {
        throw new Error("Invalid response from server.");
      }

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Server error: ${response.status} - ${errorText || "Unknown error"}`
        );
      }

      const responseData = await response.json();

      // Check for success status in response
      if (responseData.status === "success") {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(responseData.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus(
        `Failed to send message: ${error.message}. Please try again or contact support@weboum.com.`
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
              >
                <FaFacebookF />
              </a>
              <a href="https://x.com/weboumtech33587" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a
                href="https://www.youtube.com/@WeboumTechnologyPvt.Ltd."
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/in/weboum-technology-pvt-76090626b"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/weboumtechnolgy/"
                aria-label="Instagram"
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
              />

              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />

              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
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
              ></textarea>

              <div className="captcha-box">
                <input
                  type="checkbox"
                  id="captcha"
                  required
                  aria-required="true"
                />
                <label htmlFor="captcha">I'm not a robot</label>
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

              {status && (
                <p
                  className={`form-status ${
                    status.includes("Failed") ? "error" : "success"
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
