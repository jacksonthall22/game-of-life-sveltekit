import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.e566b5ef.js","_app/immutable/chunks/scheduler.65fd200e.js","_app/immutable/chunks/index.fbfcf942.js","_app/immutable/chunks/index.0ba870ba.js"];
export const stylesheets = ["_app/immutable/assets/2.04f9c03b.css"];
export const fonts = [];
