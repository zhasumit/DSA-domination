function findMissingNumber(arr) {
    let n = arr.length + 1;
    if (n === 0) return 1;

    const naturalSum = (n * (n + 1)) / 2;

    let actualSum = 0;
    for (let num of arr) actualSum += num;

    // higher order accumulator function
    // actualSum = arr.reduce((sum, num) => sum + num, 0);

    return naturalSum - actualSum;
}

console.log(findMissingNumber([1, 2, 3, 5, 6, 7]));
console.log(findMissingNumber([1, 3, 4, 5, 6, 7]));
console.log(findMissingNumber([1, 2, 3, 4, 5, 6]));
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 7, 9, 10, 11]));
