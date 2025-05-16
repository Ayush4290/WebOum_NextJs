import Contact from "./contact";


export async function generateMetadata() {
  return {
    title: "Contact - Weboum Technology Pvt. Ltd",
    description: "Discover our expert IT consulting and cybersecurity solutions, including risk assessments, threat detection, and compliance support.",
  };
}

export default function ITConsulting() {
  return <Contact />;
}