import { GamePageRender } from './main'
export const startPageRender = () => {
    const body = document.querySelector('body')
    if (body) {
        body.innerHTML = `
        <div class="container">
            <div class="container-content">
                <h1 class="container-title">Выбери<br>сложность</h1>
                <div class="container-levels">
                    <input type="radio" id="basic" class="container-level" name="levels" value="1"></input>
                    <label class="radio-label" for="basic">1</label>
                    <input type="radio" id="middle" class="container-level" name="levels" value="2"></input>
                    <label class="radio-label" for="middle">2</label>
                    <input type="radio" id="advanced" class="container-level" name="levels" value="3"></input>
                    <label class="radio-label" for="advanced">3</label>
                </div>
                <button class="start-button">Старт</button>
            </div> 
        </div>`
    }

    const startButton = document.querySelector('.start-button')
    const containerLevels = document.querySelectorAll('.container-level')

    let selectedLevel: string

    startButton?.addEventListener('click', () => {
        let isChecked: boolean = false
        let numberOfPairs: any = null
        for (const containerLevel of containerLevels) {
            if (containerLevel instanceof HTMLInputElement) {
                if (containerLevel.checked === true) {
                    isChecked = true
                    selectedLevel = containerLevel.value
                }
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

