import Portfolio from "./portfolio";

export async function generateMetadata() {
  return {
    title: "Portfolio - Weboum Technology Pvt. Ltd",
    description:
      "Get in touch with Weboum Technology for expert IT consulting, cybersecurity solutions, or general inquiries. Reach us via phone, email, or our contact form.",
  };
}

export default function Contact() {
  return <Portfolio />;
}
