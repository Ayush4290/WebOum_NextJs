import Days from "../../about-us/days/page";
import SubHeader from "../../sub-header/page";
import Image from "next/image";
import "./product-lifecycle-management.css";

// Metadata for SEO
export const metadata = {
  title: "Product Lifecycle Management – Weboum Technology Pvt. Ltd",
  description:
    "Streamline your product lifecycle with WebOum Technology's PLM solutions, integrating data, processes, and systems for enhanced efficiency and faster market entry.",
};

export default function ProductLifecycleManagement() {
  return (
    <>
      <SubHeader title="Product Lifecycle Management" />
      <div className="page">
        <div className="section-row">
          <div className="section-image">
            <Image
              src="/image/ProductLifecycleManagement/productlifecycle 1.png"
              alt="Product Lifecycle Illustration"
              width={500}
              height={300}
              priority
            />
          </div>
          <div className="section-text">
            <h2 className="section-heading">
              Let WebOum Technology handle your Product Lifecycle Management
              Needs!
            </h2>
            <p>
              Starting from the concept, through design and development, to
              packaging and disposal, Product Lifecycle Management (PLM) is the
              process of managing the product and the product data during the
              complete lifecycle.
            </p>
            <br/>
            <p>
              It integrates data, business systems, processes, and provides a
              product information backbone for businesses. That said, you need
              the best player in the game to get the best product lifecycle
              management solutions. This is where WebOum enters the frame.
            </p>
          </div>
        </div>

        <div className="full-width section-row-2">
          <div className="full-width-inner">
            <div className="SectionPoint">
              <div className="section-text">
                <h2 className="section-heading">
                  Our PLM Solutions Are More Than Just Enabling Technical
                  Capabilities!
                </h2>
                <p>
                  The product lifecycle management solutions offered by our
                  dedicated team of developers at WebOum are focused on
                  providing enhanced visibility of the product and its
                  performance.
                </p>
                <br/>
                <p>
                  A vast range of PLM solutions is established to manage and
                  digitize the entire product lifecycle. The steps include
                  everything right from the conceptualization, to design,
                  installation, manufacturing, maintenance, and finally
                  retirement.
                </p>
                <br/>
                <p>
                  Our development team also works on cutting-edge PLM products
                  to offer services and several other solutions across
                  industries including, aerospace, automotive, retail, hi-tech,
                  and life sciences verticals.
                </p>
              </div>
              <div className="section-image">
                <Image
                  src="/image/ProductLifecycleManagement/product-lifecycle-mangement.jpg"
                  alt="PLM Illustration"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="full-width benefits">
          <div className="full-width-inner">
            <h2 className="section-heading">
              Let’s Check Out A Few Of The Many Benefits Of Our Product
              Lifecycle Management!
            </h2>
            <ul className="list">
              <li>Increased Operational Efficiency.</li>
              <li>Reduced Design and Production Rework.</li>
              <li>Reduced Execution Time.</li>
              <li>Reduced Design and Production Rework.</li>
            </ul>
          </div>
        </div>

        <div className="section-row">
          <div className="section-text">
            <h2 className="section-heading">
              Enter into The Product Market Quickly With Our PL Services!
            </h2>
            <p>
              As a manufacturing company, you are already aware of the time that
              you may have to spend managing the design processes of your
              product. Right? With the introduction of PLM services, you can
              easily get away from the hassle of working with custom
              spreadsheets, homegrown forms, and emails.
            </p>
            <br/>
            <p>
              Our Product Lifecycle Management services let manufacturers easily
              connect people, processes, and data across the lifecycle of the
              product. You are missing out on greater benefits if you have not
              yet implemented PLM in your processes.
            </p>
            <br/>
            <p>
              Businesses that have already implemented PLM realized enhanced
              profitability, better quality product, sustained growth, and quick
              turnaround time to the market.
            </p>
          </div>
        </div>

        <div className="full-width container">
          <div className="full-width-inner">
            <h1 className="main-title">
              PLM Is A Proven Approach And We Know How To Ace It!
            </h1>
            <p className="subtitle">
              With the help of our PLM services, your company can reach higher
              levels of productivity.
            </p>
            <div className="grid">
              <div className="card">
                <Image
                  src="/image/ProductLifecycleManagement/add-searching.png"
                  alt="Rapid Deployment Icon"
                  width={60}
                  height={60}
                />
                <div>
                  <div className="card-title">Rapid Deployment</div>
                  <p>
                    Our PLM services help businesses realize quick and efficient
                    development. When you partner with our team, it will help
                    you craft and analyze the areas in your process that need
                    attention and define a solution.
                  </p>
                </div>
              </div>
              <div className="card">
                <Image
                  src="/image/ProductLifecycleManagement/allocation.png"
                  alt="Elimination of Bottlenecks Icon"
                  width={60}
                  height={60}
                />
                <div>
                  <div className="card-title">Elimination of Bottlenecks</div>
                  <p>
                    Our team will ensure that all project lifecycle systems work
                    cohesively to share all necessary information to provide
                    continuity and visibility.
                  </p>
                </div>
              </div>
            </div>
            <p className="bottom-note">
              Get ready to stay on top of product development projects and
              connect with business systems. Contact our team today to get
              started!
            </p>
          </div>
        </div>
      </div>
      <Days />
    </>
  );
}
