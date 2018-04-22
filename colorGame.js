let numberOfSquares = 9;
let colors = [];
let colorSelected;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorSelected");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let newGameButton = document.querySelector("#newGame");
let modeButtons = document.querySelectorAll(".mode");

onStart();

function onStart() {
    setColors();
    setButtons();
    setSquares();
    newGame();
}
function setSquares() {
    for(let i=0; i < colors.length; i++){
        squares[i].addEventListener("click", function () {
            if(colorSelected === this.style.backgroundColor){
                message.innerHTML = "Gratulacje!"
                changeBodyColor(colorSelected);
                h1.style.backgroundColor = colorSelected;
                newGameButton.innerHTML= "Gramy dalej?";
            }else{
                this.style.opacity = "0"
                message.innerHTML = "Spróbuj ponownie";

            }
        })
    }
}
function setButtons() {
    for(let i = 0;i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");

            this.classList.add("selected");

            h1.style.backgroundColor="#232323";
            console.log(this.innerHTML)

            if(this === modeButtons[0]){
                numberOfSquares = 9;
            }else if(this === modeButtons[1]){
                numberOfSquares = 6;
            }else{
                numberOfSquares = 3;
            }

            newGame();
        })
    }
    newGameButton.addEventListener("click", function(){
        newGame();
    });
}

function setColors() {
    colors = randomColorArray(numberOfSquares);
    colorSelected = colors[randomNumber()];
}

function newGame() {
    setColors();
    colorDisplay.innerHTML = colorSelected;
    newGameButton.innerHTML = "losuj";
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
            squares[i].style.opacity = "1";

        }else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "#232323"
    message.innerHTML = "";
}

function changeBodyColor(color){
    for(let i = 0; i < colors.length;i++){
        squares[i].style.backgroundColor = color;
        squares[i].style.opacity = "1";
    }
}

function randomColorArray(x) {
    let arr = [];
    for (let i = 0; i < x; i++){
        arr.push(randomColorNumber());
    }
    return arr;
}
function randomColorNumber() {
    let a= Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256)
    let c = Math.floor(Math.random()*256)
    return "rgb("+a+", "+b+", "+c+")";
}
function randomNumber() {
    return Math.floor(Math.random()*colors.length);
}