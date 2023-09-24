import { c as create_ssr_component } from "../../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "span.s-y8lRahl85zoZ.s-y8lRahl85zoZ{display:inline-flex;justify-content:center;align-items:center;font-size:0.8em;width:2.4em;height:2.4em;background-color:white;box-sizing:border-box;border-radius:2px;border-width:2px;color:rgba(0, 0, 0, 0.7)}.missing.s-y8lRahl85zoZ.s-y8lRahl85zoZ{background:rgba(255, 255, 255, 0.5);color:rgba(0, 0, 0, 0.5)}.close.s-y8lRahl85zoZ.s-y8lRahl85zoZ{border-style:solid;border-color:var(--color-theme-2)}.exact.s-y8lRahl85zoZ.s-y8lRahl85zoZ{background:var(--color-theme-2);color:white}.example.s-y8lRahl85zoZ.s-y8lRahl85zoZ{display:flex;justify-content:flex-start;margin:1rem 0;gap:0.2rem}.example.s-y8lRahl85zoZ span.s-y8lRahl85zoZ{font-size:1.4rem}p.s-y8lRahl85zoZ span.s-y8lRahl85zoZ{position:relative;border-width:1px;border-radius:1px;font-size:0.4em;transform:scale(2) translate(0, -10%);margin:0 1em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1fqqyy5_START -->${$$result.title = `<title>How to play Sverdle</title>`, ""}<meta name="description" content="How to play Sverdle"><!-- HEAD_svelte-1fqqyy5_END -->`, ""} <div class="text-column"><h1 data-svelte-h="svelte-1s131d8">How to play Sverdle</h1> <p>Sverdle is a clone of <a href="https://www.nytimes.com/games/wordle/index.html" data-svelte-h="svelte-1hm55o7">Wordle</a>, the
		word guessing game. To play, enter a five-letter English word. For example:</p> <div class="example s-y8lRahl85zoZ"><span class="close s-y8lRahl85zoZ" data-svelte-h="svelte-7g9icb">r</span> <span class="missing s-y8lRahl85zoZ" data-svelte-h="svelte-7s1nbs">i</span> <span class="close s-y8lRahl85zoZ" data-svelte-h="svelte-1mqdt3l">t</span> <span class="missing s-y8lRahl85zoZ" data-svelte-h="svelte-1vjf5sv">z</span> <span class="exact s-y8lRahl85zoZ" data-svelte-h="svelte-1hnzp63">y</span></div> <p class="s-y8lRahl85zoZ">The <span class="exact s-y8lRahl85zoZ" data-svelte-h="svelte-1hnzp63">y</span> is in the right place. <span class="close s-y8lRahl85zoZ" data-svelte-h="svelte-7g9icb">r</span> and
		<span class="close s-y8lRahl85zoZ" data-svelte-h="svelte-1mqdt3l">t</span>
		are the right letters, but in the wrong place. The other letters are wrong, and can be discarded.
		Let&#39;s make another guess:</p> <div class="example s-y8lRahl85zoZ"><span class="exact s-y8lRahl85zoZ" data-svelte-h="svelte-ziahty">p</span> <span class="exact s-y8lRahl85zoZ" data-svelte-h="svelte-1rs6rsz">a</span> <span class="exact s-y8lRahl85zoZ" data-svelte-h="svelte-bpfwsk">r</span> <span class="exact s-y8lRahl85zoZ" data-svelte-h="svelte-1sytkxm">t</span> <span class="exact s-y8lRahl85zoZ" data-svelte-h="svelte-1hnzp63">y</span></div> <p>This time we guessed right! You have <strong data-svelte-h="svelte-1chqhwq">six</strong> guesses to get the word.</p> <p>Unlike the original Wordle, Sverdle runs on the server instead of in the browser, making it
		impossible to cheat. It uses <code data-svelte-h="svelte-1addioz">&lt;form&gt;</code> and cookies to submit data, meaning you can
		even play with JavaScript disabled!</p> </div>`;
});
export {
  Page as default
};
