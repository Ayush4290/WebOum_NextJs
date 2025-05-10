import Days from "@/app/about-us/days/page";
import SubHeader from "@/app/sub-header/page";
import Image from "next/image";
import "./backup-disaster-recovery.css";

export default function BackupDisasterRecovery() {
  return (
    <>
      <SubHeader
        title="Data backup and Recovery Services"
      />
      <div className="data-backup">
        <h1>
          Data Backup and Disaster Recovery Strategies to Avoid Loss from
          Mishaps!
        </h1>
        <em>
          Safeguard your data with the perfect solution that will save your
          business.
          <br />
          Plan – Prepare – Protect
        </em>

        <p>
          Data is the lifeblood of every business. Readily accessible and
          properly maintained business data is crucial for every business since
          it dictates the success of modern businesses. That said, the
          consequences of data loss have never been more severe. This is where
          data backup and disaster recovery services enter the picture.
        </p>

        <p>
          WebOum technology offers data backup and disaster recovery solutions
          that are cost-effective, secure, simple and scalable. The best part of
          leveraging our data protection services is that they can easily be
          integrated with on-premises data protection solutions.
        </p>

        <p>
          Loss of data is unpredictable and can occur at any point in time. In
          cases of accidentally deleting your data, service disruption, and
          corruption of data, we can help you recover crucial business data in a
          timely manner with the help of our expert data recovery services.
        </p>

        <div className="section">
          <div className="image-box">
            <Image
              src="/image/BackupDisasterRecovery/backup-1.jpg"
              alt="DevOps Technology Illustration"
              width={400}
              height={250}
            />
          </div>
          <div className="text-box">
            <h2>Disaster Recovery and Data Backup Services You Can Trust!</h2>
            <p>
              Our services encompass a set of policies, tools, and the latest
              technologies that enable us to recover lost data effortlessly.
              Fully managed data recovery solutions are offered to protect your
              business from all possible threats.
            </p>
            <p>
              Our team of data specialists perform thorough and timely backups
              and create robust safeguard processes to ensure that your
              irreplaceable data is protected.
            </p>
            <p>
              We offer backup and data recovery solutions by combining a host of
              data recovery processes into a single service. All your needs
              related to business data are covered under our data recovery
              services.
            </p>
          </div>
        </div>

        {/* Full-width background section */}
        <div className="back-wrapper">
          <div className="back-container">
            <div className="content">
              <h2>Backup and Recovery IT Services You Can Rely On</h2>
              <p>
                We offer design, storage, monitoring, testing, failover,
                restoration assistance, reporting and much more. All your data
                needs are covered and we ensure the complete safety of your
                valuable data.
              </p>
              <p>
                Preparing against disasters requires an in-depth understanding of
                the policies, backup procedures, and tools to assist in the smooth
                recovery of data and the continuation of the business.
              </p>
            </div>
            <div className="image-container">
              <Image
                src="/image/BackupDisasterRecovery/backup-2.jpg"
                alt="DevOps Infinity Loop"
                width={500}
                height={300}
                priority
              />
            </div>
          </div>
        </div>

        <div className="container features-container">
          <h1>
            Check Out Some Amazing Features of our Disaster Recovery and Backup
            Services!
          </h1>
          <div className="grid">
            <div className="card">
              <Image
                src="/image/BackupDisasterRecovery/time.jpg"
                alt="icon"
                width={60}
                height={60}
              />
              <div>
                <div className="card-title">Real-Time Monitoring:</div>
                <p>
                  Confidently scale your business with protective data backup
                  monitoring services with restoration and human backed
                  intervention. Periodic reporting, without having to do it
                  yourself.
                </p>
              </div>
            </div>

            <div className="card">
              <Image
                src="/image/BackupDisasterRecovery/peace-mind.png"
                alt="icon"
                width={50}
                height={50}
              />
              <div>
                <div className="card-title">Peace of Mind:</div>
                <p>
                  Data backups combine the entire procedure of data recovery in
                  a single service. We offer design, storage, monitoring,
                  testing, assistance, reporting, failover and more.
                </p>
              </div>
            </div>
          </div>

          <div className="grid">
            <div className="card">
              <Image
                src="/image/BackupDisasterRecovery/recycle.png"
                alt="icon"
                width={50}
                height={50}
              />
              <div>
                <div className="card-title">Instant Recovery:</div>
                <p>
                  Thefts? Extensive loss of power? Fire? No worries; our instant
                  data recovery services deploy in minutes. We have an exact
                  clone of your server in our system so that your team can start
                  working again rapidly.
                </p>
              </div>
            </div>

            <div className="card">
              <Image
                src="/image/BackupDisasterRecovery/troca.png"
                alt="icon"
                width={40}
                height={40}
              />
              <div>
                <div className="card-title">End-to-End Encryption:</div>
                <p>
                  Backups by our IT team offers built-in end-to-end encryption,
                  to give you the ability to encrypt data files at source.
                </p>
              </div>
            </div>
          </div>

          <p className="bottom-note">
            The IT landscape is surfacing swiftly, but we are ready to help.
            Contact us today and get your needs served.
          </p>
        </div>
      </div>
      <Days />
    </>
  );
}