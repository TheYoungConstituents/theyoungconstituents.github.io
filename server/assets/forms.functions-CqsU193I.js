import { c as createServerRpc, s as supabaseAdmin } from "./client.server-BMcm7GjZ.js";
import { a as createServerFn } from "./server-ewLjdESx.js";
import { z } from "zod";
import "@supabase/supabase-js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "react";
import "@tanstack/react-router";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2e3)
});
const submitContact_createServerFn_handler = createServerRpc({
  id: "d4c523a48edc5324e844f9a5631e9b3ab50822c1a944414a233a3b7223d652ee",
  name: "submitContact",
  filename: "src/lib/forms.functions.ts"
}, (opts) => submitContact.__executeServer(opts));
const submitContact = createServerFn({
  method: "POST"
}).inputValidator((data) => contactSchema.parse(data)).handler(submitContact_createServerFn_handler, async ({
  data
}) => {
  const {
    error
  } = await supabaseAdmin.from("contact_submissions").insert({
    name: data.name,
    email: data.email,
    subject: data.subject || null,
    message: data.message
  });
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
const newsletterSchema = z.object({
  email: z.string().trim().email("Enter a valid email").max(255)
});
const subscribeNewsletter_createServerFn_handler = createServerRpc({
  id: "51247a0dbccffebb42f24ae19a0f421d7a7f362895b051b1ae1e3602a7d8390e",
  name: "subscribeNewsletter",
  filename: "src/lib/forms.functions.ts"
}, (opts) => subscribeNewsletter.__executeServer(opts));
const subscribeNewsletter = createServerFn({
  method: "POST"
}).inputValidator((data) => newsletterSchema.parse(data)).handler(subscribeNewsletter_createServerFn_handler, async ({
  data
}) => {
  const {
    error
  } = await supabaseAdmin.from("newsletter_signups").insert({
    email: data.email
  });
  if (error && !error.message.toLowerCase().includes("duplicate")) {
    throw new Error(error.message);
  }
  return {
    ok: true
  };
});
export {
  submitContact_createServerFn_handler,
  subscribeNewsletter_createServerFn_handler
};
