// making my variables
var wins = 0;
var losses = 0;
var playerGuesses = 10;
var playerGuessesRemain = 10;
var playerGuessUsed = [];
var letterToGuess = null;

// letters array
var letterDatabase = ['a', 'b', 'c ', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var pcGuess = letterDatabase[Math.floor(Math.random() * letterDatabase.length)];

// Updating game info
var updateplayerGuessesRemain = function () {
    document.querySelector('#remain').innerHTML = "Guesses Left: " + playerGuessesRemain;

};

var updateplayerGuessUsed = function () {
    document.querySelector('#used').innerHTML = "Your Guesses so far: " + playerGuessUsed.join(", ");

};

var updateLetterToGuess = function () {
    this.letterToGuess = this.letterDatabase[Math.floor(Math.random() * this.letterDatabase.length)];
};
//  RESET GAME
var resetGame = function () {
    playerGuesses = 10;
    playerGuessesRemain = 10;
    playerGuessUsed = [];

    updateplayerGuessesRemain();
    updateplayerGuessUsed();
    updateLetterToGuess();

}
updateplayerGuessesRemain();
updateLetterToGuess();

var resetWholeGame = function () {
    wins = 0;
    losses = 0;
    playerGuesses = 10;
    playerGuessesRemain = 10;
    playerGuessUsed = [];
    letterToGuess = null;
    document.querySelector('#lost').innerHTML = "Losses: " + "";
    document.querySelector('#win').innerHTML = "Wins: " + "";

}
// Pressing keys function
document.onkeydown = function (event) {
    playerGuessesRemain--;
    var playerGuess = String.fromCharCode(event.keyCode).toUpperCase();

    playerGuessUsed.push(playerGuess);
    updateplayerGuessUsed();
    updateplayerGuessesRemain();

    if (playerGuessesRemain > 0) {

        if (playerGuess == letterToGuess) {

            wins++;

            document.querySelector('#win').innerHTML = "Wins: " + wins;

            alert("You must be psychic");

            resetGame();
        }

    } else if (playerGuessesRemain == 0) {

        losses++;

        document.querySelector('#lost').innerHTML = "Losses: " + losses;

        alert("Me being psychic i knew you wouldnt win this");

        resetGame();
    }
//    winner or loser alerts
    if (wins === 10) {
        alert("Winner!");
        resetWholeGame();
    }
    if (losses === 10) {
        alert("loser!")
        resetWholeGame();
    }
};