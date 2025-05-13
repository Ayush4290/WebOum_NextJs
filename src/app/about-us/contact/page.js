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
import sanitizeHtml from "sanitize-html";

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
  const [debug, setDebug] = useState(null);

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

  const createEmailTemplate = (data) => {
    // Sanitize inputs
    const sanitizeOptions = {
      allowedTags: [],
      allowedAttributes: {},
    };
    
    const sanitizedName = sanitizeHtml(data.name || "", sanitizeOptions);
    const sanitizedEmail = sanitizeHtml(data.email || "", sanitizeOptions);
    const sanitizedPhone = sanitizeHtml(data.phone || "Not provided", sanitizeOptions);
    const sanitizedSubject = sanitizeHtml(data.subject || "Not specified", sanitizeOptions);
    const sanitizedMessage = sanitizeHtml(data.message || "No message provided.", sanitizeOptions);
    
    // Create a current year variable
    const currentYear = new Date().getFullYear();
    
    // FIXED: Using table-based layout for better email client compatibility
    const htmlContent = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f0f0f0;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td style="padding: 20px 0;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 5px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td align="center" style="background-color: #4a90e2; padding: 20px; border-radius: 5px 5px 0 0;">
              <h2 style="color: #ffffff; margin: 0; font-size: 24px; font-family: Arial, Helvetica, sans-serif;">New Contact Form Submission</h2>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 30px 20px;">
              <p style="color: #333333; font-size: 16px; margin: 0 0 20px; font-family: Arial, Helvetica, sans-serif;">
                You have received a new message from your website contact form.
              </p>
              
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f9f9f9; padding: 20px; margin: 15px 0; border-radius: 5px; border-left: 4px solid #4a90e2;">
                <tr>
                  <td width="100" style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #333333; font-family: Arial, Helvetica, sans-serif;">Name:</strong>
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #555555; font-family: Arial, Helvetica, sans-serif;">
                    ${sanitizedName}
                  </td>
                </tr>
                <tr>
                  <td width="100" style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #333333; font-family: Arial, Helvetica, sans-serif;">Email:</strong>
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #555555; font-family: Arial, Helvetica, sans-serif;">
                    <a href="mailto:${sanitizedEmail}" style="color: #4a90e2; text-decoration: none;">${sanitizedEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td width="100" style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #333333; font-family: Arial, Helvetica, sans-serif;">Phone:</strong>
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #555555; font-family: Arial, Helvetica, sans-serif;">
                    ${sanitizedPhone}
                  </td>
                </tr>
                <tr>
                  <td width="100" style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #333333; font-family: Arial, Helvetica, sans-serif;">Subject:</strong>
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #555555; font-family: Arial, Helvetica, sans-serif;">
                    ${sanitizedSubject}
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top: 20px;">
                    <h3 style="color: #333333; margin: 0 0 10px; font-size: 16px; font-family: Arial, Helvetica, sans-serif;">Message:</h3>
                    <p style="color: #555555; line-height: 1.5; background-color: #ffffff; padding: 15px; border-radius: 5px; margin: 0; font-family: Arial, Helvetica, sans-serif;">
                      ${sanitizedMessage.replace(/\n/g, '<br>')}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td align="center" style="background-color: #f5f5f5; padding: 15px; font-size: 12px; color: #666666; border-radius: 0 0 5px 5px; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; font-family: Arial, Helvetica, sans-serif;">© ${currentYear} Weboum Technology. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    // Plain text fallback
    const plainTextContent = `
Contact Form Submission:
------------------------
Name: ${sanitizedName}
Email: ${sanitizedEmail}
Phone: ${sanitizedPhone}
Subject: ${sanitizedSubject}
Message: ${sanitizedMessage}
    `.trim();

    return {
      html: htmlContent,
      text: plainTextContent,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");
    setDebug(null);

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
      // Generate email template
      const emailContent = createEmailTemplate(formData);
      
      // ADDED: Debug logging to see what's being sent
      console.log("Email template generated with HTML length:", emailContent.html.length);
      console.log("HTML content sample:", emailContent.html.substring(0, 200));
      
      // Send contact form with explicit parameters
      const result = await sendContactForm({
        email: formData.email,
        subject: formData.subject || `Contact Form: ${formData.name}`,
        message: emailContent.html, // This is the HTML content
        text: emailContent.text     // This is the plain text
      });

      console.log("Email send result:", result);
      
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
        
        // Store debug info if available
        if (result.data) {
          setDebug(result.data);
        }
      } else {
        setStatus(result.message || "Failed to send your message. Please try again.");
        
        // Store debug info if available
        if (result.data) {
          setDebug(result.data);
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Failed to send your message. Please try again or contact support@weboum.com.");
      setDebug(error.message || "Unknown error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SubHeader title="Contact Us" />
      <section className="approach-section">
        <div className="approach-row">
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