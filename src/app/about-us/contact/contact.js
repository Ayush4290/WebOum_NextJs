"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import SubHeader from "../../sub-header/page";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Days from "../days/page";
import Image from "next/image";
import "./contact.css";
import { sendContactForm } from "../../../utils/api";

export default function Contact() {
  const searchParams = useSearchParams();
  const [isFromPackagePage, setIsFromPackagePage] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    notRobot: false,
    packageType: "",
    packagePrice: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const packagePricing = {
    starter: "USD 450",
    standard: "USD 950",
    professional: "USD 1500",
  };

  useEffect(() => {
    // Check if user came from digital marketing packages page
    const fromPackage = searchParams.get('from') === 'package';
    const packageType = searchParams.get('package');
    
    if (fromPackage && packageType && packagePricing[packageType]) {
      setIsFromPackagePage(true);
      setFormData(prev => ({
        ...prev,
        packageType: packageType,
        packagePrice: packagePricing[packageType],
        subject: `Digital Marketing Package Inquiry - ${packageType.charAt(0).toUpperCase() + packageType.slice(1)}`,
      }));
    }
  }, [searchParams]);

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
    if (status) setStatus(""); // Clear status on input change
  };

  const handlePackageChange = (e) => {
    const selectedPackage = e.target.value;
    setFormData(prev => ({
      ...prev,
      packageType: selectedPackage,
      packagePrice: packagePricing[selectedPackage] || "",
      subject: selectedPackage ? `Digital Marketing Package Inquiry - ${selectedPackage.charAt(0).toUpperCase() + selectedPackage.slice(1)}` : prev.subject,
    }));
  };

  const handleNumericKeyPress = (e) => {
    const charCode = e.charCode;
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
    }
  };

  const handlePhonePaste = (e) => {
    const pastedData = e.clipboardData.getData("text");
    const numericData = pastedData.replace(/\D/g, ""); // Strip non-numeric characters
    setFormData((prev) => ({
      ...prev,
      phone: numericData,
    }));
    e.preventDefault(); // Prevent the default paste behavior
  };

  const createEmailTemplate = (data) => {
    // Sanitize inputs
    const sanitizeInput = (input) => {
      if (!input) return "";
      return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    };

    const sanitizedName = sanitizeInput(data.name || "Not provided");
    const sanitizedEmail = sanitizeInput(data.email || "Not provided");
    const sanitizedPhone = sanitizeInput(data.phone || "Not provided");
    const sanitizedSubject = sanitizeInput(data.subject || "Not specified");
    const sanitizedMessage = sanitizeInput(data.message || "No message provided");
    const sanitizedPackageType = sanitizeInput(data.packageType || "");
    const sanitizedPackagePrice = sanitizeInput(data.packagePrice || "");

    // Enhanced HTML template for package inquiries
    const packageRows = isFromPackagePage && data.packageType ? `
          <tr>
            <td><strong>Package Type:</strong></td>
            <td>${sanitizedPackageType.charAt(0).toUpperCase() + sanitizedPackageType.slice(1)}</td>
          </tr>
          <tr>
            <td><strong>Package Price:</strong></td>
            <td>${sanitizedPackagePrice}</td>
          </tr>` : '';

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission${isFromPackagePage ? ' - Package Inquiry' : ''}</title>
</head>
<body>
  <table width="100%" border="0" cellpadding="10" cellspacing="0" align="center">
    <tr>
      <td align="center">
        <h2>New Contact Form Submission${isFromPackagePage ? ' - Digital Marketing Package Inquiry' : ''}</h2>
      </td>
    </tr>
    <tr>
      <td>
        <p>You have received a new message from your website contact form.</p>
      </td>
    </tr>
    <tr>
      <td>
        <table width="100%" border="1" cellpadding="5" cellspacing="0">
          <tr>
            <td width="30%"><strong>Name:</strong></td>
            <td>${sanitizedName}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td><a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></td>
          </tr>
          <tr>
            <td><strong>Phone:</strong></td>
            <td>${sanitizedPhone}</td>
          </tr>
          <tr>
            <td><strong>Subject:</strong></td>
            <td>${sanitizedSubject}</td>
          </tr>
          ${packageRows}
          <tr>
            <td><strong>Message:</strong></td>
            <td>${sanitizedMessage.replace(/\n/g, "<br>")}</td>
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

    // Plain text fallback
    const packageText = isFromPackagePage && data.packageType ? `
Package Type: ${sanitizedPackageType.charAt(0).toUpperCase() + sanitizedPackageType.slice(1)}
Package Price: ${sanitizedPackagePrice}` : '';

    const plainTextContent = `
Contact Form Submission:
------------------------
Name: ${sanitizedName}
Email: ${sanitizedEmail}
Phone: ${sanitizedPhone}
Subject: ${sanitizedSubject}${packageText}
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

    if (formData.phone && !/^\d+$/.test(formData.phone)) {
      setStatus("Phone number must contain only numbers.");
      setIsSubmitting(false);
      return;
    }

    if (!formData.notRobot) {
      setStatus("Please verify that you are not a robot.");
      setIsSubmitting(false);
      return;
    }

    // Additional validation for package fields
    if (isFromPackagePage && !formData.packageType) {
      setStatus("Package information is missing. Please try again.");
      setIsSubmitting(false);
      return;
    }

    try {
      const emailContent = createEmailTemplate(formData);
      
      const formSubject = formData.subject 
        ? `Contact Form: ${formData.name} - ${formData.subject}`
        : `Contact Form: ${formData.name}`;

      console.log("Submitting contact form with:", {
        email: formData.email,
        subject: formSubject,
        message: emailContent.html,
        text: emailContent.text,
        formType: isFromPackagePage ? "package-inquiry" : "contact",
        replyTo: formData.email,
        packageDetails: isFromPackagePage ? {
          type: formData.packageType,
          price: formData.packagePrice
        } : null,
      });

      const result = await sendContactForm({
        email: formData.email,
        subject: formSubject,
        message: emailContent.html,
        text: emailContent.text,
        formType: isFromPackagePage ? "package-inquiry" : "contact",
        replyTo: formData.email,
        packageDetails: isFromPackagePage ? {
          type: formData.packageType,
          price: formData.packagePrice
        } : null,
      });

      if (result.success) {
        setStatus("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          notRobot: false,
          packageType: "",
          packagePrice: "",
        });
      } else {
        setStatus(
          result.message || "Failed to send your message. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus(
        "Failed to send your message. Please try again or contact support@weboum.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SubHeader title={isFromPackagePage ? "Digital Marketing Package Inquiry" : "Contact Us"} />
      <section className="approach-section">
        <div className="approach-row">
          <div className="approach-left">
            <p className="approach-title">WEBOUM – SEND US A MESSAGE</p>
            <h2 className="approach-heading">
              {isFromPackagePage ? (
                <>
                  Interested In Our Digital Marketing Package?
                  <br />
                  Let&apos;s Get Started!
                </>
              ) : (
                <>
                  Do You Have Any Questions?
                  <br />
                  We&apos;ll Be Happy To Assist!
                </>
              )}
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
              <label htmlFor="name">Name*</label>
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
              
              <label htmlFor="email">Email*</label>
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
              
              <label htmlFor="phone">Phone*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onKeyPress={handleNumericKeyPress}
                onPaste={handlePhonePaste}
                disabled={isSubmitting}
              />

              {/* Package Fields - Only show when coming from package page */}
              {isFromPackagePage && (
                <>
                  <label htmlFor="packageType">Package Type</label>
                  <input
                    type="text"
                    id="packageType"
                    name="packageType"
                    value={formData.packageType ? `${formData.packageType.charAt(0).toUpperCase() + formData.packageType.slice(1)} Package` : ''}
                    readOnly
                    disabled
                    style={{backgroundColor: '#f5f5f5', cursor: 'not-allowed'}}
                  />

                  <label htmlFor="packagePrice">Package Price</label>
                  <input
                    type="text"
                    id="packagePrice"
                    name="packagePrice"
                    value={formData.packagePrice}
                    readOnly
                    disabled
                    style={{backgroundColor: '#f5f5f5', cursor: 'not-allowed'}}
                  />
                </>
              )}
              
              <label htmlFor="subject">Subject*</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
                disabled={isSubmitting}
                placeholder={isFromPackagePage ? "Please describe your requirements and any questions about the selected package..." : "Your message..."}
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
                <label htmlFor="captcha">I&apos;m not a robot</label>
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzz6tIILsCKIN0knMR9sTn5Shad52WNMNpuw&s"
                  alt="Verification"
                  className="captcha-image"
                  width={80}
                  height={40}
                />
              </div>
              
              {status && (
                <div
                  className={
                    status.includes("successfully")
                      ? "contact-success-message"
                      : status.includes("email")
                      ? "contact-error-message contact-error-message-email"
                      : "contact-error-message"
                  }
                  role="alert"
                >
                  {status}
                </div>
              )}
              
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : isFromPackagePage ? "Send Package Inquiry" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Days />
    </>
  );
}