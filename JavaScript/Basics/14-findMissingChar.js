function findMissingLetter(arr) {
    const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let startIndex = alphabets.indexOf(arr[0]);
    for (let i = 0; i < arr.length; i++)
        if (arr[i] !== alphabets[startIndex + i])
            return alphabets[startIndex + i];
    return "";
}

let result = findMissingLetter(["a", "b", "c", "e"]);
result = findMissingLetter(["a", "b", "c", "d", "e", "f"]);
result = findMissingLetter(["a", "b", "c", "d", "f"]);
console.log(result);





// using the charCode (ASCII values of the letters progressison)
function findMissingCharacter(arr) {
    let startIndex = arr[0].charCodeAt(0); // first charCode
    for (let i = 0; i < arr.length; i++) {
        const currentCode = arr[i].charCodeAt(0); // current iteration letter's charCode
        if (currentCode - startIndex > 1)
            return String.fromCharCode(startIndex + 1); // since +1 was missing we convert charCode
        startIndex = currentCode; // update to current to make differ by 1
    }
    return ""; // no letter missing
}

result = findMissingCharacter(["a", "b", "c", "d", "f"]);
result = findMissingLetter(["a", "b", "c", "d", "e", "f"]);
console.log(result);

