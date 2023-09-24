import { c as create_ssr_component, a as validate_store, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
/* empty css                                                 */const logo = "/_app/immutable/assets/svelte-logo.87df40b8.svg";
const github = "/_app/immutable/assets/github.1ea8d62e.svg";
const css$1 = {
  code: "header.s-Cmt25qOMERl7.s-Cmt25qOMERl7{display:flex;justify-content:space-between}.corner.s-Cmt25qOMERl7.s-Cmt25qOMERl7{width:3em;height:3em}.corner.s-Cmt25qOMERl7 a.s-Cmt25qOMERl7{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.corner.s-Cmt25qOMERl7 img.s-Cmt25qOMERl7{width:2em;height:2em;object-fit:contain}nav.s-Cmt25qOMERl7.s-Cmt25qOMERl7{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.s-Cmt25qOMERl7.s-Cmt25qOMERl7{width:2em;height:3em;display:block}path.s-Cmt25qOMERl7.s-Cmt25qOMERl7{fill:var(--background)}ul.s-Cmt25qOMERl7.s-Cmt25qOMERl7{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.s-Cmt25qOMERl7.s-Cmt25qOMERl7{position:relative;height:100%}li[aria-current='page'].s-Cmt25qOMERl7.s-Cmt25qOMERl7::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--color-theme-1)}nav.s-Cmt25qOMERl7 a.s-Cmt25qOMERl7{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.s-Cmt25qOMERl7.s-Cmt25qOMERl7:hover{color:var(--color-theme-1)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="s-Cmt25qOMERl7"><div class="corner s-Cmt25qOMERl7"><a href="https://kit.svelte.dev" class="s-Cmt25qOMERl7"><img${add_attribute("src", logo, 0)} alt="SvelteKit" class="s-Cmt25qOMERl7"></a></div> <nav class="s-Cmt25qOMERl7"><svg viewBox="0 0 2 3" aria-hidden="true" class="s-Cmt25qOMERl7"><path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" class="s-Cmt25qOMERl7"></path></svg> <ul class="s-Cmt25qOMERl7"><li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)} class="s-Cmt25qOMERl7"><a href="/" class="s-Cmt25qOMERl7" data-svelte-h="svelte-5a0zws">Home</a></li> <li${add_attribute("aria-current", $page.url.pathname === "/about" ? "page" : void 0, 0)} class="s-Cmt25qOMERl7"><a href="/about" class="s-Cmt25qOMERl7" data-svelte-h="svelte-iphxk9">About</a></li> <li${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/sverdle") ? "page" : void 0,
    0
  )} class="s-Cmt25qOMERl7"><a href="/sverdle" class="s-Cmt25qOMERl7" data-svelte-h="svelte-1mtf8rh">Sverdle</a></li> <li${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/life") ? "page" : void 0,
    0
  )} class="s-Cmt25qOMERl7"><a href="/life" class="s-Cmt25qOMERl7" data-svelte-h="svelte-1fe1i9n">Life</a></li></ul> <svg viewBox="0 0 2 3" aria-hidden="true" class="s-Cmt25qOMERl7"><path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" class="s-Cmt25qOMERl7"></path></svg></nav> <div class="corner s-Cmt25qOMERl7"><a href="https://github.com/sveltejs/kit" class="s-Cmt25qOMERl7"><img${add_attribute("src", github, 0)} alt="GitHub" class="s-Cmt25qOMERl7"></a></div> </header>`;
});
const app = "";
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.s-7IPF32Wcq3s8.s-7IPF32Wcq3s8{display:flex;flex-direction:column;min-height:100vh}main.s-7IPF32Wcq3s8.s-7IPF32Wcq3s8{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.s-7IPF32Wcq3s8.s-7IPF32Wcq3s8{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}footer.s-7IPF32Wcq3s8 a.s-7IPF32Wcq3s8{font-weight:bold}@media(min-width: 480px){footer.s-7IPF32Wcq3s8.s-7IPF32Wcq3s8{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app s-7IPF32Wcq3s8">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="s-7IPF32Wcq3s8">${slots.default ? slots.default({}) : ``}</main> <footer class="s-7IPF32Wcq3s8"><p>visit <a href="https://kit.svelte.dev" class="s-7IPF32Wcq3s8" data-svelte-h="svelte-r2hwjt">kit.svelte.dev</a> to learn SvelteKit</p></footer> </div>`;
});
export {
  Layout as default
};
