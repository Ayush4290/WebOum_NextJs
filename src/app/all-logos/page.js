"use client";
import { useState } from "react";
import Days from "../about-us/days/page";
import SubHeader from "../sub-header/page";
import Image from "next/image";
import "./all_logos.css";

const initialLogos = [
  "logo1-1.jpg",
  "logo-2.jpg",
  "logo-3.jpg",
  "logo-4.jpg",
  "logo-5.jpg",
  "logo-6.jpg",
  "logo-7.jpg",
  "logo-8.jpg",
];

const additionalLogos = [
  "logo-9.jpg",
  "logo-10.jpg",
  "logo-11.jpg",
  "logo-12.jpg",
  "logo-13.jpg",
  "logo-14.jpg",
];

export default function LogosPage() {
  const [showMore, setShowMore] = useState(false);

  const handleLearnMore = () => {
    setShowMore(true);
  };

  const displayedLogos = showMore ? [...initialLogos, ...additionalLogos] : initialLogos;

  return (
    <div className="logos-page">
      <SubHeader title="All Logos" />
      <div className="logo-grid">
        {displayedLogos.map((file, index) => (
          <div key={index} className="logo-item">
            <Image
              src={`/image/logo-image/${file}`}
              alt={`Logo ${index + 1}`}
              width={300}
              height={250}
              className="logo-image"
            />
          </div>
        ))}
      </div>
      {!showMore && (
        <div className="learn-more-container">
          <button className="learn-more-btn" onClick={handleLearnMore}>
            Learn More
          </button>
        </div>
      )}
      <Days />
    </div>
  );
}