"use client";

import React from "react";
import "./sub-header.css";
const SubHeader = ({ title = "AAAA" }) => {
  return (
    <div className="header-container">
      <h1 className="header-title">{title}</h1>
      <div className="header-dots"></div>
    </div>
  );
};

export default SubHeader;
