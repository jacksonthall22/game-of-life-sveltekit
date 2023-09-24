<svelte:head>
  <title>Game of Life</title>
  <meta name="description" content="Conway's Game of Life">
</svelte:head>

<script lang="ts">
  import { paint } from './gradient.ts';
  import { onMount } from 'svelte'
  import { getNeighbors } from './life.ts'; // TODO remove


  let tilesWide = 16;
  let tilesHigh = 16;

  let svgHeight = 256;
  let svgWidth = 256;

  let tileHeight = svgHeight / tilesHigh;
  let tileWidth = svgWidth / tilesWide;

  const getRandomBoolean = (percentTrue: number) => () => Math.random() * 100 < percentTrue;


  let percentTrue = 50;
  const percentTrueStep = 5;
  const percentTrueSteps = Array.from({ length: (100) / percentTrueStep + 1 },
    (_, index) => percentTrueStep + index * percentTrueStep);

  function getRandomGrid(): boolean[][] {
    return Array.from({ length: tilesHigh }, () => Array.from({ length: tilesWide }, getRandomBoolean(percentTrue)));
  }

  function getEmptyGrid(): boolean[][] {
    return Array.from({ length: tilesHigh }, () => Array.from({ length: tilesWide }, () => false));
  }

  let grid = getRandomGrid();
  $: neighbors = getNeighbors(grid);

  let showNeighbors = false;

  let svgUrl, svgCss, svg;
  function updateSvg() {
    svg = generateSVGFromGrid(grid, tileWidth, tileHeight, 'white', 'transparent');
    svgUrl = `url('data:image/svg+xml;base64,${window.btoa(svg)}')`;
    svgCss = `mask: ${svgUrl} 50% 50% no-repeat; -webkit-mask: ${svgUrl} 50% 50% no-repeat`;
  }

	function generateSVGFromGrid(grid, tileWidth, tileHeight, tileColor, backgroundColor) {
    const numRows = grid.length;
    const numCols = grid[0].length;

    // Calculate the total SVG width and height
    const svgWidth = numCols * tileWidth;
    const svgHeight = numRows * tileHeight;

    // Create the SVG element
    // https://stackoverflow.com/a/21626701/7304977
    let svg = `<svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">`;

    // Add a background rectangle
    svg += `<rect width="${svgWidth}" height="${svgHeight}" fill="${backgroundColor}" />`;

    // Iterate through the grid and create tiles based on the boolean values
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const tileX = col * tileWidth;
        const tileY = row * tileHeight;

        // Check if the tile is turned on (true) or turned off (false)
        const isTileOn = grid[row][col];

        // Create a rectangle element for the tile
        svg += `<rect x="${tileX}" y="${tileY}" width="${tileWidth}" height="${tileHeight}" fill="${isTileOn ?
          tileColor : 'transparent'}" stroke="#000" stroke-width="1" />`;
      }
    }

    // Close the SVG element
    svg += `</svg>`;

    return svg;
  }

  function handleKeydown(event) {
    // Get the active element
    const activeElement = document.activeElement;

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
    if (event.key === 'ArrowUp') {
      nextRowNum = (rowNum - 1 + tilesHigh) % tilesHigh;
    } else if (event.key === 'ArrowDown') {
      nextRowNum = (rowNum + 1) % tilesHigh;
    } else if (event.key === 'ArrowLeft') {
      nextColNum = (colNum - 1 + tilesWide) % tilesWide;
    } else if (event.key === 'ArrowRight') {
      nextColNum = (colNum + 1) % tilesWide;
    }

    const newActiveElementId = `tile-${nextColNum}-${nextRowNum}`;
    const newActiveElement = document.getElementById(newActiveElementId);

    if (!newActiveElement) {
      console.log(`Failed to find element for tile ${newActiveElementId}`);
      return;
    }

    newActiveElement.focus();
  }

	onMount(() => {
    const canvas = document.querySelector('canvas');
		const context = canvas.getContext('2d', {willReadFrequently: true});

    updateSvg();
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
    <label class="font-sans w-1/2" style="min-width: 15rem;">
      <input type="range"
             min="0"
             max="100"
             step="5"
             class="range range-sm"
             bind:value={percentTrue}
             on:click={() => {
               grid = getRandomGrid();
               updateSvg();
             }} />
    </label>
    <div class="w-1/2 flex justify-between text-xs px-2 gap-0 -mt-5" style="min-width: 15rem;">
      {#each percentTrueSteps as _ }
        <span>|</span>
      {/each}
    </div>
    <span class="-mt-4">{percentTrue}%</span>

    <label class="btn font-sans h-3 text-xs">
      <input type="checkbox"
             class="toggle toggle-xs"
             bind:checked={showNeighbors}
      />
      <span>Show Neighbors</span>
    </label>

  </section>

  <div class="relative mx-auto"
       style={`width: ${svgWidth}px; height: ${svgHeight}px`}>
    <canvas
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
                    class="tile font-mono text-xs"
                    class:opacity-0={!showNeighbors}
                    style={`width: ${tileWidth}px; height: ${tileHeight}px`}
                    on:click={() => {
                      grid[i][j] = !grid[i][j];
                      updateSvg();
                    }}
                    on:keydown={handleKeydown}
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

</style>
