import Image from "next/image";
import "./HostingManagement.css";

export default function HostingManagement() {
  return (
    <div className="hosting-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Managed Web Hosting for an Exceptional Online Presence
          </h1>
          <p className="hero-subtitle">
            Weboum powers your digital agency, eCommerce store, or online
            business with a fast, secure, and user-friendly cloud hosting
            platform, supported by 24/7 expert assistance.
          </p>
          <div className="hero-buttons">
            <button className="hero-button primary">Start Free Trial</button>
            <button className="hero-button secondary">View Plans</button>
          </div>
        </div>
        <div className="hero-image">
          <Image
            src="/image/development-about.jpg" 
            alt="Web Hosting Globe"
            width={500}
            height={300}
            className="image-rounded"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="features-trusted">
          <p className="trusted-text">
            Trusted by 100,000+ businesses like yours
          </p>
          <div className="trusted-logos">
            <Image
            //   src="/placeholder-ns.png"
              alt="Network Solutions"
              width={100}
              height={50}
            />
            <Image
            //   src="/placeholder-hostinger.png"
              alt="Hostinger"
              width={100}
              height={50}
            />
            <Image
            //   src="/placeholder-godaddy.png"
              alt="GoDaddy"
              width={100}
              height={50}
            />
            <Image
            //   src="/placeholder-hostgator.png"
              alt="HostGator"
              width={100}
              height={50}
            />
            <Image
            //   src="/placeholder-bluehost.png"
              alt="Bluehost"
              width={100}
              height={50}
            />
          </div>
        </div>

        <div className="features-heading">
          <h2 className="features-title">
            Effortless, Powerful, and Autoscaling WordPress Hosting
          </h2>
          <p className="features-quote">
            “As a long-time Weboum user, I’ve been thrilled with the platform!
            During early access, my site, TechYoker, ...”
          </p>
        </div>

        <div className="features-grid">
          <div className="features-item">
            <Image
            //   src="/placeholder-knowhost.png"
              alt="Knowhost"
              width={150}
              height={50}
            />
            <p className="features-text">
              Since founding in 2006, we’ve been building...
            </p>
          </div>
          <div className="features-item">
            <Image
            //   src="/placeholder-bluehost.png"
              alt="Bluehost"
              width={150}
              height={50}
            />
            <p className="features-text">
              Bluehost is the top of the web solutions...
            </p>
          </div>
          <div className="features-item">
            <Image
            //   src="/placeholder-veero.png"
              alt="VeeroTech"
              width={150}
              height={50}
            />
            <p className="features-text">
              Independent 2017 and headquartered in...
            </p>
          </div>
          <div className="features-item">
            <Image
            //   src="/placeholder-hostgator.png"
              alt="HostGator"
              width={150}
              height={50}
            />
            <p className="features-text">
              Best hosting since the early days of...
            </p>
          </div>
          <div className="features-item">
            <Image
            //   src="/placeholder-godaddy.png"
              alt="GoDaddy"
              width={150}
              height={50}
            />
            <p className="features-text">
              Domain names and email hosting since...
            </p>
          </div>
          <div className="features-item">
            <Image
            //   src="/placeholder-hostinger.png"
              alt="Hostinger"
              width={150}
              height={50}
            />
            <p className="features-text">
              Lightning-fast hosting and 24/7 support...
            </p>
          </div>
        </div>

        <div className="features-stats">
          <p className="stats-text">
            Discover G2’s top-rated SMB hosting provider, with a 4.7-star rating
            and trusted by websites across 200+ countries.
          </p>
          <div className="stats-metrics">
            <div className="metric-item">
              <p className="metric-value">93 Sec</p>
              <p className="metric-label">Average Response Time</p>
            </div>
            <div className="metric-item">
              <p className="metric-value">96%</p>
              <p className="metric-label">CSAT Score</p>
            </div>
            <div className="metric-item">
              <p className="metric-value">24/7</p>
              <p className="metric-label">Expert Support</p>
            </div>
          </div>
          <div className="stats-additional">
            <p>73 Industry-leading NPS</p>
            <p>50+ Global Data Centers</p>
            <p>840K+ Turbocharged Websites</p>
          </div>
        </div>

        <div className="features-action">
          <h3 className="action-title">Choose Your App. Pick a Cloud Server</h3>
          <p className="action-subtitle">
            Optimize from the max, and host on top cloud...
          </p>
          <button className="hero-button primary">Launch My Server</button>
        </div>
      </div>
    </div>
  );
}
