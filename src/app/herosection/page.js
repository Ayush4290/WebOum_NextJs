"use client";
import React, { useEffect, useRef, useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const particlesRef = useRef(null);
  const headingRef = useRef(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const textOptions = [
    "AI automation & innovation—engineered for rapid success",
    "Serious about growth? Let's craft your million-dollar strategy",
    "Unlock unlimited growth with premium custom development",
    "Transform your brand into a market leader with elite tech.",
    "Dominate your industry with enterprise-grade AI solutions.",
    "We build success stories—will yours be next?",
    "Scale your business with next-gen automation and SaaS.",
    "Smart CRM, ERP & AI-powered automation for enterprises.",
    "Your next breakthrough starts with the right technology partner.",
  ];

  useEffect(() => {
    // Load particles.js script dynamically
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;

    script.onload = () => {
      if (window.particlesJS && particlesRef.current) {
        window.particlesJS(particlesRef.current.id, {
          particles: {
            number: { value: 80 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              out_mode: "out",
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 60,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
            },
          },
          retina_detect: true,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    function changeTitle() {
      heading.style.opacity = 0;

      setTimeout(() => {
        setCurrentTextIndex(
          (prevIndex) => (prevIndex + 1) % textOptions.length
        );
        heading.style.opacity = 1;
      }, 800);
    }

    heading.style.opacity = 1;
    const interval = setInterval(changeTitle, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-mains">
      <section className="banner">
        <div className="content">
          <h1 ref={headingRef}>{textOptions[currentTextIndex]}</h1>
          <a href="/request-a-quote/">Start Building Today!</a>
        </div>
        <div
          id="particles-js"
          ref={particlesRef}
          className="particle-area"
        ></div>
      </section>
    </div>
  );
};

export default HeroSection;
