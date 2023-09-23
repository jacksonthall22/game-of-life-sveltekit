<svelte:head>
  <title>Game of Life</title>
  <meta name="description" content="Conway's Game of Life">
</svelte:head>

<script lang="ts">
  import { paint } from './gradient.ts';
  import { onMount } from 'svelte'
  import Header from "../Header.svelte";


  let tilesWide = 16;
  let tilesHigh = 16;

  let svgHeight = 256;
  let svgWidth = 256;

  let tileHeight = svgHeight / tilesHigh;
  let tileWidth = svgWidth / tilesWide;

  const getRandomBoolean = (percentTrue: number) => () => Math.random() * 100 < percentTrue;

  let percentTrue = 10;
  let grid;
  function setGrid() {
    grid = Array.from({ length: tilesHigh }, () => Array.from({ length: tilesWide }, getRandomBoolean(percentTrue)));
  }
  setGrid();

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
  <h1>Conway's Game of Life</h1>

  <div class="flex flex-row gap-5 align-center justify-between max-w-md mx-auto">
    <input type="range"
           min="0"
           max="100"
           step="5"
           class="grow"
           bind:value={percentTrue}
           on:change={() => {
             setGrid();
             updateSvg();
           }} />
    <label class="font-sans grow-0">{percentTrue}%</label>
  </div>

  <canvas
    width={svgWidth}
    height={svgHeight}
    style={svgCss}
  ></canvas>

  <div id="tiles">
    {#each grid as row, i}
      <div class="tile-row">
        {#each row as cell, j}
          <button id="tile-{j}-{i}"
                  class="tile"
                  style={`width: ${tileWidth}px; height: ${tileHeight}px`}
                  on:click={() => {
                    grid[i][j] = !grid[i][j];
                    updateSvg();
                  }}
                  on:keydown={handleKeydown}
          ></button>
        {/each}
      </div>
    {/each}
  </div>

</div>

<style>
	canvas, #tiles {
    margin: 0;
    padding: 0;
		position: fixed;
		left: 50%;
		top: 50%;
    transform: translate(-50%, -50%);
	}

  #tiles {
    opacity: 0.2;
  }

  input {
    margin: 0;
    padding: 0;
    border: none;
    opacity: 1;
  }

  .tile-row {
    padding: 0;
    margin: 0;
    display: flex;
  }

</style>
