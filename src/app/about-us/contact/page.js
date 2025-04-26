'use client';

import SubHeader from "@/app/sub-header/page";
import {
  FaFacebookF,
  FaTimes,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Days from "../days/page";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <SubHeader title="Contact Us" />
      <section className="approach-section">
        <div className="approach-row">
          {/* Left Section */}
          <div className="approach-left">
            <p className="approach-title">WEBOUM – SEND US A MESSAGE</p>
            <h2 className="approach-heading">
              Do You Have Any Questions?
              <br />
              We’ll Be Happy To Assist!
            </h2>
            <div className="approach-icons">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTimes />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="approach-form">
            <form>
              <label>Name</label>
              <input type="text" name="name" required />

              <label>Email</label>
              <input type="email" name="email" required />

              <label>Phone</label>
              <input type="tel" name="phone" />

              <label>Subject</label>
              <input type="text" name="subject" />

              <label>Message</label>
              <textarea rows="5" name="message" required></textarea>

              <div className="captcha-box">
                <input type="checkbox" id="captcha" />
                <label htmlFor="captcha"> I'm not a robot</label>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
      <Days />
    </>
  );
}