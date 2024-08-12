function titleCase(str) {
    const words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];
        words[i] = currentWord[0].toUpperCase();
        words[i] += currentWord.slice(1).toLowerCase();
    }
    return words.join(" ");
}

const result = titleCase("the quick brown fox");
console.log(result);
console.log(titleCase("sHoRt AnD sToUt"));
