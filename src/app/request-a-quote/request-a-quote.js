"use client";

import { useState, useRef, useEffect } from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import "./request_a_quote.css";
import Days from "../about-us/days/page";
import SubHeader from "../sub-header/page";
import { sendContactForm } from "../../utils/api";
import steps from "../../../public/data/request";

export default function RequestAQuote() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showInlineSuccess, setShowInlineSuccess] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const formRef = useRef(null);

  const [selectedOptions, setSelectedOptions] = useState({
    stage: [],
    services_needed: [],
    development_stages_needed: [],
    project_scope: [],
    expected_budget: [],
    timeframe: [],
    start: [],
  });

  useEffect(() => {
    let timer;
    if (showInlineSuccess) {
      timer = setTimeout(() => {
        setShowInlineSuccess(false);
      }, 9000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [showInlineSuccess]);

  const handleNext = () => {
    // Validate fields if the current step has fields (Step 0 or last step)
    if (currentStep === 0 || currentStep === steps.length - 1) {
      const currentStepData = steps[currentStep];
      if (currentStepData.fields) {
        const requiredFields = currentStepData.fields.filter((field) => field.required);
        for (const field of requiredFields) {
          if (!formData[field.name] || formData[field.name].trim() === "") {
            setFormError(`${field.label.replace("*", "")} is required.`);
            return;
          }
        }

        if (currentStep === 0) {
          // Validate email and phone on the first step
          if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
            setFormError("Please enter a valid email address.");
            return;
          }
          if (formData.phone && formData.phone.length < 10) {
            setFormError("Please enter a valid phone number (at least 10 digits).");
            return;
          }
        }
      }
    }

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
      const requiredFields = steps[currentStep].fields.filter((field) => field.required);
      for (const field of requiredFields) {
        if (!formData[field.name] || formData[field.name].trim() === "") {
          setFormError(`${field.label.replace("*", "")} is required.`);
          return false;
        }
      }
    }
    return true;
  };

  const resetForm = () => {
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

    if (formRef.current) {
      formRef.current.reset();
    }
    document.querySelectorAll(".tag").forEach((tag) => tag.classList.remove("selected"));
    setSubmitSuccess(true);
  };

  const startNewForm = () => {
    setCurrentStep(0);
    setSubmitSuccess(false);
    setShowSuccessModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormError("");
    setFormSuccess("");
    setShowInlineSuccess(false);

    if (!validateFinalForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const sanitizeInput = (input) => {
        if (!input) return "";
        return input
          .replace(/&/g, "&")
          .replace(/</g, "<")
          .replace(/>/g, ">")
          .replace(/"/g, "")
          .replace(/'/g, "'");
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
                    const option = section.options.find((opt) => opt.value === value);
                    return option ? option.label : value;
                  })
                  .join(", ");
              }
            }
          }
        }
        return values.join(", ");
      };

      const messageContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quote Request</title>
</head>
<body>
  <table width="100%" border="0" cellpadding="10" cellspacing="0" align="center">
    <tr>
      <td align="center">
        <h2>New Quote Request</h2>
      </td>
    </tr>
    <tr>
      <td>
        <p>A new quote request has been submitted to Weboum Technology.</p>
      </td>
    </tr>
    <tr>
      <td>
        <table width="100%" border="1" cellpadding="5" cellspacing="0">
          <tr>
            <td width="30%"><strong>Name:</strong></td>
            <td>${sanitizedFormData.name || "Not provided"}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td><a href="mailto:${sanitizedFormData.email || "Not provided"}">${sanitizedFormData.email || "Not provided"}</a></td>
          </tr>
          <tr>
            <td><strong>Phone:</strong></td>
            <td>${sanitizedFormData.phone || "Not provided"}</td>
          </tr>
          <tr>
            <td><strong>Company:</strong></td>
            <td>${sanitizedFormData.company || "Not provided"}</td>
          </tr>
          <tr>
            <td><strong>Website:</strong></td>
            <td>${sanitizedFormData.website || "Not provided"}</td>
          </tr>
          <tr>
            <td><strong>Stage:</strong></td>
            <td>${selectedOptions.stage.length > 0 ? getOptionLabels("stage", selectedOptions.stage) : "Not selected"}</td>
          </tr>
          <tr>
            <td><strong>Services Needed:</strong></td>
            <td>${selectedOptions.services_needed.length > 0 ? getOptionLabels("services_needed", selectedOptions.services_needed) : "Not selected"}</td>
          </tr>
          <tr>
            <td><strong>Development Stages Needed:</strong></td>
            <td>${selectedOptions.development_stages_needed.length > 0 ? getOptionLabels("development_stages_needed", selectedOptions.development_stages_needed) : "Not selected"}</td>
          </tr>
          <tr>
            <td><strong>Project Scope:</strong></td>
            <td>${selectedOptions.project_scope.length > 0 ? getOptionLabels("project_scope", selectedOptions.project_scope) : "Not selected"}</td>
          </tr>
          <tr>
            <td><strong>Expected Budget:</strong></td>
            <td>${selectedOptions.expected_budget.length > 0 ? getOptionLabels("expected_budget", selectedOptions.expected_budget) : "Not selected"}</td>
          </tr>
          <tr>
            <td><strong>Timeframe:</strong></td>
            <td>${selectedOptions.timeframe.length > 0 ? getOptionLabels("timeframe", selectedOptions.timeframe) : "Not selected"}</td>
          </tr>
          <tr>
            <td><strong>Start:</strong></td>
            <td>${selectedOptions.start.length > 0 ? getOptionLabels("start", selectedOptions.start) : "Not selected"}</td>
          </tr>
          <tr>
            <td><strong>Message:</strong></td>
            <td>${(sanitizedFormData.message || "No message provided").replace(/\n/g, "<br>")}</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center">
        <p>© ${new Date().getFullYear()} Weboum Technology. All rights reserved.</p>
      </td>
    </tr>
  </table>
