

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.13dbf89d.js","_app/immutable/chunks/scheduler.65fd200e.js","_app/immutable/chunks/index.fbfcf942.js","_app/immutable/chunks/stores.e3ba7c15.js","_app/immutable/chunks/singletons.f51d56e5.js","_app/immutable/chunks/index.0ba870ba.js"];
export const stylesheets = [];
export const fonts = [];
