"use client";

import SubHeader from "../sub-header/page";
import Days from "./days/page";
import "./about-us.css";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <SubHeader title="About Us" />
      <div className="about-wrapper">
        <div className="about-container">
          <div className="about-content-section">
            <div className="about-columns">
              <div className="about-text-column">
                <p>
                  WEBOUM is an ISO 9001:2008 Certified Company, located in The
                  City Beautiful, Chandigarh, situated at the foothills of the
                  Shivalik hills. We are one of the fastest-growing companies in
                  consulting, technology, outsourcing and next-generation
                  services.
                </p>
                <div className="about-abbreviation">
                  <h5>
                    <strong>WEBOUM abbreviation is used for:</strong>
                  </h5>
                  <div className="abbr-item">
                    <b>
                      W: <i>Web Applications</i>
                    </b>
                    <p>
                      Develop and maintain web applications tailored to your
                      specific needs, whether for personal use, business
                      operations, or any other purpose.
                    </p>
                  </div>
                  <div className="abbr-item">
                    <b>
                      E: <i>e-Commerce</i>
                    </b>
                    <p>
                      We provide comprehensive e-commerce solutions to help you
                      sell products and services online efficiently and
                      effectively.
                    </p>
                  </div>
                  <div className="abbr-item">
                    <b>
                      B: <i>Branding</i>
                    </b>
                    <p>
                      We create and enhance your brand identity, making your
                      business stand out in the market through logos, marketing
                      materials, and brand strategies.
                    </p>
                  </div>
                  <div className="abbr-item">
                    <b>
                      O: <i>Optimization</i>
                    </b>
                    <p>
                      We improve the performance, security, and efficiency of
                      your business systems and applications to ensure they run
                      smoothly and effectively.
                    </p>
                  </div>
                  <div className="abbr-item">
                    <b>
                      U: <i>UI/UX</i>
                    </b>
                    <p>
                      We design user-friendly and attractive interfaces to
                      enhance user experiences and satisfaction, ensuring that
                      your applications are both intuitive and enjoyable to use.
                    </p>
                  </div>
                  <div className="abbr-item">
                    <b>
                      M: <i>Marketing</i>
                    </b>
                    <p>
                      We help your business grow through effective marketing
                      strategies, including SEO, digital marketing, and
                      promotional campaigns, as well as providing ongoing
                      support and maintenance.
                    </p>
                  </div>
                  <div >
                    <p>
                      We utilizes in-house capabilities and third party tools to
                      provide implementation, customization, and support
                      services. We provide end-to-end, affordable, high quality
                      customer satisfaction solutions. Since our inception, we
                      are committed to deliver solutions on time, cost
                      effectively and satisfactory.
                    </p>
                  </div>
                </div>
              </div>
              <div className="about-image-column">
                <Image
                  src="/image/development-about.jpg"
                  alt="Technology Graphic"
                  className="about-image"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="about-missionrow">
              <div className="mission-vision-content">
                <h4>
                  <strong>Our Mission:</strong>
                </h4>
                <p>
                  We are dedicated to building long-term partnerships with our
                  clients by understanding their unique needs and delivering
                  tailored solutions that drive measurable results. Our mission
                  is to be a catalyst for digital transformation, enabling our
                  clients to harness the power of technology to achieve their
                  goals and reach new heights of success. Through our expertise,
                  innovation, and commitment to excellence, we strive to make a
                  positive impact on the businesses and communities we serve.
                </p>
                <h4>
                  <strong>Our Vision:</strong>
                </h4>
                <p>
                  The vision of <strong>Weboum Technology</strong> is
                  domain-centric, end-to-end technology, innovative, trusted,
                  supportive, and high-quality web solutions which consider us
                  complete satisfactions when we delivered the final project to
                  meet your business objectives.
                </p>
                <p>
                  <strong>
                    Weboum believes that this vision can be reached through the
                    following principles:
                  </strong>
                </p>
                <ul className="principles-list">
                  <li>
                    <strong>Integrity</strong> – Honesty in how we deal with our
                    clients, each other, and with the world.
                  </li>
                  <li>
                    <strong>Candor</strong> – Be open and upfront in all our
                    conversations. Keep clients updated on the real situation.
                    Deal with situations early; avoid last-minute surprises.
                  </li>
                  <li>
                    <strong>Service</strong> – Seek to empower and enable our
                    clients. Consider ourselves successful not when we deliver
                    our client&apos;s final product but when the product is
                    launched and meets success.
                  </li>
                  <li>
                    <strong>Kindness</strong> – Go the extra mile. Speak the
                    truth with grace. Deliver more than is expected or promised.
                  </li>
                  <li>
                    <strong>Competence</strong> – Benchmark with the best in the
                    business. Try new and better things. Never rest on laurels.
                    Move out of comfort zones. Keep suggesting new things. Seek
                    to know more.
                  </li>
                  <li>
                    <strong>Growth</strong> – Success is a journey, not a
                    destination. Seek to multiply/increase what we have –
                    wealth, skills, influence, and our client&apos;s business.
                  </li>
                </ul>
                <p className="quality-statement">
                  It&apos;s the quality which matters, not the quantity of work
                  for us. We are the{" "}
                  <strong>leading providers of high-quality designs</strong>.
                  Since our inception, we are committed to delivering solutions{" "}
                  <strong>cost-effectively and on time</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat button */}
      <div className="fixed-chat-button">
        <button className="chat-btn" aria-label="Chat with us">
          <div className="chat-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
                stroke="#000000"
                strokeWidth="1.5"
              />
              <path
                d="M8 12H8.01"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M12 12H12.01"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M16 12H16.01"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </button>
      </div>

      <Days />
    </>
  );
}
