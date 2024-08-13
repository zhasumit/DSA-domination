// keep track using object or map for the characters
function firstNonRepeatingCharacter(str) {
    // using objects
    const charCountObject = {};
    for (const char of str)
        charCountObject[char] = (charCountObject[char] || 0) + 1;

    for (const char of str) 
        if (charCountObject[char] === 1) 
            return char;
        
    return null;
}

console.log(firstNonRepeatingCharacter("aabbccdeeff"));
console.log(firstNonRepeatingCharacter("abcdef"));
console.log(firstNonRepeatingCharacter("AAbbCCDD"));
// charCountObject[char] = (charCountObject[char] || 0) + 1;
//                         ( True || ... ) + 1 =>  prevCounterValue + 1
//                         (False || 0 ) + 1 =>  0 + 1 => 1 for starting the count





function firstNonRepeatingLetter(str) {
    // using Map
    const charCount = new Map();
    for (const char of str) 
        charCount.set(char, (charCount.get(char) || 0) + 1);
    
    for (const char of str) 
        if (charCount.get(char) === 1) 
            return char;
        
    return null;
}

console.log(firstNonRepeatingLetter("aabbccdeeff"));
console.log(firstNonRepeatingLetter("abcdef"));
console.log(firstNonRepeatingLetter("AAbbCCDD"));
console.log(firstNonRepeatingLetter("progamming"));
console.log(firstNonRepeatingLetter("mississimili"));

