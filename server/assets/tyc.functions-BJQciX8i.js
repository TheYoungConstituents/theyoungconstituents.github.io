import { c as createServerRpc, s as supabaseAdmin } from "./client.server-BMcm7GjZ.js";
import { a as createServerFn } from "./server-ewLjdESx.js";
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
const getMemberCount_createServerFn_handler = createServerRpc({
  id: "30d2350e0df9d919655af347cafe053ff918155eb2e342568650fb604a87c9bb",
  name: "getMemberCount",
  filename: "src/lib/tyc.functions.ts"
}, (opts) => getMemberCount.__executeServer(opts));
const getMemberCount = createServerFn({
  method: "GET"
}).handler(getMemberCount_createServerFn_handler, async () => {
  const {
    count,
    error
  } = await supabaseAdmin.from("members").select("*", {
    count: "exact",
    head: true
  });
  if (error) throw new Error(error.message);
  return {
    count: count ?? 0
  };
});
const getOpenPostings_createServerFn_handler = createServerRpc({
  id: "3fa5995c45489ea962662f2091da1a1d9068871a0f56af77c3a8080cf6cd40df",
  name: "getOpenPostings",
  filename: "src/lib/tyc.functions.ts"
}, (opts) => getOpenPostings.__executeServer(opts));
const getOpenPostings = createServerFn({
  method: "GET"
}).handler(getOpenPostings_createServerFn_handler, async () => {
  const {
    data,
    error
  } = await supabaseAdmin.from("job_postings").select("id,title,level,type,description,apply_url").eq("is_open", true).order("created_at", {
    ascending: false
  });
  if (error) throw new Error(error.message);
  return {
    postings: data ?? []
  };
});
export {
  getMemberCount_createServerFn_handler,
  getOpenPostings_createServerFn_handler
};
