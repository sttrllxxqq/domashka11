const cardContainer = document.getElementById('cardContainer');

const suits = ['♠', '♣', '♦', '♥'];
const denominations = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];
const specialCards = ['J', 'Q', 'K', 'A'];

for (let suit of suits) {
  for (let denomination of denominations) {
    const card = createCardElement(denomination + suit);
    cardContainer.appendChild(card);
  }

  for (let specialCard of specialCards) {
    const card = createCardElement(specialCard + suit);
    cardContainer.appendChild(card);
  }
}

function createCardElement(cardText) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.textContent = cardText;
  return card;
}