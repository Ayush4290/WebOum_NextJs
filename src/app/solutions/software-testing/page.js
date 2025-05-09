import Image from "next/image";
import "./software-testing.css";
import SubHeader from "@/app/sub-header/page";
import Days from "@/app/about-us/days/page";

export default function SoftwareTesting() {
  return (
    <>
      <SubHeader title="Software Testing" />
      <div className="software-testing">
        <div className="software-container">
          <div className="software-image-section">
            <Image
              src="/image/software-testing/software.png"
              alt="Web Hosting Illustration"
              width={500}
              height={300}
              priority
            />
          </div>
          <div className="software-text-section">
            <h1 className="software-h1">
              Get Full-Spectrum Quality Assurance And Testing Solutions!
            </h1>
            <p className="software-p">
              When someone discusses web development, quality assurance is the
              term that comes to mind. Why not? Quality assurance is an
              indispensable part of web development. Your website speaks volumes
              to your prospective customers. You can only dream of customer
              satisfaction and website success in the absence of quality
              assurance.
            </p>
            <p className="software-p">
              Weboum Technology brings highly professional software testers to
              make sure that the application developed functions properly. It
              provides agile aligned and high-quality QA services that business
              owners can completely rely on.
            </p>
            <p className="software-p">
              Our testing team is completely equipped with the required
              technologies and tools to get the task done. The test architects
              are all seasoned with the latest updates to ensure that the
              software developed is fully compliant and high in quality.
            </p>
            <p className="software-p">
              Our QA team leverages the power of IoT, AI, and RPA technologies
              so that they can easily perform web and mobile app testing.
            </p>
          </div>
        </div>

        <div className="full-width-section">
          <div className="software-container">
            <div className="software-container-inner">
              <div className="software-section-header">
                <h1 className="software-h1">
                  Weboum's Software Testing Solutions
                </h1>
                <p className="software-p">
                  Get your software development team augmented with Weboum's
                  software development solutions that are custom-tailored to
                  suit different needs. We are software geeks who will test your
                  software in painstakingly in the best possible way.
                </p>
              </div>
              <ul className="software-services-list">
                <li>
                  <b>Manual Testing:-</b>Our team of software testers will get
                  your desktop and mobile application tested manually so that
                  bugs and errors are easily detected. We will ensure that your
                  software complies with regulatory standards.
                </li>
                <li>
                  <b>Automated Testing:-</b>We deliver a full-cycle automated
                  software testing model for desktop and mobile applications. At
                  the same time, we ensure that the product quality is enhanced,
                  test coverage gets improved, productivity is boosted and the
                  overall testing times are decreased as well.
                </li>
                <li>
                  <b>Usability Testing:-</b> Our team designs platforms to test
                  the usability of an application that incorporates specific
                  tools to test usability and research methods that focus on how
                  user-friendly a particular application is.
                </li>
                <li>
                  <b>Functional Testing:-</b>Weboum offers next-level functional
                  testing that focuses on preventing problems faced in the
                  functionality of an application and detecting them earlier, if
                  any.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="software-container">
          <div className="software-section-header">
            <h1 className="software-h1">Custom Quality Assurance Services!</h1>
            <p className="software-p">
              Customized testing solutions are developed from scratch and
              enhance the overall functionality through integrations,
              modifications and feature implementations.
            </p>
            <p>
              Next-level software testing solutions are offered that are
              customized to suit unique needs.
            </p>
          </div>
          <ul className="software-services-list">
            <li>
              <b>Project-Specific Testing:-</b>Testing solutions are developed
              by our experts to perform third-party testing based on the
              specific projects so that successful results are delivered.
            </li>
            <li>
              <b>Managed Testing:-</b>End to end managed testing solutions are
              offered to ensure the best possible outcomes.
            </li>
            <li>
              <b>Quality Assessment:-</b> Software auditing solutions are
              engineered so that detailed reports of the issues detected are
              offered, and in addition to it thorough instructions are offered
              to fix the issues.
            </li>
          </ul>
          <h1 className="software-h1">
            Let's Build and Deploy bug-free software products!
          </h1>
          <p className="software-p">
            Our quality assurance and software testing services are based on the
            metrics-driven approach along with automation testing. Our team of
            highly qualified testers ensures testing every application developed
            to ensure the seamless performance of the developed applications.
          </p>
          <p className="software-p">
            If your organization has ever experienced a failure and you were not
            able to comprehend what can be done, maybe performance testing could
            have helped avoid downtimes. Leverage software testing services to
            ensure your applications are completely free from all potential
            bugs.
          </p>
          <p className="software-bottom-note">
            <b>
              <i>
                Drop us a query to get your needs of software testing catered
                to.
              </i>
            </b>
          </p>
        </div>
      </div>
      <Days />
    </>
  );
}
