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
  const [testimonials, setTestimonials] = useState([]);
  const whyUsRef = useRef(null);

  // Set static testimonials data
  useEffect(() => {
    setTestimonials([
      {
        id: 1,
        text: "Gurbachan is a seasoned professional that met our deadline and took over an advanced WordPress Project that the original developer could not complete due to a lack of skills. Our project involved a responsive design and full mobile compatibility. He communicates very well in writing and we also had video calls on Skype which sometimes makes things easier. We will work with him again in the future.",
        author: "Klaus Holzapfel",
        image: "https://weboum.com/wp-content/uploads/2024/06/placeholder.png",
      },
      {
        id: 2,
        text: "I would highly recommend using Guru for your web design needs. He offers a reliable and affordable service that never compromises quality. He is very knowledgeable, trustworthy, and responds to questions in a timely fashion. ",
        author: "Jill Cabana",
        image: "https://weboum.com/wp-content/uploads/2024/06/placeholder.png",
      },
      {
        id: 3,
        text: "This company completed my project quickly and communicated well with me. They are very talented and completed everything that I asked them to. I hope to work with them in the future.",
        author: "Amarah G",
        image: "https://weboum.com/wp-content/uploads/2024/06/placeholder.png",
      },
      {
        id: 4,
        text: "I love working with Rony! We have worked together for the last 5 years and he always amazes me with his design and cooperation. Excellent freelancer!",
        author: "Elizabeth Alcala",
        image: "https://weboum.com/wp-content/uploads/2024/06/placeholder.png",
      },
      {
        id: 5,
        text: "Pawna was able to successfully complete a job that's been haunting me for months. I have tried to get a custom plugin created for a website and Pawna was the first person that knew exactly what to do and jumped right in with a solid solution.",
        author: "Tom Buford",
        image: "https://weboum.com/wp-content/uploads/2024/06/placeholder.png",
      },
    ]);
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
    imageRefs.current = document.querySelectorAll(".samplePage_item img.default-img");
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
      // Sanitize inputs to prevent XSS and ensure proper encoding
      const sanitizeInput = (input) => {
        const div = document.createElement("div");
        div.textContent = input;
        return div.innerHTML
          .replace(/&/g, "&")
          .replace(/</g, "<")
          .replace(/>/g, ">")
          .replace(/"/g, "")
      };

      const sanitizedName = sanitizeInput(formData.name);
      const sanitizedEmail = sanitizeInput(formData.email);
      const sanitizedPhone = sanitizeInput(formData.phone);
      const sanitizedProject = sanitizeInput(formData.project);
      const sanitizedMessage = formData.message
        ? sanitizeInput(formData.message)
        : "No message provided";

      const subject = `Free Consultation Request from ${sanitizedName}`;

      // Simplified and robust email template
      const messageContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Free Consultation Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #e0e0e0;">
    <tr>
      <td style="background-color: #4a90e2; padding: 15px; text-align: center;">
        <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Consultation Request</h2>
      </td>
    </tr>
    <tr>
      <td style="padding: 20px;">
        <p style="color: #333333; font-size: 16px; margin: 0 0 15px;">
          A new consultation request has been submitted to Weboum Technology.
        </p>
        <table width="100%" cellpadding="5" cellspacing="0" style="border-top: 1px solid #e0e0e0; padding-top: 15px;">
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Name:</strong></td>
            <td style="color: #333333; font-size: 14px;">${sanitizedName}</td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Email:</strong></td>
            <td style="color: #333333; font-size: 14px;">
              <a href="mailto:${sanitizedEmail}" style="color: #4a90e2; text-decoration: none;">${sanitizedEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Phone:</strong></td>
            <td style="color: #333333; font-size: 14px;">${sanitizedPhone}</td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Project Type:</strong></td>
            <td style="color: #333333; font-size: 14px;">${sanitizedProject}</td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Message:</strong></td>
            <td style="color: #333333; font-size: 14px;">${sanitizedMessage}</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="background-color: #f5f5f5; padding: 10px; text-align: center; font-size: 12px; color: #666666;">
        <p style="margin: 0;">© ${new Date().getFullYear()} Weboum Technology. All rights reserved.</p>
      </td>
    </tr>
  </table>
</body>
</html>
      `.trim();

      // Plain text fallback
      const plainTextFallback = `
Free Consultation Request Details:
--------------------------------
Name: ${sanitizedName}
Email: ${sanitizedEmail}
Phone: ${sanitizedPhone}
Project Type: ${sanitizedProject}
Message: ${sanitizedMessage}
      `.trim();

      // Log payload for debugging
      console.log("Submitting form with:", {
        email: sanitizedEmail,
        subject,
        html: messageContent.substring(0, 100) + "...", // Log partial HTML
        message: plainTextFallback,
      });

      // Send form data to API
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
        setFormError(result.message || "Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormError(`An error occurred: ${error.message}. Please try again later.`);
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
                src="/image/samplePage/development-about.jpg"
                alt="Digital Marketing"
                width={400}
                height={300}
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
            <div className="sample6Page_servicess-box samplePage_uiux-sol">
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

        <div className="samplePage_portfolio">
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio1.jpg"
              alt="Portfolio 1"
              width={200}
              height={150}
            />
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
                  src="https://weboum.com/wp-content/uploads/2024/04/icon2.png"
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
                  src="https://weboum.com/wp-content/uploads/2024/04/icon3.png"
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
                  
                  <option value="Project Development">Project Development</option>
                  <option value="Web Development">Web Development</option>
                  <option value="App Development">Mobile App Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Product Development">Product Development</option>
                  <option value="e-Commerce / Shopping">
                    e-Commerce / Shopping
                  </option>
                  <option value="Graphic Designing">Graphic Designing</option>
                  <option value="Hosting / Migration">Hosting / Migration</option>
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
          <h2>What Clients Say About Us</h2>
          <p className="samplePage_subtitle">
            Our clients are delighted with our services, and most of them come
            again to us.
          </p>

          <div className="samplePage_testimonial-slider" id="testimonialSlider">
            {testimonials.map((testimonial) => (
              <div className="samplePage_testimonial-card" key={testimonial.id}>
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
                        alt="author"
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
        </section>
      </div>

      <Days />
    </>
  );
}