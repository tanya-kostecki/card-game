//const container = document.querySelector('.container')

const startButton = document.querySelector('.start-button')
const containerLevels = document.querySelectorAll('.container-level')

let selectedLevel

startButton.addEventListener('click', () => {
    let isChecked = false
    let numberOfPairs
    for (const containerLevel of containerLevels) {
        if (containerLevel.checked === true) {
            isChecked = true
            selectedLevel = containerLevel.value
        }
    }
    if (!isChecked) {
        alert('Выберите уровень')
        return
    }

    if (selectedLevel === '1') {
        numberOfPairs = 3
    }
    if (selectedLevel === '2') {
        numberOfPairs = 6
    }
    if (selectedLevel === '3') {
        numberOfPairs = 9
    }

    GamePageRender(numberOfPairs)
})

const cardSuits = ['Diamonds', 'Clubs', 'Spades', 'Hearts']
const cardRanks = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']

const body = document.querySelector('body')
const GamePageRender = (numberOfPairs) => {
    body.innerHTML = `
        <div class="game-page-container">
            <div class="timer">
                <div class="time">
                    <span class="timer-number">00.</span>
                    <span>min</span>
                </div>
                <div class="time">
                    <span class="timer-number">00</span>
                    <span>sec</span>
                </div>
            </div>
            <div class="button">
                <button class="restart-button">Начать заново</button>
            </div>
        </div>
        <div class="game-container">
            <div class="game-space"></div>
        </div>`

    let setOfCards = []

    const gameSpace = document.querySelector('.game-space')
    for (let i = 0; i < numberOfPairs; i++) {
        const randomCardSuits = Math.floor(Math.random() * cardSuits.length)
        const randomCardRanks = Math.floor(Math.random() * cardRanks.length)

        let cardElement =
            '../img/images/' +
            cardRanks[randomCardRanks] +
            cardSuits[randomCardSuits] +
            '.jpg'

        setOfCards.push(cardElement, cardElement)
        console.log(setOfCards)
    }

    const shuffledSetOfCards = setOfCards.sort(() => Math.random() - 0.5)
    for (let j = 0; j < shuffledSetOfCards.length; j++) {
        const cardElem = document.createElement('img')
        cardElem.src = setOfCards[j]
        gameSpace.appendChild(cardElem)
        cardElem.classList.add('game-card')
    }

    const gameCards = document.querySelectorAll('.game-card')
    const hideGameCards = () => {
        for (const gameCard of gameCards) {
            gameCard.src = '../img/background/background.jpg'
        }
    }
    setTimeout(hideGameCards, 5000)

    //Клик на рубашку карточки
    const compareGameCards = (gameCards, setOfCards) => {
        let clickedCards = []
        let matchCounter = 0
        for (let i = 0; i < gameCards.length; i++) {
            const gameCard = gameCards[i]
            gameCard.addEventListener('click', (event) => {
                event.target.src = setOfCards[i]
                if (!clickedCards[0]) {
                    clickedCards[0] = setOfCards[i]
                } else {
                    clickedCards[1] = setOfCards[i]

                    if (clickedCards[0] === clickedCards[1]) {
                        matchCounter++

                        if (matchCounter === setOfCards.length / 2) {
                            alert('You win')
                        }
                    } else {
                        alert('You lose')
                    }
                    clickedCards = []
                }
            })
        }
    }
    compareGameCards(gameCards, setOfCards)
}
