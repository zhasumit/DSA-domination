function countOccurrences(str, char) {
    let count = 0;
    // for (let i in str) if (str[i] == char) count++;
    for (let ch of str) 
        if (ch == char) 
            count++;
    return count;
}
let result = countOccurrences("hellLo world", "l");
console.log(result);

const numOfOccurences = (str, char) => str.split(char).length - 1;
result = numOfOccurences("hellLo world", "o");
console.log(result);
