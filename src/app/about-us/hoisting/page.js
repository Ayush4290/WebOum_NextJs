"use client";

import Image from "next/image";
import { useState } from "react";
import "./HostingManagement.css";

export default function WebHosting() {
  const [activeTab, setActiveTab] = useState("Cloud Server");

  const cloudServerProviders = [
    {
      logo: "https://weboum.com/wp-content/uploads/2024/11/Knownhost-1.png",
      name: "Knownhost",
      description:
        "Since our founding in 2005, we&apos;ve been delivering exceptional hosting services to customers in over 150 countries. Our mission is simple: to offer high-quality, fully managed hosting backed by exceptional, personalized support that exceeds expectations.",
    },
    {
      logo: "https://weboum.com/wp-content/uploads/2024/11/Bluehost-1.png",
      name: "Bluehost",
      description:
        "Bluehost is a top web hosting solutions provider, committed to empowering customers with the tools they need to make the most of the web since our founding in 2003. We continuously network to deliver on our promise to millions of users worldwide with competitive tools and resources.",
    },
    {
      logo: "https://weboum.com/wp-content/uploads/2024/11/Hostgator.png",
      name: "HostGator",
      description:
        "Web hosting is our DNA, and we&quot;ve been powering it since the early days of the internet. Over the years, we&quot;ve expanded globally, driven by our dedication to helping people worldwide build their websites.",
    },
    {
      logo: "https://weboum.com/wp-content/uploads/2024/11/Godaddy-1.png",
      name: "GoDaddy",
      description:
        "GoDaddy does more than just sell domains - we empower millions of small businesses worldwide to accelerate their growth. By providing entrepreneurs with confidence at every stage of their journey, we help them build and expand their businesses.",
    },
    {
      logo: "https://weboum.com/wp-content/uploads/2024/11/Hostinger-1.png",
      name: "Hostinger",
      description:
        "Hostinger is dedicated to empowering people to learn, create, grow, and succeed online, whether you&quot;re a developer, an aspiring blogger, or a business owner. With premium hosting solutions at budget-friendly prices, and an intuitive brand identity guiding your website to a new level success.",
    },
    {
      logo: "https://weboum.com/wp-content/uploads/2024/11/Verotech.png",
      name: "Verotech",
      description:
        "Founded by industry professionals in a leading independent web hosting provider, delivering privately-owned rollout and enterprise-grade services. Verotech offers a variety of services including shared, reseller, VPS and fully managed applications.",
    },
  ];

  const vpsProviders = [
    {
      logo: "https://weboum.com/wp-content/uploads/2024/11/Knownhost-1.png",
      name: "VPS Provider 1",
      description:
        "A reliable VPS hosting solution with top-notch performance and scalability for growing businesses.",
    },
    {
      logo: "https://weboum.com/wp-content/uploads/2024/11/Bluehost-1.png",
      name: "VPS Provider 2",
      description:
        "Offering secure and fast VPS hosting with 24/7 support for all your needs.",
    },
  ];

  const dedicatedProviders = [
    {
      logo: "https://weboum.com/wp-content/uploads/2024/11/Hostgator.png",
      name: "Dedicated Provider 1",
      description:
        "High-performance dedicated servers tailored for large-scale applications.",
    },
    {
      logo: "https://weboum.com/wp-content/uploads/2024/11/Godaddy-1.png",
      name: "Dedicated Provider 2",
      description:
        "Customizable dedicated hosting with enterprise-grade hardware.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="herohosting">
        <div className="herohosting-content">
          <h1>Managed Web Hosting for an Exceptional Online Presence</h1>
          <p>
            Cloudways powers your digital agency, eCommerce store, or online
            business with a fast, secure, and user-friendly cloud hosting
            platform, supported by 24/7 expert assistance.
          </p>
          <div className="herohosting-buttons">
            <button className="btnhosting primary-btnhosting">
              Start Free Trial
            </button>
            <button className="btnhosting secondary-btnhosting">
              View Plans
            </button>
          </div>
        </div>
        <div className="herohosting-image">
          <Image
            src="https://weboum.com/wp-content/uploads/2024/11/web-hosting-1.jpg"
            alt="Web Hosting Concept"
            width={500}
            height={500}
          />
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-byhosting">
        <h2>Trusted by 100,000+ businesses like yours</h2>
        <div className="client-logoshosting">
          <Image
            src="https://weboum.com/wp-content/uploads/2024/11/SiteGround-1.png"
            alt="SiteGround"
            width={100}
            height={50}
          />
          <Image
            src="https://weboum.com/wp-content/uploads/2024/11/Wordpress-1.png"
            alt="WordPress"
            width={100}
            height={50}
          />
          <Image
            src="https://weboum.com/wp-content/uploads/2024/11/Knownhost-1.png"
            alt="Knownhost"
            width={100}
            height={50}
          />
          <Image
            src="https://weboum.com/wp-content/uploads/2024/11/Godaddy-1.png"
            alt="GoDaddy"
            width={100}
            height={50}
          />
          <Image
            src="https://weboum.com/wp-content/uploads/2024/11/Hostgator.png"
            alt="HostGator"
            width={100}
            height={50}
          />
        </div>
      </section>

      {/* WordPress Hosting Section */}
      <section className="wordpress-hostinghosting">
        <div className="wordpress-contenthosting">
          <h2>Effortless, Powerful, and Autoscaling WordPress Hosting</h2>
          <p>
            Experience a hosting solution with zero configuration, 1-click
            operations, and true autoscaling with no downtime. Simply host your
            website and focus on growing your business, while Autonomous takes
            care of everything else!
          </p>
          <button className="btnhosting primary-btnhosting">Get Started</button>
        </div>
        <div className="testimonialhosting">
          <div className="quote-iconhosting">&quot;</div>
          <div className="testimonial-contenthosting">
            <h2>
              Discover G2&apos;s top-rated SMB hosting provider, with a 4.7-star
              rating and trusted by websites across 200+ countries.
            </h2>
          </div>
          <div className="paginationhosting">
            <span className="dothosting activehosting"></span>
            <span className="dothosting"></span>
            <span className="dothosting"></span>
            <span className="dothosting"></span>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="success-storyhosting">
        <h2>
          Create Your Success Story <span>Effortlessly</span>
        </h2>
        <p>
          Save time and reduce costs with an easy-to-use managed cloud hosting
          platform that offers outstanding performance and value.
        </p>
        <div className="tabshosting">
          <button
            className={`tab-btnhosting ${
              activeTab === "Cloud Server" ? "activehosting" : ""
            }`}
            onClick={() => setActiveTab("Cloud Server")}
          >
            Cloud Server
          </button>
          <button
            className={`tab-btnhosting ${
              activeTab === "VPS" ? "activehosting" : ""
            }`}
            onClick={() => setActiveTab("VPS")}
          >
            VPS
          </button>
          <button
            className={`tab-btnhosting ${
              activeTab === "Dedicated" ? "activehosting" : ""
            }`}
            onClick={() => setActiveTab("Dedicated")}
          >
            Dedicated
          </button>
        </div>

        {/* Tab Content */}
        <div className="cloud-providershosting">
          {(activeTab === "Cloud Server"
            ? cloudServerProviders
            : activeTab === "VPS"
            ? vpsProviders
            : dedicatedProviders
          ).map((provider, index) => (
            <div className="provider-cardhosting" key={index}>
              <div className="provider-logohosting">
                <Image
                  src={provider.logo}
                  alt={`${provider.name} Logo`}
                  width={100}
                  height={50}
                />
              </div>
              <h3>{provider.name}</h3>
              <p>{provider.description}</p>
              <a href="#" className="learn-morehosting">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* SMB Hosting Section */}
      <section className="smb-hostinghosting">
        <section className="hosting-headerhosting">
          <div className="hosting-imagehosting">
            <Image
              src="https://weboum.com/wp-content/uploads/2024/11/Support-agent-1.png"
              alt="Support Agent"
              width={500}
              height={500}
            />
          </div>
          <div className="hosting-headinghosting">
            <h2>
              Discover G2&quot;s top-rated SMB hosting provider, with a 4.7-star
              rating and trusted by websites across 200+ countries.
            </h2>
            <div className="rating-badgeshosting">
              <div className="badgehosting">
                <i className="fas fa-clock"></i>
                <strong>93 Sec</strong>
                <span>Average Resolution Time</span>
              </div>
              <div className="badgehosting">
                <i className="fas fa-percent"></i>
                <strong>96%</strong>
                <span>CSAT Score</span>
              </div>
              <div className="badgehosting">
                <i className="fas fa-headset"></i>
                <strong>24/7</strong>
                <span>Expert Support</span>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-sectionhosting">
          <div className="stat-itemhosting">
            <strong>73</strong>
            <span>Industry-Leading NPS</span>
          </div>
          <div className="stat-itemhosting">
            <strong>50+</strong>
            <span>Global Data Centers</span>
          </div>
          <div className="stat-itemhosting">
            <strong>840k+</strong>
            <span>Turbocharged Websites</span>
          </div>
        </section>

        <section className="app-selectionhosting">
          <div className="app-technologieshosting">
            <Image
              src="https://weboum.com/wp-content/uploads/2024/11/Choose-Your-App-293x300.png"
              alt="Technology Icons"
              width={450}
              height={350}
            />
          </div>
          <div className="app-contenthosting">
            <h2>Choose Your App, Pick a Cloud.</h2>
            <p>
              Choose from WordPress, Magento, Laravel, or PHP apps, all
              optimized to the max, and host them on top cloud services like
              DigitalOcean, Google Cloud, or Amazon Web Services.
            </p>
            <button className="btnhosting primary-btnhosting">
              Launch Now
            </button>
          </div>
        </section>

        <section className="featureshosting">
          <div className="feature-cardhosting">
            <Image
              src="https://weboum.com/wp-content/uploads/2024/11/Level-Security.jpg"
              alt="Security Icon"
              width={100}
              height={100}
            />
            <h3>Enterprise-Level Security</h3>
            <p>
              Safeguard your business from threats with our advanced server
              protection offering unmatched security scanning, vulnerability
              alerts, DDoS mitigation, SSL certificates, and regular backups.
            </p>
          </div>
          <div className="feature-cardhosting">
            <Image
              src="https://weboum.com/wp-content/uploads/2024/11/Team-collaboration.jpg"
              alt="Collaboration Icon"
              width={100}
              height={100}
            />
            <h3>Seamless Team Collaboration</h3>
            <p>
              Effortlessly collaborate by adding team members to your project
              for easy project management, task delegation, and file ownership
              with just a few clicks.
            </p>
          </div>
          <div className="feature-cardhosting">
            <Image
              src="https://weboum.com/wp-content/uploads/2024/11/Real-Time-Server-Monitoring-1.jpg"
              alt="Monitoring Icon"
              width={100}
              height={100}
            />
            <h3>Real-Time Server Monitoring</h3>
            <p>
              24/7 real-time monitoring ensures you can see every server event
              in real-time, knowing everything is being monitored exactly as it
              should.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
