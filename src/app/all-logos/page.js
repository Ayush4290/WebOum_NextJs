import Days from "../about-us/days/page";
import SubHeader from "../sub-header/page";
import "./all_logos.css";
import Image from "next/image";

const logos = [
  "logo1-1.jpg",
  "logo-2.jpg",
  "logo-3.jpg",
  "logo-4.jpg",
  "logo-5.jpg",
  "logo-6.jpg",
  "logo-7.jpg",
  "logo-8.jpg",
  "logo-9.jpg",
  "logo-10.jpg",
  "logo-11.jpg",
  "logo-12.jpg",
  "logo-13.jpg",
  "logo-14.jpg",
];

export default function LogosPage() {
  return (
    <>
      <SubHeader title="All Logos" />
      <div className="logo-grid">
        {logos.map((file, index) => (
          <div key={index} className="logo-item">
            <Image
              src={`/image/logo-image/${file}`}
              alt={`Logo ${index + 1}`}
              width={100}
              height={100}
              className="logo-image"
            />
          </div>
        ))}
      </div>
      <Days />
    </>
  );
}
