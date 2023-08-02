import { startPageRender } from './start-page-render.ts'
import { gameTimeHandler } from './timer.ts'

export const compareGameCards = (
    gameCards: NodeList,
    setOfCards: Array<string>,
) => {
    let clickedCards: Array<string> = []
    let matchCounter = 0
    const body = document.querySelector('body')

    for (let i = 0; i < gameCards.length; i++) {
        const gameCard = gameCards[i]
        gameCard.addEventListener('click', (event) => {
            const target = event.target as HTMLImageElement
            target.src = setOfCards[i]

            if (!clickedCards[0]) {
                clickedCards[0] = setOfCards[i]
            } else {
                clickedCards[1] = setOfCards[i]

                if (clickedCards[0] === clickedCards[1]) {
                    matchCounter++

                    if (matchCounter === setOfCards.length / 2) {
                        if (body) {
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
                                ?.addEventListener('click', () => {
                                    startPageRender()
                                })
                        }
                    }
                } else {
                    if (body) {
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
                            ?.addEventListener('click', () => {
                                startPageRender()
                            })
                    }
                }
                clickedCards = []
            }
        })
    }
}
