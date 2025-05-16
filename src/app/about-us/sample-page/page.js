
import SamplePage from "./sample-page";

export async function generateMetadata() {
  return {
    title: "Design & Develop Custom Application - WTPL",
    description: "Get in touch with Weboum Technology for expert IT consulting, cybersecurity solutions, or general inquiries. Reach us via phone, email, or our contact form.",
  };
}

export default function Contact() {
  return <SamplePage />;
}