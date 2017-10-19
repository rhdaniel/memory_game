

var cards = ["king", "king", "queen", "queen"];
var cardsInPlay = [];

var checkForMatch = function () {
	
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You Found A Match!");
	} else {
		alert("Sorry Try Again");
	}

	}


var flipCard = function (cardId) {
	checkForMatch ()
	console.log ("User Flipped " + cards[cardId]);
	cardsInPlay.push (cards[cardId]);

}

flipCard (0);

flipCard (2);


	


