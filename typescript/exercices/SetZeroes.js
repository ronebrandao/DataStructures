var setZeroes = function (matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;

    const auxMatrix = Array(rows)
    .fill()
    .map(() => Array(columns).fill());

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            auxMatrix[i][j] = matrix[i][j];
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (matrix[i][j] == 0) {
                for (let row = 0; row < rows; row++) {
                    auxMatrix[row][j] = 0;
                }

                for (let column = 0; column < columns; column++) {
                     auxMatrix[i][column] = 0;
                }
            }
        }
    }
    console.log(auxMatrix);
    matrix = auxMatrix;
    console.log(matrix);

};

console.log(
    setZeroes([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
    ])
);