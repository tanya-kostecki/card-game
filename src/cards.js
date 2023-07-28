import { startPageRender } from './render.js'
import { gameTimeHandler } from './timer.js'

export const compareGameCards = (gameCards, setOfCards) => {
    let clickedCards = []
    let matchCounter = 0
    const body = document.querySelector('body')

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
                        body.innerHTML += `
                            <div class="game-result-container">
                                <div class="result-content">
                                    <img src="./static/images/celebration.png">
                                    <h1 class="result-title">Вы выиграли!</h1>
                                        <div class="time-spent">Затраченное время:
                                            <h2 class="time-spent-timer">${gameTimeHandler()}</h2>
                                        </div>
                                    <button class="result-button">Начать заново</button>
                                </div>
                            </div>`

                        document
                            .querySelector('.result-button')
                            .addEventListener('click', () => {
                                startPageRender()
                            })
                    }
                } else {
                    body.innerHTML += `
                            <div class="game-result-container">
                                <div class="result-content">
                                    <img src="./static/images/dead.png">
                                    <h1 class="result-title">Вы проиграли!</h1>
                                        <div class="time-spent">Затраченное время:
                                            <h2 class="time-spent-timer">${gameTimeHandler()}</h2>
                                        </div>
                                    <button class="result-button">Начать заново</button>
                                </div>
                            </div>`

                    document
                        .querySelector('.result-button')
                        .addEventListener('click', () => {
                            startPageRender()
                        })
                }
                clickedCards = []
            }
        })
    }
}
