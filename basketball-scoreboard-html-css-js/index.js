let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function homeAddOne() {
    homeScore.textContent = (parseInt(homeScore.textContent) + 1).toString();
    highligtScore();
}

function homeAddTwo() {
    homeScore.textContent = (parseInt(homeScore.textContent) + 2).toString();
    highligtScore();
}

function homeAddThree() {
    homeScore.textContent = (parseInt(homeScore.textContent) + 3).toString();
    highligtScore();
}

function guestAddOne() {
    guestScore.textContent = (parseInt(guestScore.textContent) + 1).toString();
    highligtScore();
}

function guestAddTwo() {
    guestScore.textContent = (parseInt(guestScore.textContent) + 2).toString();
    highligtScore();
}

function guestAddThree() {
    guestScore.textContent = (parseInt(guestScore.textContent) + 3).toString();
    highligtScore();
}

function clearScore() {
    document.getElementById("home-score").textContent = "0";
    document.getElementById("guest-score").textContent = "0";
    highligtScore();
    resetChronometer();
}

function highligtScore() {
    if(parseInt(homeScore.textContent) > parseInt(guestScore.textContent)) {
        homeScore.classList.add("highlighted-text");
        guestScore.classList.remove("highlighted-text");
    } else if(parseInt(homeScore.textContent) === parseInt(guestScore.textContent)) {
        homeScore.classList.remove("highlighted-text");
        guestScore.classList.remove("highlighted-text");
    } else if(parseInt(homeScore.textContent) < parseInt(guestScore.textContent)) {
        homeScore.classList.remove("highlighted-text");
        guestScore.classList.add("highlighted-text");
    }
}

// timer
const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
const miliSecondsLabel = document.getElementById("miliseconds");
let startTime;
let updatedTime;
let difference;
let tInterval;
let savedTime;
let paused = 0;
let running = 0;

function startChronometer() {
    if(!running){
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        paused = 0;
        running = 1;
    }
}
function pauseChronometer(){
    if (!difference){
        // if timer never started, don't allow pause button to do anything
    } else if (!paused) {
        clearInterval(tInterval);
        savedTime = difference;
        paused = 1;
        running = 0;
    } else {
        startChronometer();
    }
}
function resetChronometer(){
    clearInterval(tInterval);
    savedTime = 0;
    difference = 0;
    paused = 0;
    running = 0;
    minutesLabel.innerHTML = "00";
    secondsLabel.innerHTML = "00";
    miliSecondsLabel.innerHTML = "000";

    resetPeriod();
}

function getShowTime(){
    updatedTime = new Date().getTime();
    if (savedTime){
        difference = (updatedTime - startTime) + savedTime;
    } else {
        difference =  updatedTime - startTime;
    }
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000));

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    milliseconds = milliseconds < 100 ? (milliseconds < 10 ? "00" + milliseconds : "0" + milliseconds) : milliseconds;

    minutesLabel.innerHTML = minutes;
    secondsLabel.innerHTML = seconds;
    miliSecondsLabel.innerHTML = milliseconds;

    changePeriod();
}

let periodText = document.getElementById("current-period");

function changePeriod() {
    if(0 < parseInt(minutesLabel.innerText) && parseInt(miliSecondsLabel.innerText) > 0) {
        periodText.textContent = "1";
    }

    if(1 < parseInt(minutesLabel.innerText) && parseInt(miliSecondsLabel.innerText) > 0) {
        periodText.textContent = "2";
    }

    if(2 < parseInt(minutesLabel.innerText) && parseInt(miliSecondsLabel.innerText) > 0) {
        periodText.textContent = "3";
    }

    if(3 < parseInt(minutesLabel.innerText) && parseInt(miliSecondsLabel.innerText) > 0) {
        periodText.textContent = "4";
        //console.log("4 : " + minutesLabel.innerText)
    }
}

function resetPeriod() {
    periodText.textContent = "0";
}

