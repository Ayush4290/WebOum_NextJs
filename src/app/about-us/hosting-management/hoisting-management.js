"use client";

import Image from "next/image";
import { useState } from "react";
import "./HostingManagement.css";
import Days from "../days/days";

export default function WebHosting() {
  const [activeTab, setActiveTab] = useState("Cloud Server");
  const [activeSlide, setActiveSlide] = useState(0);

  const cloudServerProviders = [
    {
      logo: "https://weboum.com/wp-content/uploads/2024/11/Aws.png",
      name: "AWS (Amazon Web Services)",
      description:
        "Since launching in 2006, Amazon Web Services has been providing world-leading cloud technologies that help any organization and any individual build solutions to transform industries, communities, and lives for the better.",
    },
    {
      logo: "https://weboum.com/wp-content/uploads/2024/11/Azure.png",
      name: "Azure",
      description:
        "Microsoft created the cloud computing platform known as Microsoft Azure, or just Azure. Through its worldwide infrastructure, it manages, provides access to, and develops applications and services for people, businesses, and governments.",
    },
    {
      logo: "https://weboum.com/wp-content/uploads/2024/11/Google.png",
      name: "(GCP) Google Cloud Platform",
      description:
        "Google Cloud Platform (GCP) is Google’s suite of cloud computing services, offering a range of modular options like computing power, data storage, data analytics, and machine learning, as well as management tools.",
    },
  ];

  const vpsProviders = [
    {
      logo: "https://weboum.com/wp-content/uploads/2024/11/Knownhost.png",
      name: "Knownhost",
      description:
        "Since our founding in 2006, we’ve been dedicated to delivering premium hosting services to customers in over 150 countries. Our mission is simple: to offer high-quality, fully managed hosting backed by exceptional, personalized support that exceeds expectations.",
    },
    {
      logo: "https://weboum.com/wp-content/uploads/2024/11/Bluehost.png",
      name: "Bluehost",
      description:
        "Bluehost is a top web hosting solutions provider, committed to empowering users to make the most of the web since our founding in 2003. We continuously innovate to deliver on our mission, equipping millions of users worldwide with comprehensive tools and resources.",
    },
    {
      logo: "https://weboum.com/wp-content/uploads/2024/11/Veerotech.png",
      name: "Veerotech",
      description:
        "Founded in 2010 and headquartered in Raleigh, NC, VeeroTech Hosting is a fully independent web hosting provider, remaining privately owned without any external influence from parent companies. VeeroTech offers a variety of services, including Shared, Reseller, WordPress, VPS, and fully managed hosting solutions.",
    },
    {
      logo: "https://weboum.com/wp-content/uploads/2024/11/HostGator.png",
      name: "HostGator",
      description:
        "Web hosting is in our DNA, and we’ve been mastering it since the early days of the internet. Over the years, we’ve expanded globally, driven by our dedication to helping people worldwide build their websites their way.",
    },
    {
      logo: "https://weboum.com/wp-content/uploads/2024/11/Godaddy.png",
      name: "GoDaddy",
      description:
        "GoDaddy does more than just sell domain names—we empower millions of small businesses worldwide to accelerate their growth. By providing entrepreneurs with confidence at every stage of their journey, we help them build and expand their businesses.",
    },
    {
      logo: "https://weboum.com/wp-content/uploads/2024/11/Hostinger.png",
      name: "Hostinger",
      description:
        "Hostinger is dedicated to empowering anyone to achieve online success—whether you’re a developer, an aspiring blogger, or a business owner. With lightning-fast hosting, an AI-driven Website Builder, and an intuitive hPanel, creating and growing your website has never been easier.",
    },
  ];

  const dedicatedProviders = [
    {
      logo: "https://weboum.com/wp-content/uploads/2024/11/Knownhost.png",
      name: "Knownhost",
      description:
        "Since our founding in 2006, we’ve been dedicated to delivering premium hosting services to customers in over 150 countries. Our mission is simple: to offer high-quality, fully managed hosting backed by exceptional, personalized support that exceeds expectations.",
    },
    {
      logo: "https://weboum.com/wp-content/uploads/2024/11/Bluehost.png",
      name: "Bluehost",
      description:
        "Bluehost is a top web hosting solutions provider, committed to empowering users to make the most of the web since our founding in 2003. We continuously innovate to deliver on our mission, equipping millions of users worldwide with comprehensive tools and resources.",
    },
    {
      logo: "https://weboum.com/wp-content/uploads/2024/11/HostGator.png",
      name: "HostGator",
      description:
        "Web hosting is in our DNA, and we’ve been mastering it since the early days of the internet. Over the years, we’ve expanded globally, driven by our dedication to helping people worldwide build their websites their way.",
    },
    {
      logo: "https://weboum.com/wp-content/uploads/2024/11/Godaddy.png",
      name: "GoDaddy",
      description:
        "GoDaddy does more than just sell domain names—we empower millions of small businesses worldwide to accelerate their growth. By providing entrepreneurs with confidence at every stage of their journey, we help them build and expand their businesses.",
    },
  ];

  const testimonials = [
    "As a long-time user, I’ve been amazed by this platform! During my site’s beta phase, my project, WebPulse, saw multiple traffic surges. Thanks to autoscaling, I never had to stress about server adjustments. I’m beyond pleased with the service!",
    "As a long-time user, I’ve been amazed by this platform! During my site’s beta phase, my project, WebPulse, saw multiple traffic surges. Thanks to autoscaling, I never had to stress about server adjustments. I’m beyond pleased with the service!",
    "As a long-time user, I’ve been amazed by this platform! During my site’s beta phase, my project, WebPulse, saw multiple traffic surges. Thanks to autoscaling, I never had to stress about server adjustments. I’m beyond pleased with the service!",
    "As a long-time user, I’ve been amazed by this platform! During my site’s beta phase, my project, WebPulse, saw multiple traffic surges. Thanks to autoscaling, I never had to stress about server adjustments. I’m beyond pleased with the service!",
  ];

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <>
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
        <div className="client-logoshosting-wrapper">
          <div className="client-logoshosting">
            <Image
              src="https://weboum.com/wp-content/uploads/2024/11/Siteground-1.png"
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
              src="https://weboum.com/wp-content/uploads/2024/11/Hostinger-1.png"
              alt="HostGator"
              width={100}
              height={50}
            />
          </div>
        </div>
      </section>

      {/* WordPress Hosting Section */}
      <section className="wordpress-hostinghosting">
        <div className="wordpress-contenthosting">
          <h2>Effortless, Powerful, and Autoscaling Website Hosting</h2>
          <p>
            Discover a hosting solution with seamless setup, one-click
            management, and reliable autoscaling with zero downtime. Host your
            website effortlessly and focus on scaling your online presence,
            while we handle the rest!
          </p>
          <button className="btnhosting primary-btnhosting">Start Now</button>
        </div>
        <div className="testimonialhosting">
          <div className="quote-iconhosting">"</div>
          <div className="testimonial-contenthosting">
            <p>{testimonials[activeSlide]}</p>
          </div>
          <div className="paginationhosting">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`dothosting ${
                  activeSlide === index ? "activehosting" : ""
                }`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="success-storyhosting">
        <h2>Create Your Success Story Effortlessly</h2>
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
        <div className="tab-contenthosting">
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
                    width={80}
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
        </div>
      </section>

      {/* SMB Hosting Section */}

      <section className="hosting-headerhosting">
        <div className="hosting-contenthosting">
          <div className="hosting-headinghosting">
            <h2>
              Discover G2's top-rated SMB hosting provider, with a 4.7-star
              rating and trusted by websites across 200+ countries.
            </h2>
            <div className="rating-badgeshosting">
              <div className="badgehosting">
                <Image
                  src="https://weboum.com/wp-content/uploads/2024/11/watch-2.png"
                  alt="Average Response Time"
                  width={44}
                  height={44}
                />
                <strong>93 Sec</strong>
                <span>Average Response Time</span>
              </div>
              <div className="badgehosting">
                <Image
                  src="https://weboum.com/wp-content/uploads/2024/11/smile.png"
                  alt="CSAT Score"
                  width={44}
                  height={44}
                />
                <strong>96 %</strong>
                <span>CSAT Score</span>
              </div>
              <div className="badgehosting">
                <Image
                  src="https://weboum.com/wp-content/uploads/2024/11/Support-1-1.png"
                  alt="Expert Support"
                  width={44}
                  height={44}
                />
                <strong>24/7</strong>
                <span>Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="stats-sectionhosting">
        <div class="stats-headinghosting">
          <h2>
            Discover G2's top-rated SMB hosting provider, with a 4.7- star
            rating and trusted by websites across 200+ countries.
          </h2>
        </div>
        <div class="stats-containerhosting">
          <div class="stat-itemhosting">
            <img
              src="https://weboum.com/wp-content/uploads/2024/11/Industry-Leading-NPS.png"
              alt="Industry-Leading NPS"
            />
            <strong>73</strong>
            <span>Industry-Leading NPS</span>
          </div>
          <div class="stat-itemhosting">
            <img
              src="https://weboum.com/wp-content/uploads/2024/11/Global-Data-Centers.png"
              alt="Global Data Centers"
            />
            <strong>50+</strong>
            <span>Global Data Centers</span>
          </div>
          <div class="stat-itemhosting">
            <img
              src="https://weboum.com/wp-content/uploads/2024/11/Turbocharged-Websites.png"
              alt="Turbocharged Websites"
            />
            <strong>840k+</strong>
            <span>Turbocharged Websites</span>
          </div>
        </div>
      </section>

      <section className="app-selectionhosting">
        <div className="app-technologieshosting">
          <Image
            src="https://weboum.com/wp-content/uploads/2024/11/Choose-Your-App-293x300.png"
            alt="Technology Icons"
            width={293}
            height={300}
          />
        </div>
        <div className="app-contenthosting">
          <h2>Choose Your App, Pick a Cloud.</h2>
          <p>
            Choose from WordPress, Magento, Laravel, or PHP apps, all optimized
            to the max, and host them on top cloud servers like DigitalOcean,
            Google Cloud, or Amazon Web Services.
          </p>
          <button className="btnhosting primary-btnhosting">
            Launch My Server
          </button>
        </div>
      </section>

      <section className="featureshosting">
        <div className="feature-cardhosting">
          <img
            src="https://weboum.com/wp-content/uploads/2024/11/Level-Security.jpg"
            alt="Security Icon"
            className="feature-imghosting"
          />
          <h3>Enterprise-Level Security</h3>
          <p>
            Safeguard your business from diverse security threats with our
            integrated server-level firewall (Imunify360), malware scanning,
            vulnerability alerts, SSL certificates, and regular backups.
          </p>
        </div>
        <div className="feature-cardhosting">
          <img
            src="https://weboum.com/wp-content/uploads/2024/11/Team-collaboration.jpg"
            alt="Collaboration Icon"
            className="feature-imghosting"
          />
          <h3>Seamless Team Collaboration.</h3>
          <p>
            Effortlessly collaborate by adding team members to your projects for
            easy management. Transfer servers and ownership with just a few
            clicks when needed.
          </p>
        </div>
        <div className="feature-cardhosting">
          <img
            src="https://weboum.com/wp-content/uploads/2024/11/Real-Time-Server-Monitoring-1.jpg"
            alt="Monitoring Icon"
            className="feature-imghosting"
          />
          <h3>Real-Time Server Monitoring</h3>
          <p>
            With 24/7 real-time monitoring and CloudwaysBot notifications, you
            can relax and focus on growing your business, knowing everything is
            being expertly managed.
          </p>
        </div>
      </section>
    </main>
    <Days/>
    </>
  );
}
