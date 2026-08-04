import test from "node:test";
import assert from "node:assert/strict";
import { buildWhatsAppUrl } from "../lib/contact-url.mjs";

test("encodes a natural WhatsApp message safely", () => {
  assert.equal(buildWhatsAppUrl("27711547161", " A&B studio? "), "https://wa.me/27711547161?text=A%26B%20studio%3F");
});

test("rejects formatted or non-international numbers", () => {
  assert.throws(() => buildWhatsAppUrl("+27 71 154 7161", "Hello"), /international digits/);
});
