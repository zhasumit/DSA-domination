function arraySum(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + arraySum(arr.slice(1));
}

let result = arraySum([1, 2, 3, 4, 6, 7, 8]);
console.log(result);
