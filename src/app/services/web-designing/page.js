"use client";

import Days from "@/app/about-us/days/page";
import SubHeader from "@/app/sub-header/page";
import "./web-designing.css";

const WebsiteDesign = () => {
  return (
    <>
      <SubHeader title="Website Designing" />
      <section className="design-section">
        <div className="container">
          {/* First Block */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <h3 className="section-title">
                Entice your website visitors with
                <br /> jaw-dropping website designs!
              </h3>
              <p className="fst-italic mt-3">
                Hire web design experts to create compelling website designs and
                easily convert your visitors into consumers.
              </p>
              <p>
                Are you running a business for quite some time now but still
                haven't tapped the power of the internet by taking the online
                route? Want to create a website right from scratch or facelift
                one you already have? Our competent{" "}
                <strong>web designers at</strong> Weboum Technology will go
                beyond your expectations in terms of enactment and
                functionality.
              </p>
            </div>

            {/* Right Image */}
            <div className="col-md-6 text-center">
              <img
                src="/image/web design.png"
                alt="Website Design"
                className="img-fluid"
              />
            </div>
          </div>

          {/* Second Block */}
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img
                src="/image/web-design 2.png"
                alt="Design Team"
                className="img-fluid"
              />
            </div>

            {/* Right Text */}
            <div className="col-md-6">
              <h4 className="section-title">
                We leave no stone unturned to
                <br /> Drive Superior Outcomes!
              </h4>
              <p>
                Utilizing cutting-edge technologies, we help you entice your
                users with compelling designs and help them understand more
                about your product or service. The needs of consumers are
                evolving continuously, and in an ever-changing world, it is
                crucial to stay on top.
              </p>
              <p>
                Avail of our responsive website and mobile application design
                services to take your business to the next level. We understand
                that no two businesses are alike, and hence offer services that
                are most suitable for your business.
              </p>
              <p>
                With years of experience in the industry, we are well-aware of
                what works and what doesn't. Our extensive expertise helps us
                deliver results-driven design services. We offer bespoke designs
                and have the best consultants, UI/UX designers, experts in our
                team to cater to varied needs.
              </p>
            </div>
          </div>

          {/* Third Block */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <h3 className="section-title">
                Let our experts make your website
                <br /> design project a huge success!
              </h3>
              <p>
                We design websites, keeping your prospects and consumer behavior
                in mind. Different designs work for distinct businesses since
                the consumers have different mindsets. We ensure providing
                modern website design solutions to provide a competitive edge to
                our consumers. <br />
                When a consumer lands on your website, it takes only a few
                minutes for them to decide whether they will shop from you or
                not. We help our consumers make complete utilization of a few
                seconds, and design websites in such a way that they are bound
                to stay.
                <br />
                We offer a host of effective website design services to
                stimulate the growth of your business in the online world.
                Whether you are looking to get an eCommerce website designed or
                any other website, we cater to all your specific needs. Ranging
                from simpler websites to complicated ones, our website design
                team will help you bring your vision to life.
              </p>
            </div>

            {/* Right Image */}
            <div className="col-md-6 text-center">
              <img
                src="/image/webdesign3.jpg"
                alt="Website Design"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <div className="why-choose-us">
        <h2>Why Choose Weboum Technology As Your Website Design Partner?</h2>
        <ul>
          {[
            "Dynamic and proven Approach",
            "Affordable and high-quality web design services.",
            "We use the latest technology and keep our team updated with the latest design trends.",
            "Extensive experience in designing websites, and have earned a good reputation in the industry.",
            "We provide the best security features to the websites designed to safeguard crucial information of our clients.",
            "We design and develop websites that are SEO friendly and capable of ranking high on search engines.",
            "No hidden costs charged. We have customized plans for businesses, according to the services they avail.",
            "100% free lifetime technical support.",
            "Tab and smartphone friendly, fully responsive websites.",
            "Our team is always available at your service and will keep you updated with the latest progress made.",
          ].map((point, idx) => (
            <li key={idx}>
              <span className="tick">✔️</span>
              <span className="highlight">{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <Days />
    </>
  );
};

export default WebsiteDesign;
