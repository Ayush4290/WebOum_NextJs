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
          "Project Scope: Do you want us to identify and suggest more advanced functionality options?",
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
  {
    title: "Contact Information",
    fields: [
      { label: "Name*", name: "name", type: "text", required: true },
      { label: "Email*", name: "email", type: "email", required: true },
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setFormError(""); // Clear any previous error messages
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setFormError("");
    }
  };

  const validateCurrentStep = () => {
    const currentStepData = steps[currentStep];

    // For steps with radio button options
    if (currentStepData.sections) {
      // Check if at least one option is selected for each section
      for (const section of currentStepData.sections) {
        const sectionName = section.subtitle.toLowerCase().replace(/\s+/g, "_");
        if (!formData[sectionName]) {
          setFormError(`Please select an option for "${section.subtitle}"`);
          return false;
        }
      }
    }

    return true;
  };

  const validateFinalForm = () => {
    // For the final step with required fields
    if (currentStep === steps.length - 1) {
      const requiredFields = steps[currentStep].fields.filter(
        (field) => field.required
      );

      for (const field of requiredFields) {
        if (!formData[field.name] || formData[field.name].trim() === "") {
          setFormError(`${field.label.replace("*", "")} is required.`);
          return false;
        }
      }

      // Validate email format
      if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
        setFormError("Please enter a valid email address.");
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    // Reset form status
    setFormError("");
    setFormSuccess("");

    if (!validateFinalForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Helper function to get label from value
      const getOptionLabel = (sectionSubtitle, value) => {
        for (const step of steps) {
          if (step.sections) {
            for (const section of step.sections) {
              if (
                section.subtitle.toLowerCase().replace(/\s+/g, "_") ===
                sectionSubtitle
              ) {
                const option = section.options.find(
                  (opt) => opt.value === value
                );
                return option ? option.label : value;
              }
            }
          }
        }
        return value;
      };

      // Create HTML email template
      const message = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Quote Request</title>
        </head>
        <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 20px;">
            <div style="background-color: #007bff; color: #ffffff; padding: 15px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; font-size: 24px;">New Quote Request</h1>
            </div>
            <div style="padding: 20px;">
              <h2 style="font-size: 20px; color: #333333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">Contact Information</h2>
              <p style="margin: 10px 0; color: #555555;"><strong>Name:</strong> ${
                formData.name || "Not provided"
              }</p>
              <p style="margin: 10px 0; color: #555555;"><strong>Email:</strong> ${
                formData.email || "Not provided"
              }</p>
              <p style="margin: 10px 0; color: #555555;"><strong>Phone:</strong> ${
                formData.phone || "Not provided"
              }</p>
              <p style="margin: 10px 0; color: #555555;"><strong>Company:</strong> ${
                formData.company || "Not provided"
              }</ GYp>
              <p style="margin: 10px 0; color: #555555;"><strong>Website:</strong> ${
                formData.website || "Not provided"
              }</p>

              <h2 style="font-size: 20px; color: #333333; border-bottom: 2px solid #007bff; padding-bottom: 10px; margin-top: 20px;">Project Details</h2>
              <p style="margin: 10px 0; color: #555555;"><strong>Stage:</strong> ${
                getOptionLabel("stage", formData.stage) || "Not selected"
              }</p>
              <p style="margin: 10px 0; color: #555555;"><strong>Services Needed:</strong> ${
                getOptionLabel("services_needed", formData.services_needed) ||
                "Not selected"
              }</p>
              <p style="margin: 10px 0; color: #555555;"><strong>Development Stages Needed:</strong> ${
                getOptionLabel(
                  "development_stages_needed",
                  formData.development_stages_needed
                ) || "Not selected"
              }</p>
              <p style="margin: 10px 0; color: #555555;"><strong>Project Scope:</strong> ${
                getOptionLabel(
                  "project_scope:_do_you_want_us_to_identify_and_suggest_more_advanced_functionality_options?",
                  formData[
                    "project_scope:_do_you_want_us_to_identify_and_suggest_more_advanced_functionality_options?"
                  ]
                ) || "Not selected"
              }</p>
              <p style="margin: 10px 0; color: #555555;"><strong>Expected Budget:</strong> ${
                getOptionLabel("expected_budget", formData.expected_budget) ||
                "Not selected"
              }</p>
              <p style="margin: 10px 0; color: #555555;"><strong>Timeframe:</strong> ${
                getOptionLabel("timeframe", formData.timeframe) ||
                "Not selected"
              }</p>
              <p style="margin: 10px 0; color: #555555;"><strong>Start:</strong> ${
                getOptionLabel("start", formData.start) || "Not selected"
              }</p>

              <h2 style="font-size: 20px; color: #333333; border-bottom: 2px solid #007bff; padding-bottom: 10px; margin-top: 20px;">Additional Message</h2>
              <p style="margin: 10px 0; color: #555555;">${
                formData.message || "No message provided"
              }</p>
            </div>
            <div style="background-color: #f8f9fa; padding: 15px; text-align: center; border-radius: 0 0 8px 8px;">
              <p style="margin: 0; color: #777777; font-size: 14px;">Sent from Weboum Quote Request Form</p>
            </div>
          </div>
        </body>
        </html>
      `.trim();

      // Create FormData object for API request
      const apiFormData = new FormData();
      apiFormData.append("wxmail", "true");
      apiFormData.append("email", formData.email || "");
      apiFormData.append(
        "subject",
        `Quote Request from ${formData.name || "Website Visitor"}`
      );
      apiFormData.append("message", message);

      // Make the API request
      const response = await fetch("https://stage.weboum.com/email-api/", {
        method: "POST",
        body: apiFormData,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setFormSuccess(
          "Your quote request has been submitted successfully. We'll get back to you soon!"
        );
        // Reset form after successful submission
        setFormData({});
        setSelectedOptions({});
        setCurrentStep(0);
      } else {
        setFormError(
          result.message || "Failed to submit your request. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormError("Failed to submit your request. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOptionChange = (sectionName, value) => {
    setFormData({
      ...formData,
      [sectionName]: value,
    });

    setSelectedOptions({
      ...selectedOptions,
      [sectionName]: value,
    });

    // Clear errors when user makes a selection
    if (formError) {
      setFormError("");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear errors when user starts typing
    if (formError) {
      setFormError("");
    }
  };

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="requestaQuote-wrapper">
      <div className="requestaQuote-progress-bar">
        <div
          className="requestaQuote-progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="requestaQuote-container">
        <div className="requestaQuote-left">
          <h4 className="requestaQuote-subtitle">Weboum – Send Us A Message</h4>
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
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="requestaQuote-social-icon"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="requestaQuote-social-icon"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="requestaQuote-right">
          <div className="requestaQuote-section">
            <h3 className="requestaQuote-heading">{currentStepData.title}</h3>
            {formError && (
              <div className="requestaQuote-error" role="alert">
                {formError}
              </div>
            )}
            {formSuccess && (
              <div className="requestaQuote-success" role="alert">
                {formSuccess}
              </div>
            )}

            {currentStepData.sections ? (
              currentStepData.sections.map((section, secIndex) => (
                <div key={secIndex} className="requestaQuote-section">
                  <h5 className="requestaQuote-heading">{section.subtitle}</h5>
                  <div className="requestaQuote-options">
                    {section.options.map((option, optIndex) => {
                      const sectionId = section.subtitle
                        .toLowerCase()
                        .replace(/\s+/g, "_");
                      return (
                        <label
                          className="requestaQuote-option"
                          key={optIndex}
                          htmlFor={`${sectionId}_${option.value}`}
                        >
                          <input
                            type="radio"
                            id={`${sectionId}_${option.value}`}
                            name={sectionId}
                            value={option.value}
                            onChange={() =>
                              handleOptionChange(sectionId, option.value)
                            }
                            checked={formData[sectionId] === option.value}
                          />
                          {option.label}
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))
            ) : currentStepData.fields ? (
              <form className="requestaQuote-form" onSubmit={handleSubmit}>
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
                        required={field.required}
                        rows={5}
                      ></textarea>
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        placeholder={field.label}
                        onChange={handleInputChange}
                        value={formData[field.name] || ""}
                        required={field.required}
                      />
                    )}
                  </div>
                ))}
                <div className="requestaQuote-button-container">
                  <button
                    type="submit"
                    className="requestaQuote-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
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
                disabled={isSubmitting}
                type="button"
              >
                BACK
              </button>
            )}
            {currentStep < steps.length - 1 ? (
              <button
                className="requestaQuote-button"
                onClick={handleNext}
                disabled={isSubmitting}
                type="button"
              >
                CONTINUE
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
