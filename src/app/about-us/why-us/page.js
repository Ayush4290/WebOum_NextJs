"use client";

import { useEffect, useState } from "react";
import SubHeader from "@/app/sub-header/page";
import Days from "../days/page";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "./why-us.css";
import { sendContactForm } from "@/utils/api";

export default function WhyUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
    message: "",
    notRobot: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  useEffect(() => {
    
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (formError) setFormError("");
  };

  const validateForm = () => {
    const requiredFields = ["name", "phone", "email", "project"];
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
     
      const sanitizeInput = (input) => {
        return input
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;");
      };

      const sanitizedName = sanitizeInput(formData.name);
      const sanitizedEmail = sanitizeInput(formData.email);
      const sanitizedPhone = sanitizeInput(formData.phone);
      const sanitizedProject = sanitizeInput(formData.project);
      const sanitizedMessage = formData.message
        ? sanitizeInput(formData.message)
        : "No message provided";

    
      const subject = `Free Consultation Request from ${sanitizedName}`;

   
      const messageContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Free Consultation Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f0f0f0;">
  <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #e0e0e0;">
    <!-- Header -->
    <div style="background-color: #4a90e2; padding: 15px; text-align: center;">
      <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Consultation Request</h2>
    </div>
    <!-- Body -->
    <div style="padding: 20px;">
      <p style="color: #333333; font-size: 16px; margin: 0 0 15px;">
        A new consultation request has been submitted to Weboum Technology.
      </p>
      <div style="border-top: 1px solid #e0e0e0; padding-top: 15px;">
        <p style="color: #333333; font-size: 14px; margin: 5px 0;">
          <strong>Name:</strong> ${sanitizedName}
        </p>
        <p style="color: #333333; font-size: 14px; margin: 5px 0;">
          <strong>Email:</strong> <a href="mailto:${sanitizedEmail}" style="color: #4a90e2; text-decoration: none;">${sanitizedEmail}</a>
        </p>
        <p style="color: #333333; font-size: 14px; margin: 5px 0;">
          <strong>Phone:</strong> ${sanitizedPhone}
        </p>
        <p style="color: #333333; font-size: 14px; margin: 5px 0;">
          <strong>Project Type:</strong> ${sanitizedProject}
        </p>
        <p style="color: #333333; font-size: 14px; margin: 5px 0;">
          <strong>Message:</strong> ${sanitizedMessage}
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

      // Plain text fallback
      const plainTextFallback = `
Free Consultation Request Details:
--------------------------------
Name: ${sanitizedName}
Email: ${sanitizedEmail}
Phone: ${sanitizedPhone}
Project Type: ${sanitizedProject}
Message: ${sanitizedMessage}
      `.trim();

      // Send the form data to the API
      const result = await sendContactForm({
        email: sanitizedEmail,
        subject,
        message: messageContent,
      });

      // Here's the fixed part - better response handling
      if (result && result.success) {
        setFormSuccess("Your request has been submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          project: "",
          message: "",
          notRobot: false,
        });
        e.target.reset();
      } else {
        // More specific error message based on response
        const errorMessage =
          result && result.error
            ? result.error
            : "Your request has been submitted successfully!";
        setFormError(errorMessage);
      }
    } catch (error) {
      // console.error("Form submission error:", error);
      setFormError(
        "An error occurred while submitting your request. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SubHeader title="Why Us" />
      <section className="whyus-section-wrapper">
        <div className="whyus-row">
          {/* Left Content */}
          <div className="whyus-left-content" data-aos="fade-up">
            <h6 data-aos="fade-right" data-aos-delay="100">
              Weboum – Customized IT Solutions
            </h6>
            <div
              className="whyus-highlight-line"
              data-aos="width"
              data-aos-delay="200"
            ></div>
            <h2 data-aos="fade-up" data-aos-delay="300">
              Why Choose <strong>us</strong>
            </h2>
            <p data-aos="fade-up" data-aos-delay="400">
              We Are Trusted Web Development, Web Design & Digital Marketing
              Company
            </p>
            <p data-aos="fade-up" data-aos-delay="500">
              WTPL, (Weboum Technology Pvt. Ltd.) is one of the best digital
              marketing agencies in Chandigarh & Mohali, India. Our unique mix
              of experts, from developers to digital marketers, deliver results
              that drive growth.
            </p>
            <p data-aos="fade-up" data-aos-delay="600">
              Our web design and development with digital marketing services
              will transform your marketing approach.
            </p>
            <p data-aos="fade-up" data-aos-delay="700">
              So, get through one of the best Web development, Web design and
              Digital marketing companies and experience the digital
              transformation of your business.
            </p>

            <div
              className="whyus-feature"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              <Image
                src="https://weboum.com/wp-content/uploads/2024/04/icon1.png"
                alt="Check"
                width={50}
                height={50}
                className="feature-icon"
              />
              <div>
                <h6>High Customer Retention Rate</h6>
                <p>
                  We have a 100% retention rate due to our exceptional services
                  and client satisfaction focus.
                </p>
              </div>
            </div>
            <div
              className="whyus-feature"
              data-aos="fade-right"
              data-aos-delay="900"
            >
              <Image
                src="https://weboum.com/wp-content/uploads/2024/04/icon2.png"
                alt="Check"
                width={50}
                height={50}
                className="feature-icon"
              />
              <div>
                <h6>Ability To Meet Deadlines</h6>
                <p>
                  We are 100% clear on when work needs to be completed and have
                  a system to ensure it happens.
                </p>
              </div>
            </div>
            <div
              className="whyus-feature"
              data-aos="fade-right"
              data-aos-delay="1000"
            >
              <Image
                src="https://weboum.com/wp-content/uploads/2024/04/icon3.png"
                alt="Check"
                width={50}
                height={50}
                className="feature-icon"
              />
              <div>
                <h6>Professional Team Member</h6>
                <p>
                  We have focused, creative team members with expert technical
                  knowledge and practical experience.
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div
            className="whyus-form-box"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <Image
              src="/image/featured-image.jpg"
              alt="Featured"
              width={300}
              height={200}
              className="form-featured-image"
              data-aos="fade-in"
              data-aos-delay="400"
            />
            <h5 data-aos="fade-up" data-aos-delay="500">
              Request A Free Consultation
            </h5>
            <small data-aos="fade-up" data-aos-delay="600">
              We Help Customers Digital Transformation By IT Solutions
            </small>
            <form
              onSubmit={handleSubmit}
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <input
                type="text"
                name="name"
                className="whyus-form-control"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
              <input
                type="tel"
                name="phone"
                className="whyus-form-control"
                placeholder="000-000-0000"
                value={formData.phone}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
              <input
                type="email"
                name="email"
                className="whyus-form-control"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
              <select
                name="project"
                className="whyus-form-select"
                value={formData.project}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              >
                <option value="Project Development">Project Development</option>
                <option value="Web Development">Web Development</option>
                <option value="App Development">Mobile App Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Product Development">Product Development</option>
                <option value="e-Commerce / Shopping">
                  e-Commerce / Shopping
                </option>
                <option value="Graphic Designing">Graphic Designing</option>
                <option value="Hosting / Migration">Hosting / Migration</option>
                <option value="Other">Other</option>
              </select>
              <textarea
                name="message"
                className="whyus-form-control"
                rows="4"
                placeholder="Your Query / Message"
                value={formData.message}
                onChange={handleInputChange}
                disabled={isSubmitting}
              ></textarea>
              <div className="whyus-captcha-box">
                <input
                  type="checkbox"
                  id="captcha"
                  name="notRobot"
                  checked={formData.notRobot}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
                <label htmlFor="captcha">I&apos;m not a robot</label>
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzz6tIILsCKIN0knMR9sTn5Shad52WNMNpuw&s"
                  alt="Verification"
                  width={80}
                  height={40}
                  className="whyus-captcha-image"
                />
              </div>
              {formError && (
                <div className="whyus-error-message">{formError}</div>
              )}
              {formSuccess && (
                <div className="whyus-success-message">{formSuccess}</div>
              )}
              <button
                type="submit"
                className="whyus-btn-submit"
                data-aos="pulse"
                data-aos-delay="800"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "MAKE A REQUEST"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Days />
    </>
  );
}
