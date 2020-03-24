// if there is a 0 in a row in a matrix, the rest of the row/column it is connected to are replaced with 0

// nested loops to find the 0- recursive functions to recursively go up, right, down, left and change them all to 0

function nullifyRow(matrix, row) {
    for (let j = 0; j < matrix[0].length; j++) {
        matrix[row][j] = 0;
    }
}

function nullifyColumn(matrix, column) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][column] = 0;
    }
}

// Time: O(N^2) || Space: O(1)
function setZeroes(matrix) {
    let rowHasZero = false;
    let columnHasZero = false;

    // we care about the first row and column the most because if they have zeroes, they will 0 out the whole array. so save for later
    // check first row for 0
    for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[0][j] == 0) {
            rowHasZero = true;
            break;
        }
    }

    // check if first column has 0
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] == 0) {
            columnHasZero = true;
            break;
        }
    }

    // check the rest of the array
    for (let i = 1; i < matrix.length; i++){
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0) {
                // these make the rows/columns 0 if they aren't the first ones on left/top
                matrix[i][0] = 0; 
                matrix[0][j] = 0;
            }
        }
    }

    // nullify rows based on values in first column
    for (let i = 1; i < matrix.length; i++) {
        if (matrix[i][0] == 0) {
            nullifyRow(matrix, i);
        }
    }

    // nullify columns based on values in first row
    for (let j = 1; j < matrix[0].length; j++) {
        if (matrix[0][j] == 0) {
            nullifyColumn(matrix, j);
        }
    }

    // nullify first row
    if (rowHasZero) {
        nullifyRow(matrix, 0);
    }

    // nullify first column
    if (columnHasZero) {
        nullifyColumn(matrix, 0);
    }

    return matrix;
}


let testMatrix = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ];

console.log(setZeroes(testMatrix));