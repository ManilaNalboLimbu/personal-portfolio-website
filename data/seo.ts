import { services } from "@/data/site";

export const siteUrl = "https://www.digimanila.com";

export const staticPages = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
] as const;

export const publicPages = [
  ...staticPages,
  ...services.map((service) => ({
    path: `/services/${service.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  })),
];

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}
