"use client";

import React, { useState, useRef, useEffect } from "react";
import homeData from "../data/home.json";
import HeroSection from "./herosection/page";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPortfolioIndex, setCurrentPortfolioIndex] = useState(0);
  const [startScrolling, setStartScrolling] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const portfolioRef = useRef(null);

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

  const handlePrev = () =>
    setCurrentSlide((prev) =>
      prev === 0 ? homeData.testimonials.length - 1 : prev - 1
    );

  const handleNext = () =>
    setCurrentSlide((prev) =>
      prev === homeData.testimonials.length - 1 ? 0 : prev + 1
    );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    alert("Form submitted successfully!");
  };

  const scrollPortfolioToTop = () => {
    if (portfolioRef.current) {
      portfolioRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
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
                  <div className="service-card" key={index}>
                    <img
                      src={service.img}
                      alt={service.alt}
                      className="service-icon"
                    />
                    <div>
                      <div className="service-title">{service.title}</div>
                      <div className="service-desc">{service.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Portfolio Section */}
              <div id="portfolio" className="portfolio-section">
                <h2 className="section-title">OUR PORTFOLIO</h2>
                <div className="portfolio-carousel" ref={portfolioRef}>
                  {homeData.portfolio.all &&
                  homeData.portfolio.all.length > 1 ? (
                    <div className="portfolio-stack">
                      {/* Bottom Image */}
                      <div className="portfolio-item bottom-image">
                        <img
                          src={
                            homeData.portfolio.all[
                              currentPortfolioIndex === 0
                                ? homeData.portfolio.all.length - 1
                                : currentPortfolioIndex - 1
                            ].src
                          }
                          alt={
                            homeData.portfolio.all[
                              currentPortfolioIndex === 0
                                ? homeData.portfolio.all.length - 1
                                : currentPortfolioIndex - 1
                            ].alt
                          }
                          className="portfolio-image"
                        />
                        <div className="portfolio-text">
                          {
                            homeData.portfolio.all[
                              currentPortfolioIndex === 0
                                ? homeData.portfolio.all.length - 1
                                : currentPortfolioIndex - 1
                            ].title
                          }
                        </div>
                      </div>
                      {/* Top Image (Scrolling) */}
                      <div className="portfolio-item top-image">
                        <img
                          src={
                            homeData.portfolio.all[currentPortfolioIndex].src
                          }
                          alt={
                            homeData.portfolio.all[currentPortfolioIndex].alt
                          }
                          className="portfolio-image"
                          onClick={scrollPortfolioToTop}
                        />
                        <div className="portfolio-text">
                          {homeData.portfolio.all[currentPortfolioIndex].title}
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
                <img src={card.img} alt={card.alt} className="why-icon" />
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
          <img
            src="image/Process-We-Follow.png"
            alt="Process We Follow"
            className="process-image"
          />
        </div>
      </section>

      {/* Contact Us */}
      <section
        id="contact"
        className="contact-section"
        style={{ backgroundImage: "url('image/contact.jpeg')" }}
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
                      name="phone"
                      className="form-control"
                      placeholder="Phone"
                      value={formData.phone}
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
                  <button type="submit" className="btn-submit">
                    Submit Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonial-section">
        <div className="container">
          <h2 className="testimonial-title">OUR TESTIMONIALS</h2>

          <div className="testimonial-carousel">
            {homeData.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-item ${
                  index === currentSlide ? "active" : ""
                }`}
              >
                <div className="testimonial-box">
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="stars">★ ★ ★ ★ ★</div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-image"
                  />
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-position">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-controls">
            <button className="arrow" onClick={handlePrev}>
              ‹
            </button>
            <button className="arrow" onClick={handleNext}>
              ›
            </button>
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
