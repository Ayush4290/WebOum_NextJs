import Image from "next/image";
import "./digital-marketing-solutions.css";
import SubHeader from "@/app/sub-header/page";
import Days from "../days/page";

export default function Digital() {
  return (
    <>
      <SubHeader title="Digital Marketing Solutions" />
      <div className="digital-container">
        {/* Hero Section */}
        <section className="digital-hero-section digital-content-box">
          <h1>Digital Solutions to Grow Your Business</h1>
          <p>
            At Weboum, we understand the power of digital presence. Our expert
            team helps businesses expand their reach, engage their audience, and
            boost conversions through customized strategies. Whether you're a
            small startup or an established brand, we offer the tools and
            expertise you need to succeed online.
          </p>
        </section>

        {/* Digital Benefits Section - UPDATED */}
        <section className="digital-benefits-section">
          <div className="digital-benefits-wrapper">
            <div className="digital-benefits-image">
              <Image
                src="https://weboum.com/wp-content/uploads/2024/11/images-2.png"
                alt="Digital Illustration"
                width={500}
                height={400}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="digital-benefits-content">
              <h2>
                Digital Investment Without Multiples of Return? You're Not Doing
                it Correctly!
              </h2>
              <p>
                Social media has the power to transform your business. But if
                you're not seeing results, your campaign may not be reaching its
                potential. Partnering with experts ensures a proven strategy can
                elevate your brand, leveraging the full benefits of social
                platforms. With our tailored social media services, watch your
                business rise above the competition and become a major social
                media player.
              </p>
              <p>
                If your digital investment isn't yielding substantial returns,
                it's likely due to ineffective strategies or poor execution.
                Successful digital isn't just about spending—it's about reaching
                the right audience, optimizing campaigns, and measuring results.
                Using the right mix of SEO, PPC, content creation, and social
                media can significantly amplify your returns. Continuous
                monitoring and adjustment are key to ensuring your strategy
                stays on track and drives growth.
              </p>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="digital-social-media-section digital-content-box">
          <div className="digital-social-media-content">
            <h2>Engage in Conversation with the Top Social Media Firm!</h2>
            <p>
              No matter your industry or business type, our social media
              management team is fully equipped to assist companies across all
              sectors. We provide tailored strategies to help businesses succeed
              on social platforms, regardless of their niche or target market.
            </p>
            <p>
              We recognize that every business has unique needs, which is why we
              offer customized social media services. Whether you're focused on
              one platform or multiple, our experts will create a strategy
              tailored specifically to your goals. This approach ensures that
              your business gets the most effective social media plan to
              maximize engagement and growth.
            </p>
          </div>
          <div className="digital-social-media-image">
            <Image
              src="https://weboum.com/wp-content/uploads/2024/11/images-1-1.jpg"
              alt="Social Media"
              width={600}
              height={500}
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>

        {/* Services Section - UPDATED */}
        <section className="digital-services-section">
          <div className="digital-services-wrapper">
            <div className="digital-services-image">
              <Image
                src="https://weboum.com/wp-content/uploads/2024/11/What-is-Digital-Marketing-768x512-1.jpg"
                alt="Digital Services"
                width={500}
                height={400}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="digital-services-content">
              <h2>How Services for Digital Promote Business Development</h2>
              <p>
                Digital services empower businesses of all sizes to promote
                their brands 24/7 at minimal costs. Whether you're a startup,
                mid-sized company, or multi-location enterprise, digital enables
                you to expand your reach, connect with target audiences, and
                offer products and services anytime, anywhere, overcoming time
                and location barriers.
              </p>
              <p>
                Partnering with an internet agency is an excellent way to
                connect with new prospects while nurturing strong relationships
                with existing customers. A solid digital presence ensures your
                business remains visible and accessible, allowing customers to
                find and engage with you easily.
              </p>
            </div>
          </div>
        </section>

        {/* Social Media Benefits Section */}
        <section className="digital-social-media-benefits digital-content-box">
          <h2>Social Media Will Benefit Your Brand in This Way!</h2>
          <p>
            Social Media is a considerable aspect of Digital. It helps
            businesses in several ways. Hire experienced social media managers
            from Weboum Technology to obtain the following benefits for your
            business.
          </p>
          <div className="digital-benefits-grid">
            <div className="digital-benefit-item">
              <span className="digital-benefit-icon">📦</span>
              <div className="digital-benefit-content">
                <h3>Fast Resolution of Issues:</h3>
                <p>
                  As a social media agency, we understand the importance of
                  responding to feedback, especially negative comments. Reacting
                  swiftly and professionally helps protect your brand image and
                  resolve potential issues before they escalate. Our team is
                  dedicated to addressing concerns promptly and ensuring your
                  business maintains a positive online reputation.
                </p>
              </div>
            </div>
            <div className="digital-benefit-item">
              <span className="digital-benefit-icon">🔗</span>
              <div className="digital-benefit-content">
                <h3>Get in Touch with End Users:</h3>
                <p>
                  Social media enables seamless connections between brands and
                  consumers, fostering mutual understanding through consumer
                  insights and user-generated content. By engaging directly with
                  your audience, you gain valuable feedback that helps shape
                  your strategies and brand image.
                </p>
              </div>
            </div>
            <div className="digital-benefit-item">
              <span className="digital-benefit-icon">📢</span>
              <div className="digital-benefit-content">
                <h3>Awareness of Brands:</h3>
                <p>
                  Social media platforms provide a direct connection between
                  brands and their audiences. By reaching the right target
                  market, Weboum Technology helps businesses enhance brand
                  awareness and foster meaningful engagement. With tailored
                  strategies, we ensure your brand stands out and resonates with
                  users.
                </p>
              </div>
            </div>
            <div className="digital-benefit-item">
              <span className="digital-benefit-icon">💰</span>
              <div className="digital-benefit-content">
                <h3>Increase Sales:</h3>
                <p>
                  By harnessing the power of influencer, product posts, and
                  features like Instagram Shop, Weboum Technology can help drive
                  your business's sales growth. Our strategies leverage these
                  tools to increase visibility, engagement, and conversion,
                  ensuring your brand connects with the right audience
                  effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="digital-weboum-benefits digital-content-box">
          <div className="digital-weboum-intro">
            <h2>On Social Media, Give Your Brand a Voice!</h2>
            <p>
              We specialize in creating social media pages that align with your
              business's core objectives. After thoroughly understanding your
              brand, we design tailored campaigns that are unique to your
              business, ensuring they capture attention and drive results.
              Research shows that nearly 74% of people turn to social media when
              making purchase decisions. If your business isn't active on these
              platforms, you're missing a significant opportunity. Connect with
              Weboum Technology's social media managers to learn how we can
              integrate social media into your strategy for better results.
            </p>
          </div>

          <div className="digital-weboum-why">
            <h3>Why Use Weboum Technology for Your Work?</h3>
            <ul>
              <li>
                <span className="digital-check-icon">✔</span>
                Solutions that are specifically tailored to our clients'
                requirements and tastes.
              </li>
              <li>
                <span className="digital-check-icon">✔</span>
                Internal team to guarantee the best possible photographs and
                content are used.
              </li>
              <li>
                <span className="digital-check-icon">✔</span>A group of leaders,
                industry professionals, and enthusiasts who are committed to
                producing outcomes.
              </li>
              <li>
                <span className="digital-check-icon">✔</span>
                100% performance-based methodology, and we only bill for
                completed tasks.
              </li>
              <li>
                <span className="digital-check-icon">✔</span>
                Thorough comprehension of social media network user trends,
                patterns, and behaviors.
              </li>
              <li>
                <span className="digital-check-icon">✔</span>
                Technology-driven and analytics-driven integrated approach.
              </li>
            </ul>
            <div className="digital-weboum-note">
              <p>
                It's time to enhance your social media with powerful strategies
                from Weboum Technology. Our team can help you leverage the best
                tools and techniques to grow your online presence and drive real
                results. We are available to assist you at any moment.
              </p>
              <p>
                <strong>To find the best packages, click here:</strong>
              </p>
              <a
                href="/services/Digital-Marketing-Packages"
                className="digital-cta-button"
              >
                Packages for Digital Marketing
              </a>
            </div>
          </div>
        </section>
      </div>
      <Days />
    </>
  );
}
