const currentYear = new Date().getFullYear();

const holidays = {
	0: {
		id: 0,
		name: "Day of Reconciliation",
		date: `16 December ${currentYear}`,
	},
	1: {
		id: 1,
		name: "Workers Day",
		date: new Date(`1 April ${currentYear}`),
	},
	2: {
		id: 2,
		name: "Day of Goodwill",
		date: new Date(`26 December ${currentYear}`),
	},
	3: {
		id: 3,
		name: "New Year Day",
		date: new Date(`1 January ${currentYear}`),
	},
	4: {
		id: 4,
		name: "Womens Day",
		date: new Date(`9 August ${currentYear}`),
	},
	5: {
		id: 5,
		name: "Heritage Day",
		date: new Date(`24 September ${currentYear}`),
	},
	6: {
		id: 6,
		name: "Christmas Day",
		date: new Date(`25 December ${currentYear} 13:25`),
	},
	7: {
		id: 7,
		name: "Youth Day",
		date: new Date(`16 June ${currentYear}`),
	},
	8: {
		id: 8,
		name: "Human Rights Day",
		date: new Date(`21 March ${currentYear}`),
	},
};

const christmas = 6;
const futureId = 9;

// Do not change code above this
const futureIdHoliday = holidays[futureId] && holidays[futureId].name;

console.log(futureIdHoliday || `ID ${futureId} not created yet`);

const copied = {
	id: christmas,
	name: "X-mas Day",
	date: holidays[christmas].date,
};

const correctDate = new Date(holidays[christmas].date);
correctDate.setHours(0);
correctDate.setMinutes(0);
const isEarlier = correctDate < copied.date;

console.log(`New date is earlier: ${isEarlier}`);

if (isEarlier) copied.date = correctDate;

const changes = {
	id: copied.id !== holidays[christmas].id && copied.id,
	name: copied.name !== holidays[christmas].name && copied.name,
	// British English uses day-month-year date format
	date:
		copied.date !== holidays[christmas].date &&
		copied.date.toLocaleDateString("en-GB"),
	reviewMessage: function () {
		console.log(`ID change: ${this.id}`);
		console.log(`Name change: ${this.name}`);
		console.log(`Date change: ${this.date}`);
	},
	complete: function () {
		if (this.id) holidays[christmas].id = copied.id;
		if (this.name) holidays[christmas].name = copied.name;
		if (this.date) holidays[christmas].date = copied.date;
	},
};

changes.reviewMessage();
changes.complete();

let firstHolidayUnix = undefined;
let lastHolidayUnix = undefined;
let itemCount = 0; // Total item count to be used for Random Holiday selector

for (item in holidays) {
	const isDateObj = typeof holidays[item].date === "object";
	const itemDate = isDateObj
		? holidays[item].date
		: new Date(holidays[item].date);

	const itemUnix = itemDate.getTime();

	if (firstHolidayUnix !== undefined) {
		if (itemUnix < firstHolidayUnix) firstHolidayUnix = itemUnix;
	} else {
		firstHolidayUnix = itemUnix;
	}

	if (lastHolidayUnix !== undefined) {
		if (itemUnix > lastHolidayUnix) lastHolidayUnix = itemUnix;
	} else {
		lastHolidayUnix = itemUnix;
	}
	itemCount += 1;
}

const firstHoliday = new Date(firstHolidayUnix).toLocaleDateString("en-GB");
const lastHoliday = new Date(lastHolidayUnix).toLocaleDateString("en-GB");
console.log(firstHoliday);
console.log(lastHoliday);

itemCount -= 1;
const randomKey = Math.round(Math.random() * itemCount);
let randomHoliday = undefined;

if (typeof holidays[randomKey].date === "object") {
	randomHoliday = holidays[randomKey].date;
} else {
	randomHoliday = new Date(holidays[randomKey].date);
}

console.log(randomHoliday.toLocaleDateString("en-GB"));
