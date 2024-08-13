// common elements in both arrays
function getArrayIntersection(arr1, arr2) {
    let intersection = [];
    for (let el of arr1)
        if (!intersection.includes(el) && arr2.includes(el))
            intersection.push(el);
    return intersection;
}

const getIntersection = (arr1, arr2) => {
    let bucket1 = new Set(arr1);
    let intersection = [];
    for (let num of arr2) 
        if (bucket1.has(num)) {
            bucket1.delete(num);
            intersection.push(num);
        }
    return intersection;
};


let result = getArrayIntersection([1, 2, 3, 4, 5], [3, 3, 4, 5, 6, 7]);
console.log(result);

result = getIntersection([1, 2, 3, 4, 5], [3, 3, 4, 5, 6, 7]);
console.log(result);