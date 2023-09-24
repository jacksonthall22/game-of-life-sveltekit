import {GPU} from 'gpu.js';

// Create a GPU.js instance
const gpu = new GPU();


export function getShiftedBoards(board: boolean[][]): boolean[][][] {
  if (!board.length) {
    return [];
  }

  // Assuming you have a 2D board with dimensions cols x rows
  const rows = board.length;
  const cols = board[0].length;

  // Create arrays to hold the shifted boards
  const shiftedBoards: boolean[][][] = [];

  // Define shift directions (dx, dy) for UL, U, UR, L, R, DL, D, DR
  const shifts = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1],  [1, 0],  [1, 1],
  ];

  // Define the kernel function to shift the board in a specific direction
  const shiftBoardKernel = gpu.createKernel(function <T>(board: T[][], rows: number, cols: number, dx: number, dy: number): T {
    const x = (this.thread.x + dx + cols) % cols;
    const y = (this.thread.y + dy + rows) % rows;
    return board[y][x];
  }).setOutput([cols, rows]);


  // Shift the board in each direction and store the results
  for (const [dx, dy] of shifts) {
    const shiftedBoard = shiftBoardKernel(board, rows, cols, dx, dy) as boolean[][];
    shiftedBoards.push(shiftedBoard);
  }

  // Now, shiftedBoards contains 8 shifted copies of the original board
  return shiftedBoards;
}

export function getNeighbors(grid: boolean[][]): number[][] {

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

  // Sum the shifted boards to create board_neighbors
  return sumArraysKernel(...shiftedBoards) as number[][];
}
