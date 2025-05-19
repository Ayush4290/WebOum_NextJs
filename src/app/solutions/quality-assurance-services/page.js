// QualityAssuranceServices.jsx
import Image from "next/image";
import SubHeader from "../../sub-header/page";
import Days from "../../about-us/days/page";
import "./quality-assurance-services.css";

// Metadata for SEO
export const metadata = {
  title: "Quality Assurance Services –Weboum Technology Pvt. Ltd",
  description:
    "Ensure bug-free web, desktop, and mobile applications with WebOum Technology's full-spectrum quality assurance and testing solutions.",
};

export default function QualityAssuranceServices() {
  return (
    <>
      <SubHeader title="Quality Assurance Services" />
      <div className="qa-container">
        {/* Main Content */}
        <main className="qa-main">
          {/* Hero Section */}
          <section className="qa-hero">
            <h2>
              Get Full-Spectrum Quality Assurance And Testing Solutions For Web,
              Desktop, And Mobile Applications!
            </h2>
            <p>
              When someone discusses web development, quality assurance is the
              term that comes to mind.
            </p>
            <p>
              Why not? Quality assurance is an indispensable part of web
              development. Your website speaks volumes to your prospective
              customers.
            </p>
            <p>
              You can only dream of customer satisfaction and website success in
              the absence of quality assurance.
            </p>
          </section>

          {/* QA Diagram Section - Fixed layout */}
          <section className="qa-diagram-section">
            <div className="qa-info">
              <Image
                src="https://weboum.com/wp-content/uploads/2021/06/quality-assurance.png"
                alt="Quality Assurance Metrics"
                width={500}
                height={300}
                className="qa-info-image"
              />
              <div className="qa-info-text">
                <h2>Let&apos;s Build and Deploy bug-free software products!</h2>
                <p>
                  Our quality assurance and software testing services are based
                  on the metrics-driven approach along with automation testing.
                </p>
                <p>
                  Our team of highly qualified testers ensures testing every
                  application developed to ensure the seamless performance of
                  the developed applications.
                </p>
                <p>
                  We help organizations release bug-free applications and at the
                  same time reduce time to market.
                </p>
              </div>
            </div>
          </section>

          {/* Prevention Section - Fixed layout */}
          <div className="qa-prevention-wrapper">
            <section className="qa-prevention">
              <div className="qa-prevention-content">
                <h2>We Don&apos;t Just Detect Issues, We Prevent Them!</h2>
                <p>
                  WebOum Technology is one of the industry&apos;s leading software
                  development companies that specialize in building digital
                  experiences.
                </p>
                <p>
                  We provide meticulous software testing services to ensure that
                  fully tested, bug-free software goes to the market in less
                  turnaround time.
                </p>
                <p>
                  End-to-end testing of infrastructure is conducted to ensure
                  that bug-free software is delivered to the end-users.
                </p>
              </div>
              <div className="qa-prevention-image">
                <div className="qa-image-container">
                  <Image
                    src="https://weboum.com/wp-content/uploads/2021/07/quality-assurance-2.jpg"
                    alt="Mobile phone with QA icons"
                    width={280}
                    height={300}
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Services Section */}
          <section className="qa-services">
            <h2>Software Testing Services</h2>
            <p className="qa-services-description">
              WebOum software functional testing services verify that every
              application performs in conformance with the behavioural
              requirement specifications, quality and adherence to the behaviour
              of end-users.
            </p>

            <div className="qa-services-grid">
              {/* Service items remain unchanged */}
              <div className="qa-service-item">
                <div className="qa-service-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <div className="qa-service-content">
                  <h3>Website Testing:</h3>
                  <p>
                    Web testing services provided by our team of testers are
                    used by multiple companies operating in all spectrums to
                    make sure that their web applications are functioning
                    properly. All possible vulnerabilities and performance
                    issues are successfully eliminated.
                  </p>
                </div>
              </div>

              <div className="qa-service-item">
                <div className="qa-service-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 25"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="qa-service-content">
                  <h3>Mobile Testing:</h3>
                  <p>
                    Mobile devices are becoming more dominant in today&apos;s world.
                    Our team, hence, emphasizes more on mobile testing services
                    to make sure that testing services for mobile devices are
                    efficiently performed.
                  </p>
                </div>
              </div>

              <div className="qa-service-item">
                <div className="qa-service-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                </div>
                <div className="qa-service-content">
                  <h3>Test Process Enhancement:</h3>
                  <p>
                    Our Test Process Enhancement solution allows businesses to
                    deter the current position of their application and provide
                    strategies for success.
                  </p>
                </div>
              </div>

              <div className="qa-service-item">
                <div className="qa-service-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <div className="qa-service-content">
                  <h3>Test Automation:</h3>
                  <p>
                    Our team of quality analysts has successfully completed
                    numerous test automation projects. Hence, we can assist
                    businesses in automating the test tasks at different stages.
                  </p>
                </div>
              </div>

              <div className="qa-service-item">
                <div className="qa-service-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div className="qa-service-content">
                  <h3>Security Testing:</h3>
                  <p>
                    Our security testing services verifies that the information
                    of our clients are all protected and also that the intended
                    functionality of the applications is maintained.
                  </p>
                </div>
              </div>

              <div className="qa-service-item">
                <div className="qa-service-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>
                <div className="qa-service-content">
                  <h3>Cloud Testing:</h3>
                  <p>
                    Our cloud testing services enable our testing experts to
                    test the applications very well. The integrity of your
                    cloud-based services is also ensured by our team of quality
                    analysts.
                  </p>
                </div>
              </div>
            </div>

            <p className="qa-services-footer">
              If your organization has ever experienced a failure and you were
              not able to comprehend what can be done, maybe performance testing
              could have helped avoid downtimes. Leverage software testing
              services to ensure your applications are completely free from all
              potential bugs.
            </p>
          </section>
        </main>
      </div>
      <Days />
    </>
  );
}
