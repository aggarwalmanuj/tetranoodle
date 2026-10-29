// Canonical production origin. Non-www (tetranoodle.com) 307-redirects to www,
// so www is the authoritative host: every sitemap URL, robots directive, and
// canonical tag must match it exactly. Centralized here so the base URL lives
// in one place instead of being hardcoded across layout, sitemap, and robots.
export const SITE_URL = "https://www.tetranoodle.com";

// The score tool (aimerge.live) must carry ONE name everywhere: nav, hero,
// final CTAs, footer. Still pending a decision between "Unfair Advantage Score"
// and "Free Belief Score": flip SCORE_NAME here and the whole site follows.
export const SCORE_URL = "https://aimerge.live";
export const SCORE_NAME = "Unfair Advantage Score";
export const SCORE_CTA = `Get your ${SCORE_NAME}`;

// The primary call to action across the site: tell us your goal. There is
// no contact form yet, so it opens an email with the subject filled in.
export const CONTACT_EMAIL = "info@tetranoodle.com";
export const GOAL_URL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "What we want to accomplish"
)}`;
export const GOAL_CTA = "Tell us your goal";

// AI Merge Personal preview (external).
export const PERSONAL_PREVIEW_URL = "https://www.aimerge.live/challenge/audience";
