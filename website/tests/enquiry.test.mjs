import test from "node:test"; import assert from "node:assert/strict"; import { buildEnquiryMailto, validateEnquiry } from "../lib/enquiry.mjs";
const valid={name:"Owner",email:"owner@example.test",details:"A sufficiently detailed genuine project enquiry.",consent:true};
test("valid enquiry has no validation errors",()=>assert.deepEqual(validateEnquiry(valid),{}));
test("contact validation reports every required error",()=>assert.deepEqual(Object.keys(validateEnquiry({name:"",email:"bad",details:"short",consent:false})),["name","email","details","consent"]));
test("mailto safely encodes enquiry content",()=>assert.match(buildEnquiryMailto("owner@example.test",{...valid,name:"A&B"}),/^mailto:owner@example\.test\?subject=Project%20enquiry%20from%20A%26B&body=/));
test("invalid unconfirmed destination is refused",()=>assert.throws(()=>buildEnquiryMailto("owner@example@test.invalid",valid),/owner-approved/));
