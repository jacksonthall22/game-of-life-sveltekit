import * as server from '../entries/pages/sverdle/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.31a7f66d.js","_app/immutable/chunks/scheduler.65fd200e.js","_app/immutable/chunks/index.fbfcf942.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.f51d56e5.js","_app/immutable/chunks/index.0ba870ba.js"];
export const stylesheets = ["_app/immutable/assets/5.53295563.css"];
export const fonts = [];