</body>
</html>
      `.trim();

      const plainTextContent = `
Quote Request Details:
------------------------
Name: ${sanitizedFormData.name || "Not provided"}
Email: ${sanitizedFormData.email || "Not provided"}
Phone: ${sanitizedFormData.phone || "Not provided"}
Company: ${sanitizedFormData.company || "Not provided"}
Website: ${sanitizedFormData.website || "Not provided"}
Stage: ${selectedOptions.stage.length > 0 ? getOptionLabels("stage", selectedOptions.stage) : "Not selected"}
Services Needed: ${selectedOptions.services_needed.length > 0 ? getOptionLabels("services_needed", selectedOptions.services_needed) : "Not selected"}
Development Stages Needed: ${selectedOptions.development_stages_needed.length > 0 ? getOptionLabels("development_stages_needed", selectedOptions.development_stages_needed) : "Not selected"}
Project Scope: ${selectedOptions.project_scope.length > 0 ? getOptionLabels("project_scope", selectedOptions.project_scope) : "Not selected"}
Expected Budget: ${selectedOptions.expected_budget.length > 0 ? getOptionLabels("expected_budget", selectedOptions.expected_budget) : "Not selected"}
Timeframe: ${selectedOptions.timeframe.length > 0 ? getOptionLabels("timeframe", selectedOptions.timeframe) : "Not selected"}
Start: ${selectedOptions.start.length > 0 ? getOptionLabels("start", selectedOptions.start) : "Not selected"}
Message: ${sanitizedFormData.message || "No message provided"}
      `.trim();

      const result = await sendContactForm({
        email: sanitizedFormData.email || "",
        subject: `Quote Request from ${sanitizedFormData.name || "Website Visitor"}`,
        message: messageContent,
        text: plainTextContent,
        formType: "quote-request",
        replyTo: sanitizedFormData.email || "",
      });

      if (result.success) {
        const successMessage = "Your quote request has been submitted successfully";
        setFormSuccess(successMessage);
        setShowSuccessModal(true);
        setShowInlineSuccess(true);
        resetForm();
      } else {
        setFormError(result.message || "Failed to submit your request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormError("Failed to submit your request. Please try again later or contact support@weboum.com.");
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

    if (name === "phone") {
      const phoneValue = value.replace(/\D/g, '');
      setFormData({
        ...formData,
        [name]: phoneValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    if (formError) {
      setFormError("");
    }
  };

  const handlePhoneKeyPress = (e) => {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const controlKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
    if (!allowedKeys.includes(e.key) && !controlKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    if (submitSuccess) {
      startNewForm();
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
          
          <div className="requestaQuote-right">
            <div className="requestaQuote-section">
              <h3 className="requestaQuote-heading">{currentStepData.title}</h3>

              {showInlineSuccess && (
                <div className="requestaQuote-success" role="alert">
                  {formSuccess}
                </div>
              )}

              {formError && (
                <div className="requestaQuote-error" role="alert">
                  {formError}
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
                  onSubmit={currentStep === steps.length - 1 ? handleSubmit : (e) => e.preventDefault()}
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
                          disabled={isSubmitting}
                        ></textarea>
                      ) : field.name === "phone" ? (
                        <input
                          type="tel"
                          id={field.name}
                          name={field.name}
                          placeholder="Phone number*"
                          onChange={handleInputChange}
                          onKeyDown={handlePhoneKeyPress}
                          value={formData[field.name] || ""}
                          required={field.required}
                          disabled={isSubmitting}
                          inputMode="numeric"
                        />
                      ) : (
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          placeholder={field.label}
                          onChange={handleInputChange}
                          value={formData[field.name] || ""}
                          required={field.required}
                          disabled={isSubmitting}
                        />
                      )}
                    </div>
                  ))}
                  {currentStep === steps.length - 1 && (
                    <div className="requestaQuote-button-container">
                      <button
                        type="submit"
                        className="requestaQuote-button"
                        disabled={isSubmitting}
                        aria-busy={isSubmitting}
                      >
                        {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                      </button>
                    </div>
                  )}
                </form>
              ) : (
                <div className="requestaQuote-error" role="alert">
                  Error: Invalid step configuration
                </div>
              )}
            </div>
            {!submitSuccess && (
              <div className="requestaQuote-button-container">
                {currentStep > 0 && (
                  <button
                    className="requestaQuote-button back"
                    onClick={handleBack}
                    disabled={isSubmitting}
                    type="button"
                    aria-label="Go back to previous step"
                  >
                    BACK
                  </button>
                )}
                {currentStep < steps.length - 1 && (
                  <button
                    className="requestaQuote-button"
                    onClick={handleNext}
                    disabled={isSubmitting}
                    type="button"
                    aria-label="Continue to next step"
                  >
                    CONTINUE
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {showSuccessModal && (
        <div className="requestaQuote-modal" role="dialog" aria-labelledby="modal-title">
          <div className="requestaQuote-modal-content">
            <h3 id="modal-title">Success</h3>
            <p>{formSuccess}</p>
            <button
              onClick={closeSuccessModal}
              className="requestaQuote-button"
              aria-label="Close success modal"
            >
              {submitSuccess ? "Start New Form" : "Close"}
            </button>
          </div>
        </div>
      )}

      <Days />
    </>
  );
}