import Days from "../../about-us/days/page";
import SubHeader from "../../sub-header/page";
import Image from "next/image";
import "./it-consulting.css";

export async function generateMetadata() {
  return {
    title: "IT Consulting - Weboum Technology Pvt. Ltd",
    description:
      "Discover our expert IT consulting and cybersecurity solutions, including risk assessments, threat detection, and compliance support.",
  };
}

export default function ITConsulting() {
  return (
    <>
      <SubHeader title="IT Consulting Services" />
      <div className="it-consulting-page">
        {/* Section 1: Introduction */}
        <section className="it-consulting-container it-consulting-row">
          <div className="it-consulting-text-section">
            <h1>Trusted IT Consulting & Cybersecurity Solutions</h1>
            <p>
              At Weboum Technology, we are a premier IT consulting firm
              specializing in cutting-edge cybersecurity solutions. Our team of
              over 30 certified professionals delivers customized services,
              including comprehensive risk assessments, advanced threat
              detection, and robust security implementations to protect your
              business from evolving cyber threats.
            </p>
            <p>
              Our approach focuses on building secure, scalable, and resilient
              IT infrastructures. By leveraging industry best practices and the
              latest technologies, we safeguard your critical assets, enhance
              system performance, and provide peace of mind in a digital world.
            </p>
          </div>
          <div className="it-consulting-image-section">
            <Image
              src="https://www.maven.co/wp-content/uploads/2024/03/vn38rsz_business_consultant.jpg"
              alt="Cybersecurity Infrastructure"
              width={500}
              height={300}
              priority
              className="it-consulting-image"
            />
          </div>
        </section>

        {/* Section 2: Cybersecurity Services */}
        <section className="it-consulting-container it-consulting-row it-consulting-reverse">
          <div className="it-consulting-image-section">
            <Image
              src="https://www.indiabusinesstrade.in/wp-content/uploads/2023/08/Untitled-design-72.jpg"
              alt="Advanced Security Systems"
              width={1024}
              height={682}
              className="it-consulting-image"
            />
          </div>
          <div className="it-consulting-text-section">
            <h1>Secure Your Business with Expert Cybersecurity</h1>
            <p>
              Our cybersecurity services empower businesses by protecting
              sensitive data, ensuring regulatory compliance, and mitigating
              risks. We offer real-time threat detection, incident response, and
              tailored recovery strategies to meet your unique needs.
            </p>
            <p>
              Experience our expertise with a complimentary one-day consultation
              trial. Our solutions are built on robust security frameworks,
              ensuring your organization remains resilient against cyber
              threats.
            </p>
          </div>
        </section>

        {/* Section 3: Comprehensive IT Consulting */}
        <section className="it-consulting-container it-consulting-center">
          <h1>Comprehensive IT Consulting for Cybersecurity</h1>
          <p>
            Our IT consulting services address the specific cybersecurity needs
            of your industry. We provide risk management, penetration testing,
            security audits, and compliance support for standards like GDPR,
            HIPAA, and PCI-DSS. Partner with us to gain strategic insights and
            proactive measures for long-term success.
          </p>
        </section>

        {/* Section 4: Why Choose Us */}
        <section className="it-consulting-container it-consulting-center">
          <h2>Why Choose Weboum Technology?</h2>
          <div className="it-consulting-features">
            <div className="it-consulting-feature">
              <h3>Certified Cybersecurity Experts</h3>
              <p>
                Our team holds certifications like CISSP, CISM, and CEH,
                delivering secure, high-quality solutions tailored to your
                needs.
              </p>
            </div>
            <div className="it-consulting-feature">
              <h3>Rigorous Security Standards</h3>
              <p>
                We adhere to global standards like ISO 27001 and NIST,
                implementing compliant and future-proof security measures.
              </p>
            </div>
            <div className="it-consulting-feature">
              <h3>Transparent Pricing</h3>
              <p>
                Our flexible pricing models, including hourly and project-based
                options, are transparent with no hidden fees.
              </p>
            </div>
            <div className="it-consulting-feature">
              <h3>24/7 Support</h3>
              <p>
                We offer round-the-clock support for security updates, incident
                response, and system maintenance.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Days />
    </>
  );
}
