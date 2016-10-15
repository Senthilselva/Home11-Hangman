//Constructor for word function

exports.Word = function(vocab,definition){
	this.vocab = vocab.toLowerCase();
	this.definition = definition;
	this.matchedLetter=[];
	this.guessedLetter=[];
	this.noOfGuess = 6;
	this.newWord = setNewWord(vocab);

	function setNewWord(varVocab){
		var newWord=""
		for(var i=0; i < varVocab.length; i++){
			newWord += "_";
		}
		return newWord;
	}

	console.log("Hint : "+ this.definition);

	this.checkLetter = function(letter){
		//console.log("checkLetter : "+letter);
			if(this.matchedLetter.indexOf(letter) >= 0 || this.guessedLetter.indexOf(letter) >=0){ //check to see if the word is already used
				console.log('You have already guessed:  '+letter);
				return true;
			} else if(this.vocab.indexOf(letter) >= 0){
				console.log(letter + "is in the Word");
				//add to the array and build new Word
				this.matchedLetter.push(letter);
				this.buildWord(letter);
				return this.checkWord();
				
			} else {
				console.log("Not in the Word "+ letter);
				this.guessedLetter.push(letter);
				this.noOfGuess--;
				if(this.noOfGuess <= 0){
					console.log("All your guess are over")
					return false;
				} else{
					return true;
				}
			}
	}

	//build Word with correct letter 
	this.buildWord = function(letter){
		var newWordArry = this.newWord.split("")
		for(var i=0; i < vocab.length; i++){
			if(this.vocab.charAt(i) == letter){
				newWordArry[i] = letter;
			}
		}
		this.newWord = newWordArry.join("");
		//console.log(this.newWord);
	}

	//check to see if the new word built is same as the original word.

	this.checkWord = function(){
		if(this.vocab == this.newWord){
			console.log("Yes the word is " + this.vocab + ".  You won!!!");
			return false;
		}else {
			return true;
		}
	}
}//word constructor