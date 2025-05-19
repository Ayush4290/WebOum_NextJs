"use client";
import { useState } from "react";
import Days from "../about-us/days/page";
import SubHeader from "../sub-header/page";
import Image from "next/image";
import logosData from "../../data/all-logos.json"; // Importing the JSON file
import "./all_logos.css";

export default function LogosPage() {
  const [showMore, setShowMore] = useState(false);
  const [selectedLogoIndex, setSelectedLogoIndex] = useState(null);

  // Split logos into initial and additional for "Load More" functionality
  const initialLogos = logosData.logos.slice(0, 8);
  const additionalLogos = logosData.logos.slice(8);

  // Displayed logos based on showMore state
  const displayedLogos = showMore ? logosData.logos : initialLogos;

  const handleLearnMore = () => {
    setShowMore(true);
  };

  const openModal = (index) => {
    setSelectedLogoIndex(index);
  };

  const closeModal = () => {
    setSelectedLogoIndex(null);
  };

  const showPrevious = () => {
    setSelectedLogoIndex((prevIndex) =>
      prevIndex === 0 ? displayedLogos.length - 1 : prevIndex - 1
    );
  };

  const showNext = () => {
    setSelectedLogoIndex((prevIndex) =>
      prevIndex === displayedLogos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <SubHeader title="All Logos" />
      <div className="logos-page">
        <div className="logo-grid">
          {displayedLogos.map((logo, index) => (
            <div
              key={index}
              className="logo-item"
              onClick={() => openModal(index)}
            >
              <Image
                src={`/image/logo-image/${logo.file}`}
                alt={logo.name}
                width={300}
                height={250}
                className="logo-image"
              />
              <div className="logo-item-overlay">
                <span>{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
        {!showMore && additionalLogos.length > 0 && (
          <div className="learn-more-container">
            <button className="learn-more-btn" onClick={handleLearnMore}>
              Load More
            </button>
          </div>
        )}

        {/* Modal */}
        {selectedLogoIndex !== null && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
              <Image
                src={`/image/logo-image/${displayedLogos[selectedLogoIndex].file}`}
                alt={displayedLogos[selectedLogoIndex].name}
                width={800}
                height={600}
                className="modal-main-image"
              />
              <button
                className="modal-nav-button prev"
                onClick={showPrevious}
                disabled={displayedLogos.length <= 1}
              >
                ❮
              </button>
              <button
                className="modal-nav-button next"
                onClick={showNext}
                disabled={displayedLogos.length <= 1}
              >
                ❯
              </button>
            </div>
          </div>
        )}
      </div>
      <Days />
    </>
  );
}