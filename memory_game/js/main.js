let cards = [
{
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
},

{
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
},

{
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
},

{
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
}

];

let cardsInPlay =[];

function checkForMatch() {
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log('You found a match!');
  } else {
    console.log('Sorry, try again!');
  }
};


function flipCard() {
  const cardId = this.getAttribute('data-id');
  console.log('User flipped ' + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);

  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);

};



function createBoard(){
  for(let i= 1; i<cards.length; i++);{
  const cardElement= document.createElement('img');
  cardElement.setAttribute('src', 'images/back.png');
  cardElement.setAttribute('data-id', +i);
  document.getElementById('game-board').appendChild(cardElement);
}
};

createBoard();

cardElement.addEventListener('click', flipCard);
