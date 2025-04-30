import Days from "../about-us/days/page";
import SubHeader from "../sub-header/page";
import "./hire-developer.css";

export default function WeboumContactForm() {
  return (
    <>
      <SubHeader title="Hire-Developer" />
      <div id="container">
        {/* Background pattern */}
        <div id="background-pattern">
          <div id="pattern-circles">
            <div id="circle1"></div>
            <div id="circle2"></div>
            <div id="circle3"></div>
            <div id="circle4"></div>
            <svg id="pattern-lines" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="0"
                y1="100"
                x2="240"
                y2="400"
                stroke="#f0f0f0"
                strokeWidth="2"
              />
              <line
                x1="100"
                y1="0"
                x2="400"
                y2="500"
                stroke="#f0f0f0"
                strokeWidth="2"
              />
              <line
                x1="200"
                y1="100"
                x2="300"
                y2="300"
                stroke="#f0f0f0"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        <div id="main-content">
          {/* Header */}
          <div id="header">
            <h2 id="header-title">Weboum – Send Us A Message</h2>
            <div id="header-line"></div>
          </div>

          {/* Main content */}
          <div id="content-wrapper">
            {/* Left column */}
            <div id="left-column">
              <h1 id="main-title">
                Do You Have Any Questions? We&rsquo;ll Be Happy To Assist!
              </h1>

              <div id="social-links">
                <a href="#" id="social-icon1">
                  <svg id="icon-svg1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                  </svg>
                </a>
                <a href="#" id="social-icon2">
                  <svg id="icon-svg2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" id="social-icon3">
                  <svg id="icon-svg3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c-.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right column */}
            <div id="right-column">
              <div id="section-stage">
                <h3 id="section-title-stage">Stage</h3>
                <div id="tag-container-stage">
                  <div id="tag1">New System to be built from scratch</div>
                  <div id="tag2">
                    System Improvement to continue development
                  </div>
                </div>
              </div>

              <div id="section-services">
                <h3 id="section-title-services">Services needed</h3>
                <div id="tag-container-services">
                  <div id="tag3">Web development</div>
                  <div id="tag4">Mobile development</div>
                  <div id="tag5">Minimum Viable Product</div>
                  <div id="tag6">Secure Hosting & Maintenance</div>
                  <div id="tag7">Dedicated development team</div>
                  <div id="tag8">Ongoing System Innovations</div>
                  <div id="tag9">Internet of things</div>
                </div>
              </div>

              <div id="section-dev-stages">
                <h3 id="section-title-dev-stages">Development stages needed</h3>
                <div id="tag-container-dev-stages">
                  <div id="tag10">UX/UI design</div>
                  <div id="tag11">Development</div>
                  <div id="tag12">Software deployment</div>
                  <div id="tag13">Maintenance and support</div>
                </div>
              </div>

              <button id="continue-button">Continue</button>
            </div>
          </div>
        </div>

        {/* Chat button */}
        <div id="chat-button-container">
          <button id="chat-button">
            <div id="chat-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
                  stroke="#000000"
                  strokeWidth="1.5"
                />
                <path
                  d="M8 12H8.01"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M12 12H12.01"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M16 12H16.01"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <Days />
    </>
  );
}
