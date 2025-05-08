"use client";

import Days from "@/app/about-us/days/page";
import SubHeader from "@/app/sub-header/page";
import Image from "next/image";
import "./it-consulting.css";

export default function ITConsulting() {
  return (
    <>
      <SubHeader title="IT Consulting Services" />
      <div className="it-consulting-page">
        {/* Section 1: Introduction */}
        <div className="it-consulting-container it-consulting-row">
          <div className="it-consulting-text-section">
            <h1>Trusted IT Consulting & Cybersecurity Solutions</h1>
            <p>
              At Webx Technology, we are a premier IT consulting firm with a
              specialized focus on cutting-edge cybersecurity solutions. Our
              team of over 30 certified professionals brings extensive expertise
              to deliver customized services, including comprehensive risk
              assessments, advanced threat detection, and robust security
              implementations. We are committed to protecting your business from
              evolving cyber threats, ensuring operational continuity and data
              integrity.
            </p>
            <p>
              Our approach emphasizes building secure, scalable, and resilient
              IT infrastructures. By adhering to industry best practices and
              leveraging the latest technologies, we safeguard your critical
              assets, enhance system performance, and provide peace of mind in
              an increasingly digital world.
            </p>
          </div>
          <div className="it-consulting-image-section">
            <Image
              src="https://t4.ftcdn.net/jpg/01/03/61/75/360_F_103617547_RkHSQJ43EBR7C9ZcHIIFU2r7b1ZlC0IU.jpg"
              alt="Cybersecurity Infrastructure"
              width={500}
              height={300}
              priority
              className="it-consulting-image"
            />
          </div>
        </div>

        {/* Section 2: Cybersecurity Services */}
        <div className="it-consulting-container it-consulting-row it-consulting-reverse">
          <div className="it-consulting-image-section">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKy3407rguPrS1-OqxsKAQ-p6BJXwYj44LwQ&s"
              alt="Advanced Security Systems"
              width={1024}
              height={682}
              className="it-consulting-image"
            />
          </div>
          <div className="it-consulting-text-section">
            <h1>Secure Your Business with Expert Cybersecurity</h1>
            <p>
              Our cybersecurity services are designed to empower businesses by
              protecting sensitive data, ensuring regulatory compliance, and
              mitigating risks. We provide comprehensive solutions, including
              real-time threat detection, incident response, and recovery
              strategies, tailored to your unique business needs.
            </p>
            <p>
              To demonstrate our commitment, we offer a complimentary one-day
              consultation trial, allowing you to experience our expertise
              firsthand. Our solutions are built on robust security frameworks,
              ensuring your organization remains resilient against cyber
              threats.
            </p>
          </div>
        </div>

        {/* Section 3: Comprehensive IT Consulting */}
        <div className="it-consulting-container it-consulting-center">
          <h1>Comprehensive IT Consulting for Cybersecurity</h1>
          <p>
            Our expert IT consulting services are tailored to address the
            specific cybersecurity needs of your industry. We offer a wide range
            of solutions, including risk management, penetration testing,
            security audits, and compliance support for standards such as GDPR,
            HIPAA, and PCI-DSS. By partnering with us, you gain access to
            strategic insights and proactive measures that protect your business
            from vulnerabilities and ensure long-term success.
          </p>
        </div>

        {/* Section 4: Why Choose Us */}
        <div className="it-consulting-container it-consulting-center">
          <h2>Why Choose Webx Technology?</h2>
          <div className="it-consulting-features">
            <div className="it-consulting-feature">
              <h3>Certified Cybersecurity Experts</h3>
              <p>
                Our team holds industry-recognized certifications, including
                CISSP, CISM, and CEH, and works collaboratively to deliver
                secure, high-quality solutions tailored to your needs.
              </p>
            </div>
            <div className="it-consulting-feature">
              <h3>Rigorous Security Standards</h3>
              <p>
                We adhere to global security standards, such as ISO 27001 and
                NIST, to implement robust, compliant, and future-proof security
                measures for your organization.
              </p>
            </div>
            <div className="it-consulting-feature">
              <h3>Transparent Pricing</h3>
              <p>
                Our flexible pricing models, including hourly and project-based
                options, are designed to be transparent, with no hidden fees,
                ensuring cost-effective solutions for businesses of all sizes.
              </p>
            </div>
            <div className="it-consulting-feature">
              <h3>24/7 Support</h3>
              <p>
                We provide round-the-clock support for security updates,
                incident response, and system maintenance, ensuring your
                business remains protected at all times.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Days />
    </>
  );
}
