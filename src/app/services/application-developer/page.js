"use client";

import Days from "@/app/about-us/days/page";
import SubHeader from "@/app/sub-header/page";
import "./application-developer.css";

export default function AppSections() {
  return (
    <>
      <SubHeader title="Application Development" />
      <div>
        <div className="Application-section">
          <div className="Application-section-content">
            <div className="Application-section-text Application-order-2 Application-order-md-1">
              <h4>Web / Mobile Applications</h4>
              <p>
                Mobile web apps are useful alternatives to native apps for
                mobile devices. These days, Android-based products and iOS
                devices like the iPhone and iPad all come packed with fantastic
                mobile browsers (Mobile Chrome and Mobile Safari respectively),
                and Opera fans can install their preferred browser too.
              </p>
              <p>
                From a desktop point of view, these products make browsing just
                about the most pleasurable experience possible. CSS3
                transitions, beautifully crafted HTML5 and embellishments mean
                their users get the highest possible browsing experience
                (assuming the content being viewed has been crafted with care
                and consideration)..
              </p>
            </div>
            <div className="Application-section-image Application-order-1 Application-order-md-2">
              <img src="/image/android-app.jpg" alt="Web Mobile App" />
            </div>
          </div>
        </div>

        <div className="Application-section">
          <div className="Application-section-content">
            <div className="Application-section-image">
              <img src="/image/apss-design-dev.jpg" alt="App Design" />
            </div>
            <div className="Application-section-text">
              <h4>Apps Design and Development</h4>
              <p>
                This course provides students with the concepts and techniques
                to design and develop software applications, and to understand
                the design process. Students will learn the importance of
                user-centered design and will develop a prototype of a web
                application as a course project.
              </p>
              <p>
                Students will also learn to create databases, master programming
                languages, and apply the MVC pattern. The course emphasizes
                quality software and user-centered principles.
              </p>
            </div>
          </div>
        </div>

        <div className="Application-section">
          <div className="Application-section-content">
            <div className="Application-section-text Application-order-2 Application-order-md-1">
              <h4>iPhone Development</h4>
              <p>
                This course covers techniques to design and develop software
                applications. It focuses on user-centered design and the
                creation of functional prototypes. Students learn database
                design, new programming languages, and apply MVC architecture
                for robust applications.
              </p>
            </div>
            <div className="Application-section-image Application-order-1 Application-order-md-2">
              <img src="/image/Iphone-app.jpg" alt="iPhone Dev" />
            </div>
          </div>
        </div>

        <div className="Application-section">
          <div className="Application-section-content">
            <div className="Application-section-image">
              <img src="/image/android-app.jpg" alt="Android Dev" />
            </div>
            <div className="Application-section-text">
              <h4>Android Development</h4>
              <p>
                Android is an open-source system using a Java interface. The SDK
                includes tools like compilers, debuggers, and emulators.
                Students learn how to develop apps using Android libraries,
                OpenGL, and more.
              </p>
            </div>
          </div>
        </div>

        <div className="Application-section">
          <div className="Application-section-content">
            <div className="Application-section-text Application-order-2 Application-order-md-1">
              <h4>Compatibility</h4>
              <p>
                Your web browser is a translation device. It takes HTML and
                renders a web page. This is similar to translating a sentence
                from French to English — both will convey the same meaning but
                might use different words.
              </p>
            </div>
            <div className="Application-section-image Application-order-1 Application-order-md-2">
              <img src="/image/compatibilty.jpg" alt="Compatibility" />
            </div>
          </div>
        </div>
      </div>
      <Days />
    </>
  );
}
