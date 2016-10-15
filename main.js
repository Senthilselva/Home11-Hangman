var game = require('./game.js')
process.stdin.setEncoding('utf8');
		
word = game.selectWord();

//Input from the console
process.stdin.on('readable', () => {
  var letterChosen = process.stdin.read();
  if (letterChosen !== null) {
  	letterChosen = letterChosen.toLowerCase();
    if(!game.processLetter(word, letterChosen)){ //returns false if game is over
    	console.log("Game Over");
    	process.exit();
    } else {
    	game.displayWord(word.newWord);
    }
  } 
});


// game.displayWord(word.vocab);
// game.displayWord(word.buildingWord);