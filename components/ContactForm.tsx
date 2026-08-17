"use client";

import { useState } from "react";

const initialState = { name: "", email: "", subject: "", message: "" };
const formSubmitEndpoint = "https://formsubmit.co/ajax/digimanila@gmail.com";
const subjectOptions = [
  "AI Marketing Strategy",
  "Social Media Marketing with AI",
  "AI Content Creation",
  "Marketing Automation",
  "SEO and AI Search Optimization",
  "Paid Ads Strategy",
  "Lead Generation",
  "Brand Growth Consulting",
  "AI Chatbot and Funnel Consulting",
  "General Consultation",
];

export function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function validate() {
    const next: Record<string, string> = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Enter a valid email.";
    if (!values.subject.trim()) next.subject = "Subject is required.";
    if (values.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch(formSubmitEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...values,
          _subject: `DigiManila consultation: ${values.subject}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      const result = (await response.json()) as {
        success?: string;
        message?: string;
      };

      if (!response.ok || result.success === "false") {
        throw new Error(result.message || "Your message could not be sent. Please try again.");
      }

      setValues(initialState);
      setStatus("sent");
      setStatusMessage("Thank you. Your consultation request has been submitted to DigiManila.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Your message could not be sent. Please try again.");
    }
  }

  return (
    <form
      action="https://formsubmit.co/digimanila@gmail.com"
      method="POST"
      onSubmit={submit}
      className="rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/30 md:p-8"
    >
      <input type="hidden" name="_subject" value={`DigiManila consultation: ${values.subject || "New consultation request"}`} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <div className="grid gap-5">
        <Field label="Name" name="name" value={values.name} error={errors.name} onChange={(value) => setValues({ ...values, name: value })} />
        <Field label="Email" name="email" value={values.email} error={errors.email} onChange={(value) => setValues({ ...values, email: value })} />
        <label className="grid gap-2">
          <span className="text-sm font-medium text-slate-200">Subject</span>
          <select
            name="subject"
            value={values.subject}
            onChange={(event) => setValues({ ...values, subject: event.target.value })}
            className={`rounded-lg border bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300 ${errors.subject ? "border-rose-300" : "border-white/10"}`}
          >
            <option value="">Select a consultation topic</option>
            {subjectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.subject ? <span className="text-xs text-rose-200">{errors.subject}</span> : null}
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium text-slate-200">Message</span>
          <textarea
            name="message"
            rows={6}
            value={values.message}
            onChange={(event) => setValues({ ...values, message: event.target.value })}
            className={`rounded-lg border bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300 ${errors.message ? "border-rose-300" : "border-white/10"}`}
            placeholder="Tell me about your business and what you want to improve."
          />
          {errors.message ? <span className="text-xs text-rose-200">{errors.message}</span> : null}
        </label>
      </div>
      <button disabled={status === "sending"} className="mt-6 w-full rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-wait disabled:opacity-70">
        {status === "sending" ? "Sending..." : "Submit Form"}
      </button>
      {statusMessage ? (
        <p
          aria-live="polite"
          className={`mt-4 rounded-lg border px-4 py-3 text-sm ${
            status === "sent"
              ? "border-emerald-300/30 bg-emerald-300/10 text-emerald-100"
              : "border-rose-300/30 bg-rose-300/10 text-rose-100"
          }`}
        >
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  value,
  error,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <input
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`rounded-lg border bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300 ${error ? "border-rose-300" : "border-white/10"}`}
        placeholder={label}
      />
      {error ? <span className="text-xs text-rose-200">{error}</span> : null}
    </label>
  );
}
