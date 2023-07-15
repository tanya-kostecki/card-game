const container = document.querySelector('.container')

const startButton = document.querySelector('.start-button')
const containerLevels = document.querySelectorAll('.container-level')

let selectedLevel

startButton.addEventListener('click', () => {
    let isChecked = false
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

    GamePageRender(selectedLevel)
})

const GamePageRender = (level) => {
    container.innerHTML = ``
    let gamePageHtml = `
       <div class="container-content">
            <h1 class="container-title">Уровень сложности:<label class="radio-label">${level}</label></h1>
       </div> `

    container.innerHTML = gamePageHtml
}
console.log(containerLevels)

// let numberOfCards;
// const getNumberOfCards = () => {
//     if(selectedLevel === 1) {
//         numberOfCards = 6;
//     }
//     if(selectedLevel === 2) {
//         numberOfCards === 12;
//     }
//     if(selectedLevel === 3) {
//         numberOfCards = 18;
//     }
// }

// const body = document.querySelector('body')
// const GamePageRender = (level) => {
//     body.innerHTML = ``
//     let gamePageHtml = `
//        <div class="game-page-container">
//             <div class="timer">
//                 <div class="time">
//                     <span class="timer-number">00.</span>
//                     <span>min</span>
//                 </div>
//                 <div class="time">
//                     <span class="timer-number">00</span>
//                     <span>sec</span>
//                 </div>
//             </div>
//             <div class="button">
//                 <button class="restart-button">Начать заново</button>
//             </div>
//        </div>`

//     body.innerHTML = gamePageHtml
// }
