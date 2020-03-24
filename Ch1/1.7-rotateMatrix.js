// rotate a matrix 90 degrees- can you do it in place?

// Time: O(N^2) || Space: O(N^2)
function rotateMatrix (matrix) {  
    if (matrix.length === 0 || matrix.length !== matrix[0].length) {
        return false;
    }

    let n = matrix.length;
    for (let i = 0; i < n/2; i++) {
        // what is last?
        let last = n - 1 - i;
        for (let j = 0; j < last; j++) {
            let offset = j - i;
            let top = matrix[i][j];

            // left -> top
            matrix[i][j] = matrix[last - offset][i];

            // bottom -> left
            matrix[last - offset][i] = matrix[last][last - offset];

            // right -> bottom
            matrix[last][last - offset] = matrix[j][last];

            // top -> right
            matrix[j][last] = top; // right <- saved top
        }
    }

    return matrix;
}


let testMatrix = [
    [1, 2, 3, 4],
    [0, 1, 2, 3],
    [0, 0, 1, 2],
    [1, 0, 0, 1]];

    // [ [ 1, 0, 0, 1 ], 
    // [ 2, 0, 1, 2 ], 
    // [ 0, 1, 2, 0 ], 
    // [ 1, 3, 3, 4 ] ]
    
console.log(rotateMatrix(testMatrix));