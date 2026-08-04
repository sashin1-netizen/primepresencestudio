import { spawnSync } from "node:child_process";
if (process.env.PUBLIC_LAUNCH_APPROVED === "true") {
  const result = spawnSync(process.execPath, ["scripts/launch-validate.mjs"], { stdio: "inherit", env: process.env });
  if (result.status !== 0) { console.error("Public build refused: launch approval was enabled while critical gates remain blocked."); process.exit(1); }
}
