import Image from "next/image";
import "./data_analytices.css";
import SubHeader from "@/app/sub-header/page";
import Days from "@/app/about-us/days/page";

// Metadata for SEO
export const metadata = {
  title: "Data Analytics – Weboum Technology",
  description:
    "Unlock actionable insights with Weboum Technology’s comprehensive data analytics solutions for businesses, leveraging AI, visualization, and data integration.",
};

export default function DataAnalytics() {
  return (
    <>
      <SubHeader title="Data Analytics" />
      <div className="data-analytics">
        <div className="data-analytics-container">
          <div className="data-analytics-image-section">
            <Image
              src="/image/development-about.jpg"
              alt="Data Analytics Illustration"
              width={500}
              height={300}
              priority
            />
          </div>
          <div className="data-analytics-text-section">
            <h1 className="data-analytics-h1">
              Transform Your Business with Data Analytics Solutions!
            </h1>
            <p className="data-analytics-p">
              In today’s data-driven world, actionable insights are the key to
              success. Weboum Technology provides comprehensive data analytics
              services to help businesses make informed decisions and stay ahead
              of the competition.
            </p>
            <p className="data-analytics-p">
              Our expert analysts leverage cutting-edge tools and technologies,
              including AI, machine learning, and big data platforms, to process
              and analyze your data. We deliver insights that drive growth,
              optimize operations, and enhance customer experiences.
            </p>
            <p className="data-analytics-p">
              From data collection to visualization, our team is equipped to
              handle complex datasets, ensuring accuracy, scalability, and
              security. Whether you’re a startup or an enterprise, we tailor our
              solutions to meet your unique needs.
            </p>
          </div>
        </div>

        <div className="data-analytics-container">
          <div className="data-analytics-section-header">
            <h1 className="data-analytics-h1">
              Weboum's Data Analytics Services
            </h1>
            <p className="data-analytics-p">
              Empower your business with our custom-tailored data analytics
              solutions. Our team of data experts ensures your data is
              transformed into meaningful insights.
            </p>
          </div>
          <ul className="data-analytics-services-list">
            <li>
              <b>Data Visualization:-</b>Turn complex datasets into intuitive
              dashboards and reports using tools like Tableau, Power BI, and
              custom visualization platforms.
            </li>
            <li>
              <b>Predictive Analytics:-</b>Leverage AI and machine learning to
              forecast trends, identify opportunities, and mitigate risks.
            </li>
            <li>
              <b>Data Integration:-</b>Seamlessly connect disparate data sources
              for a unified view, enabling better decision-making.
            </li>
            <li>
              <b>Business Intelligence:-</b>Unlock strategic insights with our
              BI solutions, designed to enhance operational efficiency and
              profitability.
            </li>
          </ul>
        </div>

        <div className="data-analytics-container">
          <div className="data-analytics-section-header">
            <h1 className="data-analytics-h1">Custom Analytics Solutions!</h1>
            <p className="data-analytics-p">
              Our analytics solutions are built from the ground up to address
              your specific business challenges, ensuring maximum impact and
              value.
            </p>
          </div>
          <ul className="data-analytics-services-list">
            <li>
              <b>Consulting Services:-</b>Work with our experts to define your
              analytics strategy and roadmap for success.
            </li>
            <li>
              <b>Custom Dashboards:-</b>Develop tailored dashboards that provide
              real-time insights into your key performance indicators.
            </li>
            <li>
              <b>Data Auditing:-</b>Ensure data quality and compliance with our
              thorough auditing and reporting services.
            </li>
          </ul>
          <h1 className="data-analytics-h1">
            Let’s Unlock the Power of Your Data!
          </h1>
          <p className="data-analytics-p">
            Our data analytics services are designed to deliver measurable
            results. With a focus on accuracy and innovation, we help businesses
            transform raw data into strategic assets.
          </p>
          <p className="data-analytics-p">
            Don’t let valuable insights go untapped. Partner with Weboum
            Technology to harness the full potential of your data and drive
            business success.
          </p>
          <p className="data-analytics-bottom-note">
            <b>
              <i>Drop us a query to explore our data analytics solutions.</i>
            </b>
          </p>
        </div>
      </div>
      <Days />
    </>
  );
}
