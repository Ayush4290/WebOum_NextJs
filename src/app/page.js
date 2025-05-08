"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import homeData from "../data/home.json";
import HeroSection from "./herosection/page";
import { sendContactForm } from "../utils/api";
import Link from "next/link";

const Home = () => {
  const [currentPortfolioIndex, setCurrentPortfolioIndex] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    company: "",
    website: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const portfolioRef = useRef(null);
  const testimonialRef = useRef(null);

  // Portfolio auto-scrolling
  useEffect(() => {
    const portfolioInterval = setInterval(() => {
      setCurrentPortfolioIndex((prev) =>
        prev === homeData.portfolio.all.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(portfolioInterval);
  }, []);

  // Update scroll position when active portfolio changes
  useEffect(() => {
    if (portfolioRef.current) {
      const scrollPosition =
        currentPortfolioIndex * portfolioRef.current.children[0].offsetHeight;
      portfolioRef.current.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [currentPortfolioIndex]);

  // Testimonial auto-scrolling
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) =>
        prev === homeData.testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(testimonialInterval);
  }, []);

  // Update scroll position when active testimonial changes
  useEffect(() => {
    if (testimonialRef.current) {
      const scrollPosition =
        activeTestimonial * testimonialRef.current.children[0].offsetWidth;
      testimonialRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [activeTestimonial]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const sanitizeInput = (input) => {
        return input.replace(/</g, "<").replace(/>/g, ">").replace(/"/g, " ");
      };
      const sanitizedMessage = sanitizeInput(
        formData.message || "No message provided."
      );

      const messageContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f0f0f0;">
  <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #e0e0e0;">
    <div style="background-color: #4682b4; padding: 15px; text-align: center;">
      <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Contact Form Submission</h2>
    </div>
    <div style="padding: 20px;">
      <p style="color: #333333; font-size: 16px; margin: 0 0 15px;">
        Someone has reached out through the Weboum Technology contact form.
      </p>
      <div style="border-top: 1px solid #e0e0e0; padding-top: 15px;">
        <p style="color: #333333; font-size: 14px; margin: 5px 0;">
          <strong>Name:</strong> ${formData.name}
        </p>
        <p style="color: #333333; font-size: 14px; margin: 5px 0;">
          <strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #4682b4; text-decoration: none;">${formData.email}</a>
        </p>
        <p style="color: #333333; font-size: 14px; margin: 5px 0;">
          <strong>Phone:</strong> ${formData.phoneNumber}
        </p>
        <p style="color: #333333; font-size: 14px; margin: 5px 0;">
          <strong>Message:</strong> ${sanitizedMessage}
        </p>
      </div>
    </div>
  </div>
</body>
</html>
      `;

      await sendContactForm({
        email: formData.email,
        subject: "New Contact Form Submission",
        message: messageContent,
      });

      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        company: "",
        website: "",
        message: "",
      });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
      alert("Failed to submit form. Please try again.");
    }
  };

  const handlePortfolioDotClick = (index) => {
    setCurrentPortfolioIndex(index);
  };

  const handleDotClick = (index) => {
    setActiveTestimonial(index);
  };

  return (
    <div className="home-page">
      <HeroSection />

      <section id="services" className="services-section">
        <div className="container">
          <div className="row">
            <div className="sidebar-col">
              <div className="sidebar">
                <a href="#services">Our Services</a>
                <a href="#portfolio">Our Portfolio</a>
                <a href="#why-choose-us">Why Choose Us</a>
                <a href="#process">Process We Follow</a>
                <a href="#contact">Contact Us</a>
                <a href="#testimonials">Our Testimonial</a>
              </div>
            </div>

            <div className="content-col">
              <h2 className="section-title">OUR SERVICES</h2>
              <p className="section-desc">
                Weboum is your trusted partner for outsourced software
                development, specializing in custom product development,
                cutting-edge eCommerce solutions, modern branding, and
                high-performance digital marketing—designed to drive leads,
                boost sales, and accelerate business growth.
              </p>

              <div className="services-grid">
                {homeData.services.map((service, index) => (
                  <Link href={service.href} key={index} passHref>
                    <div className="service-card" style={{ cursor: "pointer" }}>
                      <Image
                        src={service.img}
                        alt={service.alt}
                        className="service-icon"
                        width={64}
                        height={64}
                      />
                      <div>
                        <div className="service-title">{service.title}</div>
                        <div className="service-desc">{service.desc}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div id="portfolio" className="portfolio-section">
                <h2 className="section-title">OUR PORTFOLIO</h2>
                <div className="portfolio-container">
                  <div className="portfolio-auto-scroll-wrapper">




                    <div className="portfolio-carousel" ref={portfolioRef}>
                      {homeData.portfolio.all.map((portfolio, index) => (
                        <div
                          className={`portfolio-item ${
                            index === currentPortfolioIndex ? "active" : ""
                          }`}
                          key={index}
                        >
                          <div className="portfolio-image-container">
                            <Image
                              src={portfolio.src || "/image/placeholder.jpg"}
                              alt={portfolio.alt || "Portfolio Image"}
                              className="portfolio-image"
                              width={800}
                              height={400}
                            />
                          </div>
                          <div className="portfolio-text">
                            {portfolio.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="portfolio-scroll-indicator">
                    {homeData.portfolio.all.map((_, dotIndex) => (
                      <div
                        className={`portfolio-scroll-dot ${
                          dotIndex === currentPortfolioIndex ? "active" : ""
                        }`}
                        key={dotIndex}
                        onClick={() => handlePortfolioDotClick(dotIndex)}
                      />
                    ))}
                  </div>



                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="why-choose-section">
        <div className="why-container">
          <h2 className="why-title">Why Choose Us</h2>
          <h5 className="why-subtitle">
            Trusted software design, develop and digital marketing company
          </h5>
          <p className="why-lead">
            In today's digital landscape, a strong online presence is no longer
            a luxury—it's a necessity. Choosing the right partner to guide you
            through this complex world is crucial. Here's why Weboum is the
            perfect choice for your business:
          </p>

          <div className="why-card-grid">
            {homeData.cards.map((card, index) => (
              <div className="why-card" key={index}>
                <Image
                  src={card.img}
                  alt={card.alt}
                  className="why-icon"
                  width={64}
                  height={64}
                />
                <div>
                  <div className="why-card-title">{card.title}</div>
                  <div className="why-card-text">{card.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="process-section">
        <div className="process-container">
          <h2 className="process-heading">Process We Follow</h2>
          <p className="process-description">
            Weboum Technologies invites you to embark on a seamless journey from
            concept to code. We adhere to a comprehensive software development
            process that guarantees transparency and successful delivery of
            solutions.
          </p>
          <Image
            src="/image/Process-We-Follow.png"
            alt="Process We Follow"
            className="process-image"
            width={1200}
            height={400}
          />
        </div>
      </section>

      <section
        id="contact"
        className="contact-section"
        style={{ backgroundImage: "url('/image/contact.jpeg')" }}
      >
        <div className="container">
          <div className="contact-row">
            <div className="contact-col-image"></div>

            <div className="contact-col-form">
              <div className="form-container">
                <div className="form-heading">
                  Talk to our Experts about your Project Today!
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phoneNumber"
                      className="form-control"
                      placeholder="Phone Number"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn-submit"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting"
                      ? "Submitting..."
                      : "Submit Now"}
                  </button>
                </form>
                {formStatus === "success" && (
                  <p className="form-success">Form submitted successfully!</p>
                )}
                {formStatus === "error" && (
                  <p className="form-error">
                    Failed to submit form. Please try again.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonial-section">
        <h2 className="testimonial-title">OUR TESTIMONIALS</h2>

        <div className="testimonial-container">
          <div className="auto-scroll-wrapper">
            <div className="testimonial-carousel" ref={testimonialRef}>
              {homeData.testimonials.map((testimonial, index) => (
                <div
                  className={`testimonial-item ${
                    index === activeTestimonial ? "active" : ""
                  }`}
                  key={index}
                >
                  <div className="testimonial-quote">
                    <p className="testimonial-text">"{testimonial.text}"</p>

                    <div className="stars">
                      {"★".repeat(testimonial.stars)}
                      {"☆".repeat(5 - testimonial.stars)}
                    </div>

                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonial-image"
                    />

                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-position">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="scroll-indicator">
            {homeData.testimonials.map((_, index) => (
              <div
                className={`scroll-dot ${
                  index === activeTestimonial ? "active" : ""
                }`}
                key={index}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-left">
            <h2 className="cta-heading">Contact Us to Grow Your Business!</h2>
            <p className="cta-text">
              Let's discuss how we can help you achieve your goals. Schedule a
              consultation to explore the best solutions for your needs.
            </p>
          </div>
          <div className="cta-right">
            <a href="/about-us/contact" className="cta-button">
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
