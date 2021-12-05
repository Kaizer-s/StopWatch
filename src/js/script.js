'use strict'

const line = document.getElementById('line')
const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')
const clearButton = document.getElementById('clear')

let interval
let run = 0

const rotate = () => {
    run += 6
    line.style.transform = `rotate(${run}deg)`
}

startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(rotate, 1000)
})

stopButton.addEventListener('click', () => {
    clearInterval(interval)
})

clearButton.addEventListener('click', () => {
    clearInterval(interval)
    run = 0
    line.style.transform = 'rotate(0deg)'
})

