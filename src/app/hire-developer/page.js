"use client";

import { useState, useEffect, useRef } from "react";
import "./hire-developer.css";
import SubHeader from "../sub-header/page";
import Days from "../about-us/days/page";
import { sendContactForm } from "@/utils/api";

export default function HireDeveloper() {
  const [currentStep, setCurrentStep] = useState(1);
  const formRef = useRef(null);

  // State to track selected items
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [selectedWorkTime, setSelectedWorkTime] = useState([]);
  const [selectedTimeframe, setSelectedTimeframe] = useState([]);
  const [selectedStart, setSelectedStart] = useState([]);

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

  // Function to handle tag selection
  const handleTagSelection = (value, category) => {
    // Update the appropriate state based on category
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
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const name = formRef.current?.querySelector("#name")?.value;
    const email = formRef.current?.querySelector("#email")?.value;
    const phone = formRef.current?.querySelector("#phone")?.value;
    const company = formRef.current?.querySelector("#company")?.value;
    const website = formRef.current?.querySelector("#website")?.value;
    const comment = formRef.current?.querySelector("#comment")?.value;

    if (name && email && phone) {
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

        const sanitizedName = sanitizeInput(name);
        const sanitizedEmail = sanitizeInput(email);
        const sanitizedPhone = sanitizeInput(phone);
        const sanitizedCompany = sanitizeInput(company);
        const sanitizedWebsite = sanitizeInput(website);
        const sanitizedComment = sanitizeInput(comment);

        // Construct the subject
        const subject = sanitizedCompany
          ? `Contact Request from ${sanitizedName} - ${sanitizedCompany}`
          : `Contact Request from ${sanitizedName}`;

        // Create a simplified and robust HTML email template
        const message = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #e0e0e0;">
    <tr>
      <td style="background-color: #4a90e2; padding: 15px; text-align: center;">
        <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Contact Request</h2>
      </td>
    </tr>
    <tr>
      <td style="padding: 20px;">
        <p style="color: #333333; font-size: 16px; margin: 0 0 15px;">
          A new contact request has been submitted to Weboum Technology.
        </p>
        <table width="100%" cellpadding="5" cellspacing="0" style="border-top: 1px solid #e0e0e0; padding-top: 15px;">
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Name:</strong></td>
            <td style="color: #333333; font-size: 14px;">${sanitizedName}</td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Email:</strong></td>
            <td style="color: #333333; font-size: 14px;">
              <a href="mailto:${sanitizedEmail}" style="color: #4a90e2; text-decoration: none;">${sanitizedEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Phone:</strong></td>
            <td style="color: #333333; font-size: 14px;">${sanitizedPhone}</td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Company:</strong></td>
            <td style="color: #333333; font-size: 14px;">${sanitizedCompany || "Not provided"}</td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Website:</strong></td>
            <td style="color: #333333; font-size: 14px;">${sanitizedWebsite || "Not provided"}</td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Skills Selected:</strong></td>
            <td style="color: #333333; font-size: 14px;">${selectedSkills.length > 0 ? selectedSkills.join(", ") : "None selected"}</td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Technologies Selected:</strong></td>
            <td style="color: #333333; font-size: 14px;">${selectedTechnologies.length > 0 ? selectedTechnologies.join(", ") : "None selected"}</td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Work Time Preference:</strong></td>
            <td style="color: #333333; font-size: 14px;">${selectedWorkTime.length > 0 ? selectedWorkTime.join(", ") : "None selected"}</td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Project Timeframe:</strong></td>
            <td style="color: #333333; font-size: 14px;">${selectedTimeframe.length > 0 ? selectedTimeframe.join(", ") : "None selected"}</td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Preferred Start:</strong></td>
            <td style="color: #333333; font-size: 14px;">${selectedStart.length > 0 ? selectedStart.join(", ") : "None selected"}</td>
          </tr>
          <tr>
            <td style="color: #333333; font-size: 14px;"><strong>Comment:</strong></td>
            <td style="color: #333333; font-size: 14px;">${sanitizedComment || "No comments provided"}</td>
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
          email: sanitizedEmail,
          subject,
          message: message.substring(0, 100) + "...",
        });

        // Send the form data to the API
        const result = await sendContactForm({ email: sanitizedEmail, subject, message });

        if (result.success) {
          alert("Form submitted successfully!");
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
        } else {
          alert(`Failed to submit the form: ${result.message}`);
        }
      } catch (error) {
        console.error("Form submission error:", error);
        alert(`Failed to submit the form: ${error.message}. Please try again later.`);
      }
    } else {
      alert("Please fill in all required fields.");
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
                    <input type="text" id="name" required />
                  </div>

                  <div>
                    <label htmlFor="email">Email*</label>
                    <input type="email" id="email" required />
                  </div>

                  <div>
                    <label htmlFor="phone">Phone*</label>
                    <input type="tel" id="phone" required />
                  </div>

                  <div>
                    <label htmlFor="company">Company</label>
                    <input type="text" id="company" />
                  </div>

                  <div>
                    <label htmlFor="website">Website URL</label>
                    <input type="url" id="website" />
                  </div>

                  <div>
                    <label htmlFor="comment">Comment</label>
                    <textarea id="comment"></textarea>
                  </div>

                  <div id="button-container">
                    <button id="back-button" type="button" onClick={prevStep}>
                      BACK
                    </button>
                    <button id="submit-button" type="submit">
                      SUBMIT
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