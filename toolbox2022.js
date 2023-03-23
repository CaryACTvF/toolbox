// For outputting text in a popup.
alert("The output goes here!");

// For asking questions in a dialog box.
let variableName = prompt("Your question goes here!");

// For assigning a variable:
let variableName = "value";

// To get an HTML element so that it can be used in JavaScript:
let variableName = document.getElementById("ID of element");

// For creating an event listener
element.addEventListener("event_type", function () {
	// Your procedure goes here.
});

// Changing Text on Your Webpage, inside of any element.
element.innerHTML = "Words go here...";

// To get what the user typed in from an <input> field and store it in a variable so that it can be used later:
let inputText1 = input1.value;

// Converting data types between numbers and strings:
// Number("5") -> 5
let numberVersion = Number(stringVersion);
// String(5) -> "5"
let stringVersion = String(numberVersion);

// Playing an audio element:
element.currentTime = 0;
element.play();

// Stopping an audio element:
element.pause();

// If statements alone - if something is true, do the thing in the {}
if (condition to be tested) {
	// What to do if true
}

// If statements combined with else statements - if something is true, do one thing, if it is not true, do the other thing
if (condition to be tested) {
	// What to do if true
}
else {
	// What to do if false
}

// If/else if/else if/else
if (condition1) {
   // code to run if condition1 is true.
}
else if (condition2) {
   // code if all conditions above are false and condition2 is true.
}
else if (condition3) {
   // code if all conditions above are false and condition3 is true.
}
else if (condition4) {
   // code if all conditions above are false and condition4 is true.
}
else {
   // condition to run if none of the previous conditions were true;
}

// Create a random number function.
function generate_random(min_number, max_number) {
	// Generates a random number from min_number to max_number.
	let range = max_number - min_number;
	return min_number + Math.round(Math.random()*range);
}

// Set Interval Loops - A tool for repeating things over time.
setInterval(function () {
	// Function to repeat goes here.
}, 1000)

// To stop repeating something:
clearInterval(nameOfInterval);

// Array Functions
// To use the following three functions (append, remove, insert). Put this line of code in your HTML above the regular <script> line:
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/CaryACTvF/toolbox@8ec8158/arraytools.js"></script>

// add an item to a list
append(list,item);

// remove an item from a list
remove(list,index);

// insert an item into a list
insert(list,index,item);


// For each loop:
// Replace the words array and thing below
array.forEach((thing) => {
	// Procedure to repeat.
})

// While loop:
while (condition) {
	// Procedure to repeat. Make sure the condition eventually becomes false or you will be stuck in an infinite loop!
}

// Defining a function:
function nameOfFunction(parameters) {
	// Procedure
}
