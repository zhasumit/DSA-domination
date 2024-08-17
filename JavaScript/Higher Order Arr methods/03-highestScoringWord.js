function highestScoringWord(arr) {
    const words = arr.split(" ");
    const scores = words.map((word) => {
        let score = 0;
        for (const char of word) score += char.charCodeAt(0) - 96;
        return score;
    });

    let highestScore = 0;
    let highestIndex = 0;
    for (let i = 0; i < scores.length; i++)
        if (scores[i] > highestScore) {
            highestScore = scores[i]; // get highest score
            highestIndex = i; // highest score index
        }
    return words[highestIndex];
}

let result = highestScoringWord("Hello my name is xavier");
console.log(result);

result = highestScoringWord("what time are we climbing up the peak");
console.log(result);











function highestScoreWord(arr) {
    const words = arr.split(" ");
    const scores = words.map((word) => {
        return Array.from(word).reduce(
            (score, letter) => score + letter.charCodeAt(0) - 96,
            0
        );
    });
    const highestScore = Math.max(...scores);
    const highestIndex = scores.indexOf(highestScore);
    return words[highestIndex];
}

result = highestScoreWord("Hello my name is xavier");
console.log(result);

result = highestScoreWord("what time are we climbing up the peak");
console.log(result);


