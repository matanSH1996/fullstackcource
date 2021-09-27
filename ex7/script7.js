let card = document.querySelector('cardBG');
card.addEventListener('click', isFlipped())

function isFlipped () {
    card.classList.toggle('isFlipped');
}
