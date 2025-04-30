import Image from "next/image";
import "./quality-assurance-services.css";
import Days from "@/app/about-us/days/page";
import SubHeader from "@/app/sub-header/page";

// Metadata for SEO
export const metadata = {
  title: "Quality Assurance Services – WebOum Technology",
  description:
    "Ensure bug-free web, desktop, and mobile applications with WebOum Technology&apos;s full-spectrum quality assurance and testing solutions.",
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

          {/* QA Diagram Section */}
          <section className="qa-diagram-section">
            <div className="qa-diagram">
              <div className="qa-circle">
                <div className="qa-circle-content">
                  <p>QUALITY</p>
                  <p>ASSURANCE</p>
                </div>
              </div>

              <div className="qa-service qa-top-left">
                <div className="qa-icon">
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
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <p>SERVICE</p>
              </div>

              <div className="qa-satisfaction qa-top-right">
                <div className="qa-icon">
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
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                </div>
                <p>SATISFACTION</p>
              </div>

              <div className="qa-guarantee qa-bottom-left">
                <div className="qa-icon">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <p>GUARANTEE</p>
              </div>

              <div className="qa-customer qa-bottom-right">
                <div className="qa-icon">
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <p>CUSTOMER</p>
              </div>
            </div>

            <div className="qa-info">
              <h2>Let&apos;s Build and Deploy bug-free software products!</h2>
              <p>
                Our quality assurance and software testing services are based on
                the metrics-driven approach along with automation testing.
              </p>
              <p>
                Our team of highly qualified testers ensures testing every
                application developed to ensure the seamless performance of the
                developed applications.
              </p>
              <p>
                We help organizations release bug-free applications and at the
                same time reduce time to market.
              </p>
            </div>
          </section>

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
                    Mobile devices are becoming more dominant in today&apos;s
                    world. Our team, hence, emphasizes more on mobile testing
                    services to make sure that testing services for mobile
                    devices are efficiently performed.
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

          {/* Prevention Section */}
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
                End-to-end testing of infrastructure is conducted to ensure that
                bug-free software is delivered to the end-users.
              </p>
            </div>
            <div className="qa-prevention-image">
              <div className="qa-image-container">
                <Image
                  src="https://weboum.com/wp-content/uploads/2021/07/quality-assurance-2.jpg"
                  alt="Mobile phone with QA icons"
                  width={320}
                  height={340}
                />
                <div className="qa-image-overlay">
                  <div className="qa-overlay-content"></div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Chat Button */}
        <div className="qa-chat-button">
          <button>
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
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </button>
        </div>
      </div>
      <Days />
    </>
  );
}
