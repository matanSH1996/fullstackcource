let cardFlipped = false; //describes the state which the card is clicked and flipped
let noMoreFlips = false; ////describes the required state which the card wont flip again.
let firstCard; //first card variable
let secondCard; //second card variable

let card = document.querySelectorAll('.cards-container'); //brings the cards div's to the JS.

const cards = Array.from(card); //an Array of cards (the divs)
    for (let i = 0; i < cards.length; i++) { 
        console.log(cards[i])
    } //prints the divs in order to check the connection between the array and the divs themselves.


function flippingCard(){
    if (noMoreFlips) return;
    if (this === firstCard) return;
    card.classList.add('flip');

    if (!cardFlipped){ 
        cardFlipped = true;
        firstCard = this;
        ;
    } else {cardFlipped = false;
        secondCard = this;
        matchCheck();
    }
}

function matchCheck(){
    let areCardMetched = firstCard.firstElementChild.dataset.cardtype === secondCard.firstElementChild.dataset.cardtype;
    if (areCardMetched = true){
        discardCards();
    } else {
        flipCardBack();
    }
}

function discardCards(){
    firstCard.removeEventListener('click', flippingCard)
    secondCard.removeEventListener('click', flippingCard)
    resetBoard();
}

function flipCardBack (){
    noMoreFlips = true;
    setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    noMoreFlips = false;
    resetBoard();
}, 2000);
}

function resetBoard(){
    [cardFlipped,noMoreFlips] = [false, false];
    [firstCard,secondCard] = [null,null];
}


cards.forEach(card => card.addEventListener('click', flippingCard))