const numeral = Math.floor(Math.random() * 10) + 1;
let myGuess = parseInt(prompt("Guess a number between 1 and 10:"));

while (myGuess !== numeral) {
    if (myGuess > numeral) {
        console.log("Too high!");
    } else {
        console.log("Too low!");
    }
    myGuess = parseInt(prompt("Guess a number between 1 and 10:"));
}

console.log("Correct!");