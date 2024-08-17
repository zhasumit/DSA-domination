const numbers = [1, 2, 3, 4, 5];

// map : transform elements with given function, RETURNS a new array
// has three arguments element, index and array                                     [I]
// doesnot effect the original array                                                [II]
const doubledNumbers = numbers.map((el, index, arr) => el * 2);
console.log(doubledNumbers);





// filter: transform elements, RETURNs a new array (WITH filter condition)          + [I, II]
const evenNumbers = numbers.filter((el, index, arr) => {
    if (el % 2 === 0) return el;
    // oneline version (el) => el % 2 === 0;
});
console.log(evenNumbers);
console.log(numbers);





// reduce : accumulate array elements into a single point using callback, intialValue
// callback structure : ((accumulator, element) => {accumulateLogic + return}, intialValue)
// suppose intialValue to be $2 for some packaging cost
const cost = numbers.reduce((totalCost, el) => totalCost + el, 2);
console.log(cost);





// forEach : loop through array, with params element, index, array in callback
// doesnot create a new array (only iterates the array)
numbers.forEach((num, ind, arr) => {
    console.log(ind, num, arr);
});





// find : first element to satisfy some specific condition                          - [I, II]
const firstFound = numbers.find((el) => el > 3); // since first number st num > 3 is 4
console.log(firstFound);





// some : checks if any element satisfies some specific conditions                  - [I, II]
const hasSevensMultiple = numbers.some((el) => el % 7 === 0);
console.log(hasSevensMultiple);





// every : checks if all the array elements satisfy some certain conditions         - [I, II]
const areAllOdds = numbers.every((el) => el % 2 === 1);
console.log(areAllOdds);





const allPositives = numbers.every((num) => num > 0);
console.log(allPositives);




