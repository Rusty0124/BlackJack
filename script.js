let deck = [];
let cardsValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
let dealerTotalRef = document.getElementById("dealertotal");
let playerTotalRef = document.getElementById("playertotal");
let playercard1Ref = document.getElementById("playercard1");
let playercard2Ref = document.getElementById("playercard2");
let Dealercard1Ref = document.getElementById("dealercard1");
let Dealercard2Ref = document.getElementById("dealercard2");
let playerHand = [];
let dealerHand = [];
CreateDeck();
let ShuffledDeck = ShuffleDeck(deck);
StartGame();
function CreateDeck() {
  for (let i = 0; i < cardsValue.length; i++) {
    deck.push(cardsValue[i]);
    deck.push(cardsValue[i]);
    deck.push(cardsValue[i]);
    deck.push(cardsValue[i]);
  }
}
function ShuffleDeck(deck) {
  const shuffled = deck;

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

console.log(ShuffleDeck(deck));

function StartGame() {
  playerHand.push(ShuffledDeck.pop());
  playerHand.push(ShuffledDeck.pop());
  dealerHand.push(ShuffledDeck.pop());
  dealerHand.push(ShuffledDeck.pop());
  playercard1Ref.textContent = playerHand[0];
  playercard2Ref.textContent = playerHand[1];
  Dealercard1Ref.textContent = dealerHand[0];
  Dealercard2Ref.textContent = dealerHand[1];
  console.log(playerHand, dealerHand);
}
function FirstCalulate() {
  let playertotal =
    playerHand[0] + playerHand[1];
  let dealertotal =
   dealerHand[0] + dealerHand[1];

  dealerTotalRef.textContent = dealertotal;
  playerTotalRef.textContent = playertotal;
  console.log(playertotal, dealertotal);
  if (dealertotal == 21) {
    alert("dealer blackjack");
  }
  return [playertotal, dealertotal];
}
let hands = FirstCalulate();

function stand() {
  if (hands[1] < 17) {
    dealerhit();
  }
  console.log(playertotal, dealertotal);
  if (hands[1] > hands[0] && hands[1] <= 21) {
    alert("dealer wins");
  } else if (hands[0] > hands[1] && hands[0] <= 21) {
    alert("player wins");
  } else {
    alert("draw");
  }
}

function hit() {
  let cards = document.getElementById("playercards");
  let newcard = ShuffledDeck.pop();
  playerHand.push(newcard);
  cards.innerHTML += `
    <div class="card", "playercardX" >
      ${newcard}
    </div>`;
  RecalculatePlayer(newcard);
}

function RecalculatePlayer(newCard) {
  let newhandtotal = 0;
  for (i = 0; i < playerHand.length; i++) {
    newhandtotal += playerHand[i];
  }
  if (newhandtotal > 21) {
    alert("Bust");
  }
  let playerTotalRef = document.getElementById("playertotal");
  playerTotalRef.textContent = `${newhandtotal}`;
}

function dealerhit() {
  let cards = document.getElementById("dealercards");
  let newcard = ShuffledDeck.pop();
  dealerHand.push(newcard);
  cards.innerHTML += `
    <div class="card", "dealercardX" >
      ${newcard}
    </div>`;
  let newtotal = RecalculateDealer(newcard);
  if (newtotal < 17) {
    dealerhit();
  }
}
function RecalculateDealer(newCard) {
  let Dealernewhandtotal = 0;
  for (i = 0; i < dealerHand.length; i++) {
    Dealernewhandtotal += dealerHand[i];
  }
  if (Dealernewhandtotal > 21) {
    alert("Dealer Bust");
  }
  let playerTotalRef = document.getElementById("dealertotal");
  playerTotalRef.textContent = `${Dealernewhandtotal}`;
  return Dealernewhandtotal;
}
