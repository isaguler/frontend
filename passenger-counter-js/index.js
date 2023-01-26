// document.getElementById("count-el").innerText = 3;

let counter = document.getElementById("count-el");

function increase() {
    counter.innerText++;
    document.getElementById("count-el").innerText = counter.innerText;
}

let savedCount = [];
savedCount.push(document.getElementById("saved-count").innerText);

let previousCountString = document.getElementById("saved-count-string");

function save() {
    savedCount.push(counter.innerText)
    document.getElementById("saved-count").innerText = savedCount.toString();
    previousCountString.textContent += " - " + counter.innerText;

    counter.textContent = 0;
}

