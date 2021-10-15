const card = document.querySelector('card-container');

function flippedCard() {
    card.classList.toggle('is-flipped');
}
card.addEventListener('click',flippedCard());

