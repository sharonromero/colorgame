var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3]; // This picks rgb(0, 255, 255) listed above as the goal color (the color that is to be guessed).
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor; // This displays the goal color in the h1.

// This loops through each square and when it gets to the first square it'll take 0 and give it the background color of color 0, which is the first one listed above in var colors, rgb(255, 0, 0). Then it keeps going and takes 1 for the second div and takes color 1 to put as its background color and so on.
for(var i = 0; i < squares.length; i++){
	// Adds initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//Adds click listeners to squares
	squares[i].addEventListener("click", function(){
		// Grabs color of clicked square
		var clickedColor = this.style.backgroundColor;
		// Compares color to pickedColor
		if (clickedColor === pickedColor){
			alert("Correct!");
		} else {
			alert("Wrong!");
		}	
	});
}