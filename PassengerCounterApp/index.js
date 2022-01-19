let count = 0;
let countElement = document.getElementById("count-el");
let saveElement = document.getElementById("save-el");

function increment() {
    count += 1;
    countElement.textContent = count;    
}

function save() {
    let textToRender = count + " - ";
    saveElement.textContent += textToRender;
    count = 0;
    countElement.textContent = count;
}