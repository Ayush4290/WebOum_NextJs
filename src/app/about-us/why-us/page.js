'use client';

import SubHeader from "@/app/sub-header/page";
import Days from "../days/page";
import Image from "next/image"; // Added import for Next.js Image component
import "./why-us.css";

export default function WhyUs() {
  return (
    <>
      <SubHeader title="Why Us" />
      <section className="whyus-section-wrapper">
        <div className="whyus-row">
          {/* Left Content */}
          <div className="whyus-left-content">
            <h6>Weboum – Customized IT Solutions</h6>
            <div className="whyus-highlight-line"></div>
            <h2>
              Why Choose <strong>us</strong>
            </h2>
            <p>We Are Trusted Web Development, Web Design & Digital Marketing Company</p>
            <p>
              WTPL, (Weboum Technology Pvt. Ltd.) is one of the best digital marketing agencies in Chandigarh & Mohali, India. Our unique mix of experts, from developers to digital marketers, deliver results that drive growth.
            </p>
            <p>Our web design and development with digital marketing services will transform your marketing approach.</p>
            <p>
              So, get through one of the best Web development, Web design and Digital marketing companies and experience the digital transformation of your business.
            </p>

            <div className="whyus-feature">
              <Image src="/image/background.jpeg" alt="Check" width={50} height={50} /> {/* Replaced img with Image */}
              <div>
                <h6>High Customer Retention Rate</h6>
                <p>We have a 100% retention rate due to our exceptional services and client satisfaction focus.</p>
              </div>
            </div>
            <div className="whyus-feature">
              <Image src="/image/background.jpeg" alt="Check" width={50} height={50} /> {/* Replaced img with Image */}
              <div>
                <h6>Ability To Meet Deadlines</h6>
                <p>We are 100% clear on when work needs to be completed and have a system to ensure it happens.</p>
              </div>
            </div>
            <div className="whyus-feature">
              <Image src="/image/background.jpeg" alt="Check" width={50} height={50} /> {/* Replaced img with Image */}
              <div>
                <h6>Professional Team Member</h6>
                <p>We have focused, creative team members with expert technical knowledge and practical experience.</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="whyus-form-box">
            <Image src="/image/featured-image.jpg" alt="Featured" width={300} height={200} /> {/* Replaced img with Image */}
            <h5>Request A Free Consultation</h5>
            <small>We Help Customers Digital Transformation By IT Solutions</small>
            <form>
              <input type="text" className="whyus-form-control" placeholder="Name" required />
              <input type="tel" className="whyus-form-control" placeholder="000-000-0000" required />
              <input type="email" className="whyus-form-control" placeholder="Email" required />
              <select className="whyus-form-select" required>
                <option>Project Development</option>
                <option value="1">Web Development</option>
                <option value="2">App Development</option>
                <option value="3">Digital Marketing</option>
              </select>
              <textarea className="whyus-form-control" rows="4" placeholder="Your Query / Message"></textarea>
              <div className="whyus-captcha-box">
                <input type="checkbox" id="captcha" />
                <label htmlFor="captcha"> I&apos;m not a robot</label> {/* Escaped single quote */}
              </div>
              <button type="submit" className="whyus-btn-submit">MAKE A REQUEST</button>
            </form>
          </div>
        </div>
      </section>

      <Days />
    </>
  );
}