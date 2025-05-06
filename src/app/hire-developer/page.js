"use client";

import { useState, useEffect, useRef } from "react";
import "./hire-developer.css";
import SubHeader from "../sub-header/page";
import Days from "../about-us/days/page";

// API function to send form data
const sendContactForm = async ({ email, subject, message }) => {
  const formData = new FormData();
  formData.append("wxmail", "true");
  formData.append("email", email);
  formData.append("subject", subject);
  formData.append("message", message);

  const response = await fetch("https://weboum.com/email-api/", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json();
};

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
  const handleTagSelection = (e, category) => {
    if (e.target.classList.contains("tag")) {
      e.target.classList.toggle("selected");

      const value = e.target.getAttribute("data-value");

      // Update the appropriate state based on category
      switch (category) {
        case "skills":
          setSelectedSkills((prev) =>
            e.target.classList.contains("selected")
              ? [...prev, value]
              : prev.filter((item) => item !== value)
          );
          break;
        case "technologies":
          setSelectedTechnologies((prev) =>
            e.target.classList.contains("selected")
              ? [...prev, value]
              : prev.filter((item) => item !== value)
          );
          break;
        case "workTime":
          setSelectedWorkTime((prev) =>
            e.target.classList.contains("selected")
              ? [...prev, value]
              : prev.filter((item) => item !== value)
          );
          break;
        case "timeframe":
          setSelectedTimeframe((prev) =>
            e.target.classList.contains("selected")
              ? [...prev, value]
              : prev.filter((item) => item !== value)
          );
          break;
        case "start":
          setSelectedStart((prev) =>
            e.target.classList.contains("selected")
              ? [...prev, value]
              : prev.filter((item) => item !== value)
          );
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    // Add event listeners for each category
    const skillTags = document.querySelectorAll("#tag-container-skills .tag");
    const techTags = document.querySelectorAll(
      "#tag-container-technology .tag"
    );
    const workTimeTags = document.querySelectorAll(
      "#tag-container-worktime .tag"
    );
    const timeframeTags = document.querySelectorAll(
      "#tag-container-timeframe .tag"
    );
    const startTags = document.querySelectorAll("#tag-container-start .tag");

    skillTags.forEach((tag) =>  
      tag.addEventListener("click", (e) => handleTagSelection(e, "skills"))
    );
    techTags.forEach((tag) =>
      tag.addEventListener("click", (e) =>
        handleTagSelection(e, "technologies")
      )
    );
    workTimeTags.forEach((tag) =>
      tag.addEventListener("click", (e) => handleTagSelection(e, "workTime"))
    );
    timeframeTags.forEach((tag) =>
      tag.addEventListener("click", (e) => handleTagSelection(e, "timeframe"))
    );
    startTags.forEach((tag) =>
      tag.addEventListener("click", (e) => handleTagSelection(e, "start"))
    );

    // Cleanup function
    return () => {
      skillTags.forEach((tag) =>
        tag.removeEventListener("click", (e) => handleTagSelection(e, "skills"))
      );
      techTags.forEach((tag) =>
        tag.removeEventListener("click", (e) =>
          handleTagSelection(e, "technologies")
        )
      );
      workTimeTags.forEach((tag) =>
        tag.removeEventListener("click", (e) =>
          handleTagSelection(e, "workTime")
        )
      );
      timeframeTags.forEach((tag) =>
        tag.removeEventListener("click", (e) =>
          handleTagSelection(e, "timeframe")
        )
      );
      startTags.forEach((tag) =>
        tag.removeEventListener("click", (e) => handleTagSelection(e, "start"))
      );
    };
  }, [currentStep]);

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
        // Construct the subject and message for the API
        const subject = company
          ? `Contact Request from ${name} - ${company}`
          : `Contact Request from ${name}`;

        // Create a detailed HTML email template
        const message = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Request</title>
          </head>
          <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
            <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 20px;">
              <div style="background-color: #007bff; color: #ffffff; padding: 15px; text-align: center; border-radius: 8px 8px 0 0;">
                <h1 style="margin: 0; font-size: 24px;">New Contact Request</h1>
              </div>
              <div style="padding: 20px;">
                <h2 style="font-size: 20px; color: #333333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">Contact Information</h2>
                <p style="margin: 10px 0; color: #555555;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 10px 0; color: #555555;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 10px 0; color: #555555;"><strong>Phone:</strong> ${phone}</p>
                <p style="margin: 10px 0; color: #555555;"><strong>Company:</strong> ${
                  company || "Not provided"
                }</p>
                <p style="margin: 10px 0; color: #555555;"><strong>Website:</strong> ${
                  website || "Not provided"
                }</p>

                <h2 style="font-size: 20px; color: #333333; border-bottom: 2px solid #007bff; padding-bottom: 10px; margin-top: 20px;">Project Details</h2>
                <p style="margin: 10px 0; color: #555555;"><strong>Skills Selected:</strong> ${
                  selectedSkills.length > 0
                    ? selectedSkills.join(", ")
                    : "None selected"
                }</p>
                <p style="margin: 10px 0; color: #555555;"><strong>Technologies Selected:</strong> ${
                  selectedTechnologies.length > 0
                    ? selectedTechnologies.join(", ")
                    : "None selected"
                }</p>
                <p style="margin: 10px 0; color: #555555;"><strong>Work Time Preference:</strong> ${
                  selectedWorkTime.length > 0
                    ? selectedWorkTime.join(", ")
                    : "None selected"
                }</p>
                <p style="margin: 10px 0; color: #555555;"><strong>Project Timeframe:</strong> ${
                  selectedTimeframe.length > 0
                    ? selectedTimeframe.join(", ")
                    : "None selected"
                }</p>
                <p style="margin: 10px 0; color: #555555;"><strong>Preferred Start:</strong> ${
                  selectedStart.length > 0
                    ? selectedStart.join(", ")
                    : "None selected"
                }</p>

                <h2 style="font-size: 20px; color: #333333; border-bottom: 2px solid #007bff; padding-bottom: 10px; margin-top: 20px;">Additional Comments</h2>
                <p style="margin: 10px 0; color: #555555;">${
                  comment || "No comments provided"
                }</p>
              </div>
              <div style="background-color: #f8f9fa; padding: 15px; text-align: center; border-radius: 0 0 8px 8px;">
                <p style="margin: 0; color: #777777; font-size: 14px;">Sent from Weboum Contact Form</p>
              </div>
            </div>
          </body>
          </html>
        `.trim();

        // Send the form data to the API
        await sendContactForm({ email, subject, message });

        // On success, show alert and reset the form
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
      } catch (error) {
        alert("Failed to submit the form. Please try again later.");
        console.error("Form submission error:", error);
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
                    <div key={skill} className="tag" data-value={skill}>
                      {skill}
                    </div>
                  ))}
                </div>

                <div id="section-title-technology">Technology</div>
                <div id="tag-container-technology">
                  {technologies.map((tech) => (
                    <div key={tech} className="tag" data-value={tech}>
                      {tech}
                    </div>
                  ))}
                </div>

                <div id="section-title-worktime">Work Time</div>
                <div id="tag-container-worktime">
                  {workTimes.map((time) => (
                    <div key={time} className="tag" data-value={time}>
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
                    <div key={timeframe} className="tag" data-value={timeframe}>
                      {timeframe}
                    </div>
                  ))}
                </div>

                <div id="section-title-start">Start</div>
                <div id="tag-container-start">
                  {starts.map((start) => (
                    <div key={start} className="tag" data-value={start}>
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