import SubHeader from "../../sub-header/page";
import Image from "next/image";
import "./devops.css";

export const metadata = {
  title: "DevOps - Weboum Technology Pvt. Ltd",
 
};

export default function DevOps() {
  return (
    <>
      <SubHeader title="DevOps" />
      <h1 className="devops-center-text">
        DevOps Services - WebOum Technology
      </h1>
      <div className="devops-container">
        <div className="devops-content">
          <h2>
            Accelerate Your DevOps Journey To Achieve Agility And Remove
            Bottlenecks in Software Development!
          </h2>
          <p className="devops-italic">
            DevOps is a constructive disruptor that brings technologies,
            processes, and people, together, enabling the enterprises to deliver
            applications at their business’ speed. It improves quality and
            efficiency in software development.{" "}
          </p>
          <p>
            At WebOum, backed by our custom DevOps solutions, we provide
            businesses with the ability to constantly roll out enhanced business
            capabilities. We emphasize automation, collaboration, communication,
            and integration.{" "}
          </p>
          <p>
            For several years now, our dedicated DevOps teams have obtained
            impressive expertise in the industry. They leverage their expertise
            to unite development and operations with the help of advanced DevOps
            techniques.{" "}
          </p>
        </div>
        <div className="devops-image-container">
          <Image
            src="/image/devops/devOps1.png"
            alt="DevOps Process Illustration"
            width={500}
            height={300}
            priority
          />
        </div>
      </div>

      <div className="devops-section">
        <div className="devopsSection">
          <div className="devops-image-box">
            <Image
              src="/image/devops/devOps2.jpg"
              alt="DevOps Innovation Illustration"
              width={400}
              height={250}
            />
          </div>
          <div className="devops-text-box">
            <h2>
              Our DevOps Expertise Has Led DevOps Innovation For Many
              Businesses!
            </h2>
            <p>
              We have made a huge difference in accelerating the growth of
              numerous businesses through our DevOps advisory services and their
              successful improvements.
            </p>
            <p>
              We help businesses streamline and automate the work flow of their
              private behavior, right from the design, development, deployment
              and other operations.
            </p>
            <p>
              DevOps enables profitability for an embedded or scalable business
              for only 10% reliability of operation, as it is the main tool that
              development of applications can discover, understand time.
            </p>
          </div>
        </div>
      </div>

      <div className="devops-benefits-section">
        <h2>Avail Our DevelopServices And Enjoy Several Benefits!</h2>
        <div className="devops-benefits-grid">
          <div className="devops-benefit-item">
            <Image
              src="/image/devops/compass.png"
              alt="Quality Icon"
              width={50}
              height={50}
            />
            <div className="devops-benefit-content">
              <h3>Enhance the Quality of Projects:</h3>
              <p>
                Automates our ability to build throughput for a collaborative
                pipeline to reduce getting the right hand side of its high
                output of the environment pipeline. This enables us secure
                accurate, rapid and optimally feedback.
              </p>
            </div>
          </div>

          <div className="devops-benefit-item">
            <Image
              src="/image/devops/grid.png"
              alt="Ownership Icon"
              width={50}
              height={50}
            />
            <div className="devops-benefit-content">
              <h3>Insight Ownership:</h3>
              <p>
                Use our DevOps Manager to achieve developed future annual of our
                business on establishing and creating quality monitoring and
                control systems.
              </p>
            </div>
          </div>

          <div className="devops-benefit-item">
            <Image
              src="/image/devops/pointing-right.png"
              alt="Risk Icon"
              width={50}
              height={50}
            />
            <div className="devops-benefit-content">
              <h3>Continuous Assessment of Business Risks:</h3>
              <p>
                In accordance with above, continuous testing is critical. Our
                business has opened up an ongoing level of sustainability for
                our clients across all stakeholders in zero drive.
              </p>
            </div>
          </div>

          <div className="devops-benefit-item">
            <Image
              src="/image/devops/simit.png"
              alt="Transformation Icon"
              width={50}
              height={50}
            />
            <div className="devops-benefit-content">
              <h3>DevOps Transformation:</h3>
              <p>
                We firmly believe that DevOps transformation is invaluable for
                all customer-oriented customers. Inspired as well as focusing
                the adequacy of our devices, we are committed to implementing
                our capabilities with DevOps client-centric solutions.
              </p>
            </div>
          </div>

          <div className="devops-benefit-item">
            <Image
              src="/image/devops/pointing-right.png"
              alt="Consulting Icon"
              width={50}
              height={50}
            />
            <div className="devops-benefit-content">
              <h3>DevOps Consulting:</h3>
              <p>
                Guidance further on these innovative products which enable us to
                realize our engagement to others. This project is based on a
                wider the best funding providers in the process.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="devops-center-text-section">
        <h1>
          Let&apos;s Build And Deliver Software Quicker, In A Repeatable And
          Consistent Way!
        </h1>
        <p>
          Every business understands the frequent delivery of new codes and
          features for the products on well as completion and security of this
          process.
        </p>
        <p>
          Our clients cannot then take its recent rapid delivery of top-notch
          application process, but this is accelerated.
        </p>
      </div>
    </>
  );
}
