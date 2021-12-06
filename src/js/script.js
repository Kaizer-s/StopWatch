'use strict'

const line = document.getElementById('line')
const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')
const clearButton = document.getElementById('clear')
const milSecElement = document.getElementById('milsec')
const secElement = document.getElementById('sec')
const minElement = document.getElementById('min')

let minute = 0
let second = 0
let milsecond = 0
let interval
let run = 0

const rotate = () => {
    milsecond++
    if (milsecond < 9) {
        milSecElement.innerText = '0' + milsecond
    }
    if (milsecond > 9) {
        milSecElement.innerText = milsecond
    }
    if (milsecond > 99) {
        second++
        secElement.innerText = '0' + second
        milsecond = 0
        milSecElement.innerText = '0' + milsecond
    }

    if (second < 9) {
        secElement.innerText = '0' + second
    }
    if (second > 9) {
        secElement.innerText = second
    }
    if (second > 60) {
        minute++
        minElement.innerText = '0' + minute
        second = 0
        secElement.innerText = '0' + second
    }

    if (minute < 9) {
        minElement.innerText = '0' + minute
    }
    if (minute > 9) {
        minElement.innerText = minute
    }

    if (milsecond != 0 || second != 0 || min != 0) {
        run += 0.03
        line.style.transform = `rotate(${run}deg)`
    }
}

startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(rotate, 10)
})

stopButton.addEventListener('click', () => {
    clearInterval(interval)
})

clearButton.addEventListener('click', () => {
    clearInterval(interval)
    run = 0
    milsecond = 0
    milSecElement.innerText = '0' + milsecond
    second = 0
    secElement.innerText = '0' + second
    minute = 0
    minElement.innerText = '0' + minute
    line.style.transform = 'rotate(0deg)'
})

