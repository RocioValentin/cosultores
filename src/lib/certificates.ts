import { supabase } from "@/integrations/supabase/client";

export async function getCertificatePdfUrl(pdfPath: string | null): Promise<string | null> {
  if (!pdfPath) return null;
  // pdfPath stored as the storage object path (e.g. "abc123/cert.pdf")
  const { data, error } = await supabase.storage
    .from("certificates")
    .createSignedUrl(pdfPath, 60 * 60); // 1 hour
  if (error || !data) return null;
  return data.signedUrl;
}
