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