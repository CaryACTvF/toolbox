// For outputting text in a popup.
alert("The output goes here!");

// For asking questions in a dialog box.
let variable_name = prompt("Your question goes here!");

// For assigning a variable:
let variable_name = "value";

// For selecting an element:
let variable_name = document.querySelector("CSS Selector");

// For changing innerHTML:
element.innerHTML = "new value";

// For changing the source of an image:
element.src = "new value";

// Changing the style of an element:
element.style.property = "value";

// For finding the value of an input element:
let variable_name = element.value;

// For playing an audio element;
sound.currentTime = 0;
sound.play();

// For creating an event listener
element.addEventListener("event_type", function() {
	// Your procedure goes here.

});

// If Statements
if (condition goes here) {
	// Procedure to run if the condition is true.
}
else {
	// Procedure to run if the condition is not true.
}

// Create a random number function.
function generate_random(max_number) {
	// Generates a random number from 0 to max_number.
	return Math.round(Math.random()*max_number);
}

// Use a random number function.
generate_random(max_number);

// To turn something into a number:
Number(thing_to_make_a_number);

// To turn something into a number:
String(thing_to_make_a_string);