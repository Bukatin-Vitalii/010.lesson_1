class Human {
	constructor(name, gender) {
		this.name = name;
		this.gender = gender;
	}
}

class Flat {
	constructor() {
		this.humans = [];
	}

	addHuman(human) {
		this.humans.push(human);
	}
}

class House {
	constructor(maxFlats) {
		this.flats = [];
		this.maxFlats = maxFlats;
	}

	addFlat(flat) {
		if (this.flats.length < this.maxFlats) {
			this.flats.push(flat);
		} else {
			console.log('Max flats reached');
		}
	}
}

let human1 = new Human('Bob', 'male');
console.log(human1);
let human2 = new Human('Alice', 'female');
console.log(human2);

let flat1 = new Flat();
flat1.addHuman(human1);
flat1.addHuman(human2);
console.log(flat1);

let house1 = new House(2);
house1.addFlat(flat1);
console.log(house1);