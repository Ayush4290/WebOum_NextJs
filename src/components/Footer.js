"use client";

import "./footer.css";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-company-info">
          <div className="footer-logo">
            <img src="/image/logo-1.png" alt="Weboum Logo" />
           
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
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
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
              <Link href="/application-developer">Application Development</Link>
            </li>
            <li>
              <Link href="/web-designing">Web Designing</Link>
            </li>
            <li>
              <Link href="/web-developer">Web Development</Link>
            </li>
            <li>
              <Link href="/digital-marketing">Digital Marketing</Link>
            </li>
            <li>
              <Link href="/graphic-design">Graphic Design</Link>
            </li>
            <li>
              <Link href="/content-writing">Content Writing</Link>
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

// /my-weboum-app
// ├── /app
// │   ├── /about-us
// │   │   ├── page.js                      // Main About Us page
// │   │   ├── about-us.css                // CSS for About Us page
// │   │   ├── /why-us
// │   │   │   ├── page.js                 // Why Us page
// │   │   │   └── why-us.css              // CSS for Why Us page
// │   │   ├── /careers
// │   │   │   ├── page.js                 // Careers page
// │   │   │   └── careers.css             // CSS for Careers page
// │   │   ├── /contact
// │   │   │   ├── page.js                 // Contact page
// │   │   │   └── contact.css             // CSS for Contact page
// │   │   ├── /sample-page
// │   │   │   ├── page.js                 // Sample Page
// │   │   │   └── sample-page.css         // CSS for Sample Page
// │   │   ├── /digital-marketing-solutions
// │   │   │   ├── page.js                 // Digital Marketing Solutions page
// │   │   │   └── digital-marketing-solutions.css // CSS for Digital Marketing Solutions
// │   │   ├── /days
// │   │   │   ├── page.js                 // Days page
// │   │   │   └── days.css                // CSS for Days page
// │   │   ├── /build-start
// │   │   │   ├── page.js                 // Build Start page
// │   │   │   └── build-start.css         // CSS for Build Start page
// │   ├── /services
// │   │   ├── page.js                     // Main Services page (lists all services)
// │   │   ├── services.css                // CSS for Services page
// │   │   ├── /application-developer
// │   │   │   ├── page.js                 // Application Development page
// │   │   │   └── application-developer.css // CSS for Application Development
// │   │   ├── /web-developer
// │   │   │   ├── page.js                 // Web Development page
// │   │   │   └── web-developer.css       // CSS for Web Development
// │   │   ├── /web-designing
// │   │   │   ├── page.js                 // Web Designing page
// │   │   │   └── web-designing.css       // CSS for Web Designing
// │   │   ├── /graphic-design
// │   │   │   ├── page.js                 // Graphic Design page
// │   │   │   └── graphic-design.css      // CSS for Graphic Design
// │   │   ├── /digital-marketing-3
// │   │   │   ├── page.js                 // Digital Marketing page
// │   │   │   └── digital-marketing-3.css // CSS for Digital Marketing
// │   │   ├── /content-writing
// │   │   │   ├── page.js                 // Content Writing page
// │   │   │   └── content-writing.css     // CSS for Content Writing
// │   ├── /solutions
// │   │   ├── page.js                     // Main Solutions page (lists all solutions)
// │   │   ├── solutions.css               // CSS for Solutions page
// │   │   ├── /devops
// │   │   │   ├── page.js                 // DevOps page
// │   │   │   └── devops.css              // CSS for DevOps
// │   │   ├── /product-lifecycle-management
// │   │   │   ├── page.js                 // Product Lifecycle Management page
// │   │   │   └── product-lifecycle-management.css // CSS for Product Lifecycle Management
// │   │   ├── /quality-assurance-services
// │   │   │   ├── page.js                 // Quality Assurance Services page
// │   │   │   └── quality-assurance-services.css // CSS for Quality Assurance Services
// │   │   ├── /sla-support-services
// │   │   │   ├── page.js                 // SLA Support Services page
// │   │   │   └── sla-support-services.css // CSS for SLA Support Services
// │   │   ├── /backup-disaster-recovery
// │   │   │   ├── page.js                 // Backup Disaster Recovery page
// │   │   │   └── backup-disaster-recovery.css // CSS for Backup Disaster Recovery
// │   │   ├── /web-hosting-services
// │   │   │   ├── page.js                 // Web Hosting Services page
// │   │   │   └── web-hosting-services.css // CSS for Web Hosting Services
// │   │   ├── /software-testing
// │   │   │   ├── page.js                 // Software Testing page
// │   │   │   └── software-testing.css    // CSS for Software Testing
// │   │   ├── /shopify-developer
// │   │   │   ├── page.js                 // Shopify Development page
// │   │   │   └── shopify-developer.css   // CSS for Shopify Development
// │   ├── /portfolio
// │   │   ├── page.js                     // Portfolio page
// │   │   └── portfolio.css               // CSS for Portfolio
// │   ├── /request-a-quote
// │   │   ├── page.js                     // Request a Quote page
// │   │   └── request-a-quote.css         // CSS for Request a Quote
// │   ├── /all-logos
// │   │   ├── page.js                     // All Logos page
// │   │   └── all-logos.css               // CSS for All Logos
// │   ├── /hire-developer
// │   │   ├── page.js                     // Hire Developer page
// │   │   └── hire-developer.css          // CSS for Hire Developer
// │   ├── layout.js                       // Root layout (shared across all pages)
// │   ├── page.js                         // Home page (HeroSection)
// │   ├── globals.css                     // Global CSS styles
// │   └── favicon.ico                     // Favicon
// ├── /components
// │   ├── Header.js                       // Header with navigation
// │   ├── header.css                      // CSS for Header
// │   ├── Footer.js                       // Footer component
// │   ├── footer.css                      // CSS for Footer
// │   ├── Navbar.js                       // Navigation bar with nested menus
// │   ├── navbar.css                      // CSS for Navbar
// │   ├── HeroSection.js                  // Hero section for home page
// │   ├── hero-section.css                // CSS for HeroSection
// │   ├── ServiceCard.js                  // Card for displaying services
// │   ├── service-card.css                // CSS for ServiceCard
// │   ├── SolutionCard.js                 // Card for displaying solutions
// │   ├── solution-card.css               // CSS for SolutionCard
// │   ├── ContactForm.js                  // Contact form component
// │   ├── contact-form.css                // CSS for ContactForm
// │   ├── PortfolioItem.js                // Component for portfolio items
// │   ├── portfolio-item.css              // CSS for PortfolioItem
// │   └── QuoteForm.js                    // Request a Quote form component
// │   ├── quote-form.css                  // CSS for QuoteForm
// ├── /public
// │   ├── /images
// │   │   ├── logo.png                    // Logo image
// │   │   ├── hero-bg.jpg                 // Hero background image
// │   │   └── ...                         // Other images
// │   └── favicon.ico                     // Favicon (optional, if not in /app)
// ├── /data
// │   ├── services.json                   // JSON data for services
// │   ├── solutions.json                  // JSON data for solutions
// │   └── about-us.json                   // JSON data for About Us content
// ├── /styles
// │   ├── globals.css                     // Global CSS (already in /app, linked here for clarity)
// │   └── components.css                  // Shared component styles (if needed)
// ├── package.json                        // Project dependencies
// ├── next.config.js                      // Next.js configuration
// ├── .gitignore                          // Git ignore file
// └── README.md                           // Project documentation
