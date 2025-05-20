/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { useState } from "react";
import "./HostingManagement.css";
import Days from "../days/days";
import data from "../../../../public/data/hosting-management.json"; // Import the JSON file

export default function WebHosting() {
  const [activeTab, setActiveTab] = useState("Cloud Server");
  const [activeSlide, setActiveSlide] = useState(0);

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
              src={data.images.find(img => img.section === "hero").src}
              alt={data.images.find(img => img.section === "hero").alt}
              width={data.images.find(img => img.section === "hero").width}
              height={data.images.find(img => img.section === "hero").height}
            />
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="trusted-byhosting">
          <h2>Trusted by 100,000+ businesses like yours</h2>
          <div className="client-logoshosting-wrapper">
            <div className="client-logoshosting">
              {data.images
                .filter(img => img.section === "trusted-by")
                .map((img, index) => (
                  <Image
                    key={index}
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                  />
                ))}
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
            <div className="quote-iconhosting">&quot;</div>
            <div className="testimonial-contenthosting">
              <p>{data.testimonials[activeSlide]}</p>
            </div>
            <div className="paginationhosting">
              {data.testimonials.map((_, index) => (
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
                ? data.cloud_providers
                : activeTab === "VPS"
                ? data.vps_providers
                : data.dedicated_providers
              ).map((provider, index) => (
                <div className="provider-cardhosting" key={index}>
                  <div className="provider-logohosting">
                    <Image
                      src={provider.logo}
                      alt={`${provider.name} Logo`}
                      width={
                        data.images.find(img => img.src === provider.logo).width
                      }
                      height={
                        data.images.find(img => img.src === provider.logo).height
                      }
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
                Discover G2&apos;s top-rated SMB hosting provider, with a 4.7-star
                rating and trusted by websites across 200+ countries.
              </h2>
              <div className="rating-badgeshosting">
                {data.rating_badges.map((badge, index) => (
                  <div className="badgehosting" key={index}>
                    <Image
                      src={badge.image}
                      alt={badge.label}
                      width={
                        data.images.find(img => img.src === badge.image).width
                      }
                      height={
                        data.images.find(img => img.src === badge.image).height
                      }
                    />
                    <strong>{badge.value}</strong>
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="stats-sectionhosting">
          <div className="stats-headinghosting">
            <h2>
              Discover G2&apos;s top-rated SMB hosting provider, with a 4.7-star
              rating and trusted by websites across 200+ countries.
            </h2>
          </div>
          <div className="stats-containerhosting">
            {data.stats.map((stat, index) => (
              <div className="stat-itemhosting" key={index}>
                <img src={stat.image} alt={stat.label} />
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="app-selectionhosting">
          <div className="app-technologieshosting">
            <Image
              src={data.images.find(img => img.section === "app-selection").src}
              alt={data.images.find(img => img.section === "app-selection").alt}
              width={
                data.images.find(img => img.section === "app-selection").width
              }
              height={
                data.images.find(img => img.section === "app-selection").height
              }
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
          {data.features.map((feature, index) => (
            <div className="feature-cardhosting" key={index}>
              <img
                src={feature.image}
                alt={feature.title}
                className="feature-imghosting"
              />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </section>
      </main>
      <Days />
    </>
  );
}