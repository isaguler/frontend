let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function homeAddOne() {
    homeScore.textContent = (parseInt(homeScore.textContent) + 1).toString();
}

function homeAddTwo() {
    homeScore.textContent = (parseInt(homeScore.textContent) + 2).toString();
}

function homeAddThree() {
    homeScore.textContent = (parseInt(homeScore.textContent) + 3).toString();
}

function guestAddOne() {
    guestScore.textContent = (parseInt(guestScore.textContent) + 1).toString();
}

function guestAddTwo() {
    guestScore.textContent = (parseInt(guestScore.textContent) + 2).toString();
}

function guestAddThree() {
    guestScore.textContent = (parseInt(guestScore.textContent) + 3).toString();
}

function clearScore() {
    document.getElementById("home-score").textContent = "0";
    document.getElementById("guest-score").textContent = "0";
}