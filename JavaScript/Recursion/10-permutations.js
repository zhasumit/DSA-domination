// return different combinations of the string letters
function permutations(string) {
    let result = [];
    if (string.length === 0) {
        result.push("");
        return result;
    }

    for (let i = 0; i < string.length; i++) {
        const first = string[i];
        const restOfString = string.slice(0, i) + string.slice(i + 1);
        const subPermutations = permutations(restOfString);

        // iterate sub-permutations and add to first character
        for (let j = 0; j < subPermutations.length; j++)
            result.push(first + subPermutations[j]);
    }

    return result;
}

let result = permutations("abc");
console.log(result);

result = permutations("abcd");
console.log(result);

result = permutations("dog");
console.log(result);
