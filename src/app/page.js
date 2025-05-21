
"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import homeData from "../../public/data/home.json";
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
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [isPageInitialized, setIsPageInitialized] = useState(false);

  const portfolioRef = useRef(null);
  const testimonialRef = useRef(null);
  const sidebarRef = useRef(null);
  const router = useRouter();

  // Improved initialization effect with navigation focus
  useEffect(() => {
    // Force layout recalculation and reset states
    const handleInitialization = () => {
      // Reset scroll position
      window.scrollTo({ top: 0, behavior: "auto" });
      
      // Reset states
      setCurrentPortfolioIndex(0);
      setActiveTestimonial(0);
      
      // Properly reset the sidebar
      if (sidebarRef.current) {
        // Force sidebar recalculation
        sidebarRef.current.style.position = 'static';
        
        // Use RAF for smoother transitions
        requestAnimationFrame(() => {
          if (sidebarRef.current) {
            sidebarRef.current.style.position = 'sticky';
            setIsPageInitialized(true);
          }
        });
      }
    };
    
    // Execute immediately on mount
    handleInitialization();
    
    // Set up event listeners for page visibility and focus changes
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        handleInitialization();
      }
    };
    
    const handleFocus = () => {
      handleInitialization();
    };
    
    // Add event listeners
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);
    
    // Clean up effect
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
    };
  }, [router.pathname]);

  // New effect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      // Recalculate sidebar on resize
      if (sidebarRef.current) {
        sidebarRef.current.style.position = 'static';
        
        requestAnimationFrame(() => {
          if (sidebarRef.current) {
            sidebarRef.current.style.position = 'sticky';
          }
        });
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // New effect to handle navigation events
  useEffect(() => {
    const handleRouteChange = () => {
      setIsPageInitialized(false);
    };

    const handleRouteComplete = () => {
      // Reset sidebar on navigation complete
      if (sidebarRef.current) {
        sidebarRef.current.style.position = 'static';
        
        // Use timeout to ensure DOM is ready
        setTimeout(() => {
          if (sidebarRef.current) {
            sidebarRef.current.style.position = 'sticky';
            setIsPageInitialized(true);
          }
        }, 100);
      }
    };

    // Register with router events if available
    if (router && router.events) {
      router.events.on('routeChangeStart', handleRouteChange);
      router.events.on('routeChangeComplete', handleRouteComplete);
    }

    return () => {
      if (router && router.events) {
        router.events.off('routeChangeStart', handleRouteChange);
        router.events.off('routeChangeComplete', handleRouteComplete);
      }
    };
  }, [router]);

  // Portfolio auto-scrolling
  useEffect(() => {
    const portfolioInterval = setInterval(() => {
      setCurrentPortfolioIndex((prev) =>
        prev === homeData.portfolio.all.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(portfolioInterval);
  }, []);

  // Update portfolio scroll position
  useEffect(() => {
    if (portfolioRef.current) {
      const scrollPosition =
        currentPortfolioIndex *
          portfolioRef.current.children[0]?.offsetHeight || 0;
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

  // Update testimonial scroll position
  useEffect(() => {
    if (testimonialRef.current) {
      const scrollPosition =
        activeTestimonial * testimonialRef.current.children[0]?.offsetWidth ||
        0;
      testimonialRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [activeTestimonial]);

  // New effect for scroll events to ensure sidebar functionality
  useEffect(() => {
    const handleScroll = () => {
      // If sidebar element exists, ensure it has the proper CSS
      if (sidebarRef.current && isPageInitialized) {
        // Make sure scroll behavior works correctly by refreshing position property
        const currentPosition = sidebarRef.current.style.position;
        sidebarRef.current.style.position = 'static';
        
        // Force browser to recalculate
        sidebarRef.current.offsetHeight;
        
        // Restore the sticky position
        requestAnimationFrame(() => {
          if (sidebarRef.current) {
            sidebarRef.current.style.position = 'sticky';
          }
        });
      }
    };

    // Add scroll listener with throttling
    let scrollTimeout = null;
    const throttledScrollHandler = () => {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          handleScroll();
          scrollTimeout = null;
        }, 200); // Throttle to once every 200ms
      }
    };

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [isPageInitialized]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (formError) setFormError("");
    if (formSuccess) setFormSuccess("");
  };

  const handleNumericKeyPress = (e) => {
    const charCode = e.charCode;
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
    }
  };

  const handlePhonePaste = (e) => {
    const pastedData = e.clipboardData.getData("text");
    const numericData = pastedData.replace(/\D/g, "");
    setFormData((prev) => ({
      ...prev,
      phoneNumber: numericData,
    }));
    e.preventDefault();
  };

  const validateForm = () => {
    const requiredFields = ["name", "email", "phoneNumber", "message"];
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

    if (!/^\d+$/.test(formData.phoneNumber)) {
      setFormError("Phone number must contain only numbers.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");

    if (!validateForm()) {
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
          .replace(/"/g, "")
          .replace(/'/g, "'");
      };

      const sanitizedFormData = {
        name: sanitizeInput(formData.name || "Not provided"),
        email: sanitizeInput(formData.email || "Not provided"),
        phoneNumber: sanitizeInput(formData.phoneNumber || "Not provided"),
        message: sanitizeInput(formData.message || "No message provided"),
      };

      // Plain HTML5 table-based email template without CSS
      const messageContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body>
  <table width="100%" border="0" cellpadding="10" cellspacing="0" align="center">
    <tr>
      <td align="center">
        <h2>New Contact Form Submission</h2>
      </td>
    </tr>
    <tr>
      <td>
        <p>Someone has reached out through the Weboum Technology contact form.</p>
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
            <td>${sanitizedFormData.phoneNumber}</td>
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
Contact Form Submission Details:
------------------------
Name: ${sanitizedFormData.name}
Email: ${sanitizedFormData.email}
Phone: ${sanitizedFormData.phoneNumber}
Message: ${sanitizedFormData.message}
      `.trim();

      const formSubject = `Home Page Contact: ${sanitizedFormData.name}`;

      console.log("Submitting form with:", {
        email: sanitizedFormData.email,
        subject: formSubject,
        message: messageContent,
        text: plainTextContent,
        formType: "consultation",
        replyTo: sanitizedFormData.email,
      });

      const result = await sendContactForm({
        email: sanitizedFormData.email,
        subject: formSubject,
        message: messageContent,
        text: plainTextContent,
        formType: "consultation",
        replyTo: sanitizedFormData.email,
      });

      console.log("Form submission result:", result);

      if (result.success) {
        setFormSuccess("Your message has been submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        setFormError(
          result.message || "Failed to send your message. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormError(
        "Failed to send your message. Please try again later or contact support@weboum.com."
      );
    } finally {
      setIsSubmitting(false);
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
              <div className="sidebar" ref={sidebarRef}>
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
                        onError={(e) =>
                          (e.target.src = "/image/placeholder.jpg")
                        }
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
                              style={{ width: "100%", height: "auto" }}
                              onError={() => "/image/placeholder.jpg"}
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
            In today&apos;s digital landscape, a strong online presence is no
            longer a luxury—it&apos;s a necessity. Choosing the right partner to
            guide you through this complex world is crucial. Here&apos;s why
            Weboum is the perfect choice for your business:
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
                  onError={() => "/image/placeholder.jpg"}
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
            onError={() => "/image/placeholder.jpg"}
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
                      placeholder="Name*"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email*"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phoneNumber"
                      className="form-control"
                      placeholder="Phone Number*"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      onKeyPress={handleNumericKeyPress}
                      onPaste={handlePhonePaste}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message*"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  {formError && (
                    <div
                      className={
                        formError.includes("email")
                          ? "home-error-message home-error-message-email"
                          : "home-error-message"
                      }
                      role="alert"
                    >
                      {formError}
                    </div>
                  )}
                  {formSuccess && (
                    <div className="home-success-message" role="alert">
                      {formSuccess}
                    </div>
                  )}
                  <button
                    type="submit"
                    className="btn-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Now"}
                  </button>
                </form>
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
                    <p className="testimonial-text">{testimonial.text}</p>

                    <div className="stars">
                      {"★".repeat(testimonial.stars)}
                      {"☆".repeat(5 - testimonial.stars)}
                    </div>

                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonial-image"
                      width={100}
                      height={100}
                      onError={() => "/image/placeholder.jpg"}
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
              Let&apos;s discuss how we can help you achieve your goals.
              Schedule a consultation to explore the best solutions for your
              needs.
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