import React from "react";

import {
  FaExpandArrowsAlt,
  FaUsersCog,
  FaFileCode,
  FaBolt,
  FaLaptop,
  FaCodeBranch,
  FaProjectDiagram,
  FaCog,
  FaSignInAlt,
  FaMobileAlt,
  FaServer,
  FaWindowMaximize,
  FaTh,
  FaShoppingCart,
  FaArrowsAlt,
  FaCheckCircle,
} from "react-icons/fa";

import SubHeader from "../../sub-header/page";

import "./web-developer.css";
import Days from "../../about-us/days/page";

export const metadata = {
  title: "Web Development - Weboum Technology Pvt. Ltd",
};

export default function WebDevelopment() {
  return (
    <>
      <SubHeader title="Custom Web Development Solutions" />
      <div className="web-development">
        {/* Feature Cards Section */}
        <div className="feature-bg-section">
          <div className="web-container">
            <div className="feature-row">
              <div className="feature-column">
                <div className="feature-card">
                  <FaExpandArrowsAlt className="icons" />
                  <h5>Refreshingly Unique Model:</h5>
                  <p>
                    Transparent & Local Interaction Real-time Collaboration &
                    Accountability Full-time, Dedicated Developers
                  </p>
                </div>
              </div>

              <div className="feature-column">
                <div className="feature-card">
                  <FaUsersCog className="icons" />
                  <h5>One-Stop Development Shop:</h5>
                  <p>
                    2000 In-house Developers
                    <br />
                    Bridge Any Skillset Gap
                    <br />
                    Industry Specific Technical Teams
                  </p>
                </div>
              </div>

              <div className="feature-column">
                <div className="feature-card">
                  <FaFileCode className="icons" />
                  <h5>Low Cost, High Productivity Services:</h5>
                  <p>
                    No Overtime or Hidden Fees
                    <br />
                    Free QA and Free Management
                    <br />
                    Save 50 - 75% on Development Costs!
                  </p>
                </div>
              </div>

              <div className="feature-column">
                <div className="feature-card">
                  <FaBolt className="icons" />
                  <h5>Work for Hire Services:</h5>
                  <p>
                    Start Your Project Within 48 Hours We Foster Long Term
                    Relationships Over 21 Years in Service to Our Customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container features-section">
          <p className="features-intro">
            Whether you require a newly developed website to enhance customer
            engagement, a web portal to improve visibility and organization, or
            a robust and feature-rich web app to automate business processes,
            WTPL has the solution.
          </p>

          <div className="features-row">
            {/* Left Column */}
            <div className="features-column">
              <div className="feature-box">
                <FaLaptop className="feature-icon" size={50} />
                <div>
                  <div className="feature-title">
                    Custom Web Application Development
                  </div>
                  <p className="feature-text">
                    Since not all off-the-shelf applications have all the bells
                    and whistles that you need to optimize your workflow, WTPL
                    can customize and integrate your existing applications to
                    get the job done. We can customize your existing
                    applications for ERP, E-Commerce, Online Training, CRM, and
                    much more.
                  </p>
                </div>
              </div>

              <div className="feature-box">
                <FaCodeBranch className="feature-icon" size={50} />
                <div>
                  <div className="feature-title">Diverse Coding Experience</div>
                  <p className="feature-text">
                    From database design and web app development to cloud
                    consulting, our full-stack developers are experts in
                    JavaScript, PHP, Python, Objective-C, Ruby on Rails, jQuery,
                    AngularJS, Node.js, .NET, and more.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="features-column">
              <div className="feature-box">
                <FaProjectDiagram className="feature-icon" size={50} />
                <div>
                  <div className="feature-title">
                    No Cookie-Cutter Solutions
                  </div>
                  <p className="feature-text">
                    We customize the right tools and frameworks for your needs —
                    from Data Integration, Application Upgrades, API
                    Development, to Deployment & QA — ensuring tailored
                    solutions that hit the mark every time.
                  </p>
                </div>
              </div>

              <div className="feature-box">
                <FaCog className="feature-icon" size={50} />
                <div>
                  <div className="feature-title">
                    Maintenance, Monitoring, & Support
                  </div>
                  <p className="feature-text">
                    We provide ongoing updates, security patching, debugging,
                    and maintenance to ensure your web applications are always
                    running at peak performance and protected against risks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Web Development Solutions Section */}
        <div className="solutions-bg-section">
          <div className="web-container">
            <h2 className="section-title-web">
              Custom Web Development Solutions
            </h2>
            <p className="section-subtitle">
              Our Full-Stack Web Developers have the programming expertise and
              industry-specific experience to build, integrate, and customize
              your website or application to align perfectly with your vision.
            </p>

            <div className="solutions-grid">
              {/* Card 1 */}
              <div className="solution-card-wrapper">
                <div className="solution-card">
                  <FaSignInAlt className="card-icon" />
                  <div className="card-title">
                    Web Application Development Services
                  </div>
                  <div className="card-text">
                    Our back-end developers are experts in Java, PHP, Ruby,
                    Python, SQL, and more while our front-end designers are
                    well-versed in using JavaScript, CSS3, HTML5, and more.
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="solution-card-wrapper">
                <div className="solution-card">
                  <FaMobileAlt className="card-icon" />
                  <div className="card-title">
                    Mobile App Development Services
                  </div>
                  <div className="card-text">
                    Using our many years of experience in mobile app
                    development, our Mobile App Development Team will help you
                    create smooth, seamless experiences on any mobile device.
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="solution-card-wrapper">
                <div className="solution-card">
                  <FaProjectDiagram className="card-icon" />
                  <div className="card-title">
                    Enterprise Web Development Solutions
                  </div>
                  <div className="card-text">
                    We use custom APIs and our vast knowledge of web services to
                    build Enterprise Web Applications for digital marketing,
                    CRM, inventory control, expedited workflows, and so much
                    more.
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="solution-card-wrapper">
                <div className="solution-card">
                  <FaServer className="card-icon" />
                  <div className="card-title">
                    Full-Stack Web Development Solutions
                  </div>
                  <div className="card-text">
                    Our expert Full-Stack Web Developers are highly skilled in
                    Java and SQL programming languages with experience in
                    leading 12-factor applications and cloud platform
                    implementation.
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="solution-card-wrapper">
                <div className="solution-card">
                  <FaWindowMaximize className="card-icon" />
                  <div className="card-title">Web Portal Development</div>
                  <div className="card-text">
                    Our Web Portal Developers have both engineering expertise
                    and a keen understanding of the business sector to create
                    reliable and robust solutions that help companies manage
                    their workflows.
                  </div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="solution-card-wrapper">
                <div className="solution-card">
                  <FaTh className="card-icon" />
                  <div className="card-title">
                    Animation & Graphics Web Design
                  </div>
                  <div className="card-text">
                    Our award-winning animators and graphic designers create
                    beautiful logos, branding materials, illustrations,
                    infographics, motion graphics, and more to fulfill your
                    branding vision.
                  </div>
                </div>
              </div>

              {/* Card 7 */}
              <div className="solution-card-wrapper">
                <div className="solution-card">
                  <FaShoppingCart className="card-icon" />
                  <div className="card-title">
                    E-Commerce Web Development Solutions
                  </div>
                  <div className="card-text">
                    Our Software Development Team uses Magento, Shopify, and/or
                    BigCommerce platforms to create seamless, scalable, and
                    powerful online stores for e-commerce companies of all
                    sizes.
                  </div>
                </div>
              </div>

              {/* Card 8 */}
              <div className="solution-card-wrapper">
                <div className="solution-card">
                  <FaArrowsAlt className="card-icon" />
                  <div className="card-title">Web Integration Services</div>
                  <div className="card-text">
                    We always stay on top of the latest developments in
                    deployment, customization, and integration to create the
                    perfect, seamless approach to how you utilize your software.
                  </div>
                </div>
              </div>

              {/* Card 9 */}
              <div className="solution-card-wrapper">
                <div className="solution-card">
                  <FaExpandArrowsAlt className="card-icon" />
                  <div className="card-title">CMS Integration</div>
                  <div className="card-text">
                    We integrate CMS capabilities into your existing website or
                    application, enabling you to add and edit web content
                    without needing to rewrite or update any code.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="container-process-section">
          <h2 className="section-title-web">
            Our Custom Web Development Process
          </h2>
          <p className="section-subtitle">
            We meet the demands of your business by executing our strategically
            planned processes for delivering top-of-the-line Custom Websites &
            Applications.
          </p>

          <div className="process-row">
            {/* Left Column */}
            <div className="process-column">
              <div className="process-item">
                <FaCheckCircle className="process-icon" />
                <div>
                  <div className="process-title">
                    Custom Web App Development
                  </div>
                  <p className="process-text">
                    We integrate disparate business systems and processes, add
                    web service functionality to your existing applications, and
                    synchronize data across those applications.
                  </p>
                </div>
              </div>

              <div className="process-item">
                <FaCheckCircle className="process-icon" />
                <div>
                  <div className="process-title">Defining Web Application</div>
                  <p className="process-text">
                    Whether you require a Custom Web Development Solution
                    developed from scratch, or a third-party integration to add
                    to your existing app, WTPL can get the job done quickly,
                    effectively, and affordably.
                  </p>
                </div>
              </div>

              <div className="process-item">
                <FaCheckCircle className="process-icon" />
                <div>
                  <div className="process-title">Web Application Structure</div>
                  <p className="process-text">
                    Our developers create a database architecture to effectively
                    collect, store, retrieve, sort, and graph all of your data
                    in your new integrated Custom Website or Application.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="process-column">
              <div className="process-item">
                <FaCheckCircle className="process-icon" />
                <div>
                  <div className="process-title">Research & UX Workflow</div>
                  <p className="process-text">
                    Our Custom Web Developers dive deep into research and
                    analysis to uncover the most effective strategies for
                    improving user experiences across the board.
                  </p>
                </div>
              </div>

              <div className="process-item">
                <FaCheckCircle className="process-icon" />
                <div>
                  <div className="process-title">
                    Third-Party Software Selections
                  </div>
                  <p className="process-text">
                    Our Custom Web Developers research and test the best
                    state-of-the-art technologies, programming languages, and
                    third-party vendors to integrate within your custom website
                    or app.
                  </p>
                </div>
              </div>

              <div className="process-item">
                <FaCheckCircle className="process-icon" />
                <div>
                  <div className="process-title">
                    Prototyping & Design Testing
                  </div>
                  <p className="process-text">
                    We carefully detail out every functional and technical
                    specification to ensure optimized usability, navigation, and
                    functionality within your custom website or application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Front-End Tech Section */}
        <div className="tech-section">
          <div className="web-container">
            <h2>Full-Stack Technology</h2>
            <p className="lead">
              Our Web Developers utilize multiple software platforms, providing
              greater computing power, enhanced graphics, robust security
              standards, and improved performance levels.
              <br />
              <em>Client Software (Front-End)</em>
            </p>

            <div className="tech-grid">
              {/* JS */}
              <div className="tech-card-wrapper">
                <img
                  src="https://weboum.com/wp-content/uploads/2021/05/javascript.png"
                  alt="JavaScript Logo"
                  className="tech-logo"
                />
                <div className="tech-title">Javascript</div>
                <p className="tech-description">
                  Our software developers use JavaScript to calculate,
                  manipulate, and validate different data to create dynamic and
                  interactive user experiences.
                </p>
              </div>

              {/* HTML */}
              <div className="tech-card-wrapper">
                <img
                  src="https://weboum.com/wp-content/uploads/2021/05/html.png"
                  alt="JavaScript Logo"
                  className="tech-logo"
                />
                <div className="tech-title">HTML</div>
                <p className="tech-description">
                  Our Software Development Team has many years of experience
                  working with HTML to develop best-in-class custom websites and
                  applications.
                </p>
              </div>

              {/* JSON */}
              <div className="tech-card-wrapper">
                <img
                  src="https://weboum.com/wp-content/uploads/2021/05/json.png"
                  alt="JavaScript Logo"
                  className="tech-logo"
                />
                <div className="tech-title">JSON</div>
                <p className="tech-description">
                  We use JSON for transmitting web application data in a
                  quicker, more efficient way to optimize the process of
                  building your custom web app.
                </p>
              </div>

              {/* ELM */}
              <div className="tech-card-wrapper">
                <img
                  src="https://weboum.com/wp-content/uploads/2021/05/elm.png"
                  alt="JavaScript Logo"
                  className="tech-logo"
                />
                <div className="tech-title">ELM</div>
                <p className="tech-description">
                  Our team uses ELM&apos;s fast compilation, user-friendliness,
                  and safety benefits to build, integrate, and customize your
                  website or app.
                </p>
              </div>

              {/* AngularJS */}
              <div className="tech-card-wrapper">
                <img
                  src="https://weboum.com/wp-content/uploads/2021/05/angularjs.png"
                  alt="JavaScript Logo"
                  className="tech-logo"
                />
                <div className="tech-title">AngularJS</div>
                <p className="tech-description">
                  We use AngularJS for creating dynamic web applications,
                  leveraging data binding and dependency injection to reduce
                  coding efforts.
                </p>
              </div>

              {/* jQuery */}
              <div className="tech-card-wrapper">
                <img
                  src="https://weboum.com/wp-content/uploads/2021/05/jquery.png"
                  alt="JavaScript Logo"
                  className="tech-logo"
                />
                <div className="tech-title">jQuery</div>
                <p className="tech-description">
                  We use jQuery to create animations, AJAX apps, and plug-ins on
                  top of JavaScript, simplifying DOM manipulation and event
                  handling.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back-End Tech Section */}
        <div className="tech-section">
          <div className="web-container">
            <h5>
              <em>Server Software (Back-End)</em>
            </h5>
            <div className="tech-grid">
              {/* PHP */}
              <div className="tech-card-wrapper">
                <img
                  src="https://weboum.com/wp-content/uploads/2021/05/php.png"
                  alt="JavaScript Logo"
                  className="tech-logo"
                />
                <div className="tech-title">PHP</div>
                <p className="tech-description">
                  Our Software Development Team uses PHP frameworks to
                  streamline and speed up the development process of custom web
                  apps and websites.
                </p>
              </div>

              {/* Express.js */}
              <div className="tech-card-wrapper">
                <img
                  src="https://weboum.com/wp-content/uploads/2021/05/expressjs.png"
                  alt="JavaScript Logo"
                  className="tech-logo"
                />
                <div className="tech-title">Express.js</div>
                <p className="tech-description">
                  Our developers utilize Express.js to simplify web app
                  development, making it easier to write fast, secure, and
                  modular applications.
                </p>
              </div>

              {/* Node.js */}
              <div className="tech-card-wrapper">
                <img
                  src="https://weboum.com/wp-content/uploads/2021/05/node-js.png"
                  alt="JavaScript Logo"
                  className="tech-logo"
                />
                <div className="tech-title">Node.js</div>
                <p className="tech-description">
                  We use Node.js to build traditional websites, back-end APIs,
                  and real-time apps that run across distributed devices.
                </p>
              </div>

              {/* Java */}
              <div className="tech-card-wrapper">
                <img
                  src="https://weboum.com/wp-content/uploads/2021/05/java.png"
                  alt="JavaScript Logo"
                  className="tech-logo"
                />
                <div className="tech-title">JAVA</div>
                <p className="tech-description">
                  We use Java as a general-purpose language to develop
                  mobile/web apps, embedded systems, and perform big data
                  processing.
                </p>
              </div>

              {/* Python */}
              <div className="tech-card-wrapper">
                <img
                  src="https://weboum.com/wp-content/uploads/2021/05/python.png"
                  alt="JavaScript Logo"
                  className="tech-logo"
                />
                <div className="tech-title">Python</div>
                <p className="tech-description">
                  We use Python for mobile and web dev, games, operating
                  systems, machine learning, AI, and more.
                </p>
              </div>

              {/* MongoDB */}
              <div className="tech-card-wrapper">
                <img
                  src="https://weboum.com/wp-content/uploads/2021/05/mongo-db.png"
                  alt="JavaScript Logo"
                  className="tech-logo"
                />
                <div className="tech-title">MongoDB</div>
                <p className="tech-description">
                  Our developers use MongoDB to optimize performance in
                  transactional stores and large-scale data storage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Days />
    </>
  );
}
