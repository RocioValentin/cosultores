
-- 1. Move has_role to a private schema so it's not exposed via the Data API,
--    and revoke the executable-by-signed-in-users SECURITY DEFINER function in public.
CREATE SCHEMA IF NOT EXISTS private;
GRANT USAGE ON SCHEMA private TO authenticated, service_role;

CREATE OR REPLACE FUNCTION private.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

REVOKE ALL ON FUNCTION private.has_role(uuid, public.app_role) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION private.has_role(uuid, public.app_role) TO authenticated, service_role;

-- 2. Rewrite policies that referenced public.has_role to use private.has_role
DROP POLICY IF EXISTS "Admins can delete certifications" ON public.certifications;
DROP POLICY IF EXISTS "Admins can insert certifications" ON public.certifications;
DROP POLICY IF EXISTS "Admins can update certifications" ON public.certifications;
DROP POLICY IF EXISTS "Public can view certifications" ON public.certifications;
DROP POLICY IF EXISTS "Admins can view all roles" ON public.user_roles;

CREATE POLICY "Admins can view all certifications"
ON public.certifications FOR SELECT TO authenticated
USING (private.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can insert certifications"
ON public.certifications FOR INSERT TO authenticated
WITH CHECK (private.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can update certifications"
ON public.certifications FOR UPDATE TO authenticated
USING (private.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can delete certifications"
ON public.certifications FOR DELETE TO authenticated
USING (private.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can view all roles"
ON public.user_roles FOR SELECT TO authenticated
USING (private.has_role(auth.uid(), 'admin'::public.app_role));

-- 3. Storage policies: remove public read on the certificates bucket. Admin-only direct access.
--    Public verification is served through a SECURITY DEFINER RPC + signed URL edge function.
DROP POLICY IF EXISTS "Public read certificate files" ON storage.objects;
DROP POLICY IF EXISTS "Admins can upload certificate files" ON storage.objects;
DROP POLICY IF EXISTS "Admins can update certificate files" ON storage.objects;
DROP POLICY IF EXISTS "Admins can delete certificate files" ON storage.objects;

CREATE POLICY "Admins can read certificate files"
ON storage.objects FOR SELECT TO authenticated
USING (bucket_id = 'certificates' AND private.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can upload certificate files"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'certificates' AND private.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can update certificate files"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'certificates' AND private.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can delete certificate files"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'certificates' AND private.has_role(auth.uid(), 'admin'::public.app_role));

-- 4. Public search/verify RPCs. These return only the non-sensitive fields needed for
--    the public flows (no DNI leaves the database).
CREATE OR REPLACE FUNCTION public.search_certifications_by_dni(_dni text)
RETURNS TABLE (
  id uuid,
  full_name text,
  course_name text,
  issue_date date,
  certificate_id text,
  has_pdf boolean
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT id, full_name, course_name, issue_date, certificate_id, (pdf_url IS NOT NULL) AS has_pdf
  FROM public.certifications
  WHERE dni = _dni
  ORDER BY issue_date DESC
  LIMIT 50;
$$;

CREATE OR REPLACE FUNCTION public.get_certification_by_code(_certificate_id text)
RETURNS TABLE (
  id uuid,
  full_name text,
  course_name text,
  issue_date date,
  certificate_id text,
  has_pdf boolean
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT id, full_name, course_name, issue_date, certificate_id, (pdf_url IS NOT NULL) AS has_pdf
  FROM public.certifications
  WHERE certificate_id = _certificate_id
  LIMIT 1;
$$;

REVOKE ALL ON FUNCTION public.search_certifications_by_dni(text) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.get_certification_by_code(text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.search_certifications_by_dni(text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_certification_by_code(text) TO anon, authenticated;

-- 5. Drop the old public.has_role now that policies no longer reference it.
DROP FUNCTION IF EXISTS public.has_role(uuid, public.app_role);
