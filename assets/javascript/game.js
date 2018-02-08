var alphabetChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 10;
var guessedLetters = [];

//sets function on "onkeyup"
document.onkeyup = function(event) {
	
	//Key pressed
	var userGuess = event.key;
	
	//stores guessed letters in array to show the letters you picked
	guessedLetters.push(userGuess);
	
	//Computer guess from array
	var psychicGuess = alphabetChoice[Math.floor(Math.random() * alphabetChoice.length)];
	console.log(psychicGuess)
	
	//only these keys will set condition
	if ((userGuess === "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")) {

	//if guessed letter is the same, a win is added and array reset to 0
		if (userGuess === psychicGuess) {
			wins++;
			guessedLetters.length = 0;
			guesses = 10;
		}
		
	//if userGuess is incorrect, guesses decrease
		if (userGuess !== psychicGuess) {
			guesses--;
		}

	//if guesses go down to zero, losses increases by 1; alerts you did not guess correctly; resets guessed letters ito 0 
		if (guesses === 0){
			losses++;
			alert("Sorry, you did not guess the correct letter. Please try again.");
			guesses = 10;
			guessedLetters.length = 0;
		}
			
		//records wins losses, guesses, and guessed letters
		var html = 
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + guesses +"</p>" +
          "<p>Your guesses so far: " + guessedLetters.join(", ") + "</p>" ;
        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
	}
};