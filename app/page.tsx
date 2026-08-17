import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { Icon } from "@/components/Icons";
import { contact, posts, services } from "@/data/site";

export const metadata: Metadata = {
  description:
    "AI marketing strategy, automation, content, search, and brand growth consulting in Kathmandu.",
};

export default function Home() {
  return (
    <>
      <section className="hero-grid relative overflow-hidden px-5 py-20 md:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight text-white md:text-7xl">
              {contact.name}
            </h1>
            <p className="mt-4 text-2xl font-medium text-cyan-200 md:text-3xl">{contact.title}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Helping businesses grow with AI-powered marketing strategies, smarter content systems, automation, and conversion-focused digital campaigns.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="btn-primary" href="/services">View Services</Link>
              <Link className="btn-secondary" href="/contact">Book a Consultation</Link>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <Section eyebrow="Introduction" title="Marketing growth with strategy first, AI second.">
          I help businesses use AI in a practical, brand-safe, and revenue-focused way. The goal is not to chase every new tool. It is to build a marketing system that reaches the right audience, communicates clearly, and improves over time.
        </Section>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Section eyebrow="Expertise" title="AI marketing expertise highlights" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {["AI strategy and planning", "Content systems and automation", "Search, ads, and lead generation"].map((item) => (
              <div className="rounded-lg border border-white/10 bg-slate-950/50 p-6" key={item}>
                <Icon name="CheckCircle2" className="h-6 w-6 text-cyan-200" />
                <h3 className="mt-5 text-lg font-semibold text-white">{item}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">Structured consulting that turns AI capability into clear marketing action and measurable business momentum.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Section eyebrow="Featured Services" title="Built for modern business growth" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow">Why Work With Me</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">Premium thinking, practical execution.</h2>
          </div>
          <div className="grid gap-4">
            {["Clear strategy before tools", "Human brand voice protected", "Automation designed for real workflows", "Growth tracked with useful metrics"].map((item) => (
              <div className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5" key={item}>
                <Icon name="Sparkles" className="mt-1 h-5 w-5 text-cyan-200" />
                <p className="text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-5 py-20 lg:px-8">
        <Section eyebrow="Testimonials" title="Client stories coming soon">
          Placeholder testimonials can be replaced with real client feedback as Manila’s portfolio grows.
        </Section>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Section eyebrow="Insights" title="AI marketing blog preview" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <article className="rounded-lg border border-white/10 bg-white/[0.045] p-6" key={post.title}>
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">{post.category}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-8 text-center md:p-12">
          <h2 className="text-3xl font-semibold text-white">Ready to build smarter marketing?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">Let’s map the AI strategy, content system, and growth channels that fit your business.</p>
          <Link className="btn-primary mt-7" href="/contact">Book a Consultation</Link>
        </div>
      </section>
    </>
  );
}

function HeroVisual() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-cyan-300/20 bg-slate-950/70 p-5 shadow-[0_0_90px_rgba(34,211,238,.14)] md:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(34,211,238,.18),transparent_18rem),radial-gradient(circle_at_82%_12%,rgba(250,204,21,.16),transparent_16rem)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(103,232,249,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,.14)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">DigiManila Growth Console</p>
            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">AI marketing signals, aligned.</h2>
          </div>
          <div className="grid h-12 w-12 place-items-center rounded-lg border border-amber-200/30 bg-amber-200/10 text-amber-100">
            <Icon name="Sparkles" className="h-6 w-6" />
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-[1fr_.8fr]">
          <div className="rounded-lg border border-white/10 bg-white/[0.05] p-5">
            <div className="mb-5 flex items-center justify-between text-xs text-slate-400">
              <span>Campaign momentum</span>
              <span className="text-emerald-200">+38%</span>
            </div>
            <div className="flex h-36 items-end gap-3">
              {[42, 58, 49, 74, 68, 86, 100].map((height, index) => (
                <div key={height} className="flex flex-1 items-end">
                  <div
                    className={`w-full rounded-t-md ${index === 6 ? "bg-amber-200" : "bg-cyan-300/70"}`}
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {[
              ["Strategy", "Audience, offer, and channel clarity"],
              ["Automation", "Lead nurture flows and follow-up"],
              ["Growth", "Content, search, ads, and conversion"],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-lg border border-white/10 bg-white/[0.05] p-4">
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{copy}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-4">
          <div className="flex flex-wrap gap-2">
            {["AI Strategy", "Content Systems", "SEO", "Funnels"].map((item) => (
              <span key={item} className="rounded-md bg-slate-950/70 px-3 py-2 text-xs font-medium text-cyan-50">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
