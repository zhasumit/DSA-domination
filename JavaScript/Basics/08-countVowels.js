function countVowels(str) {
    let count = 0;
    const formattedString = str.toLowerCase();
    for (let char of formattedString)
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        )
            count++;
    return count;
}

console.log(countVowels("Mississipi"));
console.log(countVowels("JavaScript"));
console.log(countVowels("OpenAI Chatbot"));
console.log(countVowels("Coding Challenge"));
console.log(countVowels("Hello, World!"));
