import type { Svg, Rect } from "@svgdotjs/svg.js";


export const getRandomBoolean = (percentTrue: number) => () => Math.random() * 100 < percentTrue;

export function getRandomGrid(
  rows: number,
  cols: number,
  percentTrue: number): boolean[][] {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, getRandomBoolean(percentTrue))
  );
}

export function getEmptyGrid(
  rows: number,
  cols: number): boolean[][] {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => false)
  );
}

// @ts-ignore
export function getSVGStringFromCanvas(canvas: Svg): string {
  // Return the SVG content as a string
  return new XMLSerializer().serializeToString(canvas.node);
}

// Function to update the canvas based on the grid
// @ts-ignore
export function updateSVGTilesTransparency(
  grid: boolean[][],
  tiles: Rect[]
): void {
  const numRows = grid.length;
  const numCols = grid[0].length;

  // Iterate through the grid and update tile fill colors
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const isTileOn = grid[row][col];
      const tileIndex = row * numCols + col;
      const tile = tiles[tileIndex];

      // Update tile fill color based on the boolean value
      tile.fill(isTileOn ? "#FFF" : "transparent");
    }
  }
}
