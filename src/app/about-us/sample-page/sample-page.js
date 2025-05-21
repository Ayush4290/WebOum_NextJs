"use client";

import {
  Laptop,
  ShoppingCart,
  Tags,
  Settings,
  Users,
  Map,
  X,
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
import data from "../../../../public/data/sample-page.json"; // Import the JSON file

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
  const [phoneError, setPhoneError] = useState("");
  const [testimonials, setTestimonials] = useState([]);
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const whyUsRef = useRef(null);
  const lightboxRef = useRef(null);

  useEffect(() => {
    if (data.testimonials && data.testimonials.length > 0) {
      setTestimonials(data.testimonials);
    } else {
      console.error("No testimonials found in JSON data");
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (whyUsRef.current && window.innerWidth >= 768) {
        whyUsRef.current.scrollIntoView({ behavior: "smooth" });
      }
      if (whyUsRef.current && window.innerWidth < 768) {
        whyUsRef.current.style.display = 'block';
        whyUsRef.current.style.visibility = 'visible';
      }
    }, 1000);

    if (whyUsRef.current) {
      console.log("Why Us section is rendered:", whyUsRef.current);
    } else {
      console.error("Why Us section ref is not found");
    }

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log("Testimonials loaded:", testimonials);
    console.log("Why Us section ref:", whyUsRef.current);
  }, [testimonials]);

  const openLightbox = (src) => {
    if (src) {
      setLightboxSrc(src);
      if (lightboxRef.current) {
        lightboxRef.current.classList.add("active");
      }
    } else {
      console.error("Invalid image source for lightbox");
    }
  };

  const closeLightbox = () => {
    setLightboxSrc(null);
    if (lightboxRef.current) {
      lightboxRef.current.classList.remove("active");
    }
  };

  const imageRefs = useRef([]);

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

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    }
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    let formattedValue = value;

    if (name === "phone") {
      formattedValue = formatPhoneNumber(value);
      const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
      if (formattedValue && !phoneRegex.test(formattedValue)) {
        setPhoneError("Enter a valid phone number (e.g., 123-456-7890)");
      } else {
        setPhoneError("");
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : formattedValue,
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

    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(formData.phone)) {
      setFormError("Please enter a valid phone number (e.g., 123-456-7890).");
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
    setPhoneError("");

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);

    try {
      const sanitizeInput = (input) => {
        if (!input) return "";
        return input
          .replace(/&/g, "&")
          .replace(/</g, "<")
          .replace(/>/g, ">")
          .replace(/"/g, "")
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
      const messageContent = `...`; // Your existing HTML content
      const plainTextContent = `...`; // Your existing plain text content

      const result = await sendContactForm({
        email: sanitizedFormData.email,
        subject,
        message: messageContent,
        text: plainTextContent,
        formType: "consultation",
        replyTo: sanitizedFormData.email,
        toEmails: ["your.gmail@gmail.com"],
        ccEmails: [],
        bccEmails: [],
        priority: "high",
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
        setFormError(result.message || "Failed to send your request. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormError("An error occurred. Please try again later or contact support@weboum.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const displayedTestimonials = testimonials.length > 0
    ? [...testimonials, ...testimonials]
    : [];

  return (
    <>
      <div className="samplePageContainer">
        {/* Business Section */}
        <section className="samplePage_business-section samplePage_conta">
          <div className="sampleHeader">
            <div className="samplePage_content container">
              <h1>
                Build efficient Website
                <br />
                for your Business
              </h1>
              <p>
                In today&apos;s digital world, having a professional and
                efficient website is essential for business growth. We
                specialize in creating modern, fast, and responsive websites
                that help you reach your target audience effectively.
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
                src={data.images.find(img => img.section === "header").src}
                alt={data.images.find(img => img.section === "header").alt}
                width={data.images.find(img => img.section === "header").width}
                height={data.images.find(img => img.section === "header").height}
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="samplePage_servicess-section">
          <div className="samplePage_servicess-container">
            {data.services_first.map((service, index) => (
              <div key={index} className={`samplePage_servicess-box samplePage_${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <a href={service.link}>
                  <div className="samplePage_icon-circle">
                    {service.icon === "Laptop" && <Laptop size={45} />}
                    {service.icon === "ShoppingCart" && <ShoppingCart size={45} />}
                    {service.icon === "Tags" && <Tags size={45} />}
                    {service.icon === "Settings" && <Settings size={45} />}
                    {service.icon === "Users" && <Users size={45} />}
                    {service.icon === "Map" && <Map size={45} />}
                  </div>
                </a>
                <p>{service.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="samplePage_portfolio-section">
          <h5>Weboum – Customized IT Solutions</h5>
          <div className="portfolio-highlight-line"></div>
          <h2>
            Our <strong>Portfolio</strong>
          </h2>
          <div className="samplePage_portfolio">
            {data.portfolio.map((item, index) => (
              <div key={index} className="samplePage_item">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={data.images.find(img => img.src === item.image).width}
                  height={data.images.find(img => img.src === item.image).height}
                  className="default-img"
                />
                <div className="portfolio-overlay">
                  <h3>{item.title}</h3>
                  {item.description && <p>{item.description}</p>}
                  <ul>
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="viewMoreWrapper">
            <a className="viewMoreButton" href="/portfolio">
              View More <span className="arrow">→</span>
            </a>
          </div>
        </section>

        {/* Call to Action */}
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

        {/* Why Us Section */}
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

              {data.whyus_features.map((feature, index) => (
                <div key={index} className="whyus-feature">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={data.images.find(img => img.src === feature.icon).width}
                    height={data.images.find(img => img.src === feature.icon).height}
                    className="feature-icon"
                  />
                  <div>
                    <h6>{feature.title}</h6>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="whyus-form-box">
              <Image
                src={data.images.find(img => img.section === "whyus" && img.alt === "Free Consultation").src}
                alt={data.images.find(img => img.section === "whyus" && img.alt === "Free Consultation").alt}
                width={data.images.find(img => img.section === "whyus" && img.alt === "Free Consultation").width}
                height={data.images.find(img => img.section === "whyus" && img.alt === "Free Consultation").height}
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
                  <label htmlFor="captcha">I&apos;m not a robot</label>
                  <Image
                    src={data.images.find(img => img.section === "whyus" && img.alt === "reCAPTCHA Verification").src}
                    alt={data.images.find(img => img.section === "whyus" && img.alt === "reCAPTCHA Verification").alt}
                    width={data.images.find(img => img.section === "whyus" && img.alt === "reCAPTCHA Verification").width}
                    height={data.images.find(img => img.section === "whyus" && img.alt === "reCAPTCHA Verification").height}
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

        {/* Services Section */}
        <section className="samplePage_services-section">
          {data.services_second.map((service, index) => (
            <div key={index} className="samplePage_service-box">
              <a href={service.link}>
                {service.icon === "FaCode" && <FaCode className="samplePage_icon-blue" />}
                {service.icon === "FaUserCog" && <FaUserCog className="samplePage_icon-orange" />}
                {service.icon === "FaTools" && <FaTools className="samplePage_icon-green" />}
                <h3>{service.title}</h3>
              </a>
              <p>{service.description}</p>
            </div>
          ))}
        </section>

        {/* Stats Section */}
        <section className="samplePage_stats-section">
          <div className="samplePage_stats">
            {data.stats.map((stat, index) => (
              <div key={index} className="samplePage_stat-box">
                <h2>{stat.value}</h2>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Logos */}
        <div className="tech-logos-container">
          <div className="tech-logos">
            {data.images
              .filter(img => img.section === "tech-logos")
              .concat(data.images.filter(img => img.section === "tech-logos"))
              .map((img, index) => (
                <Image
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                />
              ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <section className="samplePage_testimonials">
          <h5>Our Testimonials</h5>
          <div className="portfolio-highlight-line"></div>
          <h2>What Clients Say About Us</h2>
          <p className="samplePage_subtitle">
            Our clients are delighted with our services, and most of them come
            again to us.
          </p>

          <div className="samplePage_testimonial-slider-container">
            {displayedTestimonials.length === 0 && (
              <div className="samplePage_testimonial-placeholder">
                No testimonials available at the moment.
              </div>
            )}
            <div className="samplePage_testimonial-slider" id="testimonialSlider">
              {displayedTestimonials.map((testimonial, index) => (
                <div
                  className="samplePage_testimonial-card"
                  key={`${testimonial.id}-${index}`}
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
                          src={testimonial.image || '/images/fallback-author.jpg'}
                          alt={`Testimonial author ${testimonial.author}`}
                          width={data.images.find(img => img.src === testimonial.image)?.width || 40}
                          height={data.images.find(img => img.src === testimonial.image)?.height || 40}
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
        </section>

        {/* Lightbox */}
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
          {lightboxSrc && (
            <Image
              src={lightboxSrc}
              alt="Enlarged portfolio image"
              layout="fill"
              objectFit="contain"
              className="samplePage_lightbox-img"
              priority
            />
          )}
        </div>
      </div>

      <Days />
    </>
  );
}