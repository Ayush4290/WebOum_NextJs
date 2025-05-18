"use client";

import {
  Laptop,
  ShoppingCart,
  Tags,
  Settings,
  Users,
  Map,
  X,
  UserCog,
  CheckCircle,
  Star,
  Quote,
} from "lucide-react";
import { FaTools, FaCode, FaUserCog } from "react-icons/fa";
import Days from "../days/page";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./sample-page.css";
import { sendContactForm } from "../../../utils/api";
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
  const [testimonials, setTestimonials] = useState([]);
  const whyUsRef = useRef(null);

  // Set static testimonials data
  useEffect(() => {
    setTestimonials([
      {
        id: 1,
        text: "I would highly recommend using Guru for your web design needs. He offers a reliable and affordable service that never compromises quality. He is very knowledgeable, trustworthy, and responds to questions in a timely fashion.",
        author: "Jill Cabana",
        image: "https://weboum.com/wp-content/uploads/2024/06/placeholder.png",
      },
      {
        id: 2,
        text: "If you don’t want to be beaten, imprisoned, mutilated, killed or tortured then you shouldn’t condone such behaviour towards anyone, be they human or not.",
        author: "Moby",
        image: "https://weboum.com/wp-content/uploads/2024/06/placeholder.png",
      },
    ]);
  }, []);

  // Scroll to "Why Us" section on initial load
  // Scroll to "Why Us" section on initial load, but not in mobile view
  useEffect(() => {
    if (whyUsRef.current && window.innerWidth >= 768) {
      whyUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  const openLightbox = (src) => {
    document.getElementById("samplePage_lightbox-img").src = src;
    document.getElementById("samplePage_lightbox").classList.add("active");
  };

  const closeLightbox = () => {
    document.getElementById("samplePage_lightbox").classList.remove("active");
  };

  const imageRefs = useRef([]);
  const lightboxRef = useRef(null);
  const lightboxImgRef = useRef(null);

  useEffect(() => {
    imageRefs.current = document.querySelectorAll(
      ".samplePage_item img.default-img"
    );
    const handleImageClick = (src) => openLightbox(src);

    imageRefs.current.forEach((img) => {
      const src = img.src;
      img.addEventListener("click", () => handleImageClick(src));
    });

    return () => {
      imageRefs.current.forEach((img) => {
        const src = img.src;
        img.removeEventListener("click", () => handleImageClick(src));
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
    if (formSuccess) setFormSuccess("");
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

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);

    try {
      // Sanitize inputs
      const sanitizeInput = (input) => {
        if (!input) return "";
        return input
          .replace(/&/g, "&")
          .replace(/</g, "<")
          .replace(/>/g, ">")
          .replace(/"/g, " ")
          .replace(/'/g, "'");
      };

      const sanitizedFormData = {
        name: sanitizeInput(formData.name || "Not provided"),
        email: sanitizeInput(formData.email || "Not provided"),
        phone: sanitizeInput(formData.phone || "Not provided"),
        project: sanitizeInput(formData.project || "Not specified"),
        message: sanitizeInput(formData.message || "No message provided"),
      };

      const subject = `Free Consultation Request from ${sanitizedFormData.name}`;

      // Plain HTML5 table-based email template without CSS
      const messageContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Free Consultation Request</title>
</head>
<body>
  <table width="100%" border="0" cellpadding="10" cellspacing="0" align="center">
    <tr>
      <td align="center">
        <h2>New Consultation Request</h2>
      </td>
    </tr>
    <tr>
      <td>
        <p>A new consultation request has been submitted to Weboum Technology.</p>
      </td>
    </tr>
    <tr>
      <td>
        <table width="100%" border="1" cellpadding="5" cellspacing="0">
          <tr>
            <td width="30%"><strong>Name:</strong></td>
            <td>${sanitizedFormData.name}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td><a href="mailto:${sanitizedFormData.email}">${sanitizedFormData.email}</a></td>
          </tr>
          <tr>
            <td><strong>Phone:</strong></td>
            <td>${sanitizedFormData.phone}</td>
          </tr>
          <tr>
            <td><strong>Project Type:</strong></td>
            <td>${sanitizedFormData.project}</td>
          </tr>
          <tr>
            <td><strong>Message:</strong></td>
            <td>${sanitizedFormData.message.replace(/\n/g, "<br>")}</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center">
        <p>© ${new Date().getFullYear()} Weboum Technology. All rights reserved.</p>
      </td>
    </tr>
  </table>
</body>
</html>
      `.trim();

      // Plain text fallback
      const plainTextContent = `
Free Consultation Request Details:
------------------------
Name: ${sanitizedFormData.name}
Email: ${sanitizedFormData.email}
Phone: ${sanitizedFormData.phone}
Project Type: ${sanitizedFormData.project}
Message: ${sanitizedFormData.message}
      `.trim();

      console.log("Submitting form with:", {
        email: sanitizedFormData.email,
        subject,
        message: messageContent.substring(0, 100) + "...",
        text: plainTextContent.substring(0, 100) + "...",
        formType: "consultation",
      });

      const result = await sendContactForm({
        email: sanitizedFormData.email,
        subject,
        message: messageContent,
        text: plainTextContent,
        formType: "consultation",
        replyTo: sanitizedFormData.email,
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
      } else {
        setFormError(
          result.message || "Failed to send your request. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormError(
        "Failed to send your request. Please try again later or contact support@weboum.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="samplePageContainer">
        <section className="samplePage_business-section samplePage_conta">
          <div className="sampleHeader">
            <div className="samplePage_content container">
              <h1>
                Build efficient Website
                <br />
                for your Business
              </h1>
              <p>
                In today's digital world, having a professional and efficient
                website is essential for business growth. We specialize in
                creating modern, fast, and responsive websites that help you
                reach your target audience effectively.
              </p>
              <div className="samplePage_buttons">
                <a
                  href="/solutions/shopify-developer"
                  className="samplePage_btn-primary"
                >
                  Read More
                </a>
                <a href="/about-us/contact" className="samplePage_btn-outline">
                  <span>✉</span> Contact Us
                </a>
              </div>
            </div>
            <div className="samplePage_image">
              <Image
                src="https://weboum.com/wp-content/uploads/2024/11/What-is-Digital-Marketing-768x512-1.jpg"
                alt="Digital Marketing"
                width={500}
                height={400}
              />
            </div>
          </div>
        </section>

        <section className="samplePage_servicess-section">
          <div className="samplePage_servicess-container">
            <div className="samplePage_servicess-box samplePage_webapps-dev">
              <a href="/services/application-developer">
                <div className="samplePage_icon-circle">
                  <Laptop size={45} />
                </div>
              </a>
              <p>Webapps Development</p>
            </div>
            <div className="samplePage_servicess-box samplePage_ecommerce-sol">
              <a href="/solutions/shopify-developer">
                <div className="samplePage_icon-circle">
                  <ShoppingCart size={45} />
                </div>
              </a>
              <p>E-Commerce Solutions</p>
            </div>
            <div className="samplePage_servicess-box samplePage_branding-sol">
              <a href="/services/graphic-design">
                <div className="samplePage_icon-circle">
                  <Tags size={45} />
                </div>
              </a>
              <p>Branding Solutions</p>
            </div>
            <div className="samplePage_servicess-box samplePage_optimization-sol">
              <a href="/solutions/backup-disaster-recovery">
                <div className="samplePage_icon-circle">
                  <Settings size={45} />
                </div>
              </a>
              <p>Optimization Solutions</p>
            </div>
            <div className="samplePage_servicess-box samplePage_uiux-sol">
              <a href="/services/web-designing">
                <div className="samplePage_icon-circle">
                  <Users size={45} />
                </div>
              </a>
              <p>UI/UX Solutions</p>
            </div>
            <div className="samplePage_servicess-box samplePage_marketing-sol">
              <a href="/services/digital-marketing-3">
                <div className="samplePage_icon-circle">
                  <Map size={45} />
                </div>
              </a>
              <p>Marketing Solutions</p>
            </div>
          </div>
        </section>

        <section className="samplePage_portfolio-section">
          <h5>Weboum – Customized IT Solutions</h5>
          <div className="portfolio-highlight-line"></div>
          <h2>
            Our <strong>Portfolio</strong>
          </h2>
          <div className="samplePage_portfolio">
            <div className="samplePage_item">
              <Image
                src="https://weboum.com/wp-content/uploads/2021/05/phone-tab-lapitop.jpg"
                alt="Kiosk and POS System"
                width={300}
                height={200}
                className="default-img"
              />
              <div className="portfolio-overlay">
                <h3>Kiosk & POS System</h3>
                <p>Comprehensive Restaurant Self Ordering Kiosk, POS</p>
                <ul>
                  <li>Created graphic UI layer</li>
                  <li>Developed with MVC framework and API</li>
                  <li>Digital marketing, SEO, and PPC</li>
                  <li>Technical support & maintenance</li>
                </ul>
              </div>
            </div>
            <div className="samplePage_item">
              <Image
                src="https://weboum.com/wp-content/uploads/2024/03/segundaa.jpg"
                alt="Segunda Quimbamba Folkloric Center"
                width={300}
                height={200}
                className="default-img"
              />
              <div className="portfolio-overlay">
                <h3>Segunda Quimbamba Folkloric Center</h3>
                <ul>
                  <li>– Created UI / UX Design </li>
                  <li>– Complete Development</li>
                  <li>– Technical Support and Maintenance</li>
                </ul>
              </div>
            </div>
            <div className="samplePage_item">
              <Image
                src="https://weboum.com/wp-content/uploads/2021/05/log-me-once.jpg"
                alt="Smart Password Management Application"
                width={300}
                height={200}
                className="default-img"
              />
              <div className="portfolio-overlay">
                <h3>smart Password Management Application</h3>
                <ul>
                  <li>Next Generation Password Management Application.</li>
                  <li>
                    – Advance Development with API, Complex Coding and security.
                  </li>
                  <li>– Reputation Management</li>
                  <li>– Technical Support and Maintenance</li>
                </ul>
              </div>
            </div>
            <div className="samplePage_item">
              <Image
                src="https://weboum.com/wp-content/uploads/2021/05/Imperial-China.png"
                alt="Online Shopping Mall"
                width={300}
                height={200}
                className="default-img"
              />
              <div className="portfolio-overlay">
                <h3>Online Shopping Mall</h3>
                <ul>
                  <li>– Created UI / UX Design </li>
                  <li>– Advance Development with API and payment solutions.</li>
                  <li>– Product and Stock management</li>
                  <li>– Support and Maintenance</li>
                </ul>
              </div>
            </div>
            <div className="samplePage_item">
              <Image
                src="https://weboum.com/wp-content/uploads/2024/03/Forrest-Family-Outdoor-Adventures-New-V-1.jpg"
                alt="Outdoor Accessories and Kids Sunscreen"
                width={300}
                height={200}
                className="default-img"
              />
              <div className="portfolio-overlay">
                <h3>
                  Outdoor accessories and kids-safe sunscreen and blams to the
                  online market,
                </h3>
                <ul>
                  <li>– Creative from scratch, graphics, UI/UX </li>
                  <li>– Developed with WordPress and WooCommerce</li>
                  <li>– Online Shopping</li>
                  <li>– Fully customized section settings.</li>
                </ul>
              </div>
            </div>
            <div className="samplePage_item">
              <Image
                src="https://weboum.com/wp-content/uploads/2024/03/sstp.jpg"
                alt="South Shore Test Prep"
                width={300}
                height={200}
                className="default-img"
              />
              <div className="portfolio-overlay">
                <h3>South Shore Test Prep</h3>
                <ul>
                  <li>– Design From Scratch </li>
                  <li>– WordPress Development</li>
                  <li>– Online Class Booking System</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="viewMoreWrapper">
            <a className="viewMoreButton" href="/portfolio">
              View More <span className="arrow">→</span>
            </a>
          </div>
        </section>

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

        <section className="whyus-section-wrapper" ref={whyUsRef}>
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
                  src="https://weboum.com/wp-content/uploads/2024/04/icon1.png"
                  alt="High Customer Retention Icon"
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
                  src="https://weboum.com/wp-content/uploads/2024/04/icon2.png"
                  alt="Meeting Deadlines Icon"
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
                  src="https://weboum.com/wp-content/uploads/2024/04/icon3.png"
                  alt="Professional Team Icon"
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
                alt="Free Consultation"
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
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="tel"
                  name="phone"
                  className="whyus-form-control"
                  placeholder="000-000-0000*"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="email"
                  name="email"
                  className="whyus-form-control"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
                <select
                  name="project"
                  className="whyus-form-select"
                  placeholder="Select Project Type*"
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
                  placeholder="Your Query / Message*"
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
                    alt="reCAPTCHA Verification"
                    width={80}
                    height={40}
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
        
          <FaCode className="samplePage_icon-blue"/>
          <h3>App Design & Development</h3>
        </a>
        <p>
          Our team of expert software developers focused on delivering
          best-in-class, user-friendly top-notch applications that perform
          better across multiple platforms to achieve long-term success.
        </p>
      </div>

      <div className="samplePage_service-box">
        <a href="/services/on-demand-developers">
          <FaUserCog className="samplePage_icon-orange" />
          <h3>On-Demand Developers</h3>
        </a>
        <p>
          Everything under one roof, giving you peace of mind. We are happy to
          hire skilled, industry-experienced developers and provide on-premise IT
          infrastructure flexibility to accelerate your performance.
        </p>
      </div>

      <div className="samplePage_service-box">
        <a href="/services/product-support">
          <FaTools className="samplePage_icon-green" />
          <h3>Product Support</h3>
        </a>
        <p>
          Our global strategic partners enable us to create next-generation
          robust products and IT consulting, efficiently providing quick
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
        <div className="tech-logos-container">
          <div className="tech-logos">
            <Image
              src="https://weboum.com/wp-content/uploads/2021/05/html.png"
              alt="HTML5 Logo"
              width={50}
              height={50}
            />
            <Image
              src="https://weboum.com/wp-content/uploads/2021/05/opengl-logo.png"
              alt="OpenGL Logo"
              width={50}
              height={50}
            />
            <Image
              src="https://weboum.com/wp-content/uploads/2021/05/javascript.png"
              alt="JavaScript Logo"
              width={50}
              height={50}
            />
            <Image
              src="https://weboum.com/wp-content/uploads/2021/05/rest-api-logo.png"
              alt="REST API Logo"
              width={50}
              height={50}
            />
            <Image
              src="https://weboum.com/wp-content/uploads/2021/05/soap-api-logo.png"
              alt="SOAP API Logo"
              width={50}
              height={50}
            />
            <Image
              src="https://weboum.com/wp-content/uploads/2021/05/html.png"
              alt="HTML5 Logo"
              width={50}
              height={50}
            />
            <Image
              src="https://weboum.com/wp-content/uploads/2021/05/opengl-logo.png"
              alt="OpenGL Logo"
              width={50}
              height={50}
            />
            <Image
              src="https://weboum.com/wp-content/uploads/2021/05/javascript.png"
              alt="JavaScript Logo"
              width={50}
              height={50}
            />
            <Image
              src="https://weboum.com/wp-content/uploads/2021/05/rest-api-logo.png"
              alt="REST API Logo"
              width={50}
              height={50}
            />
            <Image
              src="https://weboum.com/wp-content/uploads/2021/05/soap-api-logo.png"
              alt="SOAP API Logo"
              width={50}
              height={50}
            />
          </div>
        </div>

        <section className="samplePage_testimonial-section">
          <h5>Our Testimonials</h5>
          <div className="portfolio-highlight-line"></div>
          <h2>What Clients Say About Us</h2>
          <p className="samplePage_subtitle">
            Our clients are delighted with our services, and most of them come
            again to us.
          </p>

          <div className="samplePage_testimonial-section">
            <div className="samplePage_testimonial-slider-container">
              <div
                className="samplePage_testimonial-slider"
                id="testimonialSlider"
              >
                {testimonials.map((testimonial) => (
                  <div
                    className="samplePage_testimonial-card"
                    key={testimonial.id}
                  >
                    <div className="samplePage_testimonial-inner">
                      <div className="samplePage_stars">
                        <Star size={26} />
                        <Star size={26} />
                        <Star size={26} />
                        <Star size={26} />
                        <Star size={26} />
                      </div>
                      <div className="samplePage_testimonial-text">
                        {testimonial.text}
                      </div>
                      <div className="samplePage_author">
                        <div className="samplePage_author-info">
                          <Image
                            src={testimonial.image}
                            alt={`Testimonial author ${testimonial.author}`}
                            width={50}
                            height={50}
                          />
                          <strong>{testimonial.author}</strong>
                        </div>
                        <div className="samplePage_quote">
                          <Quote size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {testimonials.map((testimonial) => (
                  <div
                    className="samplePage_testimonial-card"
                    key={`duplicate-${testimonial.id}`}
                  >
                    <div className="samplePage_testimonial-inner">
                      <div className="samplePage_stars">
                        <Star size={26} />
                        <Star size={26} />
                        <Star size={26} />
                        <Star size={26} />
                        <Star size={26} />
                      </div>
                      <div className="samplePage_testimonial-text">
                        {testimonial.text}
                      </div>
                      <div className="samplePage_author">
                        <div className="samplePage_author-info">
                          <Image
                            src={testimonial.image}
                            alt={`Testimonial author ${testimonial.author}`}
                            width={50}
                            height={50}
                          />
                          <strong>{testimonial.author}</strong>
                        </div>
                        <div className="samplePage_quote">
                          <Quote size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div
          className="samplePage_lightbox"
          id="samplePage_lightbox"
          ref={lightboxRef}
        >
          <span
            className="samplePage_close-btn"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={30} />
          </span>
          <img
            className="samplePage_lightbox-img"
            id="samplePage_lightbox-img"
            alt="Enlarged portfolio image"
            ref={lightboxImgRef}
          />
        </div>
      </div>

      <Days />
    </>
  );
}
