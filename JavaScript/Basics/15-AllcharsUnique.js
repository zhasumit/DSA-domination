function areAllCharactersUnique(str) {
    const charCount = {}; // empty object
    for (let char of str) {
        if (charCount[char]) return false; // already present
        charCount[char] = true; // Absent : make it mark true
    }
    return true;
}

function areAllLettersUnique(str) {
    const charSet = new Set(str);
    for (let i = 0; i < str.length; i++) {
        if (charSet.has(str[i])) return false; // if set has it
        charSet.add(str[i]); // set not have it : add it to set
    }
    return true;
}
console.log(areAllCharactersUnique("abcdefg"));
console.log(areAllCharactersUnique("abcdefgA"));
console.log(areAllCharactersUnique("abcdefbgA"));
console.log(areAllCharactersUnique("abcDdefjgA"));
console.log(areAllCharactersUnique("aabcdefagAb"));
