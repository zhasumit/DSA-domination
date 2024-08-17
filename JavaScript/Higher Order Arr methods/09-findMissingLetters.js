function findMissingLetter(arr) {
    let start = arr[0].charCodeAt(0);
    const missingCharCode = arr
        .map((ch) => ch.charCodeAt(0)) // array of char codes
        .find((current) => {
            if (current - start > 1) return true;
            start = current; // for the next round to get the difference one
            return false;
        });
    return missingCharCode ? String.fromCharCode(missingCharCode - 1) : "";
}
let result = findMissingLetter(["a", "b", "c", "e"]);
console.log(result);









// using filter method
function findMissingCharacter(arr) {
    const missingCharCode = arr.filter((char, index) => {
        if (index === 0) return false; // donot take the first index (not missing)
        let prevCharCode = arr[index - 1].charCodeAt(0);
        let currCharCode = arr[index].charCodeAt(0);
        return currCharCode - prevCharCode > 1; // true or false ka array
    })[0];
    return missingCharCode
        ? String.fromCharCode(missingCharCode.charCodeAt(0) - 1)
        : "";
}

result = findMissingCharacter(["a", "b", "d", "e"]);
console.log(result);


