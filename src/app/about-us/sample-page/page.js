"use client";

import {
  Laptop,
  ShoppingCart,
  Tags,
  Settings,
  Users,
  Map,
  X,
  Code,
  UserCog,
  Wrench,
  CheckCircle,
  Star,
  Quote,
} from "lucide-react";
import Days from "../days/page";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./sample-page.css";
import { sendContactForm } from "@/utils/api";
import { FiPhoneCall } from "react-icons/fi";

export default function SamplePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
    message: "",
    notRobot: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const showTab = (tabId) => {
    document
      .querySelectorAll(".samplePage_portfolio")
      .forEach((p) => p.classList.remove("samplePage_active"));

    document.getElementById(tabId).classList.add("samplePage_active");

    document
      .querySelectorAll(".samplePage_tab")
      .forEach((t) => t.classList.remove("samplePage_active"));
    document
      .querySelector(`[data-category="${tabId}"]`)
      .classList.add("samplePage_active");
  };

  const openLightbox = (src) => {
    document.getElementById("samplePage_lightbox-img").src = src;
    document.getElementById("samplePage_lightbox").style.display = "flex";
  };

  const closeLightbox = () => {
    document.getElementById("samplePage_lightbox").style.display = "none";
  };

  const imageRefs = useRef([]);
  const lightboxRef = useRef(null);
  const lightboxImgRef = useRef(null);

  useEffect(() => {
    imageRefs.current = document.querySelectorAll(".samplePage_item img");
    imageRefs.current.forEach((img) => {
      img.addEventListener("click", () => openLightbox(img.src));
    });

    return () => {
      imageRefs.current.forEach((img) => {
        img.removeEventListener("click", () => openLightbox(img.src));
      });
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (formError) setFormError("");
  };

  const validateForm = () => {
    const requiredFields = ["name", "phone", "email", "project"];
    for (const field of requiredFields) {
      if (!formData[field] || formData[field].trim() === "") {
        setFormError("Please fill in all required fields.");
        return false;
      }
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormError("Please enter a valid email address.");
      return false;
    }

    if (!formData.notRobot) {
      setFormError("Please verify that you are not a robot.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const sanitizeInput = (input) => {
        return input.replace(/</g, "<").replace(/>/g, ">").replace(/"/g, "");
      };

      const sanitizedName = sanitizeInput(formData.name);
      const sanitizedEmail = sanitizeInput(formData.email);
      const sanitizedPhone = sanitizeInput(formData.phone);
      const sanitizedProject = sanitizeInput(formData.project);
      const sanitizedMessage = formData.message
        ? sanitizeInput(formData.message)
        : "No message provided";

      const subject = `Free Consultation Request from ${sanitizedName}`;

      const messageContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Free Consultation Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f0f0f0;">
  <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #e0e0e0;">
    <div style="background-color: #4a90e2; padding: 15px; text-align: center;">
      <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Consultation Request</h2>
    </div>
    <div style="padding: 20px;">
      <p style="color: #333333; font-size: 16px; margin: 0 0 15px;">
        A new consultation request has been submitted to Weboum Technology.
      </p>
      <div style="border-top: 1px solid #e0e0e0; padding-top: 15px;">
        <p style="color: #333333; font-size: 14px; margin: 5px 0;">
          <strong>Name:</strong> ${sanitizedName}
        </p>
        <p style="color: #333333; font-size: 14px; margin: 5px 0;">
          <strong>Email:</strong> <a href="mailto:${sanitizedEmail}" style="color: #4a90e2; text-decoration: none;">${sanitizedEmail}</a>
        </p>
        <p style="color: #333333; font-size: 14px; margin: 5px 0;">
          <strong>Phone:</strong> ${sanitizedPhone}
        </p>
        <p style="color: #333333; font-size: 14px; margin: 5px 0;">
          <strong>Project Type:</strong> ${sanitizedProject}
        </p>
        <p style="color: #333333; font-size: 14px; margin: 5px 0;">
          <strong>Message:</strong> ${sanitizedMessage}
        </p>
      </div>
    </div>
    <div style="background-color: #f5f5f5; padding: 10px; text-align: center; font-size: 12px; color: #666666;">
      <p style="margin: 0;">© ${new Date().getFullYear()} Weboum Technology. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
      `;

      const plainTextFallback = `
Free Consultation Request Details:
--------------------------------
Name: ${sanitizedName}
Email: ${sanitizedEmail}
Phone: ${sanitizedPhone}
Project Type: ${sanitizedProject}
Message: ${sanitizedMessage}
      `.trim();

      const result = await sendContactForm({
        email: sanitizedEmail,
        subject,
        message: messageContent,
      });

      if (result.success) {
        setFormSuccess("Your request has been submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          project: "",
          message: "",
          notRobot: false,
        });
        e.target.reset();
      } else {
        setFormError("Failed to submit your request. Please try again.");
      }
    } catch (error) {
      setFormError("Failed to submit your request. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="samplePageContainer">
      <div className="samplePage">
        <section className="samplePage_business-section samplePage_conta">
          <div className="samplePage_content container">
            <h1>
              Build efficient Website
              <br />
              for your Business
            </h1>
            <p>
              In today's digital world, having a professional and efficient
              website is essential for business growth. We specialize in
              creating modern, fast, and responsive websites that help you reach
              your target audience effectively.
            </p>
            <div className="samplePage_buttons">
              <a href="#" className="samplePage_btn-primary">
                Read More
              </a>
              <a href="/about-us/contact" className="samplePage_btn-outline">
                <span>✉</span> Contact Us
              </a>
            </div>
          </div>
          <div className="samplePage_image">
            <Image
              src="/image/samplePage/development-about.jpg"
              alt="Digital Marketing"
              width={400}
              height={300}
            />
          </div>
        </section>

        <section className="samplePage_servicess-section">
          <div className="samplePage_servicess-container">
            <div className="samplePage_servicess-box samplePage_webapps-dev">
              <div className="samplePage_icon-circle">
                <a href="/services/application-developer">
                  <Laptop size={24} />
                </a>
              </div>
              <p>Webapps Development</p>
            </div>
            <div className="samplePage_servicess-box samplePage_ecommerce-sol">
              <div className="samplePage_icon-circle">
                <a href="/solutions/shopify-developer">
                  <ShoppingCart size={24} />
                </a>
              </div>
              <p>E-Commerce Solutions</p>
            </div>
            <div className="samplePage_servicess-box samplePage_branding-sol">
              <div className="samplePage_icon-circle">
                <a href="/services/graphic-design">
                  <Tags size={24} />
                </a>
              </div>
              <p>Branding Solutions</p>
            </div>
            <div className="samplePage_servicess-box samplePage_optimization-sol">
              <div className="samplePage_icon-circle">
                <a href="/solutions/backup-disaster-recovery">
                  <Settings size={24} />
                </a>
              </div>
              <p>Optimization Solutions</p>
            </div>
            <div className="samplePage_servicess-box samplePage_uiux-sol">
              <div className="samplePage_icon-circle">
                <a href="/services/web-designing">
                  <Users size={24} />
                </a>
              </div>
              <p>UI/UX Solutions</p>
            </div>
            <div className="samplePage_servicess-box samplePage_marketing-sol">
              <div className="samplePage_icon-circle">
                <a href="/services/digital-marketing-3">
                  <Map size={24} />
                </a>
              </div>
              <p>Marketing Solutions</p>
            </div>
          </div>
        </section>

        <div className="samplePage_tabs">
          <div
            className="samplePage_tab samplePage_active"
            onClick={() => showTab("all")}
            data-category="all"
          >
            All
          </div>
          <div
            className="samplePage_tab"
            onClick={() => showTab("software")}
            data-category="software"
          >
            Software
          </div>
          <div
            className="samplePage_tab"
            onClick={() => showTab("apps")}
            data-category="apps"
          >
            Apps
          </div>
          <div
            className="samplePage_tab"
            onClick={() => showTab("graphics")}
            data-category="graphics"
          >
            Graphics
          </div>
          <div
            className="samplePage_tab"
            onClick={() => showTab("marketing")}
            data-category="marketing"
          >
            Digital Marketing
          </div>
        </div>

        <div id="all" className="samplePage_portfolio samplePage_active">
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio1.jpg"
              alt="Portfolio 1"
              width={200}
              height={150}
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio2.png"
              alt="Portfolio 2"
              width={200}
              height={150}
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio4.jpg"
              alt="Software 1"
              width={200}
              height={150}
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio5.jpg"
              alt="Software 2"
              width={200}
              height={150}
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio6.jpg"
              alt="Apps 1"
              width={200}
              height={150}
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio7.jpg"
              alt="Apps 2"
              width={200}
              height={150}
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio8.jpg"
              alt="Graphics 1"
              width={200}
              height={150}
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio9.jpg"
              alt="Graphics 2"
              width={200}
              height={150}
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio10.jpg"
              alt="Marketing 1"
              width={200}
              height={150}
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio12.jpg"
              alt="Marketing 2"
              width={200}
              height={150}
            />
          </div>
        </div>

        <div id="software" className="samplePage_portfolio">
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio15.jpg"
              alt="Software 1"
              width={200}
              height={150}
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio14.jpg"
              alt="Software 2"
              width={200}
              height={150}
            />
          </div>
        </div>

        <div id="apps" className="samplePage_portfolio">
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio15.jpg"
              alt="Apps 1"
              width={200}
              height={150}
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio17.jpg"
              alt="Apps 2"
              width={200}
              height={150}
            />
          </div>
        </div>

        <div id="graphics" className="samplePage_portfolio">
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio19.jpg"
              alt="Graphics 1"
              width={200}
              height={150}
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio20.jpg"
              alt="Graphics 2"
              width={200}
              height={150}
            />
          </div>
        </div>

        <div id="marketing" className="samplePage_portfolio">
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio4.jpg"
              alt="Marketing 1"
              width={200}
              height={150}
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio7.jpg"
              alt="Marketing 2"
              width={200}
              height={150}
            />
          </div>
        </div>

        <div
          id="samplePage_lightbox"
          className="samplePage_lightbox"
          ref={lightboxRef}
        >
          <span className="samplePage_close-btn" onClick={closeLightbox}>
            <X size={24} />
          </span>
          <Image
            id="samplePage_lightbox-img"
            src="/image/samplePage/portfolio4.jpg"
            alt="Full Image"
            className="samplePage_lightbox-img"
            ref={lightboxImgRef}
            width={800}
            height={600}
          />
        </div>
        <div className="viewMoreWrapper">
          <a className="viewMoreButton" href="/portfolio">
            View More <span className="arrow">→</span>
          </a>
        </div>

        <div className="ma">
          <div className="ma-content">
            <div className="ma-icon">
              <FiPhoneCall size={40} />
            </div>
            <div className="ma-text">
              <h3>Discuss Your Product / Project</h3>
              <p>Development Ideas With Our Experts Now</p>
            </div>
          </div>
          <a href="/request-a-quote" className="buttonAsk">
            ASK AN EXPERT
          </a>
        </div>

        <section className="whyus-section-wrapper">
          <div className="whyus-row">
            <div className="whyus-left-content">
              <h6>Weboum – Customized IT Solutions</h6>
              <div className="whyus-highlight-line"></div>
              <h2>
                Why Choose <strong>us</strong>
              </h2>
              <p>
                We Are Trusted Web Development, Web Design & Digital Marketing
                Company
              </p>
              <p>
                WTPL, (Weboum Technology Pvt. Ltd.) is one of the best digital
                marketing agencies in Chandigarh & Mohali, India. Our unique mix
                of experts, from developers to digital marketers, deliver
                results that drive growth.
              </p>
              <p>
                Our web design and development with digital marketing services
                will transform your marketing approach.
              </p>
              <p>
                So, get through one of the best Web development, Web design and
                Digital marketing companies and experience the digital
                transformation of your business.
              </p>

              <div className="whyus-feature">
                <Image
                  src="/image/background.jpeg"
                  alt="Check"
                  width={50}
                  height={50}
                  className="feature-icon"
                />
                <div>
                  <h6>High Customer Retention Rate</h6>
                  <p>
                    We have a 100% retention rate due to our exceptional
                    services and client satisfaction focus.
                  </p>
                </div>
              </div>
              <div className="whyus-feature">
                <Image
                  src="/image/background.jpeg"
                  alt="Check"
                  width={50}
                  height={50}
                  className="feature-icon"
                />
                <div>
                  <h6>Ability To Meet Deadlines</h6>
                  <p>
                    We are 100% clear on when work needs to be completed and
                    have a system to ensure it happens.
                  </p>
                </div>
              </div>
              <div className="whyus-feature">
                <Image
                  src="/image/background.jpeg"
                  alt="Check"
                  width={50}
                  height={50}
                  className="feature-icon"
                />
                <div>
                  <h6>Professional Team Member</h6>
                  <p>
                    We have focused, creative team members with expert technical
                    knowledge and practical experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="whyus-form-box">
              <Image
                src="/image/featured-image.jpg"
                alt="Featured"
                width={300}
                height={200}
                className="form-featured-image"
              />
              <h5>Request A Free Consultation</h5>
              <small>
                We Help Customers Digital Transformation By IT Solutions
              </small>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  className="whyus-form-control"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="tel"
                  name="phone"
                  className="whyus-form-control"
                  placeholder="000-000-0000"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="email"
                  name="email"
                  className="whyus-form-control"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
                <select
                  name="project"
                  className="whyus-form-select"
                  value={formData.project}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                >
                  <option value="Project Development">
                    Project Development
                  </option>
                  <option value="Web Development">Web Development</option>
                  <option value="App Development">
                    Mobile App Development
                  </option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Product Development">
                    Product Development
                  </option>
                  <option value="e-Commerce / Shopping">
                    e-Commerce / Shopping
                  </option>
                  <option value="Graphic Designing">Graphic Designing</option>
                  <option value="Hosting / Migration">
                    Hosting / Migration
                  </option>
                  <option value="Other">Other</option>
                </select>
                <textarea
                  name="message"
                  className="whyus-form-control"
                  rows="4"
                  placeholder="Your Query / Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                ></textarea>
                <div className="whyus-captcha-box">
                  <input
                    type="checkbox"
                    id="captcha"
                    name="notRobot"
                    checked={formData.notRobot}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                  <label htmlFor="captcha">I'm not a robot</label>
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzz6tIILsCKIN0knMR9sTn5Shad52WNMNpuw&s"
                    alt="Verification"
                    width={80}
                    height={40}
                    className="whyus-captcha-image"
                  />
                </div>
                {formError && (
                  <div className="whyus-error-message">{formError}</div>
                )}
                {formSuccess && (
                  <div className="whyus-success-message">{formSuccess}</div>
                )}
                <button
                  type="submit"
                  className="whyus-btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "MAKE A REQUEST"}
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="samplePage_services-section">
          <div className="samplePage_service-box">
            <a href="/services/application-developer">
              <Code size={56} className="samplePage_icon-blue" />
              <h3>App Design & Development</h3>
            </a>
            <p>
              Our team of expert software developers focused on delivering
              best-in-class, user friendly top-notch applications that perform
              better across multiple platforms to achieve long term success.
            </p>
          </div>

          <div className="samplePage_service-box">
            <a href="/services/on-demand-developers">
              <UserCog size={56} className="samplePage_icon-orange" />
              <h3>On-Demand Developers</h3>
            </a>
            <p>
              Everything under one roof, give you peace of mind. We are happy to
              hire skilled cum industry experience developers and on-premise IT
              infrastructure flexibility to accelerate your performance.
            </p>
          </div>

          <div className="samplePage_service-box">
            <a href="/services/product-support">
              <Wrench size={56} className="samplePage_icon-green" />
              <h3>Product Support</h3>
            </a>
            <p>
              Our global strategic partner enables us to create next generation
              robust products and IT consulting, efficiently and make us quickly
              technical support solutions for any upcoming complexity.
            </p>
          </div>
        </section>

        <section className="samplePage_stats-section">
          <div className="samplePage_stats">
            <div className="samplePage_stat-box">
              <h2>1,500+</h2>
              <p>Project Completed</p>
            </div>
            <div className="samplePage_stat-box">
              <h2>20+</h2>
              <p>Team Members</p>
            </div>
            <div className="samplePage_stat-box">
              <h2>16+</h2>
              <p>Years in Business</p>
            </div>
            <div className="samplePage_stat-box">
              <h2>100%</h2>
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </section>

        <section className="samplePage_testimonial-section">
          <h5>Our Testimonials</h5>
          <h2>
            What Clients Say <strong>About Us</strong>
          </h2>
          <p className="samplePage_subtitle">
            Our clients are delighted with our services, and most of them come
            again to us.
          </p>

          <div className="samplePage_testimonial-slider" id="testimonialSlider">
            <div className="samplePage_testimonial-card">
              <div className="samplePage_testimonial-inner">
                <div className="samplePage_stars">
                  <Star size={26} />
                  <Star size={26} />
                  <Star size={26} />
                  <Star size={26} />
                  <Star size={26} />
                </div>
                <div className="samplePage_testimonial-text">
                  Gurbachan is a seasoned professional that met our deadline and
                  took over an advanced WordPress Project that the original
                  developer could not complete due to a lack of skills. Our
                  project involved a responsive design and full mobile
                  compatibility. He communicates very well in writing and we
                  also had video calls on Skype which sometimes makes things
                  easier. We will work with him again in the future.
                </div>
                <div className="samplePage_author">
                  <div className="samplePage_author-info">
                    <Image
                      src="/image/contact.jpeg"
                      alt="author"
                      width={50}
                      height={50}
                    />
                    <strong>Klaus Holzapfel</strong>
                  </div>
                  <div className="samplePage_quote">
                    <Quote size={16} />
                  </div>
                </div>
              </div>
            </div>

            <div className="samplePage_testimonial-card">
              <div className="samplePage_testimonial-inner">
                <div className="samplePage_stars">
                  <Star size={26} />
                  <Star size={26} />
                  <Star size={26} />
                  <Star size={26} />
                  <Star size={26} />
                </div>
                <div className="samplePage_testimonial-text">
                  I would highly recommend using Guru for your web design needs.
                  He offers a reliable and affordable service that never
                  compromises quality. He is very knowledgeable, trustworthy,
                  and responds to questions in a timely fashion.
                </div>
                <div className="samplePage_author">
                  <div className="samplePage_author-info">
                    <Image
                      src="/image/contact.jpeg"
                      alt="author"
                      width={50}
                      height={50}
                    />
                    <strong>Jill Cabana</strong>
                  </div>
                  <div className="samplePage_quote">
                    <Quote size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
      <Days />
    </>
  );
}
