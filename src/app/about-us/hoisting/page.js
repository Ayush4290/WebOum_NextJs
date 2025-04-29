import Image from "next/image";
import "./HostingManagement.css";

export default function WebHosting() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Managed Web Hosting for an Exceptional Online Presence</h1>
          <p>
            Cloudways powers your digital agency, eCommerce store, or online
            business with a fast, secure, and user-friendly cloud hosting platform, supported by 24/7 expert
            assistance.
          </p>
          <div className="hero-buttons">
            <button className="btn primary-btn">
              Start Free Trial
            </button>
            <button className="btn secondary-btn">
              View Plans
            </button>
          </div>
        </div>
        <div className="hero-image">
          <Image
            src="https://weboum.com/wp-content/uploads/2024/11/web-hosting-1.jpg"
            alt="Web Hosting Concept"
            width={500}
            height={500}
          />
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-by">
        <h2>Trusted by 100,000+ businesses like yours</h2>
        <div className="client-logos">
          <Image
            src="https://weboum.com/wp-content/uploads/2024/11/Hostgator.png"
            alt="Hostinger"
            width={100}
            height={50}
          />
          <Image
            src="https://weboum.com/wp-content/uploads/2024/11/Godaddy-1.png"
            alt="GoDaddy"
            width={100}
            height={50}
          />
          <Image
            src="https://weboum.com/wp-content/uploads/2024/11/Hostgator.png"
            alt="HostGator"
            width={100}
            height={50}
          />
          <Image
            src="https://weboum.com/wp-content/uploads/2024/11/Knownhost-1.png"
            alt="Knownhost"
            width={100}
            height={50}
          />
          <Image
            src="https://weboum.com/wp-content/uploads/2024/11/Wordpress-1.png"
            alt="WordPress"
            width={100}
            height={50}
          />
        </div>
      </section>

      {/* WordPress Hosting Section */}
      <section className="wordpress-hosting">
        <div className="wordpress-content">
          <h2>Effortless, Powerful, and Autoscaling WordPress Hosting</h2>
          <p>
            Experience a hosting solution with zero configuration, 1-click
            operations, and true autoscaling with no downtime. Simply host your
            website and focus on growing your business, while Autonomous takes
            care of everything else!
          </p>
          <button className="btn primary-btn">
            Get Started
          </button>
        </div>
        <div className="testimonial">
          <div className="quote-icon">
            <i className="fas fa-quote-left"></i>
          </div>
          <div className="testimonial-content">
            <p>
              "As a long-time Cloudways user, I've been thrilled with the
              platform! During early access, my site, TechYorker, experienced
              several traffic spikes. Thanks to auto-scaling, I never had to
              worry about upgrading or downgrading servers. I couldn't be more
              satisfied with the product!"
            </p>
          </div>
          <div className="pagination">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="success-story">
        <h2>
          Create Your Success Story <span>Effortlessly</span>
        </h2>
        <p>
          Save time and reduce costs with our easy-to-use managed cloud hosting
          solutions that offer outstanding performance and value.
        </p>
      </section>

      {/* Server Options Section */}
      <section className="server-options">
        <div className="tabs">
          <button className="tab-btn active">Cloud Server</button>
          <button className="tab-btn">VPS</button>
          <button className="tab-btn">Dedicated</button>
        </div>

        <div className="cloud-providers">
          <div className="provider-card">
            <div className="provider-logo">
              <Image
                src="https://weboum.com/wp-content/uploads/2024/11/Aws.png"
                alt="AWS Logo"
                width={100}
                height={50}
              />
            </div>
            <h3>AWS (Amazon Web Services)</h3>
            <p>
              The industry-leading AWS (Amazon Web Services) has been providing world-leading cloud technologies that help scale operations. Our secure, built-for-business platform features computing, networking, and tools for a better experience.
            </p>
            <a href="#" className="learn-more">
              Learn More
            </a>
          </div>

          <div className="provider-card">
            <div className="provider-logo">
              <Image
                src="https://weboum.com/wp-content/uploads/2024/11/Azure.png"
                alt="Azure Logo"
                width={100}
                height={50}
              />
            </div>
            <h3>Azure</h3>
            <p>
              Microsoft-powered cloud computing platform and service. Thanks to its robust infrastructure, it manages, provides access to, and develops applications and services for people, businesses, and governments.
            </p>
            <a href="#" className="learn-more">
              Learn More
            </a>
          </div>

          <div className="provider-card">
            <div className="provider-logo">
              <Image
                src="https://weboum.com/wp-content/uploads/2024/11/Google.png"
                alt="Google Cloud Logo"
                width={100}
                height={50}
              />
            </div>
            <h3>(GCP) Google Cloud Platform</h3>
            <p>
              Google Cloud Platform (GCP) is Google's suite of cloud computing services, offering a broad range of products across storage, data analytics, and machine learning, as well as management tools.
            </p>
            <a href="#" className="learn-more">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* SMB Hosting Section */}
      <section className="smb-hosting">
        {/* SMB Hosting Header */}
        <section className="hosting-header">
          <div className="hosting-image">
            <Image
              src="https://weboum.com/wp-content/uploads/2024/11/Knownhost.png"
              alt="Support Agent"
              width={500}
              height={500}
            />
          </div>
          <div className="hosting-heading">
            <h2>
              Discover G2's top-rated SMB hosting provider, with a 4.7-star
              rating and trusted by websites across 200+ countries.
            </h2>
            <div className="rating-badges">
              <div className="badge">
                <i className="fas fa-clock"></i>
                <strong>93 Sec</strong>
                <span>Average Resolution Time</span>
              </div>
              <div className="badge">
                <i className="fas fa-percent"></i>
                <strong>98%</strong>
                <span>CSAT Score</span>
              </div>
              <div className="badge">
                <i className="fas fa-headset"></i>
                <strong>24/7</strong>
                <span>Expert Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stat-item">
            <strong>73</strong>
            <span>Industry-Leading NPS</span>
          </div>
          <div className="stat-item">
            <strong>50+</strong>
            <span>Global Data Centers</span>
          </div>
          <div className="stat-item">
            <strong>840k+</strong>
            <span>Websites Hosted</span>
          </div>
        </section>

        {/* App Selection Section */}
        <section className="app-selection">
          <div className="app-technologies">
            <Image
              src="https://weboum.com/wp-content/uploads/2024/11/Choose-Your-App-293x300.png"
              alt="Technology Icons"
              width={450}
              height={350}
            />
          </div>
          <div className="app-content">
            <h2>Choose Your App. Pick a Cloud.</h2>
            <p>
              Choose from WordPress, Magento, Laravel, or PHP apps, all
              optimized to the max, and host them on top cloud services like
              DigitalOcean, Google Cloud, or Amazon Web Service.
            </p>
            <button className="btn primary-btn">
              Launch Now
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="feature-card">
            <Image
              src="https://weboum.com/wp-content/uploads/2024/11/Level-Security.jpg"
              alt="Security Icon"
              width={100}
              height={100}
            />
            <h3>Enterprise-Level Security</h3>
            <p>
              Safeguard your business from threats with our advanced server
              protection offering unmatched security scanning, vulnerability
              alerts, DDoS mitigation, and regular backups.
            </p>
          </div>
          <div className="feature-card">
            <Image
              src="https://weboum.com/wp-content/uploads/2024/11/Team-collaboration.jpg"
              alt="Collaboration Icon"
              width={100}
              height={100}
            />
            <h3>Seamless Team Collaboration</h3>
            <p>
              Effortlessly collaborate by adding team members to your project
              for easy project management, task delegation, file ownership with
              just a few clicks.
            </p>
          </div>
          <div className="feature-card">
            <Image
              src="https://weboum.com/wp-content/uploads/2024/11/Real-Time-Server-Monitoring-1.jpg"
              alt="Monitoring Icon"
              width={100}
              height={100}
            />
            <h3>Real-Time Server Monitoring</h3>
            <p>
              24/7/365 real-time monitoring ensures you can see every server
              event in real-time, knowing everything is being monitored exactly.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}