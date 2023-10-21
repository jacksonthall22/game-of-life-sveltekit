<svelte:head>
  <title>Game of Life</title>
  <meta name="description" content="Conway's Game of Life">
</svelte:head>

<script lang="ts">
	import { paint } from './gradient';
  import { onMount } from 'svelte'
  import { getNeighbors, tick } from './life';
  import { SVG } from '@svgdotjs/svg.js';
  import type { Svg, Rect, } from '@svgdotjs/svg.js';
  import { getEmptyGrid, getRandomGrid, getSVGStringFromCanvas, updateSVGTilesTransparency } from './utils';

  // import { browser, dev, building, version } from '$app/environment';
  // console.log(`browser: ${browser}`);
  // console.log(`dev: ${dev}`);
  // console.log(`building: ${building}`);
  // console.log(`version: ${version}`);

  function makeSVGCanvas(grid: boolean[][],
                         tileSize: number): { svgCanvas: any, svgTiles: Rect[] } {
    const numRows = grid.length;
    const numCols = grid[0].length;

    const svgWidth = numCols * tileSize;
    const svgHeight = numRows * tileSize;

    // Create an SVG.js canvas
    const svgCanvas = SVG().size(svgWidth, svgHeight);

    // Create an array to store the tiles
    const svgTiles: Rect[] = [];

    // Iterate through the grid and create tiles
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const tileX = col * tileSize;
        const tileY = row * tileSize;

        // Create a rectangle element for the tile
        const tile = svgCanvas.rect(tileSize, tileSize).stroke({ color: '#FFF', width: 0.2 })
          .move(tileX, tileY);

        svgTiles.push(tile);
      }
    }

    return { svgCanvas, svgTiles };
  }

  let svgUrl: string, svgCss: string, svg;
  function updateSvg(grid: boolean[][], svgTiles: Rect[], svgCanvas: Svg): void {
    updateSVGTilesTransparency(grid, svgTiles);
    svg = getSVGStringFromCanvas(svgCanvas);
    svgUrl = `url('data:image/svg+xml;base64,${window.btoa(svg)}')`;
    svgCss = `mask: ${svgUrl} 50% 50% no-repeat; -webkit-mask: ${svgUrl} 50% 50% no-repeat`;
  }

  function handleTileClick(event: MouseEvent) {
    // Set this to the active element
    (event.target as HTMLButtonElement)?.focus();

    // Get the id of the tile
    const tileId = (event.target as HTMLButtonElement).id;

    // Parse the id to get the row and column
    const [_, col, row] = tileId.split('-');
    const colNum = parseInt(col);
    const rowNum = parseInt(row);

    // Toggle the tile
    grid[rowNum][colNum] = !grid[rowNum][colNum];
    updateSvg(grid, svgTiles, svgCanvas);
  }

  function handleTileKeydown(event: KeyboardEvent) {
    // Get the active element
    const activeElement = document.activeElement;

    if (!activeElement) {
      console.log('Failed to find active element');
      return;
    }

    // Get its id (e.g. "tile-1-2")
    const activeElementId = activeElement.id;

    // Parse the id to get the row and column
    const [_, col, row] = activeElementId.split('-');
    const colNum = parseInt(col);
    const rowNum = parseInt(row);

    // Next tile starts at current tile by default. We will change one of these below.
    let nextColNum = colNum
    let nextRowNum = rowNum

    // Handle arrow directions: find the next element and focus it. Rows and columns should wrap (use %).
    if (event.key == 'Enter' || event.key == ' ') {
      // Toggle the active element
      (activeElement as HTMLButtonElement).click();
      return;
    } else if (event.key === 'ArrowUp') {
      nextRowNum = (rowNum - 1 + cols) % cols;
    } else if (event.key === 'ArrowDown') {
      nextRowNum = (rowNum + 1) % cols;
    } else if (event.key === 'ArrowLeft') {
      nextColNum = (colNum - 1 + rows) % rows;
    } else if (event.key === 'ArrowRight') {
      nextColNum = (colNum + 1) % rows;
    }

    const newActiveElementId = `tile-${nextColNum}-${nextRowNum}`;
    const newActiveElement = document.getElementById(newActiveElementId);

    if (!newActiveElement) {
      console.log(`Failed to find element for tile ${newActiveElementId}`);
      return;
    }

    newActiveElement.focus();
  }

  let tickIntervalObj: NodeJS.Timeout;
  function toggleTickle() {
    isTicking = !isTicking;

    if (isTicking) {
      tickIntervalObj = setInterval(() => setGrid(tick(grid)), tickInterval);
    } else {
      clearInterval(tickIntervalObj);
    }
  }

  function setGrid(newGrid: boolean[][]): void {
    grid = newGrid;
    updateSvg(grid, svgTiles, svgCanvas);
  }

  function randomizeGrid() {
    if (isTicking) return;
    setGrid(getRandomGrid(rows, cols, percentTrue));
  }


  let rows = 16;
  let cols = 16;
  const tileSize = 16; // px
  let svgWidth = cols * tileSize;
  let svgHeight = rows * tileSize;
  let showNeighbors = false;
  let isTicking = false;
  const tickInterval = 100;
  let percentTrue = 50;
  const percentTrueStep = 5;

  const percentTrueSteps = Array.from({ length: (100) / percentTrueStep + 1 },
    (_, index) => percentTrueStep + index * percentTrueStep);
  let grid = getRandomGrid(rows, cols, percentTrue);

  $: neighbors = getNeighbors(grid);

  let svgCanvas: Svg, svgTiles: Rect[];

	onMount(() => {
    const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
		const context = canvas.getContext('2d', {willReadFrequently: true});
    
    ({ svgCanvas, svgTiles } = makeSVGCanvas(grid, tileSize));

    updateSvg(grid, svgTiles, svgCanvas);
    requestAnimationFrame(function loop(t) {
			requestAnimationFrame(loop);
			paint(context, t);
		});
	});

