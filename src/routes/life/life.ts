import {GPU} from 'gpu.js';

// Create a GPU.js instance
const gpu = new GPU();


function getShiftedBoards(grid: boolean[][]): boolean[][][] {
  if (!grid.length) {
    return [];
  }

  // Assuming you have a 2D grid with dimensions cols x rows
  const rows = grid.length;
  const cols = grid[0].length;

  // Create arrays to hold the shifted boards
  const shiftedBoards: boolean[][][] = [];

  // Define shift directions (dx, dy) for UL, U, UR, L, R, DL, D, DR
  const shifts = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1],  [1, 0],  [1, 1],
  ];

  // Define the kernel function to shift the grid in a specific direction
  const shiftBoardKernel = gpu.createKernel(function <T>(board: T[][], rows: number, cols: number, dx: number, dy: number): T {
    const x = (this.thread.x + dx + cols) % cols;
    const y = (this.thread.y + dy + rows) % rows;
    return board[y][x];
  }).setOutput([cols, rows]);


  // Shift the grid in each direction and store the results
  for (const [dx, dy] of shifts) {
    const shiftedBoard = shiftBoardKernel(grid, rows, cols, dx, dy) as boolean[][];
    shiftedBoards.push(shiftedBoard);
  }

  // Now, shiftedBoards contains 8 shifted copies of the original grid
  return shiftedBoards;
}

function getNeighbors(grid: boolean[][]): number[][] {

  if (!grid.length) {
    return [];
  }

  // Get the shifted boards
  const shiftedBoards = getShiftedBoards(grid);

  const rows = shiftedBoards[0].length;
  const cols = shiftedBoards[0][0].length;

  // Define the kernel function to sum 8 2D arrays
  const sumArraysKernel = gpu.createKernel(function (a, b, c, d, e, f, g, h) {
    return a[this.thread.y][this.thread.x] + b[this.thread.y][this.thread.x] + c[this.thread.y][this.thread.x] +
      d[this.thread.y][this.thread.x] + e[this.thread.y][this.thread.x] + f[this.thread.y][this.thread.x] +
      g[this.thread.y][this.thread.x] + h[this.thread.y][this.thread.x];
  }).setOutput([cols, rows]); // Set output dimensions to cols x rows

  // Sum the shifted boards to create boardNeighbors
  return sumArraysKernel(...shiftedBoards) as number[][];
}

function tick(grid: boolean[][]): boolean[][] {
  if (!grid.length) {
    return [];
  }

  const rows = grid.length;
  const cols = grid[0].length;

  // Get the number of neighbors for each cell
  const boardNeighbors = getNeighbors(grid);

  // Define a kernel function to compute the next grid state based on GOL rules
  const computeNextBoardKernel = gpu.createKernel(function (board, boardNeighbors) {
    const cell = board[this.thread.y][this.thread.x];
    const neighbors = boardNeighbors[this.thread.y][this.thread.x];

    // Convert logical expressions to arithmetic expressions
    const shouldSurvive = (cell === 1) && (neighbors === 2 || neighbors === 3) ? 1 : 0;
    const shouldBorn = (cell === 0) && (neighbors === 3) ? 1 : 0;

    return shouldSurvive + shouldBorn;
  }).setOutput([cols, rows]);

  // Compute the next grid state
  return computeNextBoardKernel(grid, boardNeighbors) as boolean[][];
}

export { getNeighbors, tick };
