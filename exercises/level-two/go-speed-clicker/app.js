const mainText = document.getElementById('mainText')
mainText.innerText = sessionStorage.getItem('countedClicks')
let clickCountNum = 0
function clickCount(){
    clickCountNum ++;
    mainText.innerText = clickCountNum
    sessionStorage.setItem('countedClicks', clickCountNum)
}

window.addEventListener('click', clickCount)

let clickTimeLeft = 4;

let clickTimerText = document.getElementById('clickTimer')

function countdown(){
    clickTimerText.innerText = clickTimeLeft;
    clickTimeLeft--
}

const intervalID = setInterval(countdown, 1000)

function stopCountdown(){
    clearInterval(intervalID)
}
setTimeout(stopCountdown, 5000)

let timeLeftText = document.getElementById('timer')
function timeLeftToclick(){
    timeLeftText.innerText = 'You have this much time to click!'
}

setTimeout(timeLeftToclick, 5000)

const button = document.getElementById('clickButton')
button.addEventListener('click', setTimeout(timerFunc, 10000))
function timerFunc(){
    let timeRemaining = 10

}
// submit button that starts timer click function
// timer counts down from 10 seconds 
// once it reaches 0 the function stops


