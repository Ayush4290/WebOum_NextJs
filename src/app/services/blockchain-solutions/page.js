import "./Blockchain _solution.css";
import Days from "../../about-us/days/page";
import SubHeader from "../../sub-header/page";
import Image from "next/image";
import { FaCubes, FaLock, FaNetworkWired } from "react-icons/fa";

export const metadata = {
  title: "Blockchain Solutions - Weboum Technology Pvt. Ltd",
};

export default function BlockchainSolutionSection() {
  return (
    <>
      <SubHeader title="Blockchain Solutions" />
      <div className="blockchainSolution">
        <section className="blockchainSolution-intro">
          <div className="blockchainSolution-row">
            <div className="blockchainSolution-text">
              <h2>
                Transform your business with <br />
                <strong>Secure Blockchain Solutions!</strong>
              </h2>
              <p>
                Blockchain technology revolutionizes how businesses operate by
                providing unparalleled security, transparency, and efficiency.
                At Weboum Technology, we harness the power of blockchain to
                create decentralized solutions that enhance trust and streamline
                processes.
              </p>
              <p>
                From smart contracts to decentralized applications (dApps), our
                blockchain solutions are tailored to meet modern business needs.
                Stay ahead in the digital era with cutting-edge technology that
                ensures data integrity and operational excellence.
              </p>
            </div>
            <div className="blockchainSolution-image">
              <Image
                src="https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/6279469991ca96336ff3ef6f_6262d73d58d1fa39509a9129_blockchain-crypto-webflow-template.png"
                alt="Blockchain Technology"
                width={600}
                height={400}
                priority
              />
            </div>
          </div>

          <div className="blockchainSolution-more-info">
            <h3>Empower Your Business with Decentralized Innovation</h3>
            <p>
              At Weboum Technology, we specialize in delivering blockchain
              solutions that drive growth and security. Our team of experts
              designs and implements blockchain systems that align with your
              business goals, ensuring scalability and reliability.
            </p>
            <h3>Blockchain: The Future of Trust and Efficiency</h3>
            <p>
              Our blockchain services provide a competitive edge by enabling
              secure transactions, reducing intermediaries, and enhancing data
              transparency. Whether you're in finance, supply chain, or
              healthcare, our solutions are designed to elevate your operations.
            </p>
            <p>
              We offer end-to-end blockchain development, from ideation to
              deployment, ensuring your business leverages the full potential of
              this transformative technology.
            </p>
            <p>
              Contact Weboum Technology today to build a secure, decentralized
              future for your business.
            </p>
          </div>
        </section>

        <section className="blockchainSolution-services-section light">
          <div className="blockchainSolution-row">
            <div className="blockchainSolution-image-box">
              <Image
                src="https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2024-10/Blockchain%20Technology%20from%20Builtin.jpg"
                alt="Blockchain Services"
                width={600}
                height={400}
                priority
              />
            </div>
            <div className="blockchainSolution-text-box">
              <h2>What You Get from Our Blockchain Services?</h2>
              <p>
                Weboum Technology leads the way in blockchain innovation,
                offering services that empower businesses across industries. Our
                solutions are designed to enhance security, reduce costs, and
                improve efficiency.
              </p>
              <p>Our blockchain development commitments include:</p>
              <ul>
                <li>Secure and scalable blockchain architectures.</li>
                <li>Rleid development and deployment cycles.</li>
                <li>Customized solutions tailored to your industry.</li>
                <li>
                  Ongoing support and maintenance for seamless operations.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="blockchainSolution-offers">
          <h2>Blockchain Services We Offer!</h2>
          <p>
            Weboum Technology provides a comprehensive suite of blockchain
            services to meet diverse business requirements.
          </p>
          <div className="blockchainSolution-grid">
            <div className="blockchainSolution-box">
              <h4>🔗 Smart Contract Development</h4>
              <p>
                We design and deploy secure smart contracts that automate
                processes, reduce costs, and ensure trustless execution on
                blockchain networks.
              </p>
            </div>
            <div className="blockchainSolution-box">
              <h4>🌐 Decentralized Applications (dApps)</h4>
              <p>
                Our team builds intuitive and scalable dApps that enhance user
                engagement and leverage blockchain's decentralized nature.
              </p>
            </div>
            <div className="blockchainSolution-box">
              <h4>💸 Cryptocurrency Solutions</h4>
              <p>
                From wallet development to token creation, we offer end-to-end
                cryptocurrency solutions that drive financial innovation.
              </p>
            </div>
            <div className="blockchainSolution-box">
              <h4>📦 Supply Chain Blockchain</h4>
              <p>
                Enhance transparency and traceability in your supply chain with
                our blockchain solutions, ensuring authenticity and efficiency.
              </p>
            </div>
          </div>
        </section>

        <section className="blockchainSolution-results">
          <h2>Results Driven by Our Blockchain Solutions!</h2>
          <div className="blockchainSolution-result-grid">
            <div className="blockchainSolution-result-card">
              <div className="blockchainSolution-icon">
                <FaCubes style={{ color: "#005f73", fontSize: "40px" }} />
              </div>
              <h3>Enhanced Security</h3>
              <p>
                Our blockchain solutions ensure data integrity and protection
                against unauthorized access, safeguarding your business.
              </p>
            </div>
            <div className="blockchainSolution-result-card">
              <div className="blockchainSolution-icon">
                <FaLock style={{ color: "#005f73", fontSize: "40px" }} />
              </div>
              <h3>Improved Transparency</h3>
              <p>
                Blockchain's immutable ledger provides unparalleled
                transparency, building trust with your stakeholders and
                customers.
              </p>
            </div>
            <div className="blockchainSolution-result-card">
              <div className="blockchainSolution-icon">
                <FaNetworkWired
                  style={{ color: "#005f73", fontSize: "40px" }}
                />
              </div>
              <h3>Operational Efficiency</h3>
              <p>
                Automate processes and eliminate intermediaries with our
                blockchain solutions, reducing costs and boosting efficiency.
              </p>
            </div>
          </div>
          <p className="blockchainSolution-note">
            Ready to revolutionize your business with blockchain? Contact Weboum
            Technology to get started!
          </p>
        </section>
      </div>
      <Days />
    </>
  );
}
