"use client";

import { useState } from "react";
import "./DigitalMarketingPackages.css";
import Days from "@/app/about-us/days/page";
import SubHeader from "@/app/sub-header/page";

const DigitalMarketingPackages = () => {
  const [showMobileView, setShowMobileView] = useState(false);

  const packagePricing = {
    starter: "USD 450",
    standard: "USD 950",
    professional: "USD 1500",
  };

  return (
    <>
      <SubHeader title="Digital Marketing Packages"></SubHeader>
      <div className="container">
        <p>
          We provide affordable SEO, SMM, and PPC Packages with result-oriented
          expertise services to increase your ROI and growth
        </p>

        <div className="table-wrapper">
          <div className={showMobileView ? "mobile-view" : "table"}>
            <div className="header-row">
              <div>S.No.</div>
              <div>Particulars</div>
              <div>Starter</div>
              <div>Standard</div>
              <div>Professional</div>
            </div>

            <div className="row">
              <div></div>
              <div>Package Price</div>
              <div>{packagePricing.starter}</div>
              <div>{packagePricing.standard}</div>
              <div>{packagePricing.professional}</div>
            </div>

            <SectionHeader title="DIGITAL MARKETING" />

            <TableRow
              number="1"
              title="CHANNEL"
              starter="Any 2 Channel Optimization"
              standard="Any 3 Channel Optimization"
              professional="Any 5 Channel Optimization"
              highlight={true}
            />

            <TableRow
              number="2"
              title="Identify Business Goals"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="3"
              title="Account Management"
              starter="Any 2 Platforms"
              standard="Any 3 Platforms"
              professional="Any 5 Platforms"
              type="number"
            />

            <TableRow
              number="4"
              title="Analyze Your Audiences"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="5"
              title="Create Social Media Calendar"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="6"
              title="Create a Content Strategy"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="7"
              title="Identify Hashtags"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="8"
              title="Social Trending"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <SectionHeader title="FACEBOOK PROMOTION" />

            <TableRow
              number="1"
              title="Profile Optimization"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="2"
              title="Creative Image"
              starter="8"
              standard="10"
              professional="15"
              type="number"
            />

            <TableRow
              number="3"
              title="FB Timeline Status Posting"
              starter="15"
              standard="20"
              professional="40"
              type="number"
            />

            <TableRow
              number="4"
              title="Post Sharing in Groups"
              starter="5"
              standard="7"
              professional="10"
              type="number"
            />

            <TableRow
              number="5"
              title="Cover Image Creative and Upload"
              starter="1"
              standard="1"
              professional="2"
              type="number"
            />

            <TableRow
              number="6"
              title="Group Creation"
              starter="NO"
              standard="1"
              professional="2"
              type="number"
            />

            <TableRow
              number="7"
              title="Group Join"
              starter="NO"
              standard="3"
              professional="5"
              type="number"
            />

            <TableRow
              number="8"
              title="Targeted Page Likes"
              starter="8 to 10%**"
              standard="10% to 12%**"
              professional="13%+**"
              type="number"
            />

            <TableRow
              number="9"
              title="Video Sharing(provided by client)"
              starter="NO"
              standard="NO"
              professional="YES"
            />

            <TableRow
              number="10"
              title="Call To Action Button"
              starter="One Time"
              standard="One Time"
              professional="One Time"
            />

            <TableRow
              number="11"
              title="Facebook Review Postings"
              starter="NO"
              standard="NO"
              professional="YES"
            />

            <TableRow
              number="12"
              title="Polls Creation & Management"
              starter="NO"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="13"
              title="Facebook Insight Monitoring"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="14"
              title="Deleting of unwanted spam"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="15"
              title="Traffic Monitoring Through Google Analytics"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="16"
              title="Sponsored Ads (Additional Cost)"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <SectionHeader title="TWITTER PROMOTION" />

            <TableRow
              number="1"
              title="Profile Optimization"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="2"
              title="Tweets Posting"
              starter="15"
              standard="30"
              professional="40"
              type="number"
            />

            <TableRow
              number="3"
              title="Targeted Twitter Followers Increase"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="4"
              title="Retweets"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="5"
              title="Background Image Creative and Upload"
              starter="1"
              standard="1"
              professional="2"
              type="number"
            />

            <TableRow
              number="6"
              title="Cover Photo Creative and Upload"
              starter="1"
              standard="1"
              professional="2"
              type="number"
            />

            <TableRow
              number="7"
              title="Lists Creation"
              starter="NO"
              standard="NO"
              professional="YES"
            />

            <TableRow
              number="8"
              title="Sponsored Tweets(Additional Cost)"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="9"
              title="Hashtag Trend Research"
              starter="NO"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="10"
              title="Twitter Analytics Monitoring"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <SectionHeader title="INSTAGRAM PROMOTION" />

            <TableRow
              number="1"
              title="Profile Optimization"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="2"
              title="Instagram Image Sharing"
              starter="15"
              standard="20"
              professional="30"
              type="number"
            />

            <TableRow
              number="3"
              title="Targeted Instagram Followers Increase"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="4"
              title="Hashtag Trend Research"
              starter="NO"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="5"
              title="Comments & Likes Management [Engagement Strategy]"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="6"
              title="Image Tagging to Friends/Followers [Increase Reach]"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="7"
              title="Instagram Analytics Monitoring"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <SectionHeader title="LINKEDIN PROMOTION" />

            <TableRow
              number="1"
              title="Profile Optimization"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="2"
              title="LinkedIn Post Sharing"
              starter="15"
              standard="20"
              professional="30"
              type="number"
            />

            <TableRow
              number="3"
              title="Targeted LinkedIn Connection"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="4"
              title="Company Page Creation"
              starter="One Time"
              standard="One Time"
              professional="One Time"
            />

            <TableRow
              number="5"
              title="Company Page Follower Increase"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="6"
              title="Company page creative banner"
              starter="1"
              standard="1"
              professional="2"
              type="number"
            />

            <TableRow
              number="7"
              title="Profile Connection Build up"
              starter="NO"
              standard="NO"
              professional="YES"
            />

            <TableRow
              number="8"
              title="Relevant Group Joining"
              starter="NO"
              standard="3"
              professional="5"
              type="number"
            />

            <TableRow
              number="9"
              title="Post Sharing in Groups"
              starter="NO"
              standard="15"
              professional="20"
              type="number"
            />

            <TableRow
              number="10"
              title="LinkedIn Performance Review"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="11"
              title="LinkedIn Pulse Posting"
              starter="NO"
              standard="1"
              professional="2"
              type="number"
            />

            <SectionHeader title="YOUTUBE PROMOTION" />

            <TableRow
              number="1"
              title="YouTube Channel Optimization"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="2"
              title="Channel Creative Upload"
              starter="NO"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="3"
              title="Video Uploads(provided by client)"
              starter="5"
              standard="10"
              professional="15"
              type="number"
            />

            <TableRow
              number="4"
              title="Video Promotion"
              starter="10"
              standard="20"
              professional="30"
              type="number"
            />

            <TableRow
              number="5"
              title="Video Title & Meta Optimization"
              starter="NO"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="6"
              title="Thumbnail Creative for Videos"
              starter="NO"
              standard="NO"
              professional="YES"
            />

            <TableRow
              number="7"
              title="YouTube Subscribers"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="8"
              title="YouTube Discussion Posting"
              starter="10"
              standard="20"
              professional="30"
              type="number"
            />

            <TableRow
              number="9"
              title="YouTube Video Views"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="10"
              title="Comment Moderation"
              starter="NO"
              standard="YES"
              professional="YES"
            />

            <SectionHeader title="PINTEREST PROMOTION" />

            <TableRow
              number="1"
              title="Profile Optimization"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="2"
              title="Board Creation"
              starter="5"
              standard="8"
              professional="10"
              type="number"
            />

            <TableRow
              number="3"
              title="Pins Posted"
              starter="15"
              standard="20"
              professional="40"
              type="number"
            />

            <TableRow
              number="4"
              title="Followers"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="5"
              title="Website Verification"
              starter="NO"
              standard="YES"
              professional="YES"
            />

            <TableRow
              number="6"
              title="Business Account"
              starter="YES"
              standard="YES"
              professional="YES"
            />

            <div className="row">
              <div></div>
              <div></div>
              <div>
                <a href="/about-us/contact" class="buy-now-btn">
                  Buy Now!
                </a>
              </div>

              <div>
                <a href="/about-us/contact" class="buy-now-btn">
                  Buy Now!
                </a>
              </div>

              <div>
                <a href="/about-us/contact" class="buy-now-btn">
                  Buy Now!
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="support-section">
          <div>CUSTOMER SUPPORT</div>
          <div className="row">
            <div>1</div>
            <div>Email, Chat, Phone</div>
            <div>YES</div>
            <div>YES</div>
            <div>YES</div>
          </div>
        </div>

        <div className="footer">
          <p>
            FOR CUSTOM DIGITAL MARKETING ✉
            <a href="/request-a-quote">ASK FOR QUOTES</a>
          </p>
        </div>
      </div>
      <Days />
    </>
  );
};

const TableRow = ({
  number,
  title,
  starter,
  standard,
  professional,
  highlight = false,
  type = "text",
}) => {
  return (
    <div className={highlight ? "row highlight" : "row"}>
      <div>{number}</div>
      <div>{title}</div>
      {starter === "YES" ? (
        <div className="yes">YES</div>
      ) : starter === "NO" ? (
        <div className="no">NO</div>
      ) : type === "number" ? (
        <div className="number">{starter}</div>
      ) : (
        <div>{starter}</div>
      )}
      {standard === "YES" ? (
        <div className="yes">YES</div>
      ) : standard === "NO" ? (
        <div className="no">NO</div>
      ) : type === "number" ? (
        <div className="number">{standard}</div>
      ) : (
        <div>{standard}</div>
      )}
      {professional === "YES" ? (
        <div className="yes">YES</div>
      ) : professional === "NO" ? (
        <div className="no">NO</div>
      ) : type === "number" ? (
        <div className="number">{professional}</div>
      ) : (
        <div>{professional}</div>
      )}
    </div>
  );
};

const SectionHeader = ({ title }) => {
  return (
    <div className="section-header">
      <div>{title}</div>
    </div>
  );
};

export default DigitalMarketingPackages;