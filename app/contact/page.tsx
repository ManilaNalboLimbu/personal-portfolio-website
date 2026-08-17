import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icons";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Manila Nalbo Limbu for AI marketing consulting in Purano Baneshwor, Kathmandu.",
};

export default function ContactPage() {
  return (
    <div className="px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
        <section>
          <p className="section-eyebrow">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">Let’s talk about your next stage of growth.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Share your business goals, current marketing challenge, or AI idea. Manila will help you find a clear next step.
          </p>
          <div className="mt-10 grid gap-4">
            <Info icon="Mail" label="Email" value={contact.email} />
            <Info icon="Phone" label="Phone" value={contact.phone} />
            <Info icon="MapPin" label="Location" value={contact.location} />
          </div>
        </section>
        <ContactForm />
      </div>
    </div>
  );
}

function Info({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5">
      <Icon name={icon} className="h-5 w-5 text-cyan-200" />
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="mt-1 font-medium text-white">{value}</p>
      </div>
    </div>
  );
}
