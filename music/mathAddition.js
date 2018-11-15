function getRandomFrom(start, end) {
	return Math.random() * (end - start) + start;
}

function randomPrimitive(number) {
	if (Math.random() > 0.5) return number;
	else return -1 * number;
}

function mapBetween(start, end, ratio) {
	return start + (end - start) * ratio;
}

function randomFullDegree() {
	return Math.random() * Math.PI * 2;
}

function randomBetween(start, end) {
	return start + (end - start) * Math.random();
}
