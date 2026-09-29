// UI variant switch (new Material 3 UI vs. classic). Lives outside the
// "use client" toggle so the server layout can inline the boot script.
export type Ui = "m3" | "classic";

export const UI_STORAGE_KEY = "tn-ui";

/**
 * Runs in <head> before first paint so a saved "classic" choice never
 * flashes the new UI. `?ui=classic|m3` overrides and persists, which makes
 * each variant linkable for review. The new (M3) UI is the default: CSS
 * treats a missing attribute as M3, so React never owns this attribute.
 */
export const UI_BOOT_SCRIPT = `(function(){try{var d=document.documentElement,q=new URLSearchParams(location.search).get("ui"),v=q==="classic"||q==="m3"?q:null;if(v){localStorage.setItem("${UI_STORAGE_KEY}",v)}else{v=localStorage.getItem("${UI_STORAGE_KEY}")}if(v==="classic")d.setAttribute("data-ui","classic")}catch(e){}})();`;
