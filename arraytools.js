function append(list, value) {
	list = list.push(value);
}

function insert(list, i, value) {
	// Starting Value = 0
	list = list.splice(i, 0, value);
}

function remove(list, i) {
	// Starting Value = 0
	list = list.splice(i, 1);
}
