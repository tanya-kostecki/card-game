const container = document.querySelector('.container');

const startButton = document.querySelector('.start-button');
const containerLevels = document.querySelectorAll('.container-level');

let selectedLevel;


startButton.addEventListener('click', () => {
    let isChecked = false;
    for(const containerLevel of containerLevels) {
        if(containerLevel.checked === true) {
            isChecked = true;
            selectedLevel = containerLevel.value; 
        }
    }
    if(!isChecked) {
        alert('Выберите уровень');
        return;
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
console.log(containerLevels);