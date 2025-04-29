"use client";

import Days from "@/app/about-us/days/page";
import SubHeader from "@/app/sub-header/page";
import "./content-writing.css";

export default function ContentWriting() {
  return (
    <>
      <SubHeader title="Content Writing" />
      <section className="content-section">
        <div className="content-container">
          <div className="content-custom-row">
            <div className="content-column">
              <h2 className="content-heading-bold">
                Let's build your business with content that attracts, acquaints,
                engages, and sells!
              </h2>
              <p className="content-mt-3">
                Content is often hailed as the cornerstone of the digital realm.
                Today’s discerning internet users will quickly leave your
                website if it fails to deliver the information they seek. While
                captivating designs may initially draw attention, they alone
                cannot retain your audience.
              </p>
              <p>
                This is where exceptional content takes center stage. It plays a
                pivotal role in determining your ranking on search engine
                results pages (SERPs). To significantly increase your website’s
                traffic, publishing high-quality content is essential.
              </p>
            </div>
            <div className="content-column content-center">
              <img
                src="/image/content-wrinting-1.png"
                alt="Illustration"
                className="content-img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="content-section content-bg-light-blue">
        <div className="content-container">
          <h3 className="content-heading-bold content-mb-4">
            Let's tell your story in the most captivating manner!
          </h3>
          <p>
            Give our content writers, Weboum Technology, a chance to tell the
            story of your brand in an appealing manner.
          </p>
          <p>
            It is rightly said that for the public to buy your products, they
            need to buy your story first. The importance of content is beyond
            words. Thus, you must always choose the best content writing company
            to meet all your content-related needs.
          </p>
          <p>
            People will not engage with belligerent wordings used and long
            explanations, instead, they are attracted towards crisper content.
            If your content saves them time and energy, they will feel that
            their decision of checking your brand out was right. Make every
            impression in front of your prospects to tickle their fancy.
          </p>
          <p>
            Looking for one? Congratulations! You have landed at the correct
            place. Weboum Technology is your one-stop solution to all your
            content writing needs.
          </p>
          <p>
            Our professionals have years of experience and they are well aware
            of the major strategies followed in the industry. You can rely on
            them to churn out high-quality content that will
          </p>
        </div>
      </section>

      {/* Section 3: Strategies */}
      <section className="content-section">
        <div className="content-container content-center-text">
          <h3 className="content-heading-bold">
            Content Writing Strategies To Boost Your SERP Ranking :
          </h3>
          <p className="content-text-muted content-mb-5">
            Our content writing process involves the following steps:
          </p>

          <div className="content-strategy-grid">
            <div className="content-strategy-item">
              <div className="content-icon content-text-danger">
                <span className="content-search-icon"></span>
              </div>
              <div>
                <h5 className="content-heading-bold content-text-danger">
                  Keyword Research:
                </h5>
                <p>
                  At first, our professionals find the fitting keywords to be
                  inserted in your content. We make sure that the targeted
                  audience can relate to the keywords used in the contents of
                  your website, thereby boosting its ranking on the SERPs.
                </p>
              </div>
            </div>

            <div className="content-strategy-item">
              <div className="content-icon content-text-purple">
                <span className="content-binoculars-icon"></span>
              </div>
              <div>
                <h5 className="content-heading-bold content-text-purple">
                  Competitor Research:
                </h5>
                <p>
                  In the next step, we research your competitor and check what
                  heading and subheadings they have covered in their article.
                </p>
              </div>
            </div>

            <div className="content-strategy-item">
              <div className="content-icon content-text-pink">
                <span className="content-pencil-icon"></span>
              </div>
              <div>
                <h5 className="content-heading-bold content-text-pink">
                  Writing:
                </h5>
                <p>
                  According to the research done, we churn out high-quality
                  content for you. Then, we insert the keywords as naturally as
                  possible so that the search engines can easily pick them up.
                  We then check the content on various premium tools to ensure
                  that it is of high quality.
                </p>
              </div>
            </div>

            <div className="content-strategy-item">
              <div className="content-icon content-text-purple">
                <span className="content-journal-icon"></span>
              </div>
              <div>
                <h5 className="content-heading-bold content-text-purple">
                  Proofreading:
                </h5>
                <p>
                  It is one of the most important steps. We look for any errors
                  that we have made while reading. Once we ensure that it is
                  good to go, we hand it over to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="content-section content-bg-light-blue">
        <div className="content-container">
          <div className="content-custom-row">
            <div className="content-column content-center">
              <img
                src="/image/content-wrinting.png"
                alt="Enhance Content"
                className="content-img-fluid"
              />
            </div>
            <div className="content-column">
              <h4 className="content-heading-bold">
                Let's Enhance The Already Published Content On Your Site!
              </h4>
              <p>
                We use the latest tools to enhance the content already published
                on your website. We modify the old content and recreate it into
                highly user-friendly content.
              </p>
              <p>
                We also deal with format management, web-based publishing,
                indexing search etc. You stay rest assured with our effective
                content creation services that our experts will churn out
                high-quality content that will help you rank higher on the
                SERPs. Avail of our services to reach the maximum number of
                potential clients.
              </p>
              <p>
                Reach out to us today and avail of our services. Feel free to
                contact us anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      <Days />
    </>
  );
}
