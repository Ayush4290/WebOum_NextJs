"use client";

import SubHeader from "@/app/sub-header/page";
import {
  FaFacebookF,
  FaTimes,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Days from "../days/page";
import "./contact.css";
import { useState } from "react";

const basicEmailTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form Submission</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4; }
    .container { background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); }
    h1 { color: #007bff; font-size: 24px; margin-bottom: 20px; }
    .field { margin-bottom: 15px; }
    .field label { font-weight: bold; display: block; color: #555; }
    .field p { margin: 5px 0 0; padding: 10px; background-color: #f9f9f9; border-radius: 4px; }
    .footer { margin-top: 20px; text-align: center; font-size: 14px; color: #777; }
  </style>
</head>
<body>
  <div class="container">
    <h1>New Contact Form Submission</h1>
    <div class="field">
      <label>Name:</label>
      <p>{{name}}</p>
    </div>
    <div class="field">
      <label>Email:</label>
      <p>{{email}}</p>
    </div>
    <div class="field">
      <label>Phone:</label>
      <p>{{phone}}</p>
    </div>
    <div class="field">
      <label>Subject:</label>
      <p>{{subject}}</p>
    </div>
    <div class="field">
      <label>Message:</label>
      <p>{{message}}</p>
    </div>
    <div class="footer">
      <p>This email was sent from the WEBOUM Contact Form</p>
    </div>
  </div>
</body>
</html>
`;

export const sendContactForm = async ({
  name,
  email,
  phone,
  subject,
  message,
}) => {
  const payload = {
    name,
    email,
    phone,
    subject,
    message,
    emailTemplate: basicEmailTemplate,
    to: "support@weboum.com", 
  };

  try {
    console.log("Sending payload:", JSON.stringify(payload, null, 2));

    const response = await fetch("https://stage.weboum.com/email-api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload),
    });

    console.log("API Response Status:", response.status);
    const responseData = await response.json();
    console.log("API Response:", JSON.stringify(responseData, null, 2));

    if (!response.ok) {
      throw new Error(
        `API request failed with status ${response.status}: ${JSON.stringify(responseData)}`
      );
    }

    if (responseData.success || responseData.status === "success") {
      return responseData;
    } else {
      throw new Error(
        `Email not sent: ${JSON.stringify(responseData.message || responseData)}`
      );
    }
  } catch (error) {
    console.error("API Error:", error?.message || error);
    throw error;
  }
}

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

    if (!validateEmail(formData.email)) {
      setStatus("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    try {
      const responseData = await sendContactForm(formData);
      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus(
        `Failed to send message: ${error.message}. Please try again or contact support.`
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
              We’ll Be Happy To Assist!
            </h2>
            <div className="approach-icons">
              <a href="https://www.facebook.com/webxtechnology">
                <FaFacebookF />
              </a>
              <a href="https://x.com/weboum">
                <FaTimes />
              </a>
              <a href="https://www.youtube.com/@WeboumTechnologyPvt.Ltd.">
                <FaYoutube />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="approach-form">
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />

              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />

              <label>Message</label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <div className="captcha-box">
                <input type="checkbox" id="captcha" required />
                <label htmlFor="captcha"> I'm not a robot</label>
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

              {status && (
                <p
                  className={`form-status ${
                    status.includes("Failed") ? "error" : ""
                  }`}
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
