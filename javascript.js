function myFunction() {
    if (remainingAttempts <= 0) {
        alert("You have no attempts left!");
        return;
    }
    let person = prompt("Welcome! What is your name?");
    if (person !== null) {
        alert("Hello " + person + "! How are you today?");
    };
    while (remainingAttempts > 0) {
        let guessNumber = prompt("Enter a number between 0 and 25 to start guessing...");
        if (guessNumber == chosenNumber) {
            alert("Congratulations, " + person + " you won the game!");
            remainingAttempts = 0;

        } else {
            alert("Unfortunately, that is not correct");
            remainingAttempts--;

        }

        if (remainingAttempts <= 0) {
            alert("Thank you for playing!");
            return;
        }
    }


}

let remainingAttempts = 5;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let chosenNumber = getRandomInt(25);
console.log(chosenNumber);
