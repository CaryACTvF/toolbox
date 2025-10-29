// UNIT 2 - Intro to JavaScript
// From Madlibs:

// For outputting text in a popup.
alert("The output goes here!");

// For asking questions in a dialog box.
let variableName = prompt("Your question goes here!");

// For assigning a variable:
let variableName = "value";

// From Sounboard/Jukebox and Fortune Teller:

// To get an HTML element so that it can be used in JavaScript:
let variableName = document.getElementById("ID of element");

// For creating an event listener
element.addEventListener("event_type", function () {
	// Your procedure goes here.
});

// Changing Text on Your Webpage, inside of any element.
element.innerHTML = "Words go here...";

// Playing an audio element:
element.currentTime = 0;
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
