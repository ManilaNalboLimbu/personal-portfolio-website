import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

test("keeps the finished portfolio on a Vercel-compatible Next.js stack", async () => {
  const [page, layout, siteData, packageJson, rootFiles] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../data/site.ts", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readdir(new URL("../", import.meta.url)),
  ]);

  assert.match(siteData, /Manila Nalbo Limbu/);
  assert.match(siteData, /AI Marketing Expert and Consultant/);
  assert.match(page, /View Services/);
  assert.match(page, /AI marketing expertise highlights/);
  assert.match(page, /Client stories coming soon/);
  assert.match(page, /Featured Services/);
  assert.match(layout, /DigiManila/);
  assert.match(layout, /openGraph/);
  assert.match(packageJson, /"next":/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton|vinext|wrangler|vite|@cloudflare|drizzle/);
  assert.doesNotMatch(page + layout, /SkeletonPreview|codex-preview|Starter Project/);
  assert.ok(!rootFiles.includes("vite.config.ts"));
  assert.ok(!rootFiles.includes("worker"));
  assert.ok(!rootFiles.includes("drizzle.config.ts"));

  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});
