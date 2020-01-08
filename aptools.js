function repeat(times, procedure) {
	for (let i = 0; i < times; i++) {
		procedure()
	};
}

function repeat_until(condition, procedure) {
	while(!eval(condition)) {
		procedure();
	}
}

function append(list, value) {
	list = list.push(value);
}

function insert(list, i, value) {
	// Starting value in the array is 1, as per the AP Exam
	if (list[0] && list.length > 0) {
		list = list.splice(i - 1, 0, value);
	}
	else {
		list = list.splice(i, 0, value);
	}
}

function remove(list, i) {
	// Starting value in the array is 1, as per the AP Exam
	if (list[0] && list.length > 0) {
		list = list.splice(i - 1, 1);
	}
	else {
		list = list.splice(i, 1);
	}
}

function display(message) {
	let body = document.querySelector("body");
	body.innerHTML += `<p>${message}</p>`;
}