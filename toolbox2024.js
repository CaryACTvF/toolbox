// UNIT 2 - Intro to JavaScript
// From Madlibs:

// For outputting text in a popup.
alert("The output goes here!");

// For asking questions in a dialog box.
let variableName = prompt("Your question goes here!");

// For assigning a variable:
let variableName = "value";

// From Button Project:

// To get an HTML element so that it can be used in JavaScript:
let variableName = document.getElementById("ID of element");

// For creating an event listener
element.addEventListener("event_type", function () {
	// Your procedure goes here.
});

// Changing Text on Your Webpage, inside of any element.
element.innerHTML = "Words go here...";

// From Sounboard/Jukebox:

// Playing an audio element:
element.play();

// Stopping an audio element:
element.pause();

// UNIT 3 - JavaScript (Part 2)
// From String Problems:

// To get what the user typed in from an <input> field and store it in a variable so that it can be used later:
let inputText1 = input1.value;

// Tools we've used with strings:
text.toUpperCase();
text.toLowerCase();
text.length;
text.replaceAll("x","y");

// From Number Problems
// Converting data types between numbers and strings:
// Number("5") -> 5
Number(stringVersion);
// String(5) -> "5"
String(numberVersion);

// From Quiz Project
if (... == ...) {
	// Stuff to run if true
}
else {
	// Stuff to run if false
}

// Changing styles with JavaScript
div1.style.background = "green";
div1.style.fontSize = "20px";


// From Conditional Statement Problems
if (...) {
	// Stuff to run if true
}
else if (...) {
	// Stuff to run if true
}
else if (...) {
	// Stuff to run if true
}
else if (...) {
	// Stuff to run if true
}
else {
	// Stuff to run as an alternative if none of the above code is true.
}

// UNIT 4 - Randomness and Lists

// From Randomness Problems
function generateRandom(minNumber, maxNumber) {
	// Generates a random number from minNumber to maxNumber.
	let range = maxNumber - minNumber;
	let outputNumber = minNumber + Math.round(Math.random()*range);
	return outputNumber;
}

// From setInterval Problems
setInterval(function () {
	// this stuff repeats
}, 1000)

// From Shopping List Project
// List Functions
// To use the following three functions (append, remove, insert). Put this line of code in your HTML above the regular <script> line:
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/CaryACTvF/toolbox@8ec8158/arraytools.js"></script>

// Useful syntax with lists (the words in all caps are place holders where you plug in the specific names of variables, or specific values like items or index numbers):
append(LIST, ITEM)
remove (LIST, INDEX)
insert(LIST, INDEX, ITEM)
LIST.length
LIST.indexOf(ITEM)

// From Lots of Boxes
// Selecting all of the elements that share a class:
let ELEMENTS = document.querySelectorAll(".CLASSNAME");

// For Each Loop structure:
LIST_NAME.forEach((ITEM_NAME) => {
	// This is the code that repeats for each item!
})

// For Each Problems
// Creating a new element:
// Replace element type with the html tag name, like "h1", "p", "img", or "button"
let newElement = document.createElement("ELEMENT_TYPE");
// To add the element to the document.
WHERE_IT_GOES.appendChild(newElement);

// Modifying elements:
// Changing text inside an element:
ELEMENT.innerHTML = "New text here!"
// Changing an image source:
ELEMENT.src = "New image link here!"
// Changing a style:
// Example: profilePic.style.border = "2px solid black";
ELEMENT.style.PROPERTYNAME = PROPERTYVALUE

