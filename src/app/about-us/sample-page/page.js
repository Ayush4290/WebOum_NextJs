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
import { useEffect, useRef } from "react";
import Image from "next/image"; // Import Next.js Image component
import "./sample-page.css";

export default function SamplePage() {
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

  return (
    <>
      <div className="samplePage">
        <section className="samplePage_business-section samplePage_conta">
          <div className="samplePage_content container">
            <h1>
              Build efficient Website
              <br />
              for your Business
            </h1>
            <p>
              In today&apos;s digital world, having a professional and efficient
              website is essential for business growth. We specialize in
              creating modern, fast, and responsive websites that help you reach
              your target audience effectively.
            </p>
            <div className="samplePage_buttons">
              <a href="#" className="samplePage_btn-primary">
                Read More
              </a>
              <a href="#" className="samplePage_btn-outline">
                <span>✉</span> Contact Us
              </a>
            </div>
          </div>
          <div className="samplePage_image">
            <Image
              src="/image/samplePage/development-about.jpg"
              alt="Digital Marketing"
              width={400} // Placeholder width
              height={300} // Placeholder height
            />
          </div>
        </section>

        {/* Services icons section */}
        <section className="samplePage_servicess-section">
          <div className="samplePage_servicess-container">
            <div className="samplePage_servicess-box samplePage_webapps-dev">
              <div className="samplePage_icon-circle">
                <Laptop size={24} />
              </div>
              <p>Webapps Development</p>
            </div>
            <div className="samplePage_servicess-box samplePage_ecommerce-sol">
              <div className="samplePage_icon-circle">
                <ShoppingCart size={24} />
              </div>
              <p>E-Commerce Solutions</p>
            </div>
            <div className="samplePage_servicess-box samplePage_branding-sol">
              <div className="samplePage_icon-circle">
                <Tags size={24} />
              </div>
              <p>Branding Solutions</p>
            </div>
            <div className="samplePage_servicess-box samplePage_optimization-sol">
              <div className="samplePage_icon-circle">
                <Settings size={24} />
              </div>
              <p>Optimization Solutions</p>
            </div>
            <div className="samplePage_servicess-box samplePage_uiux-sol">
              <div className="samplePage_icon-circle">
                <Users size={24} />
              </div>
              <p>UI/UX Solutions</p>
            </div>
            <div className="samplePage_servicess-box samplePage_marketing-sol">
              <div className="samplePage_icon-circle">
                <Map size={24} />
              </div>
              <p>Marketing Solutions</p>
            </div>
          </div>
        </section>

        {/* Portfolio tabs section */}
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

        {/* Portfolio items */}
        <div id="all" className="samplePage_portfolio samplePage_active">
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio1.jpg"
              alt="Portfolio 1"
              width={200} // Placeholder width
              height={150} // Placeholder height
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio2.png"
              alt="Portfolio 2"
              width={200} // Placeholder width
              height={150} // Placeholder height
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio4.jpg"
              alt="Software 1"
              width={200} // Placeholder width
              height={150} // Placeholder height
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio5.jpg"
              alt="Software 2"
              width={200} // Placeholder width
              height={150} // Placeholder height
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio6.jpg"
              alt="Apps 1"
              width={200} // Placeholder width
              height={150} // Placeholder height
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio7.jpg"
              alt="Apps 2"
              width={200} // Placeholder width
              height={150} // Placeholder height
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio8.jpg"
              alt="Graphics 1"
              width={200} // Placeholder width
              height={150} // Placeholder height
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio9.jpg"
              alt="Graphics 2"
              width={200} // Placeholder width
              height={150} // Placeholder height
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio10.jpg"
              alt="Marketing 1"
              width={200} // Placeholder width
              height={150} // Placeholder height
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio12.jpg"
              alt="Marketing 2"
              width={200} // Placeholder width
              height={150} // Placeholder height
            />
          </div>
        </div>

        <div id="software" className="samplePage_portfolio">
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio15.jpg"
              alt="Software 1"
              width={200} // Placeholder width
              height={150} // Placeholder height
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio14.jpg"
              alt="Software 2"
              width={200} // Placeholder width
              height={150} // Placeholder height
            />
          </div>
        </div>

        <div id="apps" className="samplePage_portfolio">
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio15.jpg"
              alt="Apps 1"
              width={200} // Placeholder width
              height={150} // Placeholder height
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio17.jpg"
              alt="Apps 2"
              width={200} // Placeholder width
              height={150} // Placeholder height
            />
          </div>
        </div>

        <div id="graphics" className="samplePage_portfolio">
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio19.jpg"
              alt="Graphics 1"
              width={200} // Placeholder width
              height={150} // Placeholder height
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio20.jpg"
              alt="Graphics 2"
              width={200} // Placeholder width
              height={150} // Placeholder height
            />
          </div>
        </div>

        <div id="marketing" className="samplePage_portfolio">
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio4.jpg"
              alt="Marketing 1"
              width={200} // Placeholder width
              height={150} // Placeholder height
            />
          </div>
          <div className="samplePage_item">
            <Image
              src="/image/samplePage/portfolio7.jpg"
              alt="Marketing 2"
              width={200} // Placeholder width
              height={150} // Placeholder height
            />
          </div>
        </div>

        {/* Lightbox */}
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
            width={800} // Placeholder width
            height={600} // Placeholder height
          />
        </div>

        {/* Why choose us section with form */}
        <section className="samplePage_section-wrapper container">
          <div className="row align-items-start">
            {/* Left Content */}
            <div className="col-lg-6 samplePage_left-content">
              <h6>Weboum – Customized IT Solutions</h6>
              <div className="samplePage_highlight-line"></div>
              <h2>
                Why Choose <strong>us</strong>
              </h2>
              <p>
                We Are Trusted Web Development, Web Design & Digital Marketing
                Company
              </p>
              <p>
                WTPL, (Weboum Technology Pvt. Ltd.) is one of the best digital
                marketing agencies in Chandigarh & Mohali, India, with the
                aspiration to create value for your business.
              </p>
              <p>
                Our web design and development with digital marketing services
                will transform your marketing approach.
              </p>
              <p>
                So, get through one of the best Web development, Web design and
                Digital marketing companies. WTPL, named as one of the best
                digital marketing agencies and a great web development service
                provider.
              </p>

              {/* Features */}
              <div className="samplePage_feature">
                <CheckCircle size={30} />
                <div>
                  <h6>High Customer Retention Rate</h6>
                  <p>
                    We have a 100% retention rate. Customer loyalty is
                    priceless. We are earning our customers loyalty day by day.
                  </p>
                </div>
              </div>
              <div className="samplePage_feature">
                <CheckCircle size={30} />
                <div>
                  <h6>Ability To Meet Deadlines</h6>
                  <p>
                    We are 100% clear on when work needs to be completed.
                    Deadlines help us achieve shared goals.
                  </p>
                </div>
              </div>
              <div className="samplePage_feature">
                <CheckCircle size={30} />
                <div>
                  <h6>Professional Team Member</h6>
                  <p>
                    We have focused, creative team members passionate about
                    growing professionally for your business.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="samplePage_form-box">
                <Image
                  src="/image/featured-image.jpg"
                  alt="Featured"
                  width={400} // Placeholder width
                  height={200} // Placeholder height
                />
                <h5>Request A Free Consultation</h5>
                <small>
                  We Help Customers Digital Transformation By IT Solutions
                </small>

                <form>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="000-000-0000"
                    required
                  />
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                  <select className="form-select" required>
                    <option selected>Project Development</option>
                    <option value="1">Web Development</option>
                    <option value="2">App Development</option>
                    <option value="3">Digital Marketing</option>
                  </select>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Your Query / Message"
                  ></textarea>

                  {/* Simulated CAPTCHA box */}
                  <div className="my-3">
                    <input type="checkbox" id="captcha" />
                    <label htmlFor="captcha"> I&apos;m not a robot</label>
                  </div>

                  <button type="submit" className="btn samplePage_btn-submit">
                    MAKE A REQUEST
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Services section */}
        <section className="samplePage_services-section">
          <div className="samplePage_service-box">
            <Code size={56} className="samplePage_icon-blue" />
            <h3>App Design & Development</h3>
            <p>
              Our team of expert software developers focused on delivering
              best-in-class, user friendly top-notch applications that perform
              better across multiple platforms to achieve long term success.
            </p>
          </div>

          <div className="samplePage_service-box">
            <UserCog size={56} className="samplePage_icon-orange" />
            <h3>On-Demand Developers</h3>
            <p>
              Everything under one roof, give you peace of mind. We are happy to
              hire skilled cum industry experience developers and on-premise IT
              infrastructure flexibility to accelerate your performance.
            </p>
          </div>

          <div className="samplePage_service-box">
            <Wrench size={56} className="samplePage_icon-green" />
            <h3>Product Support</h3>
            <p>
              Our global strategic partner enables us to create next generation
              robust products and IT consulting, efficiently and make us quickly
              technical support solutions for any upcoming complexity.
            </p>
          </div>
        </section>

        {/* Stats section */}
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

        {/* Testimonial section */}
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
                      width={50} // Placeholder width
                      height={50} // Placeholder height
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
                      width={50} // Placeholder width
                      height={50} // Placeholder height
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
      <Days />
    </>
  );
}
