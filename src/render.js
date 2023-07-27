import { GamePageRender } from './main.js'
export const startPageRender = () => {
    const container = document.querySelector('.container')
    container.innerHTML = `
        <div class="container-content">
            <h1 class="container-title">Выбери сложность</h1>
            <div class="container-levels">
                <input type="radio" id="basic" class="container-level" name="levels" value="1"></input>
                <label class="radio-label" for="basic">1</label>
                <input type="radio" id="middle" class="container-level" name="levels" value="2"></input>
                <label class="radio-label" for="middle">2</label>
                <input type="radio" id="advanced" class="container-level" name="levels" value="3"></input>
                <label class="radio-label" for="advanced">3</label>
            </div>
            <button class="start-button">Старт</button>
        </div> `

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
}
