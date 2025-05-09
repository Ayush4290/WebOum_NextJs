"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./portfolio.css";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [displayedItems, setDisplayedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [showLightbox, setShowLightbox] = useState(false);
  const [visibleItems, setVisibleItems] = useState(4);
  const [portfolioData, setPortfolioData] = useState(null);

  // Categories for tabs
  const categories = [
    { key: "all", label: "All" },
    { key: "software", label: "Software" },
    { key: "apps", label: "Mobile Apps" },
    { key: "graphics", label: "Graphics" },
    { key: "marketing", label: "Marketing" },
  ];

  // Load portfolio data
  useEffect(() => {
    // Normally you would import the data directly or fetch it
    // This assumes your JSON file is imported elsewhere
    import("../../data/portfolio.json")
      .then((data) => {
        setPortfolioData(data.default);
        setDisplayedItems(data.default.all);
      })
      .catch((error) => console.error("Error loading portfolio data:", error));
  }, []);

  // Update displayed items when tab changes
  useEffect(() => {
    if (portfolioData && portfolioData[activeTab]) {
      setDisplayedItems(portfolioData[activeTab]);
      setVisibleItems(4); // Reset visible items when changing tabs
    }
  }, [activeTab, portfolioData]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleItemClick = (item, index) => {
    setSelectedItem(item);
    setSelectedItemIndex(index);
    setShowLightbox(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setShowLightbox(false);
    setSelectedItem(null);
    setSelectedItemIndex(null);
    document.body.style.overflow = "auto"; // Enable scrolling again
  };

  const loadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 4, displayedItems.length));
  };

  // Navigate to previous image
  const prevImage = () => {
    if (selectedItemIndex > 0) {
      const newIndex = selectedItemIndex - 1;
      setSelectedItemIndex(newIndex);
      setSelectedItem(displayedItems[newIndex]);
    }
  };

  // Navigate to next image
  const nextImage = () => {
    if (selectedItemIndex < displayedItems.length - 1) {
      const newIndex = selectedItemIndex + 1;
      setSelectedItemIndex(newIndex);
      setSelectedItem(displayedItems[newIndex]);
    }
  };

  // Close lightbox when clicking outside content
  const handleLightboxClick = (e) => {
    if (e.target.classList.contains("lightbox")) {
      closeLightbox();
    }
  };

  // Handle wheel event for scrolling through images
  const handleWheel = (e) => {
    if (showLightbox) {
      e.preventDefault();
      if (e.deltaY > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showLightbox) {
        if (e.key === "Escape") {
          closeLightbox();
        } else if (e.key === "ArrowRight") {
          nextImage();
        } else if (e.key === "ArrowLeft") {
          prevImage();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled on unmount
    };
  }, [showLightbox, selectedItemIndex, displayedItems]);

  // Add wheel event listener when lightbox is open
  useEffect(() => {
    const lightboxElement = document.querySelector(".lightbox");
    if (lightboxElement && showLightbox) {
      lightboxElement.addEventListener("wheel", handleWheel, { passive: false });
      return () => {
        lightboxElement.removeEventListener("wheel", handleWheel);
      };
    }
  }, [showLightbox, selectedItemIndex]);

  if (!portfolioData) {
    return <div className="portfolio-container">Loading...</div>;
  }

  return (
    <div className="portfolio-container">
      <div className="tabs">
        {categories.map((category) => (
          <div
            key={category.key}
            className={`tab ${activeTab === category.key ? "active" : ""}`}
            onClick={() => handleTabClick(category.key)}
          >
            {category.label}
          </div>
        ))}
      </div>

      <div className="portfolio-grid">
        {displayedItems.slice(0, visibleItems).map((item, index) => (
          <div className="portfolio-item" key={index}>
            <div className="item-image" onClick={() => handleItemClick(item, index)}>
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={400}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
                quality={90}
              />
            </div>
            <div className="item-info">
              <h3 className="item-title">{item.title}</h3>
              <div className="item-description">
                <p>{item.description[0]}</p>
                <p>{item.description[1]}</p>
                <p>{item.description[2]}</p>
                <p>{item.description[3]}</p>
                <p>{item.description[4]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleItems < displayedItems.length && (
        <div className="learn-more-container">
          <button className="learn-more-btn" onClick={loadMore}>
            View More Portfolio
          </button>
        </div>
      )}

      {showLightbox && selectedItem && (
        <div className="lightbox" onClick={handleLightboxClick}>
          <div className="close-lightbox" onClick={closeLightbox}>
            ✕
          </div>
          <div className="navigation-controls">
            <button 
              className="nav-button prev-button" 
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              disabled={selectedItemIndex === 0}
            >
              &#10094;
            </button>
            <button 
              className="nav-button next-button" 
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              disabled={selectedItemIndex === displayedItems.length - 1}
            >
              &#10095;
            </button>
          </div>
          <div className="lightbox-content">
            <Image
              src={selectedItem.src}
              alt={selectedItem.alt}
              width={800}
              height={600}
              className="lightbox-img"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <div className="image-counter">
              {selectedItemIndex + 1} / {displayedItems.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;