"use client";

import Days from "@/app/about-us/days/page";
import SubHeader from "@/app/sub-header/page";
import Image from "next/image";
import "./shopify-developer.css";

export default function ShopifyDevelopment() {
  return (
    <>
      <SubHeader title="Shopify Development" />
      <div className="shopify-page">
        {/* Section 1 */}
        <div className="shopify-container shopify-row">
          <div className="shopify-text-section">
            <h1>Shopify E-Commerce Solutions You Can Trust</h1>
            <p>
              Webx Technology is a prominent Shopify development firm that
              offers bespoke Shopify eCommerce solutions, themes, and API
              integrations, among other things. We have a dedicated in-house
              team of 30+ Shopify developers to provide scalable solutions
              ranging from setting up a new store to improving the performance
              and functionality of an existing site.
            </p>
            <p>
              We specialize in creating highly customized Shopify e-stores using
              best practices to ensure mobile responsiveness and performance.
            </p>
          </div>
          <div className="shopify-image-section shopify-pt-24">
            <Image
              src="/image/ShopifyDevelopment/shopify-main-image.png"
              alt="Shopify Main"
              width={500}
              height={300}
              priority
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="shopify-container shopify-row">
          <div className="shopify-image-section shopify-pt-24">
            <Image
              src="/image/ShopifyDevelopment/multi-screens-v5-1024x682.jpg"
              alt="Multi Screens"
              width={1024}
              height={682}
            />
          </div>
          <div className="shopify-text-section">
            <h1>Launch A Successful E-commerce Store Today With Shopify</h1>
            <p>
              Shopify is a SaaS platform that allows business professionals to
              create and manage online stores effortlessly, with rich features
              that meet diverse e-commerce needs.
            </p>
            <p>
              We help with everything from theme deployment to ongoing
              management, including a free one-day development trial.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="shopify-container">
          <h1>Shopify Development Firm for Effective E-commerce Solutions</h1>
          <p>
            Manage your Shopify store with ease—handle products, content, and
            orders seamlessly with our development services, including
            customization, app development, theme conversion, QA, and more.
          </p>
        </div>

        {/* Section 4 */}
        <div className="shopify-container">
          <h2>Why Hire Us?</h2>
          <h3>Workflow with a Purpose</h3>
          <p>
            We tailor workflows to meet each client’s goals, following agile
            practices.
          </p>
          <h3>Certified Shopify Team</h3>
          <p>
            Our certified developers provide high-quality, efficient solutions
            and work closely with you throughout the process.
          </p>
          <h3>Quality Control</h3>
          <p>
            We ensure responsive testing across devices and maintain
            international standards in all code.
          </p>
          <h3>Transparent Pricing</h3>
          <p>
            Flexible, honest pricing with no hidden fees. Choose hourly,
            part-time or full-time hiring models.
          </p>
          <h3>Real-Time Support</h3>
          <p>
            Get live support and maintenance for layout tweaks, feature
            upgrades, and integration updates.
          </p>
        </div>

        {/* Section 5 */}
        <div className="shopify-container">
          <h1>Our Shopify Design and Setup Services</h1>
          <ul>
            <li>Shopify Store Setup & Configuration</li>
            <li>Custom Shopify Template Design</li>
            <li>Image Uploads and Product Categorization</li>
            <li>Payment, Shipping Gateway, and Email Setup</li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="shopify-container">
          <h3>Responsive Shopify Theme Development</h3>
          <ul>
            <li>Convert PSD to responsive theme</li>
            <li>Customize features using Liquid</li>
            <li>Mobile-first custom design</li>
          </ul>
        </div>

        {/* Section 7 */}
        <div className="shopify-container">
          <h3>Custom App Development</h3>
          <ul>
            <li>Shopify App Setup</li>
            <li>Feature Add-ons and Integrations</li>
            <li>3rd Party Plugin Setup</li>
          </ul>
        </div>

        {/* Section 8 */}
        <div className="shopify-container">
          <h3>API & Module Integration</h3>
          <ul>
            <li>Inventory and Order Management</li>
            <li>Email, Social Media, Affiliate Plugins</li>
            <li>Advanced API Integrations</li>
          </ul>
        </div>

        {/* Section 9 */}
        <div className="shopify-container">
          <h3>Shopify Mobile App Development</h3>
          <ul>
            <li>iOS and Android App Setup</li>
            <li>Store Integration & Tracking</li>
            <li>Customer Engagement Tools</li>
          </ul>
        </div>

        {/* Section 10 */}
        <div className="shopify-container">
          <h3>Shopify Maintenance & Support</h3>
          <ul>
            <li>90 Days of Free Support</li>
            <li>Database Integrity Maintenance</li>
            <li>Detailed Site Audits</li>
            <li>Issue Resolution Within 24 Hours</li>
          </ul>
        </div>
      </div>
      <Days />
    </>
  );
}
