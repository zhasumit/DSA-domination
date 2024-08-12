function removeDuplicates(arr) {
    const uniqueArr = [];
    for (let element of arr)
        if (!uniqueArr.includes(element)) uniqueArr.push(element);
    return uniqueArr;
}

console.log(removeDuplicates([true, true, false, true, false]));
console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5, 4, 3, 3, 3, 4, 5]));
console.log(removeDuplicates(["apple", "orange", "banana", "kiwi", "apple", "orange"]));
console.log(removeDuplicates([1, 2, 5, 5, 5, "hello", "hello", true, true]));




const removeDuplicateElements = (arr) => Array.from(new Set(arr));
console.log(removeDuplicateElements([true, true, false, true, false]));
console.log(removeDuplicateElements([1, 2, 3, 2, 4, 1, 5, 4, 3, 3, 3, 4, 5]));
console.log(removeDuplicateElements(["apple", "orange", "banana", "kiwi", "apple", "orange"]));
console.log(removeDuplicateElements([1, 2, 5, 5, 5, "hello", "hello", true, true]));


