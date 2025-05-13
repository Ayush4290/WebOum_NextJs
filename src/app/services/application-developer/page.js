"use client";

import Days from "@/app/about-us/days/page";
import SubHeader from "@/app/sub-header/page";
import "./application-developer.css";
import Image from "next/image";

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
                and consideration).
              </p>
            </div>
            <div className="Application-section-image Application-order-1 Application-order-md-2">
              <Image
                src="/image/android-app.jpg"
                alt="Web Mobile App"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>

        <div className="Application-section">
          <div className="Application-section-content">
            <div className="Application-section-image">
              <Image
                src="/image/apss-design-dev.jpg"
                alt="App Design"
                width={600}
                height={400}
              />
            </div>
            <div className="Application-section-text">
              <h4>Apps Design and Development</h4>
              <p>
                This course provides students with the concepts and techniques
                to design and develop software applications, and to understand
                the design process. Students will learn the importance of
                user-centered design and will develop a prototype of a web
                application as a course project. In the process of developing
                the application, students will learn how to design and create
                relational databases, how to acquire competency in new
                programming languages quickly, how to use the
                Model-View-Controller pattern to develop software applications,
                how to ensure technical quality in software development, and how
                to apply principles of user-centered design.
              </p>
            </div>
          </div>
        </div>

        <div className="Application-section">
          <div className="Application-section-content">
            <div className="Application-section-text Application-order-2 Application-order-md-1">
              <h4>iPhone Development</h4>
              <p>
                This course provides students with the concepts and techniques
                to design and develop software applications, and to understand
                the design process. Students will learn the importance of
                user-centered design and will develop a prototype of a web
                application as a course project. In the process of developing
                the application, students will learn how to design and create
                relational databases, how to acquire competency in new
                programming languages quickly, how to use the
                Model-View-Controller pattern to develop software applications,
              </p>
            </div>
            <div className="Application-section-image Application-order-1 Application-order-md-2">
              <Image
                src="/image/Iphone-app.jpg"
                alt="iPhone Dev"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>

        <div className="Application-section">
          <div className="Application-section-content">
            <div className="Application-section-image">
              <Image
                src="/image/android-app.jpg"
                alt="Android Dev"
                width={600}
                height={400}
              />
            </div>
            <div className="Application-section-text">
              <h4>Android Development</h4>
              <p>
                Android is an operating system based on Linux with a Java
                programming interface. The Android Software Development Kit
                (Android SDK) provides all necessary tools to develop Android
                applications. This includes a compiler, debugger and a device
                emulator, as well as its own virtual machine to run Android
                programs. Android is currently primarily developed by Google.
                Android allows background processing, provides a rich user
                interface library, supports 2-D and 3-D graphics using the
                OpenGL libraries,
              </p>
            </div>
          </div>
        </div>

        <div className="Application-section">
          <div className="Application-section-content">
            <div className="Application-section-text Application-order-2 Application-order-md-1">
              <h4>Compatibility</h4>
              <p>
                Your Web browser is a translation device. It takes a document
                written in the HTML language and translates it into a formatted
                Web page. The result of this translation is a little like giving
                two human translators a sentence written in French and asking
                them to translate it into English. Both will get the meaning
                across, but may not use the same words to do so.
              </p>
            </div>
            <div className="Application-section-image Application-order-1 Application-order-md-2">
              <Image
                src="/image/compatibilty.jpg"
                alt="Compatibility"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
      <Days />
    </>
  );
}
