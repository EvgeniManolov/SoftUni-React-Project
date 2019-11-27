let months = {
	0: 'януари',
	1: 'февруари',
	2: 'март',
	3: 'април',
	4: 'май',
	5: 'юни',
	6: 'юли',
	7: 'август',
	8: 'септември',
	9: 'октомври',
	10: 'ноември',
	11: 'декември'
};

function getDay (inputDate) {
	let date = new Date(inputDate);
	let day = date.getDate();
	return day;
}

function getMonth (inputDate) {
	let date = new Date(inputDate);
	let month = months[date.getMonth()];

	return month;
}

function getYear (inputDate) {
	let date = new Date(inputDate);
	let year = date.getFullYear();

	return year;
}

function createStateCopy (state) {
	return JSON.parse(JSON.stringify(state))
}

export default {
    getDay,
	getMonth,
    getYear,
    createStateCopy
}