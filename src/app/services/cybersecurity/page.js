"use client";

import "./Cybersecurity.css";
import Days from "@/app/about-us/days/page";
import SubHeader from "@/app/sub-header/page";
import Image from "next/image";
import { FaShieldAlt, FaLock, FaNetworkWired } from "react-icons/fa";

export default function Cybersecurity() {
  return (
    <>
      <SubHeader title="Cyber Security Solutions" />
      <div className="cybersecurity">
        <section className="cybersecurity-expert">
          <div className="cybersecurity-expert-container">
            <div className="cybersecurity-row">
              <div className="cybersecurity-image">
                <Image
                  src="https://www.westchester-il.org/getattachment/841b7e75-e364-4c1e-9649-280cc92dba32/Cyber-Security-Tips.aspx?width=1000"
                  alt="Cybersecurity Protection"
                  width={600}
                  height={400}
                  priority
                />
              </div>
              <div className="cybersecurity-text">
                <h2>
                  Secure Your Business with{" "}
                  <strong>Expert Cybersecurity</strong>
                </h2>
                <p>
                  In today’s digital landscape, cybersecurity is critical to
                  protecting your business from evolving threats. At Weboum
                  Technology, we provide robust cybersecurity solutions to
                  ensure your data, systems, and reputation remain secure.
                </p>
                <p>
                  From threat detection to incident response, our services are
                  designed to fortify your defenses and keep your business ahead
                  of cyber risks. Trust us to deliver cutting-edge protection
                  tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cybersecurity-services-section">
          <div className="cybersecurity-row">
            <div className="cybersecurity-image-box">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGoV4-fHEZ7zDD4HbCUMltCI-zzBrJu18ZA&s"
                alt="Cybersecurity Services"
                width={600}
                height={400}
                priority
              />
            </div>
            <div className="cybersecurity-text-box">
              <h2>What You Get from Our Cybersecurity Services?</h2>
              <p>
                Weboum Technology is a leader in cybersecurity, offering
                solutions that protect businesses across industries. Our
                services are designed to minimize vulnerabilities and ensure
                operational continuity.
              </p>
              <p>Our cybersecurity commitments include:</p>
              <ul>
                <li>Proactive threat detection and prevention.</li>
                <li>Rapid incident response and recovery.</li>
                <li>Customized security strategies for your business.</li>
                <li>Continuous monitoring and support.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cybersecurity-offers">
          <h2>Cybersecurity Services We Offer!</h2>
          <p>
            Weboum Technology provides a wide range of cybersecurity services to
            address your business’s unique security needs.
          </p>
          <div className="cybersecurity-grid">
            <div className="cybersecurity-box">
              <h4>🛡️ Threat Detection & Prevention</h4>
              <p>
                Our advanced tools and expertise identify and neutralize threats
                before they impact your business, ensuring maximum protection.
              </p>
            </div>
            <div className="cybersecurity-box">
              <h4>🔒 Data Encryption Solutions</h4>
              <p>
                We implement robust encryption protocols to safeguard your
                sensitive data, ensuring confidentiality and compliance.
              </p>
            </div>
            <div className="cybersecurity-box">
              <h4>🌐 Network Security</h4>
              <p>
                Protect your network infrastructure with our comprehensive
                security solutions, including firewalls and intrusion detection.
              </p>
            </div>
            <div className="cybersecurity-box">
              <h4>📊 Security Audits & Compliance</h4>
              <p>
                Our thorough audits ensure your business meets industry
                standards and regulations, reducing risks and enhancing trust.
              </p>
            </div>
          </div>
        </section>

        <section className="cybersecurity-results">
          <h2>Results Driven by Our Cybersecurity Solutions!</h2>
          <div className="cybersecurity-result-grid">
            <div className="cybersecurity-result-card">
              <div className="cybersecurity-icon">
                <FaShieldAlt style={{ color: "#2a7047", fontSize: "40px" }} />
              </div>
              <h3>Enhanced Protection</h3>
              <p>
                Our solutions shield your business from cyber threats, ensuring
                your data and systems remain secure.
              </p>
            </div>
            <div className="cybersecurity-result-card">
              <div className="cybersecurity-icon">
                <FaLock style={{ color: "#2a7047", fontSize: "40px" }} />
              </div>
              <h3>Increased Trust</h3>
              <p>
                Robust cybersecurity builds confidence among customers and
                stakeholders, strengthening your brand reputation.
              </p>
            </div>
            <div className="cybersecurity-result-card">
              <div className="cybersecurity-icon">
                <FaNetworkWired
                  style={{ color: "#2a7047", fontSize: "40px" }}
                />
              </div>
              <h3>Operational Continuity</h3>
              <p>
                Minimize downtime and disruptions with our proactive security
                measures, keeping your business running smoothly.
              </p>
            </div>
          </div>
          <p className="cybersecurity-note">
            Ready to secure your business against cyber threats? Contact Weboum
            Technology to get started!
          </p>
        </section>
      </div>
      <Days />
    </>
  );
}
