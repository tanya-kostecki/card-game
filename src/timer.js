export function timer() {
    const minutesElement = document.querySelector('.minutes')
    const secondsElement = document.querySelector('.seconds')

    let minutes = 0
    let seconds = 0
    let interval

    clearInterval(interval)
    interval = setInterval(startTimer, 1000)

    function startTimer() {
        seconds++
        if (seconds <= 9) {
            secondsElement.textContent = '0' + seconds
        }
        if (seconds > 9) {
            secondsElement.textContent = seconds
        }
        if (seconds > 60) {
            minutes++
            minutesElement.textContent = '0' + minutes
            seconds = 0
            secondsElement.textContent = '0' + seconds
        }
    }
}

export function gameTimeHandler() {
    const minutesElement = document.querySelector('.minutes')
    const secondsElement = document.querySelector('.seconds')

    let gameTime = minutesElement.textContent + secondsElement.textContent
    return gameTime
}
