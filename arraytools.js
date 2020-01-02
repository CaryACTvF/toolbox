function append(list, value) {
	list = list.push(value);
}

function insert(list, i, value) {
	list = list.splice(i, 0, value);
}

function remove(list, i) {
	list = list.splice(i,1);
}