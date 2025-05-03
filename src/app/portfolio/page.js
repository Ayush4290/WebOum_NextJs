"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./portfolio.css";
import portfolioImages from "@/data/Portfolio.json";
import SubHeader from "../sub-header/page";
import Days from "../about-us/days/page";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const showTab = (tabId) => {
    setActiveTab(tabId);
  };

  const openLightbox = (src) => {
    setCurrentImage(src);
    setLightboxOpen(true);
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    // Re-enable scrolling
    document.body.style.overflow = "auto";
  };

  // Close lightbox with escape key
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape" && lightboxOpen) {
        closeLightbox();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [lightboxOpen]);

  // Close lightbox when clicking outside the image
  const handleLightboxClick = (e) => {
    if (e.target.classList.contains("lightbox")) {
      closeLightbox();
    }
  };

  return (
    <>
      <SubHeader title="Portfolio" />
      <div className="portfolio-container">
        <div className="tabs">
          <div
            className={`tab ${activeTab === "all" ? "active" : ""}`}
            onClick={() => showTab("all")}
          >
            All
          </div>
          <div
            className={`tab ${activeTab === "software" ? "active" : ""}`}
            onClick={() => showTab("software")}
          >
            Software
          </div>
          <div
            className={`tab ${activeTab === "apps" ? "active" : ""}`}
            onClick={() => showTab("apps")}
          >
            Apps
          </div>
          <div
            className={`tab ${activeTab === "graphics" ? "active" : ""}`}
            onClick={() => showTab("graphics")}
          >
            Graphics
          </div>
          <div
            className={`tab ${activeTab === "marketing" ? "active" : ""}`}
            onClick={() => showTab("marketing")}
          >
            Digital Marketing
          </div>
        </div>

        <div className="portfolio">
          {portfolioImages[activeTab] &&
            portfolioImages[activeTab].map((image, index) => (
              <div className="item" key={index}>
                <Image
                  src={image.src}
                  alt={image.alt || "Portfolio item"}
                  width={300}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                  onClick={() => openLightbox(image.src)}
                  priority={index < 6}
                />
              </div>
            ))}
        </div>

        {lightboxOpen && (
          <div className="lightbox" onClick={handleLightboxClick}>
            <span className="close-lightbox" onClick={closeLightbox}>
              ×
            </span>
            <Image
              className="lightbox-img"
              src={currentImage}
              alt="Full size image"
              width={1200}
              height={800}
              objectFit="contain"
              unoptimized
            />
          </div>
        )}
      </div>
      <Days />
    </>
  );
}
