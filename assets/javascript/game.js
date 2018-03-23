$(document).ready(function() {
	
	//array of letters that will be used to select a random letter from
	var alphabetChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	//variables for keeping track of game and our progress
	var wins = 0;
	var losses = 0;
	var guesses = 10;
	var guessedLetters = [];
	//generate random letter and logging it	
	var psychicGuess = alphabetChoice[Math.floor(Math.random() * alphabetChoice.length)];
	console.log(psychicGuess)
	//user pushes a letter
	document.onkeyup = function(event) {
		//letter pushed becomes the guess
		var userGuess = event.key;
		//stores guessed letters in array to show the letters you picked
		guessedLetters.push(userGuess);
		//only these keys will set everything else
		if ((userGuess === "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
						"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")) {
			//if guessed letter is the same as psychic, a win is added and array of guessed letter is reset to 0. random word will also be reset.
			if (userGuess === psychicGuess) {
				guesses = 10;
				wins++;
				guessedLetters.length = 0;
				psychicGuess = alphabetChoice[Math.floor(Math.random() * alphabetChoice.length)];
				console.log(psychicGuess);
			}
			//if userGuess is incorrect, guesses decrease
			if (userGuess !== psychicGuess) {
				guesses--;
			}
			//if guesses go down to zero, losses increases by 1; alerts you did not guess correctly; resets guessed letters to 0 and a new word is choosen 
			if (guesses === 0){
				losses++;
				alert("Sorry, you did not guess the correct letter. Please try again.");
				guessedLetters.length = 0;
				psychicGuess = alphabetChoice[Math.floor(Math.random() * alphabetChoice.length)];
				console.log(psychicGuess);
				guesses = 10;
			}
		} else {
			return false;
		}
		//records wins, losses, guesses, and guessed letters and updates html in id of game
		var html = 
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left: " + guesses +"</p>" +
        "<p>Your guesses so far: " + guessedLetters.join(", ") + "</p>" ;
		document.querySelector("#game").innerHTML = html;
	}
});
