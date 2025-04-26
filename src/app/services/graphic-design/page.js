"use client";

import Days from "@/app/about-us/days/page";
import SubHeader from "@/app/sub-header/page";
import "./graphic-design.css";

import { FaCubes, FaCompressArrowsAlt, FaVectorSquare } from "react-icons/fa";

export default function GraphicDesign() {
  return (
    <>
      <SubHeader title="Graphic Design" />
      <div className="graphicDesign">
        <section className="graphicDesign-intro">
          <div className="graphicDesign-row">
            <div className="graphicDesign-text">
              <h2>
                Take your business to the next level with <br />
                <strong>Creatively Designed Graphics!</strong>
              </h2>
              <p>
                There is a reason why graphics work like magic for a website...
              </p>
              <p>
                Staying up-to-date with design is essential. As new concepts
                emerge, design continually changes...
              </p>
            </div>
            <div className="graphicDesign-image">
              <img src="/image/graphic-design.jpg" alt="Graphic Design" />
            </div>
          </div>

          <div className="graphicDesign-more-info">
            <h3>Communicate Your Idea In An Imaginative Way...</h3>
            <p>
              At Weboum Technology, we offer a multitude of graphic designing
              services...
            </p>
            <h3>Graphics are the most innovative tools...</h3>
            <p>We provide a competitive edge to businesses...</p>
            <p>We have some of the most creative minds working...</p>
            <p>
              We know how important it is to establish your brand identity...
            </p>
            <p>
              The designs created by our team are a mixture of skills and
              professionalism...
            </p>
            <p>
              Hire no other than Weboum Technology to create a strong online
              presence...
            </p>
          </div>
        </section>

        <section className="graphicDesign-services-section light">
          <div className="graphicDesign-row">
            <div className="graphicDesign-image-box">
              <img
                src="/image/graphic-design-2-1024x690.jpg"
                alt="Graphic Services"
              />
            </div>
            <div className="graphicDesign-text-box">
              <h2>What You Get From Our Graphic Designing Services?</h2>
              <p>
                Weboum Technology is a pioneer in the graphic design space...
              </p>
              <p>The commitment includes:</p>
              <ul>
                <li>Streamlined Communication.</li>
                <li>Quick turnaround time and timely delivery.</li>
                <li>Unique, professional, and creative designs.</li>
                <li>Regular follow-ups for approvals.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="graphicDesign-offers">
          <h2>Graphics Design Services We Offer!</h2>
          <p>
            Weboum Technology offers a host of designing services for unique
            business needs.
          </p>
          <div className="graphicDesign-grid">
            <div className="graphicDesign-box">
              <h4>🖐️ Social Media Design</h4>
              <p>
                Designs that compel your audience on social media platforms.
              </p>
            </div>
            <div className="graphicDesign-box">
              <h4>🎯 Branding and Logo Design</h4>
              <p>
                Creative and meaningful logo designs at cost-effective rates.
              </p>
            </div>
            <div className="graphicDesign-box">
              <h4>📱 Mobile App Design</h4>
              <p>Attractive mobile app designs that improve business growth.</p>
            </div>
            <div className="graphicDesign-box">
              <h4>✨ Website UI and UX Design</h4>
              <p>
                User-centric graphic designs that boost consumer engagement.
              </p>
            </div>
          </div>
        </section>

        <section className="graphicDesign-results">
          <h2>Measure Quality Results Obtained by Our Services!</h2>
          <div className="graphicDesign-result-grid">
            <div className="graphicDesign-result-card">
              <div className="graphicDesign-icon">
                <FaCubes style={{ color: "#6a005f", fontSize: "40px" }} />
              </div>
              <h3>Optimized Ranking on the SERP</h3>
              <p>Improved SERP ranking through user-friendly designs.</p>
            </div>
            <div className="graphicDesign-result-card">
              <div className="graphicDesign-icon">
                <FaCompressArrowsAlt
                  style={{ color: "#6a005f", fontSize: "40px" }}
                />
              </div>
              <h3>Enhanced Usability</h3>
              <p>Improved user experience by optimizing site components.</p>
            </div>
            <div className="graphicDesign-result-card">
              <div className="graphicDesign-icon">
                <FaVectorSquare
                  style={{ color: "#6a005f", fontSize: "40px" }}
                />
              </div>
              <h3>Competitive Advantage</h3>
              <p>Boost customer perception and stand out from competitors.</p>
            </div>
          </div>
          <p className="graphicDesign-note">
            Need someone who can use their creative skills to make a design that
            you desire? Contact Weboum Technology!
          </p>
        </section>
      </div>
      <Days />
    </>
  );
}
