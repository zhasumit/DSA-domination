function generateHashtag(str) {
    if (str.trim() === "") return false;
    const words = str.split(/\s+/); // takes all the whitespces for split action
    const captilized = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    const hashtag = "#" + captilized.join("");
    return hashtag.length > 140 ? false : hashtag;
}

let result = generateHashtag("hello world one piece");
console.log(result);
result = generateHashtag("DSA domination live");
console.log(result);
result = generateHashtag(" ");
console.log(result);
result = generateHashtag("i love anime with code");
console.log(result);
result = generateHashtag("This is very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very noice");
console.log(result);











function hashtagGenerator(str) {
    if (str.trim() === "") return false;
    const hashtag = str
    .trim()
        .split(/\s+/)
        .reduce((finalTag, word) => {
            return finalTag + word[0].toUpperCase() + word.substring(1);
        }, "#"); // since we start the hashtag witha hash

    return hashtag.length > 140 ? false : hashtag;
}

result = hashtagGenerator("hello world one piece");
console.log(result);
result = hashtagGenerator("DSA domination live");
console.log(result);
result = hashtagGenerator(" ");
console.log(result);
result = hashtagGenerator("i love anime with code");
console.log(result);
result = hashtagGenerator("This is very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very noice");
console.log(result);






