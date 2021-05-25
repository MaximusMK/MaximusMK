const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn"),
    btnCopy = document.getElementById("btnCopy"),
    color = document.querySelector(".color");

let tmpColor = "";

btn.addEventListener('click', () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    return tmpColor = hexColor;
});

btnCopy.addEventListener("click", () => {
    color.textContent.select();
    document.execCommand('copy');
});


function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
