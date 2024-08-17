function sumOfEvenSquares(arr) {
    return arr
        .filter((el) => el % 2 === 0)                   // checks even elements
        .map((el) => el ** 2)                           // make el^2
        .reduce((sum, squares) => sum + squares, 0);    // sum the squares with 0 initial sum
}

sumOfEvenSquares([1, 2, 3, 4, 5, 6, 7, 8]);
