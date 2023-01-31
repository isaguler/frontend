const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl = document.getElementById("password-text");
let passwordLengthEl = document.getElementById("password-length-input");

var passwordLength = 15;

function generatePassword() {
    var randomPassword = "";

    if(passwordLengthEl.value != null) {
        passwordLength = passwordLengthEl.value;
    }

    for(let i = 0; i < passwordLength; i++) {
        randomPassword += characters[Math.floor(Math.random() * characters.length)];
    }

    passwordEl.textContent = randomPassword;
}

function copy() {
    var copyText = passwordEl.textContent;

    console.log(copyText)

    navigator.clipboard.writeText(copyText);

    alert("Copied the text: " + copyText);
}