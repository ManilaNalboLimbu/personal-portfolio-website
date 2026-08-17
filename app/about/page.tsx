import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Manila Nalbo Limbu, an AI Marketing Expert and Consultant based in Purano Baneshwor, Kathmandu.",
};

export default function AboutPage() {
  return (
    <div className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="section-eyebrow">About Me</p>
        <div className="mt-5 grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            I help businesses turn AI into clear, human-centered marketing growth.
          </h1>
          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              I am Manila Nalbo Limbu, an AI Marketing Expert and Consultant based in Purano Baneshwor, Kathmandu. I work with businesses that want to use AI thoughtfully across strategy, content, automation, search, and lead generation.
            </p>
            <p>
              My consulting style is confident, practical, and approachable. I translate complex tools into marketing systems that teams can understand, manage, and improve.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["My Mission", "Make AI marketing useful, ethical, and measurable for growing businesses."],
            ["My Expertise", "Strategy, content systems, automation, SEO, paid campaigns, and funnels."],
            ["My Approach", "Audit first, prioritize impact, then build workflows that fit the business."],
            ["My Standard", "Premium execution with clean messaging, strong structure, and consistent optimization."],
          ].map(([title, copy]) => (
            <article key={title} className="rounded-lg border border-white/10 bg-white/[0.045] p-6">
              <Icon name="Sparkles" className="h-6 w-6 text-cyan-200" />
              <h2 className="mt-5 text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">{copy}</p>
            </article>
          ))}
        </div>

        <section className="mt-16 rounded-lg border border-white/10 bg-slate-950/55 p-8 md:p-10">
          <h2 className="text-3xl font-semibold text-white">Skills and tools</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {["AI strategy", "Prompt workflows", "Content planning", "Marketing automation", "SEO", "Paid ads", "Funnels", "Analytics", "Chatbot consulting", "Brand growth"].map((skill) => (
              <span key={skill} className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-50">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-16 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Let’s design your AI marketing system.</h2>
          <Link href="/contact" className="btn-primary mt-6">Book a Consultation</Link>
        </div>
      </div>
    </div>
  );
}
