import fs from "node:fs/promises";
import path from "node:path";

const [, , baseUrl = "http://127.0.0.1:3112", outputRoot = "docs/artifacts/browser-audit"] = process.argv;
const routes = ["", "services", "work", "about", "process", "contact", "insights", "privacy", "terms", "missing-page-check"];
const viewports = [[320,568],[375,667],[390,844],[768,1024],[1024,768],[1280,720],[1440,900]];
const axeSource = await fs.readFile("node_modules/axe-core/axe.min.js", "utf8");
await fs.mkdir(outputRoot, { recursive: true });

async function newTarget(url) {
  const response = await fetch(`http://127.0.0.1:9223/json/new?${encodeURIComponent(url)}`, { method: "PUT" });
  if (!response.ok) throw new Error(`Chrome target failed: ${response.status}`);
  return response.json();
}

async function connect(webSocketDebuggerUrl) {
  const socket = new WebSocket(webSocketDebuggerUrl); let id = 0; const pending = new Map();
  await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
  socket.onmessage = event => { const message = JSON.parse(event.data); if (!message.id) return; const handler = pending.get(message.id); if (!handler) return; pending.delete(message.id); if (message.error) { handler.reject(new Error(message.error.message)); } else { handler.resolve(message.result); } };
  return { send(method, params = {}) { const callId = ++id; socket.send(JSON.stringify({ id: callId, method, params })); return new Promise((resolve, reject) => pending.set(callId, { resolve, reject })); }, close() { socket.close(); } };
}

const axeResults = [];
for (const route of routes) {
  for (const [width, height] of viewports) {
    const url = `${baseUrl}/${route}`; const target = await newTarget(url); const cdp = await connect(target.webSocketDebuggerUrl);
    await cdp.send("Page.enable"); await cdp.send("Runtime.enable");
    await cdp.send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: width < 768, screenWidth: width, screenHeight: height });
    await cdp.send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
    await cdp.send("Page.navigate", { url });
    await new Promise(resolve => setTimeout(resolve, 900));
    const metrics = await cdp.send("Runtime.evaluate", { expression: "({scrollWidth:document.documentElement.scrollWidth,clientWidth:document.documentElement.clientWidth,title:document.title,h1:document.querySelectorAll('h1').length})", returnByValue: true });
    const screenshot = await cdp.send("Page.captureScreenshot", { format: "png", fromSurface: true, captureBeyondViewport: false });
    const name = route || "home"; await fs.writeFile(path.join(outputRoot, `${name}-${width}x${height}.png`), Buffer.from(screenshot.data, "base64"));
    if (["", "services", "contact"].includes(route) && [390, 1440].includes(width)) { await cdp.send("Runtime.evaluate", { expression: axeSource }); const axe = await cdp.send("Runtime.evaluate", { expression: "axe.run(document).then(r=>({violations:r.violations.map(v=>({id:v.id,impact:v.impact,description:v.description,nodes:v.nodes.length})),passes:r.passes.length,incomplete:r.incomplete.map(v=>v.id)}))", awaitPromise: true, returnByValue: true }); axeResults.push({ route: `/${route}`, width, ...axe.result.value }); }
    await fs.appendFile(path.join(outputRoot, "metrics.ndjson"), `${JSON.stringify({ route: `/${route}`, width, height, ...metrics.result.value })}\n`); cdp.close(); await fetch(`http://127.0.0.1:9223/json/close/${target.id}`);
  }
}
await fs.writeFile(path.join(outputRoot, "axe-results.json"), JSON.stringify(axeResults, null, 2));
console.log(`Captured ${routes.length * viewports.length} screenshots and ${axeResults.length} axe scans.`);
