import * as universal from '../entries/pages/sverdle/how-to-play/_page.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/how-to-play/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/sverdle/how-to-play/+page.ts";
export const imports = ["_app/immutable/nodes/6.804de191.js","_app/immutable/chunks/environment.c65a56ab.js","_app/immutable/chunks/scheduler.65fd200e.js","_app/immutable/chunks/index.fbfcf942.js"];
export const stylesheets = ["_app/immutable/assets/6.83e29ea0.css"];
export const fonts = [];
