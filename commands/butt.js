const fetch = require('node-fetch')

function randomInt(high) {
	return Math.floor(Math.random() * high);
}

const getPictureURL = (html) => {
	return "http://media.obutts.ru/" + JSON.parse(html)[0].preview;
}

const butt = () => {
	return fetch("http://api.obutts.ru/butts/" + randomInt(5000) + "/1/rank")
		.then((t) => t.text())
		.then(getPictureURL)
		.catch((e) => console.error('[butt] command fails', e))
}

module.exports = butt
