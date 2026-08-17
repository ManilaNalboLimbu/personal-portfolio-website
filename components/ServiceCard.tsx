import Link from "next/link";
import { Icon } from "./Icons";

export function ServiceCard({
  service,
}: {
  service: { slug: string; title: string; icon: string; description: string };
}) {
  return (
    <article className="group rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]">
      <div className="mb-6 grid h-12 w-12 place-items-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
        <Icon name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-3 min-h-24 text-sm leading-7 text-slate-300">{service.description}</p>
      <Link href={`/services/${service.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition group-hover:text-cyan-100">
        Learn More <Icon name="ArrowRight" className="h-4 w-4" />
      </Link>
    </article>
  );
}
