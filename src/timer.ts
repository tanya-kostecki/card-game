export function timer() {
    const minutesElement = document.querySelector('.minutes')
    const secondsElement = document.querySelector('.seconds')

    let minutes: number = 0
    let seconds: number = 0
    let interval

    clearInterval(interval)
    interval = setInterval(startTimer, 1000)

    function startTimer() {
        seconds++
        if (seconds <= 9) {
            if (secondsElement) {
                secondsElement.textContent = '0' + String(seconds)
            }
        }
        if (seconds > 9) {
            if (secondsElement) {
                secondsElement.textContent = String(seconds)
            }
        }
        if (seconds >= 60) {
            minutes++
            if (minutesElement) {
                minutesElement.textContent = '0' + String(minutes)
            }
            seconds = 0
            if (secondsElement) {
                secondsElement.textContent = '0' + String(seconds)
            }
        }
    }
}

export function gameTimeHandler() {
    const minutesElement = document.querySelector('.minutes')
    const secondsElement = document.querySelector('.seconds')

    let minutesText
    let secondsText
    let gameTime: string

    if (minutesElement) {
        minutesText = minutesElement.textContent
    }

    if (secondsElement) {
        secondsText = secondsElement.textContent
    }

    gameTime = minutesText! + secondsText!
    return gameTime
}
