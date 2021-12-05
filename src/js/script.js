"use strict"

const line = document.getElementById("line");
const lineClick = document.getElementById("click");

const rotate = (second) => {
    line.style.transform = `rotate(${second}deg)`;
    setTimeout(rotate, 1000, second += 6)
}

setTimeout(rotate, 1000, 0)
lineClick.addEventListener("click", rotate);