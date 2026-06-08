import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { c as createSsrRpc, u as useServerFn } from "./createSsrRpc-BuONn9Wz.js";
import { a as createServerFn } from "./server-ewLjdESx.js";
import { z } from "zod";
import { Mail, Instagram, Linkedin } from "lucide-react";
import "@tanstack/react-router";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "@tanstack/react-router/ssr/server";
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2e3)
});
const submitContact = createServerFn({
  method: "POST"
}).inputValidator((data) => contactSchema.parse(data)).handler(createSsrRpc("d4c523a48edc5324e844f9a5631e9b3ab50822c1a944414a233a3b7223d652ee"));
const newsletterSchema = z.object({
  email: z.string().trim().email("Enter a valid email").max(255)
});
createServerFn({
  method: "POST"
}).inputValidator((data) => newsletterSchema.parse(data)).handler(createSsrRpc("51247a0dbccffebb42f24ae19a0f421d7a7f362895b051b1ae1e3602a7d8390e"));
const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2e3)
});
function Contact() {
  const submit = useServerFn(submitContact);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverMsg, setServerMsg] = useState("");
  const setField = (k, v) => {
    setForm((f) => ({
      ...f,
      [k]: v
    }));
    if (errors[k]) setErrors((e) => ({
      ...e,
      [k]: ""
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const next = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0]] = issue.message;
      }
      setErrors(next);
      return;
    }
    setStatus("loading");
    setServerMsg("");
    try {
      await submit({
        data: parsed.data
      });
      setStatus("ok");
      setServerMsg("Thanks for reaching out. We will get back to you shortly.");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (err) {
      setStatus("error");
      setServerMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { style: {
      background: "#080028",
      color: "#fff",
      marginTop: "-78px",
      paddingTop: "78px"
    }, children: /* @__PURE__ */ jsxs("div", { className: "container-tyc pt-20 pb-28 lg:pt-28 lg:pb-32", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow", style: {
        color: "#FFA300"
      }, children: /* @__PURE__ */ jsx("span", { style: {
        color: "#FFA300"
      }, children: "Contact" }) }),
      /* @__PURE__ */ jsxs("h1", { className: "text-white mt-8 display-hero max-w-4xl", children: [
        "Get in ",
        /* @__PURE__ */ jsx("span", { style: {
          color: "#FFA300"
        }, children: "Touch." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", children: /* @__PURE__ */ jsxs("div", { className: "container-tyc grid lg:grid-cols-12 gap-14", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Reach Us" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 text-[28px] leading-tight", children: "We read every message we receive." }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-[14px] text-[#4a5078] leading-relaxed", children: "For chapter inquiries, press, or partnerships, use the form or any of the channels below." }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-10 space-y-5 text-[14px]", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "mailto:contact@theyoungconstituents.ca", className: "flex items-center gap-3 text-[#080028] hover:text-[#FFA300] transition", children: [
            /* @__PURE__ */ jsx(Mail, { size: 18, color: "#FFA300" }),
            " contact@theyoungconstituents.ca"
          ] }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#", className: "flex items-center gap-3 text-[#080028] hover:text-[#FFA300] transition", children: [
            /* @__PURE__ */ jsx(Instagram, { size: 18, color: "#FFA300" }),
            " @theyoungconstituents"
          ] }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#", className: "flex items-center gap-3 text-[#080028] hover:text-[#FFA300] transition", children: [
            /* @__PURE__ */ jsx(Linkedin, { size: 18, color: "#FFA300" }),
            " The Young Constituents"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-8", children: /* @__PURE__ */ jsxs("form", { onSubmit, noValidate: true, className: "grid sm:grid-cols-2 gap-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-1", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "c-name", className: "field-label", children: "Name" }),
          /* @__PURE__ */ jsx("input", { id: "c-name", className: "field", value: form.name, onChange: (e) => setField("name", e.target.value), "aria-invalid": !!errors.name, "aria-describedby": errors.name ? "err-name" : void 0, required: true }),
          errors.name && /* @__PURE__ */ jsx("p", { id: "err-name", className: "field-error", children: errors.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-1", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "c-email", className: "field-label", children: "Email" }),
          /* @__PURE__ */ jsx("input", { id: "c-email", type: "email", className: "field", value: form.email, onChange: (e) => setField("email", e.target.value), "aria-invalid": !!errors.email, "aria-describedby": errors.email ? "err-email" : void 0, required: true }),
          errors.email && /* @__PURE__ */ jsx("p", { id: "err-email", className: "field-error", children: errors.email })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "c-subject", className: "field-label", children: "Subject" }),
          /* @__PURE__ */ jsx("input", { id: "c-subject", className: "field", value: form.subject, onChange: (e) => setField("subject", e.target.value), "aria-invalid": !!errors.subject }),
          errors.subject && /* @__PURE__ */ jsx("p", { className: "field-error", children: errors.subject })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "c-message", className: "field-label", children: "Message" }),
          /* @__PURE__ */ jsx("textarea", { id: "c-message", className: "field", rows: 6, value: form.message, onChange: (e) => setField("message", e.target.value), "aria-invalid": !!errors.message, "aria-describedby": errors.message ? "err-message" : void 0, required: true }),
          errors.message && /* @__PURE__ */ jsx("p", { id: "err-message", className: "field-error", children: errors.message })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-5 mt-2", children: [
          /* @__PURE__ */ jsx("button", { type: "submit", className: "btn btn-primary", disabled: status === "loading", children: status === "loading" ? "Sending..." : "Send Message" }),
          serverMsg && /* @__PURE__ */ jsx("p", { role: "status", className: "text-[14px]", style: {
            color: status === "ok" ? "#249EBF" : "#c0392b"
          }, children: serverMsg })
        ] })
      ] }) })
    ] }) })
  ] });
}
export {
  Contact as component
};
