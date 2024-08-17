// same characters arrangement + same frequency
function validAnagrams(str1, str2) {
    function findFrequency(str) {
        const freqCount = str.split("").reduce((freq, char) => {
            freq[char] = (freq[char] || 0) + 1;
            return freq;
        }, {});
        return freqCount;
    }

    const freqStr1 = findFrequency(str1);
    const freqStr2 = findFrequency(str2);

    return Object.keys(freqStr1).every(
        (char) => freqStr1[char] === freqStr2[char]
    );
}

let result = validAnagrams("app", "ppa");
result = validAnagrams("astronomer", "moonstarer");
result = validAnagrams("hello", "world");
result = validAnagrams("apple", "banana");
result = validAnagrams("listen", "silent");
console.log(result);
