"use client";

import Days from "@/app/about-us/days/page";
import SubHeader from "@/app/sub-header/page";
import "./graphic-design.css";
import Image from "next/image";

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
                Creatively Designed Graphics!
              </h2>
              <p>
                There is a reason why graphics work like magic for a website.
                With ingeniously designed graphics you can transform a bland
                site into a powerful and striking communication channel for your
                brand. Some stunning photographs can set an emotional tone or
                augment the already existing one.
              </p>
              <p>
                Staying up-to-date with the world of design is essential. As new
                concepts emerge, design continually changes, and old concepts
                need to be changed or modified. This is where you need to be at
                your best as far as graphic designing is concerned. There’s no
                limit to what you can get designed at Weboum Technology.
              </p>
            </div>
            <div className="graphicDesign-image">
              <Image
                src="/image/graphic-design.jpg"
                alt="Graphic Design"
                width={600}
                height={400}
              />
            </div>
          </div>

          <div className="graphicDesign-more-info">
            <h3>
              Communicate Your Idea To In An Imaginative Way And Let The
              Creativity Flow!
            </h3>
            <p>
              At Weboum Technology, we offer a multitude of graphic designing
              services and much more in the design spectrum. Your business and
              website are too dependent on what you are showing to your
              consumers. It is the graphic design that makes the idea and
              content of your business look more trustworthy and professional.
              Compelling graphic design is crucial for your business to increase
              your sales.
            </p>
            <h3>
              Graphics are the most innovative tools to convey your message!
            </h3>
            <p>
              At Weboum Technology, we know the craft of designing creative
              graphics like the back of our hand, and this makes us one of the
              leading and passionate graphic design service providers. We
              provide a competitive edge to businesses by offering compelling
              graphic designs to make your business stand out.
            </p>
            <p>
              We have some of the most creative minds working for us that
              produce attention-grabbing designs and visuals for flyers,
              banners, e-books, brochures, business cards, and much more.
            </p>
            <p>
              We know how important it is to establish your great brand identity
              in the market and that is why we aim to produce designs that would
              become the identity of your brand. With tough competition in the
              digital space, it becomes difficult for the brands to create brand
              awareness. With the help of captivating designs created by our
              team, you will have a great impression of your business in the
              minds of your prospects.
            </p>
            <p>
              The designs created by our team are a complete mixture of
              outstanding creative skills and professionalism. Contact our team
              today, to establish an attractive business profile in the online
              world.
            </p>
            <p>
              Hire no other than Weboum Technology to create a strong online
              presence in the competitive online world.
            </p>
          </div>
        </section>

        <section className="graphicDesign-services-section light">
          <div className="graphicDesign-row">
            <div className="graphicDesign-image-box">
              <Image
                src="/image/graphic-design-2-1024x690.jpg"
                alt="Graphic Services"
                width={600}
                height={400}
              />
            </div>
            <div className="graphicDesign-text-box">
              <h2>What You Get From Our Graphic Designing Services?</h2>
              <p>
                Weboum Technology is a pioneer in the graphic design space, and
                the services contain several benefits for businesses, operating
                in all industries. Our team of designers create magnificent
                designs that will transform your business standard across all
                digital platforms.
              </p>
              <p>
                The commitment made by our graphics designing team includes:
              </p>
              <ul>
                <li>Streamlined Communication.</li>
                <li>
                  Quick turnaround time and timely delivery of the projects.
                </li>
                <li>Unique, professional, creative and graphic designs.</li>
                <li>Regular follow-ups to get the curated designs approved.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="graphicDesign-offers">
          <h2>Graphics Design Services We Offer!</h2>
          <h6>
            Weboum Technology offers a host of designing services for unique
            business needs.
          </h6>
          <div className="graphicDesign-grid">
            <div className="graphicDesign-box">
              <h4>🖐️ Social Media Design</h4>
              <p>
                We have a team of professional designers at your service who are
                committed to delivering personalized designs to compel your
                audience on social media platforms. Our designs help develop a
                powerful bond between your brand and consumers.
              </p>
            </div>
            <div className="graphicDesign-box">
              <h4>🎯 Branding and Logo Design</h4>
              <p>
                When it comes to logo designs, we offer unmatched services at
                cost-effective rates. Our logo designers are all highly creative
                and create a logo that will depict the message of your brand
                effectively.
              </p>
            </div>
            <div className="graphicDesign-box">
              <h4>📱 Mobile App Design</h4>
              <p>
                We deliver intuitive and attractive mobile app designs that lay
                an engaging platform down and also improve the online growth of
                your business.
              </p>
            </div>
            <div className="graphicDesign-box">
              <h4>✨ Website UI and UX Design</h4>
              <p>
                We use a user-centric approach in designing graphics for
                businesses. The level of dedication enables us to create awesome
                graphic designs that boost the engagement of your consumers and
                prospects.
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
              <p>
                Our team of experts will help you witness significant
                improvements in terms of SERP ranking. User-friendly websites
                will make you attain higher ranks..
              </p>
            </div>
            <div className="graphicDesign-result-card">
              <div className="graphicDesign-icon">
                <FaCompressArrowsAlt
                  style={{ color: "#6a005f", fontSize: "40px" }}
                />
              </div>
              <h3>Enhanced Usability</h3>
              <p>
                Our team of designers work collectively to enhance the user
                experience of your website. Several different components are
                worked on collectively to attain desired results..
              </p>
            </div>
            <div className="graphicDesign-result-card">
              <div className="graphicDesign-icon">
                <FaVectorSquare
                  style={{ color: "#6a005f", fontSize: "40px" }}
                />
              </div>
              <h3>Competitive Advantage</h3>
              <p>
                Excellent user experience will help you get ahead of the
                competition. User experience has everything to do with how
                consumers perceive your products or services.
              </p>
            </div>
          </div>
          <p className="graphicDesign-note">
            Need someone who can use their creative skills to make a design that
            you desire? Weboum Technology is what you&rsquo;re looking for. Feel free
            to contact us!
          </p>
        </section>
      </div>
      <Days />
    </>
  );
}
