import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Nexus AI",
  description: "How Nexus AI collects, uses and protects your information.",
};

// TEMPLATE — have this reviewed by legal counsel and fill in company details before launch.
export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="October 26, 2026"
      sections={[
        {
          heading: "Who we are",
          body: [
            "Nexus AI (\"we\", \"us\") provides AI voice agents that place and answer phone calls on behalf of businesses. This policy explains what personal information we collect through this website and our services, and how we use it.",
          ],
        },
        {
          heading: "Information we collect",
          body: [
            "Information you give us: when you request a demo or contact us, we collect your name, work email, company, phone number and anything you choose to tell us in your message.",
            "Call data: when our customers use Nexus AI, we process call audio, transcripts and call metadata on their behalf. For that data we act as a processor, and the customer's own privacy policy applies.",
            "Usage data: basic technical information such as browser type, pages visited and approximate location, used to keep the website secure and working.",
          ],
        },
        {
          heading: "How we use information",
          body: [
            "We use your information to respond to requests, provide and improve our services, keep them secure, and send product updates you can opt out of at any time. We do not sell personal information.",
          ],
        },
        {
          heading: "Sharing",
          body: [
            "We share information only with service providers that help us run Nexus AI (such as hosting, telephony and email providers) under contracts that require them to protect it, or when required by law.",
          ],
        },
        {
          heading: "Retention and security",
          body: [
            "We keep information only as long as needed for the purposes above or as required by law. Data is encrypted in transit and at rest, and access is limited to people who need it.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "Depending on where you live, you may have the right to access, correct, delete or export your personal information, or to object to certain processing. To make a request, email contact@nexusai.com.",
          ],
        },
        {
          heading: "Contact",
          body: ["Questions about this policy? Email contact@nexusai.com."],
        },
      ]}
    />
  );
}
