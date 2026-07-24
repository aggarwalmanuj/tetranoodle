// Canonical production origin. Non-www (tetranoodle.com) 307-redirects to www,
// so www is the authoritative host — every sitemap URL, robots directive, and
// canonical tag must match it exactly. Centralized here so the base URL lives
// in one place instead of being hardcoded across layout, sitemap, and robots.
export const SITE_URL = "https://www.tetranoodle.com";
