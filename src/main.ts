import { compareGameCards } from './cards'
import { startPageRender } from './start-page-render'
import { timer } from './timer'
import { randomizeIndex, shuffle } from './helpers'
import './style.css'

startPageRender()

const cardSuits: string[] = ['Diamonds', 'Clubs', 'Spades', 'Hearts']
const cardRanks: string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']

const body = document.querySelector('body')

export const GamePageRender = (numberOfPairs: number) => {
    if (body) {
        body.innerHTML = `
        <div class="game-page-container">
            <div class="timer">
                <div class="time">
                    <span class="timer-number minutes">00.</span>
                    <span>min</span>
                </div>
                <div class="time">
                    <span class="timer-number seconds">00</span>
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

        document
            .querySelector('.restart-button')
            ?.addEventListener('click', () => {
                startPageRender()
            })
    }

    timer()

    let setOfCards: string[] = []
 
    for (let i = 0; i < numberOfPairs; i++) {
        let randomCardSuit = randomizeIndex(0, cardSuits.length)//test
        let randomCardRank = randomizeIndex(0, cardRanks.length)//test

        let cardElement: string =
            '../static/images/' +
            cardRanks[randomCardRank] +
            cardSuits[randomCardSuit] +
            '.jpg'

        setOfCards.push(cardElement, cardElement)
    }

    shuffle(setOfCards)//test

    const gameSpace = document.querySelector('.game-space')
    for (let j = 0; j < setOfCards.length; j++) {
        const cardElem = document.createElement('img')
        cardElem.src = setOfCards[j]
        gameSpace?.appendChild(cardElem)
        cardElem.classList.add('game-card')
    }

    const gameCards = document.querySelectorAll('.game-card')
    const hideGameCards = () => {
        for (const gameCard of gameCards) {
            if (gameCard instanceof HTMLImageElement) {
                gameCard.src = '../static/images/background.jpg'
            }
        }
    }

    setTimeout(hideGameCards, 5000)
    compareGameCards(gameCards, setOfCards)
}

