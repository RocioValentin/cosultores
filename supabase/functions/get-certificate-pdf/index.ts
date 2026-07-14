// Public edge function: given a certificate_id, returns a short-lived signed URL
// to the stored PDF. Uses the service role internally so the storage bucket can
// stay fully private (no anon read policy needed).
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { certificate_id } = await req.json();
    if (!certificate_id || typeof certificate_id !== "string") {
      return new Response(JSON.stringify({ error: "certificate_id requerido" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data: cert, error } = await supabase
      .from("certifications")
      .select("pdf_url")
      .eq("certificate_id", certificate_id)
      .maybeSingle();

    if (error) throw error;
    if (!cert || !cert.pdf_url) {
      return new Response(JSON.stringify({ url: null }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { data: signed, error: signErr } = await supabase.storage
      .from("certificates")
      .createSignedUrl(cert.pdf_url, 60 * 60);
    if (signErr) throw signErr;

    return new Response(JSON.stringify({ url: signed?.signedUrl ?? null }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("get-certificate-pdf error", err);
    return new Response(JSON.stringify({ error: "internal_error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
