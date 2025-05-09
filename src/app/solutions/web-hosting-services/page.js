import Days from "@/app/about-us/days/page";
import SubHeader from "@/app/sub-header/page";
import Image from "next/image";
import "./web-hosting-services.css";

export const metadata = {
  title: "Web Hosting Services – WebOum Technology",
  description:
    "Power your business website with WebOum Technology’s reliable and fast web hosting services, offering 99.9% uptime and a variety of hosting plans.",
};

export default function WebHostingServices() {
  return (
    <>
      <SubHeader title="Web Hosting Services" />
      <div className="webhosting-page">
        <div className="webhosting-container">
          <div className="webhosting-image-section">
            <Image
              src="/image/WebHostingServices/web-host.jpg"
              alt="Web Hosting Illustration"
              width={500}
              height={300}
              priority
            />
          </div>
          <div className="webhosting-text-section">
            <h1>
              Power up Your Business Website with Next Level Web Hosting Services
            </h1>
            <p>
              It’s not rocket science. If you want to get a website online, then you will need web hosting. There’s no way your visitors can access your website if there’s no web host. And, if you want your website to perform seamlessly, you need to choose the perfect web hosting for your website.
            </p>
            <br />
            <p>
              Aha! You don’t have to worry at all when WebOum Technology is here.
            </p>
            <br />
            <p>
              Book a domain for your website in easy steps with WebOum website hosting services. We help you get a domain online for your website. Right from picking preferred domain names to enjoying affordable annual plans, we have all your web hosting needs served. Get everything required to set your website online.
            </p>
          </div>
        </div>

        <div className="webhosting-container-reverse">
          <div className="webhosting-container-reverse-inner">
            <div className="webhosting-text-section">
              <h1>Powerful And Fastest Web Hosting!</h1>
              <p>
                A host of different plans are offered with varied features for businesses to pick a plan that suits their needs best. Get web hosting from a trustworthy and reliable hosting service provider. With WebOum there is no looking back. We offer a domain with a number of free emails to make it easy for you to get started with your business activities.
              </p>
              <p>
                WebOum web hosting services consist of 99.9% uptime with dedicated technical support by experts 24*7. The domains offered are fully equipped with cPanel. In addition to it, a 30-day money-back guarantee to entrust our customers with the best.
              </p>
            </div>
            <div className="webhosting-container-reverse-image">
              <Image
                src="/image/WebHostingServices/web-hosting2.jpg"
                alt="Web Hosting Illustration"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>

        <div className="webhosting-section webhosting-center-text">
          <h2>Trust your website with leading web hosting service provider</h2>
          <p>
            Our domains have best in class security and deliver leading load times to make the most of it. Need more power for your business, pick biz hosting to obtain maximum advantages.
          </p>
          <p>
            We provide a myriad of hosting services for businesses to obtain the maximum benefits. Some of the services offered are:
          </p>
        </div>

        <div className="webhosting-container">
          <div className="webhosting-image-section webhosting-pt-32">
            <Image
              src="/image/WebHostingServices/web-hosting3.jpg"
              alt="Web Hosting Illustration"
              width={500}
              height={300}
            />
          </div>
          <div className="webhosting-text-section">
            <p>
              <b>Shared Hosting -</b> It is the cheapest type of hosting out there. Shared hosting is an arrangement where a number of websites are kept on a similar server. You will be making monthly payments to the hosting provider and you will share the facilities with other users on the server.
            </p>
            <p>
              <b>VPS Hosting -</b> After a shared hosting plan, virtual private hosting is a good “upgrade”. In the case of VPS hosting, you still share the physical server space with owners of other websites there. That said, your website will be hosted on an independent piece of virtual real estate. It is like renting a flat in a building with numerous flats. You can’t make changes to the building, but you can do anything you like within your rental apartment.
            </p>
            <p>
              <b>Dedicated Hosting -</b> As the name implies, this type of hosting gives you elite rental rights on a particular web server. You can avoid noisy neighbors and have full control over the environment. It is like living in an isolated house since you have full admin access. It’s your territory and you can do whatever you want to do there.
            </p>
          </div>
        </div>

        <div className="webhosting-container-Apart">
          <div className="webhosting-container-Apart-inner">
            <h3>
              Apart from these three, there are many other types of web hosting options that have become popular such as AWS hosting, Cloud Hosting, Azure Hosting, Managed web hosting and more. Let’s check out a couple of them:
            </h3>
            <div className="webhosting-hosting-type">
              <h4>Cloud Hosting</h4>
              <p>
                Hosted by the cloud services provider (CSP), you can rent a “piece” of a data centre where you will run your web applications on their infrastructure, comprising distributed servers. <br />
                Hence, you won’t be renting from one location and one shared server only. You will get access to distributed resources. This helps in increasing resource availability and reducing latency issues. <br />
                For example, your website won’t be affected if any of the webservers fails to respond at the vendor’s location.
              </p>
            </div>
            <div className="webhosting-hosting-type">
              <h4>Azure Hosting</h4>
              <p>
                Azure web hosting is pretty popular with business owners because of its flexibility and high level of scalability. One added benefit is the low cost of disaster recovery protection and, this tool is built to work for everyone. <br />
                So no matter if you are hosting one website or tons, discover the benefits of Azure for yourself today.
              </p>
            </div>
          </div>
        </div>

        <div className="webhosting-container">
          <h1 className="webhosting-pb-10">Every Web Hosting Plan Include</h1>
          <div className="webhosting-grid">
            <div className="webhosting-card">
              <Image
                src="/image/WebHostingServices/recycle.png"
                alt="icon"
                width={50}
                height={50}
              />
              <div>
                <div className="webhosting-card-title">One-click Install:</div>
                <p>
                  Get the benefits of accessing over 150 apps for free to effortlessly build CMS websites, blogs and forums, just by simply installing.
                </p>
              </div>
            </div>
            <div className="webhosting-card">
              <Image
                src="/image/WebHostingServices/troca.png"
                alt="icon"
                width={40}
                height={40}
              />
              <div>
                <div className="webhosting-card-title">Easy to use Control Panel:</div>
                <p>
                  Comprises standardized cPanel to easily manage backups, apps and security.
                </p>
              </div>
            </div>
          </div>
          <div className="webhosting-grid">
            <div className="webhosting-card">
              <Image
                src="/image/WebHostingServices/recycle.png"
                alt="icon"
                width={50}
                height={50}
              />
              <div>
                <div className="webhosting-card-title">Resources on Demand:</div>
                <p>
                  Want more resources for your website? Easily power it up by seamlessly increasing the RAM/CPU, storage and I/O just in a single click.
                </p>
              </div>
            </div>
            <div className="webhosting-card">
              <Image
                src="/image/WebHostingServices/troca.png"
                alt="icon"
                width={40}
                height={40}
              />
              <div>
                <div className="webhosting-card-title">24/7 Network Security:</div>
                <p>
                  Enjoy the peace of mind that your network is secured and monitored 24/7.
                </p>
              </div>
            </div>
          </div>
          <div className="webhosting-grid">
            <div className="webhosting-card">
              <Image
                src="/image/WebHostingServices/recycle.png"
                alt="icon"
                width={50}
                height={50}
              />
              <div>
                <div className="webhosting-card-title">Easy Domain Name Setup:</div>
                <p>
                  Linking your website to the domain name has been easier than ever with WebOum’s web hosting services.
                </p>
              </div>
            </div>
          </div>
          <p className="webhosting-bottom-note">
            Be smart - Stay Smart – Choose web hosting services that are reliable and backed up. Your favorite hosting is just a click away!
          </p>
        </div>
      </div>
      <Days />
    </>
  );
}