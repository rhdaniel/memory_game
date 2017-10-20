

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


var flipCard = function () {
	this.getAttribute('data-id') = cardId;
	checkForMatch ()
	console.log ("User Flipped " + cards[cardId].rank);
	cardsInPlay.push (cards[cardId].rank);
	console.log (cards[cardId].suit);
	console.log (cards[cardId].cardImage);

}

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	cardElement.setAttribute ('src', 'images/back.png');
	document.getElementsByTagName('game-board').setAttribute('data-id', i);
	flipCard.addEventListener('cardElement', 'click');
	document.getElementsByTagName('game-board').appendChild(cardElement);
	}	
	}
}

createBoard()


	


