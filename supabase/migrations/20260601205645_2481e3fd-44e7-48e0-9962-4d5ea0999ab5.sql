
-- Members table (for live counter)
CREATE TABLE public.members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  province TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT ON public.members TO anon;
GRANT SELECT, INSERT ON public.members TO authenticated;
GRANT ALL ON public.members TO service_role;

ALTER TABLE public.members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Members are publicly countable"
ON public.members FOR SELECT
USING (true);

-- Seed 100 baseline members
INSERT INTO public.members (province)
SELECT (ARRAY['Ontario','Quebec','Alberta','Nova Scotia','New Brunswick','Saskatchewan'])[1 + (g % 6)]
FROM generate_series(1, 100) g;

-- Job postings table
CREATE TABLE public.job_postings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  level TEXT NOT NULL,
  type TEXT NOT NULL,
  description TEXT NOT NULL,
  apply_url TEXT,
  is_open BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT ON public.job_postings TO anon;
GRANT SELECT ON public.job_postings TO authenticated;
GRANT ALL ON public.job_postings TO service_role;

ALTER TABLE public.job_postings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Open postings are public"
ON public.job_postings FOR SELECT
USING (is_open = true);

INSERT INTO public.job_postings (title, level, type, description, apply_url) VALUES
('COO Assistant Team Member', 'National', 'Volunteer / Leadership', 'Support the Chief Operating Officer in day-to-day national workflows, cross-provincial coordination, and policy implementation.', '#'),
('CIO Assistant Team Member', 'National', 'Volunteer / Leadership', 'Support the Chief Information Officer in managing the national ledger, tech infrastructure, Discord servers, and digital compliance systems.', '#');
