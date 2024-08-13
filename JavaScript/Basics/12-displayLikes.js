function displayLikes(arr) {
    let len = arr.length;
    if (len === 0) return "no one likes this";
    if (len === 1) return `${arr[0]} likes this`;
    else if (len === 2) return `${arr[0]} and ${arr[1]} like this`;
    else if (len === 3) return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
    else return `${arr[0]}, ${arr[1]} and ${len - 2} others like this`;
}

console.log(displayLikes([]));
console.log(displayLikes(["Peter"]));
console.log(displayLikes(["Jacob", "Alex"]));
console.log(displayLikes(["Max", "John", "Mark"]));
console.log(displayLikes(["Alex", "Jacob", "Mark", "Max"]));
console.log(displayLikes(["Alex", "Jacob", "Mark", "Max", "Jill"]));
