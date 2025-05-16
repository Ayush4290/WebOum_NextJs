import RequestaQuote from "./request-a-quote";

export async function Metadata() {
  return {
    title: "Request A Quote - Weboum Technology Pvt. Ltd",
    description:
      "Get in touch with Weboum Technology for expert IT consulting, cybersecurity solutions, or general inquiries. Reach us via phone, email, or our contact form.",
  };
}

export default function Contact() {
  return <RequestaQuote />;
}
