"use client";
import { useState } from "react";
import Days from "../about-us/days/page";
import SubHeader from "../sub-header/page";
import Image from "next/image";
import "./all_logos.css";

const initialLogos = [
  { file: "logo1-1.jpg", name: "Law Offices of Suan G. Mintz Family Law" },
  { file: "logo-2.jpg", name: "Polska-Seas" },
  { file: "logo-3.jpg", name: "Garden-Care" },
  { file: "logo-4.jpg", name: "Kapestry" },
  { file: "logo-5.jpg", name: "North-Cab-Zone" },
  { file: "logo-6.jpg", name: "JLU-events" },
  { file: "logo-7.jpg", name: "Ball-Business-Network" },
  { file: "logo-8.jpg", name: "Miracle Services Group" },
];

const additionalLogos = [
  { file: "logo-9.jpg", name: "Taking To The Max" },
  { file: "logo-10.jpg", name: "Aimee B. Davis Law PC" },
  { file: "logo-11.jpg", name: "W.I.N Virtual Bridal Expo" },
  { file: "logo-12.jpg", name: "Nursing New York LLC" },
  { file: "logo-13.jpg", name: "Key Tech NY" },
  { file: "logo-14.jpg", name: "Websight Creative" },
];

export default function LogosPage() {
  const [showMore, setShowMore] = useState(false);
  const [selectedLogoIndex, setSelectedLogoIndex] = useState(null);

  const displayedLogos = showMore ? [...initialLogos, ...additionalLogos] : initialLogos;

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
      {!showMore && (
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