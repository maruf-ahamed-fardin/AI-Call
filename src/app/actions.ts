"use server";

export interface DemoRequestState {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "email" | "company", string>>;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, key: string, maxLength = 200) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function requestDemo(
  _prevState: DemoRequestState,
  formData: FormData
): Promise<DemoRequestState> {
  // Honeypot: real visitors never see or fill this field.
  if (field(formData, "website")) {
    return { status: "success", message: "Thanks! We'll be in touch within one business day." };
  }

  const submission = {
    name: field(formData, "name"),
    email: field(formData, "email"),
    company: field(formData, "company"),
    phone: field(formData, "phone", 40),
    callVolume: field(formData, "callVolume", 40),
    message: field(formData, "message", 2000),
  };

  const errors: DemoRequestState["errors"] = {};
  if (!submission.name) errors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(submission.email)) errors.email = "Please enter a valid work email.";
  if (!submission.company) errors.company = "Please enter your company.";
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", errors };
  }

  // Any endpoint that accepts JSON works: Slack/Zapier/Make/n8n webhooks, Formspree, a CRM, etc.
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("CONTACT_WEBHOOK_URL is not set; demo request was not delivered.");
    return {
      status: "error",
      message: "Sorry, we couldn't send your request right now. Please try again later.",
    };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...submission,
        text: `New demo request from ${submission.name} (${submission.email}) at ${submission.company}`,
        submittedAt: new Date().toISOString(),
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) throw new Error(`Webhook responded with ${response.status}`);
  } catch (err) {
    console.error("Failed to deliver demo request", err);
    return {
      status: "error",
      message: "Sorry, we couldn't send your request right now. Please try again later.",
    };
  }

  return { status: "success", message: "Thanks! We'll be in touch within one business day." };
}
