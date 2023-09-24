import { GPU } from 'gpu.js';

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
  const shiftBoardKernel = gpu.createKernel(function (board, rows, cols, dx, dy) {
    const x = (this.thread.x + dx + cols) % cols;
    const y = (this.thread.y + dy + rows) % rows;
    return board[y][x];
  }).setOutput([cols, rows]);

  // Shift the board in each direction and store the results
  for (const [dx, dy] of shifts) {
    const shiftedBoard: boolean[][] = shiftBoardKernel(board, rows, cols, dx, dy);
    shiftedBoards.push(shiftedBoard);
  }

  // Now, shiftedBoards contains 8 shifted copies of the original board
  return shiftedBoards;
}
