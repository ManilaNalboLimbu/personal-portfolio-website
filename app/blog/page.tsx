import type { Metadata } from "next";
import { posts } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "AI marketing insights, strategy ideas, automation guidance, and content growth articles.",
};

export default function BlogPage() {
  return (
    <div className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="section-eyebrow">Blog</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-white md:text-6xl">Ideas for smarter AI marketing and business growth</h1>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-lg border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40">
              <div className="flex items-center justify-between gap-4 text-xs text-slate-500">
                <span className="rounded-lg bg-cyan-300/10 px-3 py-1 text-cyan-100">{post.category}</span>
                <time>{post.date}</time>
              </div>
              <h2 className="mt-5 text-xl font-semibold text-white">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">{post.excerpt}</p>
              <button className="mt-6 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100">Read More</button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
