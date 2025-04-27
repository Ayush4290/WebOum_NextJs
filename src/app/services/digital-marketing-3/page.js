"use client";

import Days from "@/app/about-us/days/page";
import SubHeader from "@/app/sub-header/page";
import "./digital-marketing-3.css";
import {
  FaCubes,
  FaCompressArrowsAlt,
  FaVectorSquare,
  FaCloudSunRain,
  FaCheckCircle,
} from "react-icons/fa";

export default function DigitalMarketing() {
  return (
    <>
      <SubHeader title="Digital Marketing" />
      <div className="DigitalMarketing">
        <section className="DigitalMarketing-agency">
          <h2>Marketing agency with expert troops in charge!</h2>
          <p>
            Is your brand popular enough on social media platforms? If not, it's
            high time to leverage the amazing benefits of social media...
          </p>
          <p>
            Want the finest game in social media for your brand? Let Weboum
            Technology pull apart the competition and drive ascendancy for
            you...
          </p>

          <div className="DigitalMarketing-content">
            <div className="DigitalMarketing-image-container">
              <img src="/image/digital.jpg" alt="Social Media Campaign" />
            </div>
            <div className="DigitalMarketing-text-content">
              <h3>Spending in digital, but no multiples of return?</h3>
              <p>
                Social media has immense power to change the fate of your
                business...
              </p>
            </div>
          </div>
        </section>

        <section className="DigitalMarketing-sociable-section">
          <div className="DigitalMarketing-sociable-text">
            <h2>Get Sociable with The Best Social Media Marketing Agency!</h2>
            <p>
              Irrespective of the industry you operate in, and the type of
              business you own...
            </p>
          </div>
          <div className="DigitalMarketing-sociable-image">
            <img
              src="/image/digital2.jpg"
              alt="Social Media Icons Around Laptop"
            />
          </div>
        </section>

        <section className="DigitalMarketing-social-benefits-section">
          <div className="DigitalMarketing-container">
            <h2 className="DigitalMarketing-section-title">
              That's How Social Media Marketing Will Help Your Brand!
            </h2>
            <p className="DigitalMarketing-section-subtitle">
              Social Media Marketing is a considerable aspect of Digital
              Marketing...
            </p>

            <div className="DigitalMarketing-benefits-grid">
              <div className="DigitalMarketing-benefit-box">
                <div className="DigitalMarketing-icon">
                  <FaCubes style={{ color: "#800080", fontSize: "40px" }} />
                </div>
                <h3>Quick Problem Resolution:</h3>
                <p>
                  Social media agencies like us quickly come up with
                  strategies...
                </p>
              </div>
              <div className="DigitalMarketing-benefit-box">
                <div className="DigitalMarketing-icon">
                  <FaCompressArrowsAlt
                    style={{ color: "#800080", fontSize: "40px" }}
                  />
                </div>
                <h3>Connect with End-Users:</h3>
                <p>
                  Social media helps brands and end-users connect seamlessly...
                </p>
              </div>
              <div className="DigitalMarketing-benefit-box">
                <div className="DigitalMarketing-icon">
                  <FaVectorSquare
                    style={{ color: "#800080", fontSize: "40px" }}
                  />
                </div>
                <h3>Brand Awareness:</h3>
                <p>
                  Social media platforms bring brands close to their
                  end-users...
                </p>
              </div>
              <div className="DigitalMarketing-benefit-box">
                <div className="DigitalMarketing-icon">
                  <FaCloudSunRain
                    style={{ color: "#800080", fontSize: "40px" }}
                  />
                </div>
                <h3>Boost Sales:</h3>
                <p>
                  Using influencer marketing and social commerce to boost
                  sales...
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="DigitalMarketing-brand-voice-section">
          <div className="DigitalMarketing-brand-voice-container">
            <h2>Make your social media profiles the voice of your brand!</h2>
            <div className="DigitalMarketing-brand-voice-content">
              <p>
                We will help develop social media pages that will resonate with
                your brand's core objectives...
              </p>
              <p>
                Research says, almost 74% of people use social media to make a
                purchase decision...
              </p>
            </div>

            <div className="DigitalMarketing-why-work">
              <h3>Why Work With Weboum Technology?</h3>
              <ul>
                <li>
                  <FaCheckCircle style={{ color: "#0066cc" }} />
                  <span>Custom solutions to fit unique client needs.</span>
                </li>
                <li>
                  <FaCheckCircle style={{ color: "#0066cc" }} />
                  <span>In-house team to use optimal images and content.</span>
                </li>
                <li>
                  <FaCheckCircle style={{ color: "#0066cc" }} />
                  <span>
                    Industry experts who believe in delivering results.
                  </span>
                </li>
                <li>
                  <FaCheckCircle style={{ color: "#0066cc" }} />
                  <span>
                    Performance-based billing — pay for real work only.
                  </span>
                </li>
                <li>
                  <FaCheckCircle style={{ color: "#0066cc" }} />
                  <span>Deep understanding of user trends and behaviors.</span>
                </li>
                <li>
                  <FaCheckCircle style={{ color: "#0066cc" }} />
                  <span>Analytics and technology-driven strategies.</span>
                </li>
              </ul>
            </div>

            <div className="DigitalMarketing-contact-note">
              It's time to boost your social media marketing with Weboum
              Technology!
            </div>

            <div className="DigitalMarketing-cta">
              <p>Looking for the best packages? Click below:</p>
              <a href="#">Digital Marketing Packages</a>
            </div>
          </div>
        </section>
      </div>

      <Days />
    </>
  );
}
