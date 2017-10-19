console.log("Up and running!");
var cards = ["king", "king", "queen", "queen"];
var cardsInPlay = [];
var cardOne = cards [0];
cardsInPlay.push (cardOne);
console.log ("User Flipped queen");
var cardTwo;
var cardTwo = cards [2];
cardsInPlay.push (cardTwo);
console.log ("User flipped king");
if (cardsInPlay.length ===2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You Found A Match!");
	} else {
		alert("Sorry Try Again");
	}

}


