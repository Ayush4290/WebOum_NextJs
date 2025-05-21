"use client";

import "./footer.css";
import Link from "next/link";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";
import { sendContactForm } from "../utils/api";

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

  const sanitizedEmail = sanitizeInput(data.email || "Not provided");

  // Simplified HTML email template (minimal content)
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Subscription Confirmation</title>
</head>
<body>
  <p>Email: ${sanitizedEmail}</p>
  <p>Thank you for subscribing to Weboum updates.</p>
  <p>© ${new Date().getFullYear()} Weboum Technology Private Limited.</p>
</body>
</html>
  `.trim();

  // Simplified plain text fallback (no line breaks)
  const plainTextContent = `Email: ${sanitizedEmail} - Thank you for subscribing to Weboum updates.`.trim();

  return {
    html: htmlContent,
    text: plainTextContent,
  };
};

export default function Footer() {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    if (!formData.email) {
      setFormError("Please enter an email address.");
      return false;
    }

    if (!validateEmail(formData.email)) {
      setFormError("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (formError) setFormError("");
    if (formSuccess) setFormSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const emailContent = createEmailTemplate(formData);

      const payload = {
        email: formData.email,
        subject: "Newsletter Subscription",
        message: emailContent.html,
        text: emailContent.text,
        formType: "newsletter",
        replyTo: "no-reply@weboum.com", // Changed from user's email to a proper no-reply address
      };

      const response = await sendContactForm(payload);

      if (response && response.success) {
        setFormSuccess(
          "Successfully subscribed! Check your inbox or spam folder."
        );
        setFormData({ email: "" });
      } else {
        throw new Error(response?.message || "Failed to subscribe");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setFormError(
        "Failed to subscribe. Please try again or contact support@weboum.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-company-info">
          <div className="footer-logo">
            <Image
              src="/image/logo-1.png"
              alt="Weboum Logo"
              width={600}
              height={400}
            />
          </div>
          <p className="company-description">
            Weboum empowers small businesses and startups with high-impact
            digital solutions—stunning websites, powerful apps, and strategic
            marketing—to boost visibility, attract customers, and drive real
            growth!
          </p>
        </div>

        <div className="footer-links-section">
          <h3>Links</h3>
          <div className="underline"></div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/about-us/careers">Careers</Link>
            </li>
            <li>
              <Link href="/about-us/contact">Contact</Link>
            </li>
                        <li>
              <Link href="/about-us/hosting-management">Hosting Management</Link>
            </li>
                        <li>
              <Link href="/solutions/backup-disaster-recovery">Backup Disaster Recovery</Link>
            </li>
            <li>
              <Link href="/hire-developer">Hire Developer</Link>
            </li>
            <li>
              <Link href="/request-a-quote">Request a quote</Link>
            </li>
          </ul>
        </div>

        <div className="footer-services-section">
          <h3>Services</h3>
          <div className="underline"></div>
          <ul>
            <li>
              <Link href="/services/application-developer">
                Application Development
              </Link>
            </li>
            <li>
              <Link href="/services/web-designing">Web Designing</Link>
            </li>
            <li>
              <Link href="/services/web-developer">Web Development</Link>
            </li>
            <li>
              <Link href="/services/digital-marketing-3">
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link href="/services/graphic-design">Graphic Design</Link>
            </li>
            <li>
              <Link href="/services/content-writing">Content Writing</Link>
            </li>
            <li>
              <Link href="/solutions/sla-support-services">Sla Support Services</Link>
            </li>
            <li>
              <Link href="/services/content-writing">Web Hosting Services</Link>
            </li>
            <li>
              <Link href="/all-logos">All Logos Designs</Link>
            </li>
          </ul>
        </div>

        <div className="footer-newsletter-section">
          <h3>Subscribe Newsletter</h3>
          <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              disabled={isSubmitting}
            />
            {formError && (
              <div
                className={
                  formError.includes("email")
                    ? "footer-error-message footer-error-message-email"
                    : "footer-error-message"
                }
                role="alert"
              >
                {formError}
              </div>
            )}
            {formSuccess && (
              <div className="footer-success-message" role="alert">
                {formSuccess}
              </div>
            )}
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
          <div className="social-section">
            <p>Follow us on:</p>
            <div className="social-icons">
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
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>
          © {new Date().getFullYear()} Weboum Technology Private Limited. All
          rights reserved. Terms of services
        </p>
      </div>
    </div>
  );
}