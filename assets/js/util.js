function log(msg) {
	console.log('[Potions] ' + msg);
}

function logInfo(msg) {
	console.info('[Potions] ' + msg);
}

function getValue(file, value) {
	return $(file).find(value).text();
}