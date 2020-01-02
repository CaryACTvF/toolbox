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
	list = list.splice(i, 0, value);
}

function remove(list, i) {
	list = list.splice(i,1);
}

function display(message) {
	body.innerHTML += `<p>${message}</p>`;
}