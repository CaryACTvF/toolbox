// For outputting text in a popup.
alert("The output goes here!");

// For asking questions in a dialog box.
let variable_name = prompt("Your question goes here!");

// For assigning a variable:
let variable_name = "value";

// For selecting an element:
let variable_name = document.querySelector("CSS Selector");

// For creating an event listener
element.addEventListener("event_type", function() {
	// Your procedure goes here.

});

// For changing innerHTML:
element.innerHTML = "new value";

// For changing the source of an image:
element.src = "new value";

// Playing Audio
sound.play();

// Stopping Audio
sound.pause();

// Type Conversions
// Convert "x" to a Number
x = Number(x);
// Convert "x" to a String
x = String(x);

// Unit 4 - Loops
setInterval(function() {
	// Function to repeat goes in this code block!
},time)

// To get data from an <input> element (placeholder text in the example below is "x" and "inputElement"):
let inputElement = document.querySelector("");
let x = inputElement.value;

// Create a random number function.
function generate_random(min_number, max_number) {
	// Generates a random number from min_number to max_number.
	let range = max_number - min_number;
	return min_number + Math.round(Math.random()*range);
}

// Use a random number function.
generate_random(min_number, max_number);

// If Statements
if (condition goes here) {
	// Procedure to run if the condition is true.
}
else if (condition goes here) {
	// Procedure to run if the condition is true.
}
else {
	// Procedure to run no conditions are true.
}
