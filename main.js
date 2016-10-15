var game = require('./game.js')
process.stdin.setEncoding('utf8');

console.log("You can press Control C any time to quit the game");
		
var word = game.selectWord();
      game.displayWord(word.newWord);

//Input from the console
process.stdin.on('readable', () => {
  var letterChosen = process.stdin.read();
  if (letterChosen !== null) {
  	letterChosen = letterChosen.toLowerCase();
    if(!game.processLetter(word, letterChosen)){ //returns false if game is over
      word = game.selectWord();
      if(!word){	
        console.log("Game Over");
        process.exit();
      }
    } else {
    	game.displayWord(word.newWord);
    }
  } 
});


// game.displayWord(word.vocab);
// game.displayWord(word.buildingWord);