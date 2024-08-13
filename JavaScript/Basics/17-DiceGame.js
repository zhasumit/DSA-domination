const rollDice = () => Math.floor(Math.random() * 6 + 1);

function DiceGame(n) {
    const results = [];
    for (let i = 0; i < n; i++) {
        const dice1 = rollDice();
        const dice2 = rollDice();
        const sum = dice1 + dice2;

        let result;
        if (sum === 7 || sum === 11) result = "win";
        else if (sum === 2 || sum === 3 || sum === 12) result = "loose";
        else result = "roll again";

        results.push({ dice1, dice2, sum, result });
    }
    return results;
}

let result = DiceGame(30);
console.log(result);

// noOfSimulations : Rolls              INPUT
// return {dice1, dice2, sum, result}   OUTPUT
// 7 || 11 : win
// 2 || 3 || 12 : loose
// otherwise : roll again
