import { c as create_ssr_component, d as add_attribute, e as escape, f as each } from "../../../chunks/ssr.js";
/* empty css                                                    */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "canvas.s-smlXKqKF-Gz_,#tiles.s-smlXKqKF-Gz_{margin:0;padding:0;position:fixed;left:50%;top:50%;transform:translate(-50%, -50%)}#tiles.s-smlXKqKF-Gz_{opacity:0.2}input.s-smlXKqKF-Gz_{margin:0;padding:0;border:none;opacity:1}.tile-row.s-smlXKqKF-Gz_{padding:0;margin:0;display:flex}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tilesWide = 16;
  let tilesHigh = 16;
  let svgHeight = 256;
  let svgWidth = 256;
  let tileHeight = svgHeight / tilesHigh;
  let tileWidth = svgWidth / tilesWide;
  const getRandomBoolean = (percentTrue2) => () => Math.random() * 100 < percentTrue2;
  let percentTrue = 10;
  let grid;
  function setGrid() {
    grid = Array.from({ length: tilesHigh }, () => Array.from({ length: tilesWide }, getRandomBoolean(percentTrue)));
  }
  setGrid();
  let svgCss;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-4s2lt3_START -->${$$result.title = `<title>Game of Life</title>`, ""}<meta name="description" content="Conway's Game of Life"><!-- HEAD_svelte-4s2lt3_END -->`, ""}  <div><h1 data-svelte-h="svelte-10rwk6u">Conway&#39;s Game of Life</h1> <div class="flex flex-row gap-5 align-center justify-between max-w-md mx-auto"><input type="range" min="0" max="100" step="5" class="grow s-smlXKqKF-Gz_"${add_attribute("value", percentTrue, 0)}> <label class="font-sans grow-0">${escape(percentTrue)}%</label></div> <canvas${add_attribute("width", svgWidth, 0)}${add_attribute("height", svgHeight, 0)}${add_attribute("style", svgCss, 0)} class="s-smlXKqKF-Gz_"></canvas> <div id="tiles" class="s-smlXKqKF-Gz_">${each(grid, (row, i) => {
    return `<div class="tile-row s-smlXKqKF-Gz_">${each(row, (cell, j) => {
      return `<button id="${"tile-" + escape(j, true) + "-" + escape(i, true)}" class="tile s-smlXKqKF-Gz_"${add_attribute("style", `width: ${tileWidth}px; height: ${tileHeight}px`, 0)}></button>`;
    })} </div>`;
  })}</div> </div>`;
});
export {
  Page as default
};
