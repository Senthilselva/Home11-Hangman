var word = require('./word.js')


//List of Words
words = [
		{vocab:"Federalist", defi:"a member of a former political party in the United States that favored a strong centralized federal government"},
		{vocab:"abolitionist", defi:"a reformer who favors putting an end to slavery"},
		{vocab:"blockade", defi:"a war measure isolating an area of importance to the enemy"},
		{vocab:"agrarian", defi:"relating to rural matters"},
		{vocab:"boycott", defi:"refusal to have commercial dealings with some organization"},
		{vocab:"caucus", defi:"meet to select a candidate or promote a policy"}
		];


//Randomly Selects the word

exports.selectWord = function(){
	//check to see if word more words on the list 
	if(words.length == 0){
		return false;
	}
	//selec one from random
	var ind = (words.length-1) * (Math.random());
	ind = Math.round(ind);
	var chosen_word = new word.Word(words[ind].vocab, words[ind].defi);
	console.log(chosen_word.vocab);
	//remove the word from the list
	words[ind]=words[words.length-1];
	words.pop();

	return chosen_word;

}

exports.processLetter = function(word, userLetter){
	console.log("checkWord  " + userLetter);
	userLetter = userLetter.toString().charAt(0);
	console.log(userLetter);
	if(!word.checkLetter(userLetter)){
		return false;
	} else {
		return true;
	}
}

exports.displayWord = function(word){
	word = word.toString().toUpperCase();
	word = word.split("");
	word = word.join(" ");
	console.log(word);
}
