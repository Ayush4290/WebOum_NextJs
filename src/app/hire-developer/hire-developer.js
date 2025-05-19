
"use client";

import { useState, useEffect, useRef } from "react";
import "./hire-developer.css";
import SubHeader from "../sub-header/page";
import Days from "../about-us/days/page";
import { sendContactForm } from "../../utils/api";

export default function HireDeveloper() {
  const [currentStep, setCurrentStep] = useState(1);
  const formRef = useRef(null);

  // State to track selected items
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [selectedWorkTime, setSelectedWorkTime] = useState([]);
  const [selectedTimeframe, setSelectedTimeframe] = useState([]);
  const [selectedStart, setSelectedStart] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [phoneError, setPhoneError] = useState(""); // For real-time phone validation

  // Skills section data
  const skills = [
    "React",
    "Angular",
    "PHP",
    "Node",
    "HTML",
    "Javascript",
    "SEO",
  ];

  const technologies = [
    "Creative UI/UX Designing",
    "E-Commerce Solutions",
    "App Development",
    "Web Application",
    "Digital Marketing",
    "Technical Support",
    "Business Intelligence Software",
    "Custom Software Technology",
  ];

  const workTimes = ["Full-Time", "Part-Time"];

  // Timeframe section data
  const timeframes = [
    "Less than 1 month",
    "1 to 3 months",
    "3 to 6 months",
    "More than 6 months",
    "I am not sure",
  ];

  const starts = [
    "In a couple of days",
    "In a week",
    "In a couple of weeks",
    "In a month",
    "More than a month",
    "I am not sure",
  ];

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, ""); // Remove non-digits
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    }
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  // Real-time phone validation
  const handlePhoneChange = (e) => {
    const rawValue = e.target.value;
    const formattedValue = formatPhoneNumber(rawValue);
    e.target.value = formattedValue;

    const phoneRegex = /^\+?[\d\s\-\(\)]{7,15}$/;
    if (!formattedValue) {
      setPhoneError("Phone number is required.");
    } else if (!phoneRegex.test(formattedValue)) {
      setPhoneError("Please enter a valid phone number (7-15 digits).");
    } else {
      setPhoneError("");
    }
  };

  // Function to handle tag selection
  const handleTagSelection = (value, category) => {
    switch (category) {
      case "skills":
        setSelectedSkills((prev) =>
          prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value]
        );
        break;
      case "technologies":
        setSelectedTechnologies((prev) =>
          prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value]
        );
        break;
      case "workTime":
        setSelectedWorkTime((prev) =>
          prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value]
        );
        break;
      case "timeframe":
        setSelectedTimeframe((prev) =>
          prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value]
        );
        break;
      case "start":
        setSelectedStart((prev) =>
          prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value]
        );
        break;
      default:
        break;
    }
    if (formError) setFormError("");
    if (formSuccess) setFormSuccess("");
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const validateForm = (name, email, phone) => {
    if (!name || !email || !phone) {
      setFormError("Please fill in all required fields (Name, Email, Phone).");
      return false;
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setFormError("Please enter a valid email address.");
      return false;
    }

    // Phone number validation
    const phoneRegex = /^\+?[\d\s\-\(\)]{7,15}$/;
    if (!phoneRegex.test(phone)) {
      setFormError(
        "Please enter a valid phone number (7-15 digits, may include +, -, (), or spaces)."
      );
      setPhoneError(
        "Please enter a valid phone number (7-15 digits, may include +, -, (), or spaces)."
      );
      return false;
    }

    return true;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");
    setPhoneError(""); // Clear phone error on submit attempt

    const name = formRef.current?.querySelector("#name")?.value.trim();
    const email = formRef.current?.querySelector("#email")?.value.trim();
    const phone = formRef.current?.querySelector("#phone")?.value.trim();
    const company = formRef.current?.querySelector("#company")?.value.trim();
    const website = formRef.current?.querySelector("#website")?.value.trim();
    const comment = formRef.current?.querySelector("#comment")?.value.trim();

    if (!validateForm(name, email, phone)) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Sanitize inputs
      const sanitizeInput = (input) => {
        if (!input) return "";
        return input
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;");
      };

      const sanitizedFormData = {
        name: sanitizeInput(name),
        email: sanitizeInput(email),
        phone: sanitizeInput(phone),
        company: sanitizeInput(company || "Not provided"),
        website: sanitizeInput(website || "Not provided"),
        comment: sanitizeInput(comment || "No comments provided"),
      };

      const subject =
        sanitizedFormData.company !== "Not provided"
          ? `Hire Developer Request from ${sanitizedFormData.name} - ${sanitizedFormData.company}`
          : `Hire Developer Request from ${sanitizedFormData.name}`;

      // Plain HTML5 table-based email template without CSS
      const messageContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hire Developer Request</title>
</head>
<body>
  <table width="100%" border="0" cellpadding="10" cellspacing="0" align="center">
    <tr>
      <td align="center">
        <h2>New Hire Developer Request</h2>
      </td>
    </tr>
    <tr>
      <td>
        <p>A new hire developer request has been submitted to Weboum Technology.</p>
      </td>
    </tr>
    <tr>
      <td>
        <table width="100%" border="1" cellpadding="5" cellspacing="0">
          <tr>
            <td width="30%"><strong>Name:</strong></td>
            <td>${sanitizedFormData.name}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td><a href="mailto:${sanitizedFormData.email}">${sanitizedFormData.email}</a></td>
          </tr>
          <tr>
            <td><strong>Phone:</strong></td>
            <td>${sanitizedFormData.phone}</td>
          </tr>
          <tr>
            <td><strong>Company:</strong></td>
            <td>${sanitizedFormData.company}</td>
          </tr>
          <tr>
            <td><strong>Website:</strong></td>
            <td>${sanitizedFormData.website}</td>
          </tr>
          <tr>
            <td><strong>Skills Selected:</strong></td>
            <td>${selectedSkills.length > 0 ? selectedSkills.join(", ") : "None selected"}</td>
          </tr>
          <tr>
            <td><strong>Technologies Selected:</strong></td>
            <td>${selectedTechnologies.length > 0 ? selectedTechnologies.join(", ") : "None selected"}</td>
          </tr>
          <tr>
            <td><strong>Work Time Preference:</strong></td>
            <td>${selectedWorkTime.length > 0 ? selectedWorkTime.join(", ") : "None selected"}</td>
          </tr>
          <tr>
            <td><strong>Project Timeframe:</strong></td>
            <td>${selectedTimeframe.length > 0 ? selectedTimeframe.join(", ") : "None selected"}</td>
          </tr>
          <tr>
            <td><strong>Preferred Start:</strong></td>
            <td>${selectedStart.length > 0 ? selectedStart.join(", ") : "None selected"}</td>
          </tr>
          <tr>
            <td><strong>Comment:</strong></td>
            <td>${sanitizedFormData.comment.replace(/\n/g, "<br>")}</td>
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

      // Plain text fallback
      const plainTextContent = `
Hire Developer Request Details:
------------------------
Name: ${sanitizedFormData.name}
Email: ${sanitizedFormData.email}
Phone: ${sanitizedFormData.phone}
Company: ${sanitizedFormData.company}
Website: ${sanitizedFormData.website}
Skills Selected: ${selectedSkills.length > 0 ? selectedSkills.join(", ") : "None selected"}
Technologies Selected: ${selectedTechnologies.length > 0 ? selectedTechnologies.join(", ") : "None selected"}
Work Time Preference: ${selectedWorkTime.length > 0 ? selectedWorkTime.join(", ") : "None selected"}
Project Timeframe: ${selectedTimeframe.length > 0 ? selectedTimeframe.join(", ") : "None selected"}
Preferred Start: ${selectedStart.length > 0 ? selectedStart.join(", ") : "None selected"}
Comment: ${sanitizedFormData.comment}
      `.trim();

      console.log(" submitting form with:", {
        email: sanitizedFormData.email,
        subject,
        message: messageContent.substring(0, 100) + "...",
        text: plainTextContent.substring(0, 100) + "...",
        formType: "hire-developer",
      });

      const result = await sendContactForm({
        email: sanitizedFormData.email,
        subject,
        message: messageContent,
        text: plainTextContent,
        formType: "hire-developer",
        replyTo: sanitizedFormData.email,
      });

      if (result.success) {
        setFormSuccess("Thank you! Your request has been submitted successfully.");
        setCurrentStep(1);
        formRef.current?.reset();

        // Reset all selected items
        setSelectedSkills([]);
        setSelectedTechnologies([]);
        setSelectedWorkTime([]);
        setSelectedTimeframe([]);
        setSelectedStart([]);

        // Remove selected class from all tags
        document
          .querySelectorAll(".tag")
          .forEach((tag) => tag.classList.remove("selected"));

        // Scroll to top of form
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setFormError(
          result.message || "Failed to submit the form. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormError(
        "An error occurred while submitting the form. Please try again later or contact support@weboum.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SubHeader title="Hire a Developer" />
      <div id="container">
        <div id="background-pattern">
          <div id="pattern-circles">
            <div id="circle1"></div>
            <div id="circle2"></div>
            <div id="circle3"></div>
            <div id="circle4"></div>
            <svg id="pattern-lines" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="0"
                y1="100"
                x2="240"
                y2="400"
                stroke="#f0f0f0"
                strokeWidth="2"
              />
              <line
                x1="100"
                y1="0"
                x2="400"
                y2="500"
                stroke="#f0f0f0"
                strokeWidth="2"
              />
              <line
                x1="200"
                y1="100"
                x2="300"
                y2="300"
                stroke="#f0f0f0"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        <div id="main-content">
          <div id="header">
            <div id="header-title">Weboum – Send Us A Message</div>
            <div id="header-line"></div>
          </div>

          <div id="content-wrapper">
            <div id="left-column">
              <h1 id="main-title">
                Do You Have Any Questions? We'll Be Happy To Assist!
              </h1>
            </div>

            <div id="right-column">
              {/* Step 1: Skills Section */}
              <div
                id="section-skills"
                className={currentStep === 1 ? "active" : ""}
              >
                <div id="section-title-skills">Skills</div>
                <div id="tag-container-skills">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className={`tag ${
                        selectedSkills.includes(skill) ? "selected" : ""
                      }`}
                      onClick={() => handleTagSelection(skill, "skills")}
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                <div id="section-title-technology">Technology</div>
                <div id="tag-container-technology">
                  {technologies.map((tech) => (
                    <div
                      key={tech}
                      className={`tag ${
                        selectedTechnologies.includes(tech) ? "selected" : ""
                      }`}
                      onClick={() => handleTagSelection(tech, "technologies")}
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                <div id="section-title-worktime">Work Time</div>
                <div id="tag-container-worktime">
                  {workTimes.map((time) => (
                    <div
                      key={time}
                      className={`tag ${
                        selectedWorkTime.includes(time) ? "selected" : ""
                      }`}
                      onClick={() => handleTagSelection(time, "workTime")}
                    >
                      {time}
                    </div>
                  ))}
                </div>

                <button id="continue-button" onClick={nextStep}>
                  CONTINUE
                </button>
              </div>

              {/* Step 2: Timeframe Section */}
              <div
                id="section-timeframe"
                className={currentStep === 2 ? "active" : ""}
              >
                <div id="section-title-timeframe">Timeframe</div>
                <div id="tag-container-timeframe">
                  {timeframes.map((timeframe) => (
                    <div
                      key={timeframe}
                      className={`tag ${
                        selectedTimeframe.includes(timeframe) ? "selected" : ""
                      }`}
                      onClick={() => handleTagSelection(timeframe, "timeframe")}
                    >
                      {timeframe}
                    </div>
                  ))}
                </div>

                <div id="section-title-start">Start</div>
                <div id="tag-container-start">
                  {starts.map((start) => (
                    <div
                      key={start}
                      className={`tag ${
                        selectedStart.includes(start) ? "selected" : ""
                      }`}
                      onClick={() => handleTagSelection(start, "start")}
                    >
                      {start}
                    </div>
                  ))}
                </div>

                <div id="button-container">
                  <button id="back-button" onClick={prevStep}>
                    BACK
                  </button>
                  <button id="continue-button" onClick={nextStep}>
                    CONTINUE
                  </button>
                </div>
              </div>

              {/* Step 3: Contact Section */}
              <div
                id="section-contact"
                className={currentStep === 3 ? "active" : ""}
              >
                <div id="section-title-contact">Contact Information</div>
                <form id="contact-form" ref={formRef} onSubmit={submitForm}>
                  <div>
                    <label htmlFor="name">Name*</label>
                    <input
                      type="text"
                      id="name"
                      required
                      disabled={isSubmitting}
                     
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Email*</label>
                    <input
                      type="email"
                      id="email"
                      required
                      
                    />
                  </div>

                  <div>
                    <label htmlFor="phone">Phone*</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      disabled={isSubmitting}
                      onChange={handlePhoneChange}
                    />
                    
                  </div>

                  <div>
                    <label htmlFor="company">Company*</label>
                    <input
                      type="text"
                      id="company"
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="website">Website URL*</label>
                    <input
                      type="url"
                      id="website"
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="comment">Comment*</label>
                    <textarea
                      id="comment"
                      disabled={isSubmitting}
                      required
                    ></textarea>
                  </div>

                  {formError && (
                    <div className="hire-developer-error-message">
                      {formError}
                    </div>
                  )}
                  {formSuccess && (
                    <div className="hire-developer-success-message">
                      {formSuccess}
                    </div>
                  )}

                  <div id="button-container">
                    <button
                      id="back-button"
                      type="button"
                      onClick={prevStep}
                      disabled={isSubmitting}
                    >
                      BACK
                    </button>
                    <button
                      id="submit-button"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "SUBMIT"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Days />
    </>
  );
}
