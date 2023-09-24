

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/life/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.04d26753.js","_app/immutable/chunks/scheduler.65fd200e.js","_app/immutable/chunks/index.fbfcf942.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/Header.73be0727.js","_app/immutable/chunks/stores.e3ba7c15.js","_app/immutable/chunks/singletons.f51d56e5.js","_app/immutable/chunks/index.0ba870ba.js"];
export const stylesheets = ["_app/immutable/assets/4.09512391.css","_app/immutable/assets/Header.9718b759.css"];
export const fonts = [];
