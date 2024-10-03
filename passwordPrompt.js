const myPassword = "correctPassword";
let myUser;

do {
    myUser = prompt("Enter your password:");
    if (myUser !== myPassword) {
        console.log("Incorrect, try again.");
    }
} while (myUser !== myPassword);

console.log("Access granted.");