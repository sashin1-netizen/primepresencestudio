import test from "node:test";
import assert from "node:assert/strict";
import { onlyApproved } from "../lib/publication.mjs";

test("excludes draft and missing publication states", () => {
  const records = [{ slug: "draft", publicationStatus: "draft" }, { slug: "approved", publicationStatus: "approved" }, { slug: "missing" }];
  assert.deepEqual(onlyApproved(records).map(record => record.slug), ["approved"]);
});

test("does not mutate the source project collection", () => {
  const records = [{ publicationStatus: "approved" }, { publicationStatus: "draft" }];
  onlyApproved(records); assert.equal(records.length, 2);
});
