var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); // This picks the goal color (the color that is to be guessed).
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");	

		this.textContent === "Easy" ? numSquares = 3: numSquares = 6; // This line does the same thing as lines 18-22.
		// if(this.textContent === "Easy"){
		// 	numSquares = 3;
		// } else {
		// 	numSquares = 6;
		// }
		reset();
	});	
}

function reset(){
	colors = generateRandomColors(numSquares);
	// Pick a new random color from array
	pickedColor = pickColor();
	// Change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"; // Makes New Colors button appear again after game is finished and Play Again button is clicked.
	messageDisplay.textContent = ""; // Removes the word Correct when the game is over and the Play Again button is clicked.
	// Change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}	
	}
	h1.style.backgroundColor = "steelblue";
}

// Replaced the code below with the code above to shorten the code overall. 
// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}	
// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 	}		
// });

resetButton.addEventListener("click", function(){
	reset();

	// Since we changed the code above to make it shorter, we can now just use reset(); instead of all of the commented out code below.
	// Generate all new colors
	// colors = generateRandomColors(numSquares);
	// Pick a new random color from array
	// pickedColor = pickColor();
	// Change colorDisplay to match picked color
	// colorDisplay.textContent = pickedColor;
	// this.textContent = "New Colors"; // Makes New Colors button appear again after game is finished and Play Again button is clicked.
	// messageDisplay.textContent = ""; // Removes the word Correct when the game is over and the Play Again button is clicked.
	// Change colors of squares
	// for(var i = 0; i < squares.length; i++){
	// 	Adds initial colors to squares
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	// h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedColor; // This displays the goal color in the h1.

// This loops through each square and when it gets to the first square it'll take 0 and give it the background color of color 0, which is the first one listed above in var colors, rgb(255, 0, 0). Then it keeps going and takes 1 for the second div and takes color 1 to put as its background color and so on.
for(var i = 0; i < squares.length; i++){
	// Adds initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// Adds click listeners to squares
	squares[i].addEventListener("click", function(){
		// Grabs color of clicked square
		var clickedColor = this.style.backgroundColor;
		// Compares color to pickedColor
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again"
		}	
	});
}

function changeColors(color){
	// Loops through all squares
	for(var i = 0; i < squares.length; i++){
		// Change each color to match given color
		squares[i].style.backgroundColor = color;	
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// Make an array
	var arr = []
	// Repeat num times
	for(var i = 0; i < num; i++){
		// Get random color and push into array
		arr.push(randomColor())
	}
	// Return the array
	return arr;
}

function randomColor(){
	// Pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	// Pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	// Pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; // Spaces must be after the commas or else we won't ever get a correct color.
}