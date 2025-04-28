"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./portfolio.css";
import portfolioImages from "@/data/Portfolio.json";
import SubHeader from "../sub-header/page";
import Days from "../about-us/days/page";

// export const metadata = {
//   title: "Portfolio – Weboum Technology",
//   description: "Explore Weboum Technology’s portfolio showcasing software, apps, graphics, and digital marketing projects.",
// };

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
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

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

  return (
   <>
   <SubHeader title="portfolio"/>
   <div className="portfolio-container">
      <div className="tabs">
        <div
          className={`tab ${activeTab === "all" ? "active" : ""}`}
          onClick={() => showTab("all")}
          data-category="all"
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

      <div className={`portfolio active`}>
        {portfolioImages[activeTab].map((image, index) => (
          <div className="item" key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              unoptimized
              onClick={() => openLightbox(image.src)}
            />
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="lightbox">
          <span className="close-lightbox" onClick={closeLightbox}>
            ×
          </span>
          <Image
            className="lightbox-img"
            src={currentImage}
            alt="Full Image"
            width={800}
            height={600}
            unoptimized
          />
        </div>
      )}
    </div>
    <Days/>
   </>
  );
}