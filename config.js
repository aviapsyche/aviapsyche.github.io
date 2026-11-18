// =====================================================================
//  Website settings. Only PUBLIC values go here.
//  ✅ Allowed:   Project URL, Publishable key (starts with sb_publishable_)
//  ❌ NEVER:     Secret key (sb_secret_...), service_role key, database password
// =====================================================================
window.SITE_CONFIG = {
  SUPABASE_URL: "https://fzqzjknthjygpnfafykc.supabase.co",
  SUPABASE_PUBLISHABLE_KEY: "sb_publishable_iKGkAP01htoqns8kcGRSWQ_jyDV774o",

  // MUST be exactly the same as EMAIL_DOMAIN in the "activate" Edge Function.
  // Never change it after students have activated their accounts.
  EMAIL_DOMAIN: "aviapsyche.github.io",

  // Where your course page is stored (private Supabase Storage bucket)
  CONTENT_BUCKET: "site-content",
  CONTENT_FILE: "content.html",
  MUSIC_FILES: [],   // no music

  // Name of the Edge Function that checks ID + code (as shown in Supabase → Edge Functions)
  ACTIVATE_FUNCTION: "quick-api",

  SITE_TITLE: "Aviation Psychology",
};
