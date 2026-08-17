import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI marketing strategy, social media, content creation, automation, SEO, paid ads, lead generation, brand growth, and chatbot funnel consulting.",
};

export default function ServicesPage() {
  return (
    <div className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Section eyebrow="Services" title="AI-powered marketing services for sharper growth">
          Choose focused consulting support for strategy, content, automation, search visibility, paid campaigns, lead generation, and brand growth.
        </Section>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
        </div>
      </div>
    </div>
  );
}
