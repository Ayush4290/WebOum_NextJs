"use client";

import Days from "@/app/about-us/days/page";
import SubHeader from "@/app/sub-header/page";
import Image from "next/image";
import "./it-consulting.css";

export default function ITConsulting() {
  return (
    <>
      <SubHeader title="IT Consulting " />
      <div className="it-consulting-page">
        {/* Section 1 */}
        <div className="it-consulting-container it-consulting-row">
          <div className="it-consulting-text-section">
            <h1>Trusted IT Consulting & Cybersecurity Solutions</h1>
            <p>
              Webx Technology is a leading IT consulting firm specializing in
              cybersecurity solutions. Our team of 30+ certified professionals
              delivers tailored services, from risk assessments to advanced
              security implementations, ensuring your business is protected
              against cyber threats.
            </p>
            <p>
              We focus on creating secure, scalable IT infrastructures using
              industry best practices to safeguard your data and operations.
            </p>
          </div>
          <div className="it-consulting-image-section it-consulting-pt-24">
            <Image
              src="https://t4.ftcdn.net/jpg/01/03/61/75/360_F_103617547_RkHSQJ43EBR7C9ZcHIIFU2r7b1ZlC0IU.jpg"
              alt="Cybersecurity Main"
              width={500}
              height={300}
              priority
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="it-consulting-container it-consulting-row">
          <div className="it-consulting-image-section it-consulting-pt-24">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKy3407rguPrS1-OqxsKAQ-p6BJXwYj44LwQ&s"
              alt="Security Screens"
              width={1024}
              height={682}
            />
          </div>
          <div className="it-consulting-text-section">
            <h1>Secure Your Business with Expert Cybersecurity</h1>
            <p>
              Our cybersecurity services empower businesses to protect sensitive
              data and maintain compliance with robust security frameworks.
            </p>
            <p>
              From threat detection to incident response, we offer end-to-end
              solutions, including a free one-day consultation trial.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="it-consulting-container">
          <h1>Comprehensive IT Consulting for Cybersecurity</h1>
          <p>
            Protect your business with our expert services, including risk
            management, penetration testing, security audits, and compliance
            support, tailored to your industry needs.
          </p>
        </div>

        {/* Section 4 */}
        <div className="it-consulting-container">
          <h2>Why Choose Us?</h2>
          <h3>Strategic Workflow</h3>
          <p>
            We align our workflows with your business goals, using agile
            methodologies for efficient delivery.
          </p>
          <h3>Certified Cybersecurity Experts</h3>
          <p>
            Our team holds industry-recognized certifications and collaborates
            closely to deliver secure solutions.
          </p>
          <h3>Rigorous Security Standards</h3>
          <p>
            We adhere to global standards, ensuring robust and compliant security
            implementations.
          </p>
          <h3>Transparent Pricing</h3>
          <p>
            Flexible pricing models with no hidden fees, including hourly or
            project-based options.
          </p>
          <h3>24/7 Support</h3>
          <p>
            Real-time support for security updates, incident response, and system
            maintenance.
          </p>
        </div>

        {/* Section 5 */}
        <div className="it-consulting-container">
          <h1>Our Cybersecurity & IT Consulting Services</h1>
          <ul>
            <li>Risk Assessments & Vulnerability Scanning</li>
            <li>Penetration Testing & Threat Analysis</li>
            <li>Compliance Consulting (GDPR, HIPAA, PCI-DSS)</li>
            <li>Firewall & Endpoint Security Setup</li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="it-consulting-container">
          <h3>Security Infrastructure Development</h3>
          <ul>
            <li>Secure Network Architecture Design</li>
            <li>Cloud Security Implementation</li>
            <li>Data Encryption & Access Control</li>
          </ul>
        </div>

        {/* Section 7 */}
        <div className="it-consulting-container">
          <h3>Incident Response & Recovery</h3>
          <ul>
            <li>Real-Time Threat Monitoring</li>
            <li>Incident Response Planning</li>
            <li>Data Recovery & Backup Solutions</li>
          </ul>
        </div>

        {/* Section 8 */}
        <div className="it-consulting-container">
          <h3>API & Security Integration</h3>
          <ul>
            <li>Secure API Development</li>
            <li>Integration with SIEM Tools</li>
            <li>Third-Party Security Plugin Setup</li>
          </ul>
        </div>

        {/* Section 9 */}
        <div className="it-consulting-container">
          <h3>Employee Training & Awareness</h3>
          <ul>
            <li>Cybersecurity Training Programs</li>
            <li>Phishing Simulation & Awareness</li>
            <li>Best Practices for Secure Operations</li>
          </ul>
        </div>

        {/* Section 10 */}
        <div className="it-consulting-container">
          <h3>Maintenance & Support</h3>
          <ul>
            <li>90 Days of Free Support</li>
            <li>Regular Security Audits</li>
            <li>Patch Management & Updates</li>
            <li>24-Hour Issue Resolution</li>
          </ul>
        </div>
      </div>
      <Days />
    </>
  );
}