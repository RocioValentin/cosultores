
ALTER TABLE public.certifications ADD COLUMN certificate_id text;
UPDATE public.certifications SET certificate_id = verification_code WHERE certificate_id IS NULL;
ALTER TABLE public.certifications ALTER COLUMN certificate_id SET NOT NULL;
ALTER TABLE public.certifications ADD CONSTRAINT certifications_certificate_id_key UNIQUE (certificate_id);
ALTER TABLE public.certifications DROP COLUMN verification_code;
