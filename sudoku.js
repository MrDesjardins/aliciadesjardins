console.log("Testing sudoku");
const size = 9
// Create the sudoku grid
const grid = Array.from({ length: size }, () => Array(size).fill(0));
console.log(grid)

console.log(isValid([
    [4, 8, 6, 2, 7, 1, 3, 5, 9],
    [9, 5, 7, 3, 8, 6, 2, 4, 1],
    [2, 3, 1, 4, 9, 5, 6, 8, 7],
    [7, 9, 4, 8, 1, 3, 5, 6, 2],
    [8, 2, 3, 5, 6, 7, 1, 9, 4],
    [1, 6, 5, 9, 2, 4, 7, 3, 8],
    [3, 7, 8, 1, 5, 9, 4, 2, 6],
    [6, 4, 9, 7, 3, 2, 8, 1, 5],
    [5, 1, 2, 6, 4, 8, 9, 7, 3],
]));

/**
 * Valid the sudoku grid
 * @param {array} grid 
 * @param boolean
 */
function isValid(grid) {
    // Unique per row
    const s = new Set();
    for (let row = 0; row < size; row++) {
        // Check each element of the row (column)
        for (let col = 0; col < size; col++) {
            const value = grid[row][col]
            if (s.has(value)) {
                return false;
            } else {
                s.add(value);
            }
        }
        s.clear(); // Clear because we go to the next row
    }
    // Unique per col
    for (let col = 0; col < size; col++) {
        // Check each element of the column (row)
        for (let row = 0; row < size; row++) {
            const value = grid[row][col]
            if (s.has(value)) {
                return false;
            } else {
                s.add(value);
            }
        }
        s.clear(); // Clear because we go to the next row
    }
    // Unique 
    for (let x = 0; x < size; x+=3) {
        for (let y = 0; y < size; y+=3) {
            for (let row = x; row < x + 3; row++) {
                for (let col = y; col < y + 3; col++) {
                    const value = grid[row][col]
                    if (s.has(value)) {
                        return false;
                    } else {
                        s.add(value);
                    }
                }
            }
            s.clear();
        }
    }
    return true;
}

function createGrid(){
    // Use Math.random to get number from 1 to 9 
}