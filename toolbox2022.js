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
