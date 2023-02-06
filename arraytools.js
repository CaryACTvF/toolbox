function append(list, value) {
	list = list.push(value);
}

function insert(list, i, value) {
	// Starting value in the array is 1, as per the AP Exam
	list = list.splice(i, 0, value);
}

function remove(list, i) {
	// Starting value in the array is 1, as per the AP Exam
	list = list.splice(i, 1);
}
