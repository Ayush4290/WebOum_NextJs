"use client";

import "./footer.css";
import Link from "next/link";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";
import { sendContactForm } from "@/utils/api";

const EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Weboum's Newsletter</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #e0e0e0;">
    <tr>
      <td style="text-align: center; padding: 20px 0; border-bottom: 1px solid #eee;">
        <img src="https://weboum.com/image/logo-1.png" alt="Weboum Logo" style="max-width: 150px;" />
      </td>
    </tr>
    <tr>
      <td style="padding: 20px; text-align: center;">
        <h1 style="color: #2c3e50; margin-bottom: 20px;">Welcome to Weboum's Newsletter!</h1>
        <p style="margin: 10px 0;">Thank you for subscribing to our newsletter!</p>
        <p style="margin: 10px 0;">You'll now receive the latest updates, tips, and exclusive offers from Weboum Technology.</p>
        <p style="margin: 10px 0;">If you wish to unsubscribe, please click the link below.</p>
        <p style="margin: 10px 0;">
          <a href="https://weboum.com/unsubscribe" style="display: inline-block; padding: 10px 20px; background-color: #3498db; color: #ffffff; text-decoration: none; border-radius: 5px;">Unsubscribe</a>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align: center; padding: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
        <p style="margin: 0;">© 2025 Weboum Technology Private Limited. All rights reserved.</p>
        <p style="margin: 5px 0;">Weboum Technology Pvt Ltd, 123 Tech Street, Innovation City, IN 12345</p>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitMessage("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      const sanitizeInput = (input) => {
        const div = document.createElement("div");
        div.textContent = input || "";
        return div.innerHTML
          .replace(/&/g, "&")
          .replace(/</g, "<")
          .replace(/>/g, ">")
          .replace(/"/g, "");
      };

      const sanitizedEmail = sanitizeInput(email);

      console.log("Submitting email:", {
        email: sanitizedEmail,
        subject: "Welcome to Weboum's Newsletter!",
        message: EMAIL_TEMPLATE.substring(0, 100) + "...",
      });

      const response = await sendContactForm({
        email: sanitizedEmail,
        subject: "Welcome to Weboum's Newsletter!",
        message: EMAIL_TEMPLATE,
      });

      if (response.success) {
        setSubmitMessage(
          "Successfully subscribed! Check your inbox or spam folder."
        );
        setEmail("");
        console.log("Subscription response:", response);
      } else {
        throw new Error(response.message || "Failed to subscribe");
      }
    } catch (error) {
      console.error("Subscription error:", error.message, error.stack);
      setSubmitMessage(
        `Failed to subscribe: ${error.message}. Please try again or contact support at support@weboum.com.`
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
              <Link href="/all-logos">All Logos Designs</Link>
            </li>
          </ul>
        </div>

        <div className="footer-newsletter-section">
          <h3>Subscribe Newsletter</h3>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
            </button>
          </form>
          {submitMessage && (
            <p
              className={`submit-message ${
                submitMessage.includes("Failed") ? "error" : "success"
              }`}
            >
              {submitMessage}
            </p>
          )}
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
          © 2025 Weboum Technology Private Limited. All rights reserved. Terms
          of services
        </p>
      </div>
    </div>
  );
}