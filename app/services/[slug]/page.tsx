import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icons";
import { services } from "@/data/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const benefits = service.benefits ?? [
    "Clearer strategy and channel direction",
    "More consistent marketing execution",
    "Better use of AI tools and automation",
    "Stronger customer journey and conversion focus",
  ];
  const process = service.process ?? ["Discovery", "Audit", "Strategy map", "Workflow design", "Optimization plan"];
  const audience = service.audience ?? ["Founders", "Small businesses", "Growing brands", "Marketing teams"];
  const outcomes = service.outcomes ?? ["Practical action plan", "Recommended workflows", "Campaign direction", "Measurable next steps"];
  const faqs = service.faqs ?? [
    { question: "Can this be customized?", answer: "Yes. Each service is shaped around your business, audience, goals, budget, and current marketing setup." },
    { question: "Can you help with implementation?", answer: "Yes. Consulting can include guidance for campaigns, content workflows, automation, and funnel improvements." },
  ];

  return (
    <div className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-lg border border-cyan-300/20 bg-white/[0.045] p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-center">
            <div>
              <p className="section-eyebrow">Service</p>
              <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">{service.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{service.overview ?? service.description}</p>
              <Link href="/contact" className="btn-primary mt-8">Book a Consultation</Link>
            </div>
            <div className="rounded-lg border border-white/10 bg-slate-950/60 p-8">
              <Icon name={service.icon} className="h-14 w-14 text-cyan-200" />
              <p className="mt-6 text-sm leading-7 text-slate-300">{service.description}</p>
            </div>
          </div>
        </section>

        <DetailGrid title="Benefits" items={benefits} />
        <DetailGrid title="Process" items={process} ordered />
        <DetailGrid title="Who this is for" items={audience} />
        <DetailGrid title="Expected outcomes" items={outcomes} />

        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-white">FAQ</h2>
          <div className="mt-6 grid gap-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-semibold text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-8 text-center md:p-12">
          <h2 className="text-3xl font-semibold text-white">Ready to explore {service.title}?</h2>
          <Link href="/contact" className="btn-primary mt-6">Book a Consultation</Link>
        </section>
      </div>
    </div>
  );
}

function DetailGrid({ title, items, ordered = false }: { title: string; items: string[]; ordered?: boolean }) {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-semibold text-white">{title}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <span className="text-sm font-semibold text-cyan-200">{ordered ? `${index + 1}.` : "✓"}</span>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
