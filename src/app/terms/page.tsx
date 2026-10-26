import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — Nexus AI",
  description: "The terms that govern use of the Nexus AI website and services.",
};

// TEMPLATE — have this reviewed by legal counsel and fill in company details before launch.
export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="October 26, 2026"
      sections={[
        {
          heading: "Agreement",
          body: [
            "By using the Nexus AI website or services, you agree to these terms. If you use Nexus AI on behalf of an organization, you agree on its behalf and confirm you are authorized to do so.",
          ],
        },
        {
          heading: "Using the service",
          body: [
            "You are responsible for how you use AI voice agents, including the content of calls and who you call. You must comply with all laws that apply to automated and recorded calls, including consent, disclosure, do-not-call and telemarketing rules in every region you call.",
            "You may not use Nexus AI for unlawful, deceptive, harassing or fraudulent calls, or to impersonate any person or organization.",
          ],
        },
        {
          heading: "Accounts and billing",
          body: [
            "Paid plans are billed in advance on a monthly or yearly basis. Usage above your plan's included minutes is billed at the rates shown in your account. You can cancel at any time; cancellation takes effect at the end of the current billing period.",
          ],
        },
        {
          heading: "Your data",
          body: [
            "You keep ownership of your data, including call recordings and transcripts. You grant us permission to process it only as needed to provide the service. Our Privacy Policy describes how we handle personal information.",
          ],
        },
        {
          heading: "Availability and changes",
          body: [
            "We work to keep Nexus AI available and secure, but the service is provided \"as is\" except where a separate written agreement or SLA says otherwise. We may update the service and these terms; we will notify you of material changes.",
          ],
        },
        {
          heading: "Limitation of liability",
          body: [
            "To the extent permitted by law, Nexus AI is not liable for indirect, incidental or consequential damages, and our total liability is limited to the fees you paid in the twelve months before the claim.",
          ],
        },
        {
          heading: "Contact",
          body: ["Questions about these terms? Email contact@nexusai.com."],
        },
      ]}
    />
  );
}
