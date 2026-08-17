import Image from "next/image";
import Link from "next/link";
import { contact, navLinks, services } from "@/data/site";
import { Icon } from "./Icons";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05080d]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-1">
          <Image
            src="/images/digimanila-logo.jpeg"
            alt="DigiManila"
            width={240}
            height={88}
            className="mb-4 h-auto w-44 rounded-md object-contain"
          />
          <p className="font-semibold text-white">{contact.websiteName}</p>
          <p className="mt-1 text-sm text-slate-400">{contact.title}</p>
          <div className="mt-5 flex gap-3 text-sm text-slate-400">
            <a className="hover:text-cyan-200" href="https://www.linkedin.com/" rel="noreferrer">LinkedIn</a>
            <a className="hover:text-cyan-200" href="https://www.instagram.com/" rel="noreferrer">Instagram</a>
            <a className="hover:text-cyan-200" href="https://www.facebook.com/" rel="noreferrer">Facebook</a>
          </div>
        </div>
        <FooterColumn title="Quick Links" items={navLinks} />
        <FooterColumn title="Services" items={services.slice(0, 5).map((service) => ({ href: `/services/${service.slug}`, label: service.title }))} />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p className="flex gap-2"><Icon name="Mail" className="h-4 w-4 text-cyan-200" /> {contact.email}</p>
            <p className="flex gap-2"><Icon name="Phone" className="h-4 w-4 text-cyan-200" /> {contact.phone}</p>
            <p className="flex gap-2"><Icon name="MapPin" className="h-4 w-4 text-cyan-200" /> {contact.location}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-500">
        Copyright {new Date().getFullYear()} Manila Nalbo Limbu. All rights reserved.
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">{title}</p>
      <div className="mt-4 grid gap-3 text-sm">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="text-slate-400 transition hover:text-cyan-200">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
