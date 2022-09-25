let countElement = document.getElementById("count-element")
let count = 0;

function increment() {
    count += 20
    countElement.textContent = count
}

function reset() {
    count = 0;
    countElement.textContent = count
}