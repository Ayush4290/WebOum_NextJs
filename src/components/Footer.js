"use client";

import "./footer.css";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
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
          <div className="newsletter-form">
            <input type="email" placeholder="Email Address" />
            <button type="submit">SUBMIT</button>
          </div>
          <div className="social-section">
            <p>Follow us on:</p>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaTwitter />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
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
