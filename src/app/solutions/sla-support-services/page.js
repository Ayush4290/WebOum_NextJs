import Days from "../../about-us/days/page";
import SubHeader from "../../sub-header/page";
import Image from "next/image";
import "./sla-support-services.css";

export const metadata = {
  title: "SLA Support Services - Weboum Technology Pvt. Ltd",
};

export default function SLASupportServices() {
  return (
    <>
      <SubHeader title="SLA Support Services" />
      <div className="support-page">
        <div className="support-section-row">
          <div className="support-section-image">
            <Image
              src="/image/SLA/SLA-1.png"
              alt="SLA Illustration"
              width={400}
              height={250}
              priority
            />
          </div>
          <div className="support-section-text">
            <h2 className="support-section-heading">
              Manage the expectations of your consumers with expert SLA Support
              Services
            </h2>
            <p>
              Outsource your IT support needs to WebOum Technology and exceed
              the expectation of your consumers.
            </p>
            <br />
            <p>
              You may come across an avalanche of explanations when it comes to
              defining a service-level agreement (SLA). But, at WebOum
              Technologies, we like to keep things simple.
            </p>
            <br />
            <p>
              So, let’s simply tell you that SLA is a contract between customers
              and a service provider. It defines the service standards that the
              provider needs to meet. Moreover, it also states the documents
              needed to be furnished by the service provider.
            </p>
            <br />
            <p>
              We offer personalized IT support services that align with the
              specific requirements of your business.
            </p>
          </div>
        </div>

        <div className="support-wrapper">
          <div className="supportManger">
            <div className="support-section-row">
              <div className="support-section-text">
                <h2 className="support-section-heading">
                  Manage the expectations of your consumers with expert SLA
                  Support Services
                </h2>
                <p>
                  Outsource your SLA support needs to WebOum Technology and
                  exceed expectations. <br />
                  We offer personalised SLA support services that align with the
                  specific requirements of your business. <br />
                  Our skilled providers ensure you get top-tier support. <br />
                  By hiring our skilled service providers, you stay rest assured
                  about working with the best. <br />
                  Our specialists align end-to-end communications and managed
                  agreement services to make sure that results-driven service
                  agreement services are provided. <br />
                  WebOum Technology has certified professionals offering
                  scalable SLA solutions to remote locations and onsite as well.{" "}
                  <br />
                  Customised SLA support plans are crafted keeping specific
                  requirements in mind. We do this to ensure your business
                  obtains the best value.
                </p>
              </div>
              <div className="support-section-image">
                <Image
                  src="/image/SLA/SLA-2.png"
                  alt="SLA Flow"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="support-dot">
          <h2 className="support-dot-2">
            Remote and Reliable 24-hour SLA Support Services
          </h2>
          <p>
            Outsource your IT support needs to WebOum Technology and exceed the
            expectation of your consumers.
          </p>
          <ul className="support-list">
            <li>The service deliverables are all described in detail.</li>
            <li>
              Our SLAs represent the promise of dealing with your ICT issues and
              the requests within a short turnaround time.
            </li>
            <li>
              We run our monitoring services with the help of our out-of-hour
              incident team.
            </li>
            <li>
              We aim to be flexible and understand the demand of a situation.
            </li>
            <li>
              Our team is equipped with industry leading tools and systems to
              achieve goals.
            </li>
          </ul>
        </div>

        <div className="support-call-to-action">
          <h2 className="support-section-heading">
            Get Ready To Get Best In Class Scalable SLA Support Services that
            Exceed Expectation
          </h2>
          <p className="support-section-p">
            Up-to-date technology combined with industry talent helps us offer
            optimal SLA support services. <br />
            Feel free to call us anytime. WebOum Technology offers a host of
            services to meet your SLA requirements.
          </p>
        </div>
      </div>
      <Days />
    </>
  );
}
