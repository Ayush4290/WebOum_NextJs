"use client";

import { useState, useRef } from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import "./request_a_quote.css";
import Days from "../about-us/days/page";
import SubHeader from "../sub-header/page";
import { sendContactForm } from "@/utils/api";

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
  const formRef = useRef(null);

  // State for multi-selected options
  const [selectedOptions, setSelectedOptions] = useState({
    stage: [],
    services_needed: [],
    development_stages_needed: [],
    project_scope: [],
    expected_budget: [],
    timeframe: [],
    start: [],
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setFormError("");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setFormError("");
    }
  };

  const validateFinalForm = () => {
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

      if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
        setFormError("Please enter a valid email address.");
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormError("");
    setFormSuccess("");

    if (!validateFinalForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Sanitize inputs to prevent XSS and ensure proper encoding
      const sanitizeInput = (input) => {
        const div = document.createElement("div");
        div.textContent = input || "";
        return div.innerHTML
          .replace(/&/g, "&")
          .replace(/</g, "<")
          .replace(/>/g, ">")
          .replace(/"/g, "");
      };

      const sanitizedFormData = {};
      Object.keys(formData).forEach((key) => {
        sanitizedFormData[key] = sanitizeInput(formData[key]);
      });

      const getOptionLabels = (sectionName, values) => {
        for (const step of steps) {
          if (step.sections) {
            for (const section of step.sections) {
              const normalizedSectionName = section.subtitle
                .toLowerCase()
                .replace(/[\s:]+/g, "_")
                .replace(/[^a-z0-9_]/g, "");
              if (normalizedSectionName === sectionName) {
                return values
                  .map((value) => {
                    const option = section.options.find(
                      (opt) => opt.value === value
                    );
                    return option ? option.label : value;
                  })
                  .join(", ");
              }
            }
          }
        }
        return values.join(", ");
      };

      // Create a simplified and robust HTML email template
      const message = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quote Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #e0e0e0;">
    <tr>
      <td style="background-color: #4a90e2; padding: 15px; text-align: center;">
        <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Quote Request</h2>
      </td>
    </tr>
    <tr>
      <td style="padding: 20px;">
        <p style="color: #333333; font-size: 16px; margin: 0 0 15px;">
          A new quote request has been submitted to Weboum Technology.
        </p>
        <table width="100%" cellpadding="5" cellspacing="0" style="border-top: 1px solid #e0e0e0; padding-top: 15px;">
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Name:</strong></td>
            <td style="color: #333333; font-size: 14px;">${sanitizedFormData.name || "Not provided"}</td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Email:</strong></td>
            <td style="color: #333333; font-size: 14px;">
              <a href="mailto:${sanitizedFormData.email || "Not provided"}" style="color: #4a90e2; text-decoration: none;">${sanitizedFormData.email || "Not provided"}</a>
            </td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Phone:</strong></td>
            <td style="color: #333333; font-size: 14px;">${sanitizedFormData.phone || "Not provided"}</td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Company:</strong></td>
            <td style="color: #333333; font-size: 14px;">${sanitizedFormData.company || "Not provided"}</td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Website:</strong></td>
            <td style="color: #333333; font-size: 14px;">${sanitizedFormData.website || "Not provided"}</td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Stage:</strong></td>
            <td style="color: #333333; font-size: 14px;">${selectedOptions.stage.length > 0 ? getOptionLabels("stage", selectedOptions.stage) : "Not selected"}</td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Services Needed:</strong></td>
            <td style="color: #333333; font-size: 14px;">${selectedOptions.services_needed.length > 0 ? getOptionLabels("services_needed", selectedOptions.services_needed) : "Not selected"}</td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Development Stages Needed:</strong></td>
            <td style="color: #333333; font-size: 14px;">${selectedOptions.development_stages_needed.length > 0 ? getOptionLabels("development_stages_needed", selectedOptions.development_stages_needed) : "Not selected"}</td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Project Scope:</strong></td>
            <td style="color: #333333; font-size: 14px;">${selectedOptions.project_scope.length > 0 ? getOptionLabels("project_scope", selectedOptions.project_scope) : "Not selected"}</td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Expected Budget:</strong></td>
            <td style="color: #333333; font-size: 14px;">${selectedOptions.expected_budget.length > 0 ? getOptionLabels("expected_budget", selectedOptions.expected_budget) : "Not selected"}</td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Timeframe:</strong></td>
            <td style="color: #333333; font-size: 14px;">${selectedOptions.timeframe.length > 0 ? getOptionLabels("timeframe", selectedOptions.timeframe) : "Not selected"}</td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Start:</strong></td>
            <td style="color: #333333; font-size: 14px;">${selectedOptions.start.length > 0 ? getOptionLabels("start", selectedOptions.start) : "Not selected"}</td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Message:</strong></td>
            <td style="color: #333333; font-size: 14px;">${sanitizedFormData.message || "No message provided"}</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="background-color: #f5f5f5; padding: 10px; text-align: center; font-size: 12px; color: #666666;">
        <p style="margin: 0;">© ${new Date().getFullYear()} Weboum Technology. All rights reserved.</p>
      </td>
    </tr>
  </table>
</body>
</html>
      `.trim();

      // Log payload for debugging
      console.log("Submitting form with:", {
        email: sanitizedFormData.email,
        subject: `Quote Request from ${sanitizedFormData.name || "Website Visitor"}`,
        message: message.substring(0, 100) + "...",
      });

      // Send the form data to the API
      const result = await sendContactForm({
        email: sanitizedFormData.email || "",
        subject: `Quote Request from ${sanitizedFormData.name || "Website Visitor"}`,
        message,
      });

      if (result.success) {
        setFormSuccess(
          "Your quote request has been submitted successfully. We'll get back to you soon!"
        );
        setFormData({});
        setSelectedOptions({
          stage: [],
          services_needed: [],
          development_stages_needed: [],
          project_scope: [],
          expected_budget: [],
          timeframe: [],
          start: [],
        });
        setCurrentStep(0);
        formRef.current?.reset();
        document
          .querySelectorAll(".tag")
          .forEach((tag) => tag.classList.remove("selected"));
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

  const handleTagSelection = (sectionName, value) => {
    setSelectedOptions((prev) => {
      const currentSelections = prev[sectionName] || [];
      return {
        ...prev,
        [sectionName]: currentSelections.includes(value)
          ? currentSelections.filter((item) => item !== value)
          : [...currentSelections, value],
      };
    });

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

    if (formError) {
    setFormError("");
    }
  };

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <>
      <SubHeader title="Request A Quote" />
      <div className="requestaQuote-wrapper">
        <div className="requestaQuote-progress-bar">
          <div
            className="requestaQuote-progress"
            style={{ width: `${progress}%` }}
            aria-label={`Progress: ${progress}%`}
          ></div>
        </div>
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
                href="https://www.facebook.com/people/Weboum-Technology-PvtLtd/100091375563554/"
                target="_blank"
                rel="noopener noreferrer"
                className="requestaQuote-social-icon"
                aria-label="Visit our Facebook page"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/weboumtech33587"
                target="_blank"
                rel="noopener noreferrer"
                className="requestaQuote-social-icon"
                aria-label="Visit our Twitter page"
              >
                <BsTwitterX />
              </a>
              <a
                href="https://www.youtube.com/@WeboumTechnologyPvt.Ltd."
                target="_blank"
                rel="noopener noreferrer"
                className="requestaQuote-social-icon"
                aria-label="Visit our YouTube channel"
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
                currentStepData.sections.map((section, secIndex) => {
                  const sectionId = section.subtitle
                    .toLowerCase()
                    .replace(/[\s:]+/g, "_")
                    .replace(/[^a-z0-9_]/g, "");
                  return (
                    <div key={secIndex} className="requestaQuote-section">
                      <h5 className="requestaQuote-heading">
                        {section.subtitle}
                      </h5>
                      <div className="requestaQuote-options">
                        {section.options.map((option, optIndex) => (
                          <div
                            key={optIndex}
                            className={`tag ${
                              selectedOptions[sectionId]?.includes(option.value)
                                ? "selected"
                                : ""
                            }`}
                            onClick={() =>
                              handleTagSelection(sectionId, option.value)
                            }
                          >
                            {option.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })
              ) : currentStepData.fields ? (
                <form
                  className="requestaQuote-form"
                  onSubmit={handleSubmit}
                  ref={formRef}
                  noValidate
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
      <Days />
    </>
  );
}