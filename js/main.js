

var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png",

},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png",

},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: "images/king-of-diamonds.png",	
}
];

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
	console.log ("User Flipped " + cards[cardId].rank);
	cardsInPlay.push (cards[cardId].rank);
	console.log (cards[cardId].suit);
	console.log (cards[cardId].cardImage);

}

flipCard (0);

flipCard (2);


	


