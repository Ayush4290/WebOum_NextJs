'use client';

import Days from "@/app/about-us/days/page";
import SubHeader from "@/app/sub-header/page";
import "./content-writing.css"


export default function ContentWriting() {
  return (
    <>
      <SubHeader title="Content Writing" />
      <section className="section">
        <div className="container">
          <div className="custom-row">
            <div className="column">
              <h2 className="heading-bold">
                Let's build your business with
                <br />
                content that attracts, acquaints,
                <br />
                engages, and sells!
              </h2>
              <p className="mt-3">
                Content is often hailed as the cornerstone of the digital realm. Today’s discerning internet users will quickly leave your website if it fails to deliver the information they seek. While captivating designs may initially draw attention, they alone cannot retain your audience.
              </p>
              <p>
                This is where exceptional content takes center stage. It plays a pivotal role in determining your ranking on search engine results pages (SERPs). To significantly increase your website’s traffic, publishing high-quality content is essential.
              </p>
            </div>
            <div className="column center">
              <img
                src="/image/content-wrinting-1.png"
                alt="Illustration"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="section bg-light-blue">
        <div className="container">
          <h3 className="heading-bold mb-4">
            Lets' tell your story in the most captivating manner!
          </h3>
          <p>
            Allow the skilled content writers at Weboum Technology to narrate your brand’s story in a compelling and engaging way.
          </p>
          <p>
            As the saying goes, for customers to invest in your products, they must first connect with your story. The value of impactful content cannot be overstated, making it crucial to partner with a top-tier content writing company to fulfill all your content needs.
          </p>
          <p>
            Audiences are unlikely to engage with aggressive language or lengthy explanations; instead, they gravitate toward concise, clear content. When your content saves them time and effort, it reinforces their decision to explore your brand, leaving a lasting impression that piques their interest.
          </p>
          <p>
            Searching for the right partner? Look no further! Weboum Technology offers a comprehensive solution for all your content writing requirements.
          </p>
          <p>
            Our seasoned professionals bring years of expertise and a deep understanding of industry-leading strategies. You can trust them to deliver high-quality content that drives results.
          </p>
        </div>
      </section>

      {/* Section 3: Strategies */}
      <section className="section">
        <div className="container center-text">
          <h3 className="heading-bold">
            Content Writing Strategies To Boost Your SERP Ranking :
          </h3>
          <p className="text-muted mb-5">
            Our content writing process involves the following steps:
          </p>

          <div className="strategy-grid">
            <div className="strategy-item">
              <div className="icon text-danger">
                <span className="search-icon"></span>
              </div>
              <div>
                <h5 className="heading-bold text-danger">Keyword Research:</h5>
                <p>
                  Our team begins by identifying relevant keywords to seamlessly integrate into your content. We ensure these keywords resonate with your target audience, enhancing your website’s visibility and ranking on SERPs.
                </p>
              </div>
            </div>

            <div className="strategy-item">
              <div className="icon text-purple">
                <span className="binoculars-icon"></span>
              </div>
              <div>
                <h5 className="heading-bold text-purple">
                  Competitor Research:
                </h5>
                <p>
                  Next, we conduct thorough competitor research, analyzing the headings and subheadings they’ve used to inform our content strategy.
                </p>
              </div>
            </div>

            <div className="strategy-item">
              <div className="icon text-pink">
                <span className="pencil-icon"></span>
              </div>
              <div>
                <h5 className="heading-bold text-pink">Writing:</h5>
                <p>
                  Based on our research, we craft high-quality content tailored to your needs. Keywords are incorporated naturally to optimize search engine recognition, and we utilize premium tools to verify the content’s excellence.
                </p>
              </div>
            </div>

            <div className="strategy-item">
              <div className="icon text-purple">
                <span className="journal-icon"></span>
              </div>
              <div>
                <h5 className="heading-bold text-purple">Proofreading:</h5>
                <p>
                  Proofreading is a critical step in our process. We meticulously review the content for errors, ensuring it meets the highest standards before delivering it to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="section bg-light-blue">
        <div className="container">
          <div className="custom-row">
            <div className="column center">
              <img
                src="/image/content-wrinting.png"
                alt="Enhance Content"
                className="img-fluid"
              />
            </div>
            <div className="column">
              <h4 className="heading-bold">
                Let's Enhance The Already Published Content On Your Site!
              </h4>
              <p>
                Using cutting-edge tools, we enhance your website’s existing content, transforming outdated material into highly user-friendly and engaging content.
              </p>
              <p>
                Our services extend to format management, web-based publishing, and search indexing, among others. With our proven content creation expertise, you can trust our specialists to produce high-quality content that elevates your SERP rankings, helping you connect with a broader audience of potential clients.
              </p>
              <p>
                Contact us today to take advantage of our services. We’re available to assist you anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Days />
    </>
  );
}