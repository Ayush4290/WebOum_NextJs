"use client";

import React, { useEffect, useRef, useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const heroSectionRef = useRef(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [textFade, setTextFade] = useState(false);

  const textOptions = [
    "Smart CRM, ERP & AI-powered automation for enterprises.",
    "Unlock unlimited growth with premium custom development",
    "Transform your business with intelligent solutions",
    "Streamline operations with next-gen technology",
  ];

  // Text rotation functionality
  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextFade(true);

      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
        setTextFade(false);
      }, 500);
    }, 2000);

    return () => clearInterval(textInterval);
  }, []);

  // Network animation
  useEffect(() => {
    const heroSection = heroSectionRef.current;
    if (!heroSection) return;

    const numNodes = 20;
    const nodes = [];

    // Create nodes
    for (let i = 0; i < numNodes; i++) {
      const node = document.createElement("div");
      node.className = "node";

      // Random position
      const left = Math.random() * 100;
      const top = Math.random() * 100;

      node.style.left = `${left}%`;
      node.style.top = `${top}%`;

      // Add animation with random duration and delay
      const duration = 5 + Math.random() * 15;
      const delay = Math.random() * 5;
      node.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

      heroSection.appendChild(node);
      nodes.push({
        element: node,
        x: left,
        y: top,
      });
    }

    // Create connections between nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        // Only connect some nodes (not all to avoid too many lines)
        if (Math.random() > 0.7) continue;

        const dx = nodes[j].x - nodes[i].x;
        const dy = nodes[j].y - nodes[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Only connect if within a certain distance
        if (distance < 30) {
          const line = document.createElement("div");
          line.className = "line";

          // Position and rotate line to connect nodes
          line.style.left = `${nodes[i].x}%`;
          line.style.top = `${nodes[i].y}%`;
          line.style.width = `${distance}%`;
          line.style.transform = `rotate(${Math.atan2(dy, dx)}rad)`;

          heroSection.appendChild(line);
        }
      }
    }

    // Cleanup function
    return () => {
      const nodes = heroSection.querySelectorAll(".node, .line");
      nodes.forEach((node) => node.remove());
    };
  }, []);

  return (
    <div className="hero-section" ref={heroSectionRef}>
      <h1 className={textFade ? "fade" : ""}>{textOptions[currentTextIndex]}</h1>
      <a href="/" className="cta-buttons">
        Start Building Today!
      </a>
    </div>
  );
};

export default HeroSection;