</script>


<div>
  <h1 class="my-10">Conway's Game of Life</h1>

  <section id="options"
           class="flex flex-col gap-5 items-center my-10">
    <label class="font-sans w-4/5"
           style="min-width: 15rem">
      <input type="range"
             min="0"
             max="100"
             step="5"
             class="range range-sm"
             class:disabled-range={isTicking}
             disabled={isTicking}
             bind:value={percentTrue}
             on:click={randomizeGrid}
             on:touchend={randomizeGrid} />
    </label>
    <div class="w-4/5 flex justify-between text-xs px-2 gap-0 -mt-5" style="min-width: 15rem;">
      {#each percentTrueSteps as _ }
        <span>|</span>
      {/each}
    </div>
    <span class="-mt-4">Fill: {percentTrue}%</span>

    <div class="font-sans text-xs flex flex-row flex-wrap gap-1 sm:gap-3 lg:gap-5 justify-center w-full whitespace-nowrap">
      <label class="btn w-2/5 md:w-1/5 flex-nowrap">
        <input type="checkbox"
                class="toggle toggle-xs"
                bind:checked={isTicking}
                on:click={toggleTickle}
        />
        <span>Tickle</span>
      </label>

      <label class="btn w-2/5 md:w-1/5 flex-nowrap">
        <input type="checkbox"
              class="toggle toggle-xs"
              bind:checked={showNeighbors}
        />
        <span>Neighbors</span>
      </label>

      <button class="btn w-2/5 md:w-1/5"
              class:btn-disabled={isTicking}
              class:disabled-button={isTicking}
              on:click={() => setGrid(getEmptyGrid(rows, cols))}>Clear</button>

      <button class="btn w-2/5 md:w-1/5"
              class:btn-disabled={isTicking}
              class:disabled-button={isTicking}
              on:click={() => setGrid(tick(grid))}>Tick</button>

    </div>

  </section>

  <div class="relative mx-auto my-0 sm:my-10 md:my-15"
       style={`width: ${svgWidth}px; height: ${svgHeight}px`}>
    <canvas
      id="canvas"
      class="inset-0 absolute"
      width={svgWidth}
      height={svgHeight}
      style={svgCss}
    ></canvas>

    <div id="tiles" class="inset-0 absolute">
      {#each grid as row, i}
        <div class="tile-row">
          {#each row as cell, j}
            <button id="tile-{j}-{i}"
                    class="tile font-mono text-xs transition-colors"
                    class:opacity-0={!showNeighbors}
                    style={`width: ${tileSize}px; height: ${tileSize}px; color: ${showNeighbors ? 'inherit' : 'rgba(0,0,0,0)'}; transition: color 0.25s ease-out`}
                    on:click={handleTileClick}
                    on:keydown|preventDefault={handleTileKeydown}
            >{neighbors[i][j]}</button>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</div>

<style>

  .tile-row {
    padding: 0;
    margin: 0;
    display: flex;
  }

  .disabled-range, .disabled-button {
    cursor: not-allowed;
  }

  .disabled-range {
    --range-shdw: none;
  }

</style>
