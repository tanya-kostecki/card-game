const container = document.querySelector('.container');

const startButton = document.querySelector('.start-button');
const containerLevels = document.querySelectorAll('.container-level');

let selectedLevel;


startButton.addEventListener('click', () => {
    for(const containerLevel of containerLevels) {
        if(containerLevel.checked === true) {
            selectedLevel = containerLevel.value; 
        }
    }

    GamePageRender(selectedLevel);
});

const GamePageRender = (level) => {
    container.innerHTML = ``;
    let gamePageHtml = `
       <div class="container-content">
            <h1 class="container-title">Уровень сложности:<label class="radio-label">${level}</label></h1>
       </div> `;

    container.innerHTML = gamePageHtml;
}