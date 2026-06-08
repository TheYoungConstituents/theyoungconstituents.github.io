import { createServerFn } from "@tanstack/react-start";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

export const getMemberCount = createServerFn({ method: "GET" }).handler(async () => {
  const { count, error } = await supabaseAdmin
    .from("members")
    .select("*", { count: "exact", head: true });
  if (error) throw new Error(error.message);
  return { count: count ?? 0 };
});

export const getOpenPostings = createServerFn({ method: "GET" }).handler(async () => {
  const { data, error } = await supabaseAdmin
    .from("job_postings")
    .select("id,title,level,type,description,apply_url")
    .eq("is_open", true)
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return { postings: data ?? [] };
});

// Centralized application form URLs — swap these in one place
export const APPLY_LINKS = {
  member: "https://forms.gle/PLACEHOLDER-member",
  municipal: "https://forms.gle/PLACEHOLDER-municipal",
  school: "https://forms.gle/PLACEHOLDER-school",
} as const;
