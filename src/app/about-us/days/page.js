"use client";

import React, { useEffect } from "react";
import "./Days.css";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Days = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <section className="offer-section">
        <div className="offer-content">
          <div className="support-text" data-aos="fade-right">
            <h6>Custom Software Development & Enterprises Solutions</h6>
            <div className="highlight-line"></div>
            <h2>30-Days FREE Support</h2>
            <h3>100% Satisfaction Guaranteed</h3>
            <hr />
            <p>
              Since 2012, we delivery 100% project success, with unique products
              for startups and small businesses considering their purpose and
              philosophy.
            </p>
            <ul>
              <li>
                <strong>24/7 Support:</strong> Email, Call, or Skype
              </li>
              <li>Dedicated Team</li>
              <li>Exceptional Consultation</li>
              <li>Trusted by Global Companies</li>
            </ul>
            <Link
              href="/request-a-quote"
              className="quote-btn"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Request A FREE Quote ➜
            </Link>
          </div>
          <div className="image-container" data-aos="fade-left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/image/android-app.jpg" alt="Android App Illustration" />
          </div>
        </div>
      </section>

      <section className="DigitalMarketing-connect-section">
        <div className="DigitalMarketing-connect-container" data-aos="fade-up">
          <div>
            <h2>What product can we engineer for you?</h2>
            <p>
              Tell us a little about yourself in the form below and we&apos;ll get in
              touch soon for product consultation.
            </p>
          </div>
          <Link
            href="#contact-form"
            className="connect-btn"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            CONNECT WITH EXPERTS
          </Link>
        </div>
      </section>
    </>
  );
};

export default Days;
