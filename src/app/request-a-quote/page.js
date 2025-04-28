import Days from "../about-us/days/page";
import "./request_a_quote.css";

// Define the arrays for skills, technologies, and work times
const skills = ["Web Development", "UI/UX Design", "SEO", "Mobile Apps"];
const technologies = ["React", "Node.js", "Python", "AWS"];
const workTimes = ["Monday - Friday", "9 AM - 5 PM", "Remote Available"];

export default function RequestaQuote() {
  return (
    <>
      <div className="requestaQuote-container">
        <h4 className="requestaQuote-subtitle">Weboum – Send Us A Message</h4>
        <h2 className="requestaQuote-title">
          Do You Have Any Questions? We’ll Be Happy To Assist!
        </h2>

        <div className="requestaQuote-section">
          <h4 className="requestaQuote-heading">Skills</h4>
          <div className="requestaQuote-tags">
            {skills.map((skill, index) => (
              <span className="requestaQuote-tag" key={index}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="requestaQuote-section">
          <h4 className="requestaQuote-heading">Technology</h4>
          <div className="requestaQuote-tags">
            {technologies.map((tech, index) => (
              <span className="requestaQuote-tag" key={index}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="requestaQuote-section">
          <h4 className="requestaQuote-heading">Work Time</h4>
          <div className="requestaQuote-tags">
            {workTimes.map((time, index) => (
              <span className="requestaQuote-tag" key={index}>
                {time}
              </span>
            ))}
          </div>
        </div>

        <div className="requestaQuote-button-container">
          <button className="requestaQuote-button">CONTINUE</button>
        </div>
      </div>
      <Days />
    </>
  );
}