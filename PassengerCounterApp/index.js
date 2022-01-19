let count = 0;
let countElement = document.getElementById("count-el");
console.log(countElement);

function increment() {
    count += 1;
    countElement.innerText = count;    
}