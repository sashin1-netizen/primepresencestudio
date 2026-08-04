import { spawn } from "node:child_process";
const env = { ...process.env, PRIVATE_PREVIEW_ENABLED: "true", PRIVATE_PREVIEW_INCLUDE_DRAFTS: "false", PUBLIC_LAUNCH_APPROVED: "false" };
const runNode = args => new Promise((resolve, reject) => { const child = spawn(process.execPath, args, { env, stdio: "inherit", shell: false }); child.on("exit", code => code === 0 ? resolve() : reject(new Error(`${args.join(" ")} exited ${code}`))); });
await runNode(["scripts/build-safety.mjs"]);
await runNode(["node_modules/next/dist/bin/next", "build"]);
const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "-p", "3120"], { env, stdio: "ignore", shell: false });
try {
  let ready = false;
  for (let i = 0; i < 30; i++) { await new Promise(resolve => setTimeout(resolve, 500)); try { if ((await fetch("http://127.0.0.1:3120/")).ok) { ready = true; break; } } catch {} }
  if (!ready) throw new Error("Preview server did not start");
  const get = async route => { const response = await fetch(`http://127.0.0.1:3120${route}`); return { response, text: await response.text() }; };
  const home = await get("/"); const robots = await get("/robots.txt"); const sitemap = await get("/sitemap.xml"); const review = await get("/review");
  for (const route of ["/privacy", "/terms", "/work/unpublished-project-check", "/unknown-preview-route"]) { const item = await get(route); if (item.response.status !== 404) throw new Error(`${route} expected 404, got ${item.response.status}`); }
  if (!home.text.includes("Private preview") || !home.text.includes("noindex")) throw new Error("Preview banner/noindex missing");
  if (!home.text.includes("Email contact is being finalised.")) throw new Error("Truthful contact fallback missing");
  if (!robots.text.includes("Disallow: /") || robots.text.includes("Sitemap:")) throw new Error("Preview robots invalid");
  if (sitemap.text.includes("/review") || sitemap.text.includes("unpublished-project-check")) throw new Error("Preview content leaked into sitemap");
  if (review.response.status !== 200 || !review.text.includes("Owner content readiness")) throw new Error("Review dashboard unavailable");
  const csp = home.response.headers.get("content-security-policy") || ""; if (!csp || csp.includes("unsafe-eval")) throw new Error("CSP missing or contains unsafe-eval");
  console.log("PASS private preview build, banner, noindex, robots, dashboard, 404s, contact fallback, sitemap and CSP");
} finally { server.kill("SIGTERM"); }
