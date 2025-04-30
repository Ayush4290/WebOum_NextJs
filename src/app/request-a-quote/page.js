"use client";

import { useState } from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import "./request_a_quote.css";


const steps = [
  {
    title: "",
    sections: [
      {
        subtitle: "Stage",
        options: [
          { label: "New System to be built from scratch", value: "new_system" },
          {
            label: "System Improvement to continue development",
            value: "improvement",
          },
        ],
      },
      {
        subtitle: "Services needed",
        options: [
          { label: "Web development", value: "web_dev" },
          { label: "Mobile development", value: "mobile_dev" },
          { label: "Minimum Viable Product", value: "mvp" },
          { label: "Secure Hosting & Maintenance", value: "hosting" },
          { label: "Dedicated development team", value: "dedicated_team" },
          { label: "Ongoing System Innovations", value: "ongoing_innovations" },
          { label: "Internet of Things", value: "iot" },
        ],
      },
      {
        subtitle: "Development stages needed",
        options: [
          { label: "UX/UI Design", value: "ux_ui" },
          { label: "Development", value: "development" },
          { label: "Software deployment", value: "deployment" },
          { label: "Maintenance and support", value: "maintenance" },
        ],
      },
    ],
  },
  // Second page: Project Scope and Budget
  {
    title: "",
    sections: [
      {
        subtitle:
          "Project Scope Do you want us to identify and suggest more advanced functionality options?",
        options: [
          {
            label: "Yes, I welcome further functionality options",
            value: "yes_scope",
          },
          {
            label: "No, I know exactly what functionality I want",
            value: "no_scope",
          },
          { label: "I am not sure", value: "not_sure_scope" },
        ],
      },
      {
        subtitle: "Expected budget",
        options: [
          { label: "Less than $1000", value: "less_1000" },
          { label: "$1000 - $5,000", value: "1000_5000" },
          { label: "More than $5,000", value: "more_5000" },
          { label: "I am not sure", value: "not_sure_budget" },
        ],
      },
    ],
  },
  // Third page: Timeframe and Start
  {
    title: "",
    sections: [
      {
        subtitle: "Timeframe",
        options: [
          { label: "Less than 1 month", value: "less_1month" },
          { label: "1 to 3 months", value: "1_3months" },
          { label: "3 to 6 months", value: "3_6months" },
          { label: "More than 6 months", value: "more_6months" },
          { label: "I am not sure", value: "not_sure_time" },
        ],
      },
      {
        subtitle: "Start",
        options: [
          { label: "In a couple of days", value: "couple_days" },
          { label: "In a week", value: "week" },
          { label: "In a couple of weeks", value: "couple_weeks" },
          { label: "In a month", value: "month" },
          { label: "More than a month", value: "more_month" },
          { label: "I am not sure", value: "not_sure_start" },
        ],
      },
    ],
  },
  // Contact page remains as the final step
  {
    title: "",
    fields: [
      { label: "Name*", name: "name", type: "text" },
      { label: "Email*", name: "email", type: "email" },
      { label: "Phone", name: "phone", type: "tel" },
      { label: "Company", name: "company", type: "text" },
      { label: "Website URL", name: "website", type: "url" },
      { label: "Your Message", name: "message", type: "textarea" },
    ],
  },
];

export default function RequestaQuote() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    alert("Form submitted");
    console.log(formData);
  };

  const handleOptionChange = (sectionName, value) => {
    setFormData({
      ...formData,
      [sectionName]: value,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const currentStepData = steps[currentStep];

  return (
    <>
      <div className="requestaQuote-wrapper">
        <div className="requestaQuote-container">
          <div className="requestaQuote-left">
            <h4 className="requestaQuote-subtitle">
              Weboum – Send Us A Message
            </h4>
            <div className="requestaQuote-line"></div>
            <h2 className="requestaQuote-title">
              Do You Have Any Questions? We'll Be Happy To Assist!
            </h2>
            <div className="requestaQuote-social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="requestaQuote-social-icon"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="requestaQuote-social-icon"
              >
                <FaTwitter />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="requestaQuote-social-icon"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="requestaQuote-right">
            <div className="requestaQuote-section">
              <h4 className="requestaQuote-heading">{currentStepData.title}</h4>
              {currentStepData.sections ? (
                currentStepData.sections.map((section, secIndex) => (
                  <div key={secIndex} className="requestaQuote-section">
                    <h5 className="requestaQuote-heading">
                      {section.subtitle}
                    </h5>
                    <div className="requestaQuote-options">
                      {section.options.map((option, optIndex) => (
                        <label
                          className="requestaQuote-option"
                          key={optIndex}
                          htmlFor={`${section.subtitle
                            .toLowerCase()
                            .replace(/\s+/g, "_")}_${option.value}`}
                        >
                          <input
                            type="radio"
                            id={`${section.subtitle
                              .toLowerCase()
                              .replace(/\s+/g, "_")}_${option.value}`}
                            name={section.subtitle
                              .toLowerCase()
                              .replace(/\s+/g, "_")}
                            value={option.value}
                            onChange={() =>
                              handleOptionChange(
                                section.subtitle
                                  .toLowerCase()
                                  .replace(/\s+/g, "_"),
                                option.value
                              )
                            }
                            checked={
                              formData[
                                section.subtitle
                                  .toLowerCase()
                                  .replace(/\s+/g, "_")
                              ] === option.value
                            }
                          />
                          {option.label}
                        </label>
                      ))}
                    </div>
                  </div>
                ))
              ) : currentStepData.fields ? (
                <form
                  className="requestaQuote-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  {currentStepData.fields.map((field, fieldIndex) => (
                    <div className="requestaQuote-field" key={fieldIndex}>
                      <label htmlFor={field.name}>{field.label}</label>
                      {field.type === "textarea" ? (
                        <textarea
                          id={field.name}
                          name={field.name}
                          placeholder={field.label}
                          onChange={handleInputChange}
                          value={formData[field.name] || ""}
                        ></textarea>
                      ) : (
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          placeholder={field.label}
                          onChange={handleInputChange}
                          value={formData[field.name] || ""}
                        />
                      )}
                    </div>
                  ))}
                  <div className="requestaQuote-button-container">
                    <button
                      type="button"
                      className="requestaQuote-button"
                      onClick={handleSubmit}
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>
              ) : null}
            </div>
            <div className="requestaQuote-button-container">
              {currentStep > 0 && (
                <button
                  className="requestaQuote-button back"
                  onClick={handleBack}
                >
                  BACK
                </button>
              )}
              {currentStep < steps.length - 1 ? (
                <button className="requestaQuote-button" onClick={handleNext}>
                  CONTINUE
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}