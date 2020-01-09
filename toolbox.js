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
else if (condition goes here) {
	// Procedure to run if the condition is true.
}
else {
	// Procedure to run no conditions are true.
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

// Set Interval Loop

setInterval(function() {
	// Procedure goes here.
	
}, time)

// AP Tools! This includes loops and array functions.
// To use any of the functions below this line, 
// you must copy and paste the following line of code into your HTML file above your script tags
// and then delete the comment slashes "//".
// <script type="text/javascript" src="http://cdn.jsdelivr.net/gh/CaryACTvF/toolbox@a244884/aptools.js"></script>

// Repeat Loop:
// The loop below will repeat 5 times, change the number as you see fit!
repeat(5, function() {
	// The code to be repeated goes here!
})

// Repeat until loop:
let i = 0;
repeat_until("i > 5", function () {
	// The code to be repeated goes here!
	// Make sure to change the value of your counter or the condition may never be satisfied
	// and the loop will go on forever!
})

// To display something on the screen:
display("message to be displayed")


// Array tools. To use these tools, you must load in the AP Tools
// using the line of code below:
// <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/CaryACTvF/toolbox@0d7a138/aptools.js"></script>

// Starting index for all tools is 1.
append(list, value);
remove(list, index);
insert(list, index, value);
