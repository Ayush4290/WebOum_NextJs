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
    if (formSuccess) setFormSuccess("");
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

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);

    try {
      // Sanitize inputs
      const sanitizeInput = (input) => {
        if (!input) return "";
        return input
          .replace(/&/g, "&")
          .replace(/</g, "<")
          .replace(/>/g, ">")
          .replace(/"/g, "")
          .replace(/'/g, "");
      };

      const sanitizedFormData = {
        name: sanitizeInput(formData.name || "Not provided"),
        email: sanitizeInput(formData.email || "Not provided"),
        phone: sanitizeInput(formData.phone || "Not provided"),
        project: sanitizeInput(formData.project || "Not specified"),
        message: sanitizeInput(formData.message || "No message provided"),
      };

      const subject = `Free Consultation Request from ${sanitizedFormData.name}`;

      // Plain HTML5 table-based email template without CSS
      const messageContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Free Consultation Request</title>
</head>
<body>
  <table width="100%" border="0" cellpadding="10" cellspacing="0" align="center">
    <tr>
      <td align="center">
        <h2>New Consultation Request</h2>
      </td>
    </tr>
    <tr>
      <td>
        <p>A new consultation request has been submitted to Weboum Technology.</p>
      </td>
    </tr>
    <tr>
      <td>
        <table width="100%" border="1" cellpadding="5" cellspacing="0">
          <tr>
            <td width="30%"><strong>Name:</strong></td>
            <td>${sanitizedFormData.name}</td>
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
            <td><strong>Project Type:</strong></td>
            <td>${sanitizedFormData.project}</td>
          </tr>
          <tr>
            <td><strong>Message:</strong></td>
            <td>${sanitizedFormData.message.replace(/\n/g, "<br>")}</td>
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
      const plainTextContent = `
Free Consultation Request Details:
------------------------
Name: ${sanitizedFormData.name}
Email: ${sanitizedFormData.email}
Phone: ${sanitizedFormData.phone}
Project Type: ${sanitizedFormData.project}
Message: ${sanitizedFormData.message}
      `.trim();

      console.log("Submitting form with:", {
        email: sanitizedFormData.email,
        subject,
        message: messageContent.substring(0, 100) + "...",
        text: plainTextContent.substring(0, 100) + "...",
        formType: "consultation",
      });

      const result = await sendContactForm({
        email: sanitizedFormData.email,
        subject,
        message: messageContent,
        text: plainTextContent,
        formType: "consultation",
        replyTo: sanitizedFormData.email,
      });

      if (result.success) {
        setFormSuccess("Your request has been submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          project: "",
          message: "",
          notRobot: false,
        });
      } else {
        setFormError(
          result.message || "Failed to send your request. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormError(
        "Failed to send your request. Please try again later or contact support@weboum.com."
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
                <label htmlFor="captcha">I'm not a robot</label>
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
