function flattenArray(arr) {
    // No base case since iteation end the function
    // iterator to iterate the array (for loop)
    let result = [];
    for (const item of arr)
        if (Array.isArray(item)) result = result.concat(flattenArray(item));
        else result.push(item);
    return result;
}

console.log(flattenArray([1, 2, 3, [4, 5, [6, 7, 9], [8]]]));
