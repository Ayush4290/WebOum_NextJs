import React from "react";

import {
  FaExpandArrowsAlt,
  FaUsersCog,
  FaFileCode,
  FaBolt,
  FaLaptop,
  FaCodeBranch,
  FaProjectDiagram,
  FaCog,
  FaSignInAlt,
  FaMobileAlt,
  FaServer,
  FaWindowMaximize,
  FaTh,
  FaShoppingCart,
  FaArrowsAlt,
  FaCheckCircle,
} from "react-icons/fa";

import SubHeader from "../../sub-header/page";
import "./web-developer.css";
import Days from "../../about-us/days/page";
import data from "../../../../public/data/web-developer.json";
import Image from "next/image";

export const metadata = {
  title: "Web Development - Weboum Technology Pvt. Ltd",
};

// Map icon names to their components
const iconMap = {
  FaExpandArrowsAlt: FaExpandArrowsAlt,
  FaUsersCog: FaUsersCog,
  FaFileCode: FaFileCode,
  FaBolt: FaBolt,
  FaLaptop: FaLaptop,
  FaCodeBranch: FaCodeBranch,
  FaProjectDiagram: FaProjectDiagram,
  FaCog: FaCog,
  FaSignInAlt: FaSignInAlt,
  FaMobileAlt: FaMobileAlt,
  FaServer: FaServer,
  FaWindowMaximize: FaWindowMaximize,
  FaTh: FaTh,
  FaShoppingCart: FaShoppingCart,
  FaArrowsAlt: FaArrowsAlt,
  FaCheckCircle: FaCheckCircle,
};

export default function WebDevelopment() {
  return (
    <>
      <SubHeader title="Custom Web Development Solutions" />
      <div className="web-development">
        {/* Feature Cards Section */}
        <div className="feature-bg-section">
          <div className="web-container">
            <div className="feature-row">
              {data.feature_cards.map((card, index) => {
                const IconComponent = iconMap[card.icon];
                return (
                  <div className="feature-column" key={index}>
                    <div className="feature-card">
                      <IconComponent className="icons" />
                      <h5>{card.title}</h5>
                      <p>{card.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container features-section">
          <p className="features-intro">
            Whether you require a newly developed website to enhance customer
            engagement, a web portal to improve visibility and organization, or
            a robust and feature-rich web app to automate business processes,
            WTPL has the solution.
          </p>

          <div className="features-row">
            {/* Left Column */}
            <div className="features-column">
              {data.features.slice(0, 2).map((feature, index) => {
                const IconComponent = iconMap[feature.icon];
                return (
                  <div className="feature-box" key={index}>
                    <IconComponent className="feature-icon" size={50} />
                    <div>
                      <div className="feature-title">{feature.title}</div>
                      <p className="feature-text">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="features-column">
              {data.features.slice(2).map((feature, index) => {
                const IconComponent = iconMap[feature.icon];
                return (
                  <div className="feature-box" key={index}>
                    <IconComponent className="feature-icon" size={50} />
                    <div>
                      <div className="feature-title">{feature.title}</div>
                      <p className="feature-text">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Custom Web Development Solutions Section */}
        <div className="solutions-bg-section">
          <div className="web-container">
            <h2 className="section-title-web">
              Custom Web Development Solutions
            </h2>
            <p className="section-subtitle">
              Our Full-Stack Web Developers have the programming expertise and
              industry-specific experience to build, integrate, and customize
              your website or application to align perfectly with your vision.
            </p>

            <div className="solutions-grid">
              {data.solutions.map((solution, index) => {
                const IconComponent = iconMap[solution.icon];
                return (
                  <div className="solution-card-wrapper" key={index}>
                    <div className="solution-card">
                      <IconComponent className="card-icon" />
                      <div className="card-title">{solution.title}</div>
                      <div className="card-text">{solution.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
        </div>
        </div>

        {/* Process Section */}
        <div className="container-process-section">
          <h2 className="section-title-web">
            Our Custom Web Development Process
          </h2>
          <p className="section-subtitle">
            We meet the demands of your business by executing our strategically
            planned processes for delivering top-of-the-line Custom Websites &
            Applications.
          </p>

          <div className="process-row">
            {/* Left Column */}
            <div className="process-column">
              {data.process_items.slice(0, 3).map((item, index) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <div className="process-item" key={index}>
                    <IconComponent className="process-icon" />
                    <div>
                      <div className="process-title">{item.title}</div>
                      <p className="process-text">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="process-column">
              {data.process_items.slice(3).map((item, index) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <div className="process-item" key={index}>
                    <IconComponent className="process-icon" />
                    <div>
                      <div className="process-title">{item.title}</div>
                      <p className="process-text">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Front-End Tech Section */}
        <div className="tech-section">
          <div className="web-container">
            <h2>Full-Stack Technology</h2>
            <p className="lead">
              Our Web Developers utilize multiple software platforms, providing
              greater computing power, enhanced graphics, robust security
              standards, and improved performance levels.
              <br />
              <em>Client Software (Front-End)</em>
            </p>

            <div className="tech-grid">
              {data.front_end_tech.map((tech, index) => (
                <div className="tech-card-wrapper" key={index}>
                  <Image
                    src={tech.image}
                    alt={`${tech.title} Logo`}
                    className="tech-logo"
                     width={20}
                    height={30}
                  />
                  <div className="tech-title">{tech.title}</div>
                  <p className="tech-description">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Back-End Tech Section */}
        <div className="tech-section">
          <div className="web-container">
            <h5>
              <em>Server Software (Back-End)</em>
            </h5>
            <div className="tech-grid">
              {data.back_end_tech.map((tech, index) => (
                <div className="tech-card-wrapper" key={index}>
                  <Image
                    src={tech.image}
                    alt={`${tech.title} Logo`}
                    className="tech-logo"
                    width={20}
                    height={30}
                  />
                  <div className="tech-title">{tech.title}</div>
                  <p className="tech-description">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Days />
    </>
  );
}