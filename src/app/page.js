"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import homeData from "../data/home.json";
import HeroSection from "./herosection/page";
import { sendContactForm } from "../utils/api";
import Link from "next/link";

const Home = () => {
  const [currentPortfolioIndex, setCurrentPortfolioIndex] = useState(0);
  const [startScrolling, setStartScrolling] = useState(false);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartScrolling(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Portfolio scrolling effect
  useEffect(() => {
    if (!startScrolling) return;

    const interval = setInterval(() => {
      setCurrentPortfolioIndex((prev) =>
        prev === homeData.portfolio.all.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [startScrolling]);

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
      // Prepare the message object
      const messageObj = {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        company: formData.company,
        website: formData.website,
        message: formData.message,
      };

      // Send form data to the API
      await sendContactForm({
        email: formData.email,
        subject: "New Contact Form Submission",
        message: JSON.stringify(messageObj),
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

  const scrollPortfolioToTop = () => {
    if (portfolioRef.current) {
      portfolioRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleDotClick = (index) => {
    setActiveTestimonial(index);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <HeroSection />

      {/* Our Services */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
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

            {/* Main Content */}
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

              {/* Portfolio Section */}
              <div id="portfolio" className="portfolio-section">
                <h2 className="section-title">OUR PORTFOLIO</h2>
                <div className="portfolio-carousel" ref={portfolioRef}>
                  {homeData.portfolio.all &&
                  homeData.portfolio.all.length > 0 ? (
                    <div className="portfolio-stack">
                      {/* Bottom Image */}
                      <div className="portfolio-item bottom-image">
                        <Image
                          src={
                            homeData.portfolio.all[
                              currentPortfolioIndex === 0
                                ? homeData.portfolio.all.length - 1
                                : currentPortfolioIndex - 1
                            ]?.src || "/image/placeholder.jpg"
                          }
                          alt={
                            homeData.portfolio.all[
                              currentPortfolioIndex === 0
                                ? homeData.portfolio.all.length - 1
                                : currentPortfolioIndex - 1
                            ]?.alt || "Portfolio Image"
                          }
                          className="portfolio-image"
                          width={500}
                          height={300}
                        />
                        <div className="portfolio-text">
                          {homeData.portfolio.all[
                            currentPortfolioIndex === 0
                              ? homeData.portfolio.all.length - 1
                              : currentPortfolioIndex - 1
                          ]?.title || "Portfolio Item"}
                        </div>
                      </div>

                      {/* Top Image (Scrolling) */}
                      <div className="portfolio-item top-image">
                        <Image
                          src={
                            homeData.portfolio.all[currentPortfolioIndex]
                              ?.src || "/image/placeholder.jpg"
                          }
                          alt={
                            homeData.portfolio.all[currentPortfolioIndex]
                              ?.alt || "Portfolio Image"
                          }
                          className="portfolio-image"
                          width={500}
                          height={300}
                          onClick={scrollPortfolioToTop}
                        />
                        <div className="portfolio-text">
                          {homeData.portfolio.all[currentPortfolioIndex]
                            ?.title || "Portfolio Item"}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p>No portfolio images available.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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

      {/* Process We Follow */}
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

      {/* Contact Us */}
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

      {/* Testimonials */}
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

      {/* CTA Section */}
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
            <a href="#contact" className="cta-button">
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
