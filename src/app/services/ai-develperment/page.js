import React from "react";
import "./ai-deevlperment.css";
import Days from "../../about-us/days/page";
import SubHeader from "../../sub-header/page";
import { FaBrain, FaLock, FaRocket } from "react-icons/fa";
import Image from "next/image";

export const metadata = {
  title: "AI Development Solutions - Weboum Technology Pvt. Ltd",
};

const AiDevelopment = () => {
  return (
    <>
      <SubHeader title="AI Development " />
      <div className="ai-development">
        <section className="ai-development-hero">
          <div className="ai-development-hero-content">
            <h1>Transform Your Business with AI Innovation</h1>
            <p>
              Unlock smarter solutions with AI that evolves, learns, and drives
              success.
            </p>
            <div className="ai-development-hero-buttons">
              <a
                className="ai-development-btn primary"
                href="/about-us/contact/"
              >
                Get Started Now
              </a>
              <a
                className="ai-development-btn secondary"
                href="/about-us/contact/"
              >
                Explore Services
              </a>
            </div>
          </div>
        </section>

        <section className="ai-development-intro">
          <div className="ai-development-row">
            <div className="ai-development-text">
              <h2>
                Empower <br />
                <strong>AI-Driven Solutions</strong>
              </h2>
              <p>
                At Weboum Technology, we harness artificial intelligence to
                revolutionize your business operations. Our solutions enable
                smarter decisions, seamless automation, and unparalleled
                innovation.
              </p>
              <p>
                From machine learning to advanced analytics, we provide tools to
                keep you ahead in a competitive landscape. Let’s build the
                future together.
              </p>
            </div>
            <div className="ai-development-image">
              <Image
                src="/image/A-I-image.jpg"
                alt="AI Technology"
                width={600}
                height={400}
                className="ai-development-img"
                priority
              />
            </div>
          </div>
        </section>

        <section className="ai-development-offers">
          <h2>Our AI Solutions</h2>
          <p>
            Discover how our comprehensive AI services can meet your business
            needs.
          </p>
          <div className="ai-development-grid">
            <div className="ai-development-box">
              <h4>🤖 Machine Learning Models</h4>
              <p>
                Predict trends and optimize processes with custom ML models.
              </p>
            </div>
            <div className="ai-development-box">
              <h4>⚙️ AI Automation</h4>
              <p>Streamline workflows with intelligent automation tools.</p>
            </div>
            <div className="ai-development-box">
              <h4>📊 Data Analytics</h4>
              <p>Gain actionable insights with AI-driven analytics.</p>
            </div>
            <div className="ai-development-box">
              <h4>🗣️ Natural Language Processing</h4>
              <p>Enhance interactions with NLP-powered chatbots and more.</p>
            </div>
          </div>
        </section>

        <section className="ai-development-results">
          <h2>Impact of Our AI Solutions</h2>
          <div className="ai-development-result-grid">
            <div className="ai-development-result-card">
              <div className="ai-development-icon">
                <FaBrain style={{ color: "#ffffff", fontSize: "40px" }} />
              </div>
              <h3>Enhanced Intelligence</h3>
              <p>Smarter decisions for a competitive edge.</p>
            </div>
            <div className="ai-development-result-card">
              <div className="ai-development-icon">
                <FaLock style={{ color: "#ffffff", fontSize: "40px" }} />
              </div>
              <h3>Secure Systems</h3>
              <p>Robust security for your data and processes.</p>
            </div>
            <div className="ai-development-result-card">
              <div className="ai-development-icon">
                <FaRocket style={{ color: "#ffffff", fontSize: "40px" }} />
              </div>
              <h3>Increased Efficiency</h3>
              <p>Optimize operations and reduce costs.</p>
            </div>
          </div>
          <p className="ai-development-note">
            Ready to revolutionize your business?
            <a href="/about-us/contact/"> Let’s connect!</a>
          </p>
        </section>
        <section className="ai-development-services-section">
          <div className="ai-development-row reverse">
            <div className="ai-development-image-box">
              <Image
                src="https://bernardmarr.com/wp-content/uploads/2021/12/Future-Developments-of-AI.jpg"
                alt="AI Services"
                width={600}
                height={400}
                className="ai-development-img"
                priority
              />
            </div>
            <div className="ai-development-text-box">
              <h2>Why Choose AI Services?</h2>
              <p>
                We deliver AI solutions that drive efficiency, innovation, and
                growth across industries. Our expertise ensures your business
                thrives in the digital era.
              </p>
              <ul>
                <li>Scalable AI systems for long-term success.</li>
                <li>Fast and reliable development cycles.</li>
                <li>Industry-specific AI solutions.</li>
                <li>Continuous support for optimal performance.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Days />
    </>
  );
};

export default AiDevelopment;
