//Variaveis Globais
let squares = document.querySelectorAll("#square");
let Quantidade = 6;
let resetButton = document.getElementById('reset');
let showWrong = document.getElementById('feedback');
let colors = colorPicker(Quantidade);
let mostrarUmaCor = escolherCor(colors);
let mainText = document.getElementById('showColor');
let h1 = document.getElementById('mainText');
mainText.innerHTML = mostrarUmaCor;
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var modeButtons = document.querySelectorAll(".mode");
var currentMode = document.querySelector(".selected");

fillSquares(squares,colors);

//Funções

resetButton.addEventListener("click", reset);

for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		if(currentMode !== this) {
			this.classList.add("selected");
			currentMode.classList.remove("selected");
			currentMode = this;
			reset();
		}
	});
}

function fillSquares(squares, colors) {
	for(let i = 0; i < squares.length; i++) {
		squares[i].style.display = "block";
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}

for(let i = 0;i < squares.length;i++){
	squares[i].addEventListener("click",function(){
		let corPadrao = this.style.backgroundColor;

		console.log(corPadrao , mostrarUmaCor);

		if(corPadrao === mostrarUmaCor){
			showWrong.textContent  = "Correct";
				for(let i = 0;i < squares.length;i++){
					squares[i].style.backgroundColor = mostrarUmaCor;
				}
			h1.style.backgroundColor = mostrarUmaCor;
			resetButton.textContent = "Play Again?";
		} else {
			//Show user he/she got it wrong
			showWrong.textContent = "Incorrect";
			this.style.background = "#232323";
		}
	});
}



function criarCores(){
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function colorPicker(num){
	let arr = [];

	for(let i = 0;i < num;i++){
		arr.push(criarCores());
	}

	return arr;
}

function escolherCor(arr){
	let rand = Math.floor(Math.random() * arr.length);	
	return arr[rand];
}

function reset() {
	h1.style.background = "steelblue";
	showWrong.textContent = "";
	resetButton.textContent = "New Color";
	//If Mode is Easy
	if(currentMode.textContent === "Easy") {
		numSquares = 3;
	}
	//Else Mode is Hard
	else {
		numSquares = 6;
	}
	colors = colorPicker(Quantidade);
	fillSquares(squares, colors);
	mostrarUmaCor = escolherCor(colors);
	showColor.textContent = mostrarUmaCor;
}
