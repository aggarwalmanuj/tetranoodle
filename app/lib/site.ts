// Canonical production origin. Non-www (tetranoodle.com) 307-redirects to www,
// so www is the authoritative host — every sitemap URL, robots directive, and
// canonical tag must match it exactly. Centralized here so the base URL lives
// in one place instead of being hardcoded across layout, sitemap, and robots.
export const SITE_URL = "https://www.tetranoodle.com";

// The score tool (aimerge.live) must carry ONE name everywhere: nav, hero,
// final CTAs, footer. Still pending a decision between "Unfair Advantage Score"
// and "Free Belief Score" — flip SCORE_NAME here and the whole site follows.
export const SCORE_URL = "https://aimerge.live";
export const SCORE_NAME = "Unfair Advantage Score";
export const SCORE_CTA = `Get your ${SCORE_NAME}`;
