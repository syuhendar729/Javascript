//=====================
// This Arrow function
//=====================

// Constructor function
// const Orang = function () {
// 	this.nama = "Syuhendar";
// 	this.kelas = 11;
// 	this.sayHello = function () {
// 		console.log(`Nama : ${this.nama} , kelas : ${this.kelas}`);
// 	}; // Nama : Syuhendar , kelas : 11
// };
// const syuhendar = new Orang();

// Arrow function
// const Orang = function () {
// 	this.nama = "Syuhendar";
// 	this.kelas = 11;
// 	this.sayHello = () => {
// 		console.log(`Nama : ${this.nama} , kelas : ${this.kelas}`);
// 	}; // Nama : Syuhendar , kelas : 11
// };
// const syuhendar = new Orang();

// Object literal
// const org1 = {
// 	nama: "Suada",
// 	kelas: 10,
// 	sayHello: () => {
// 		console.log(`Nama : ${this.nama} , kelas : ${this.kelas}`);
// 		// console.log(this);
// 	},
// };

//

// Constructor function
const Orang = function () {
	this.nama = "Syuhendar";
	this.kelas = 11;
	this.sayHello = function () {
		console.log(`Nama : ${this.nama} , kelas : ${this.kelas}`);
	}; // Nama : Syuhendar , kelas : 11

	// setInterval(function () {
	// 	console.log(this.kelas++); // NaN
	// 	console.log(this); // window {...}
	// }, 1000);

	// pake arrow function
	setInterval(() => {
		console.log(this.kelas++); // 11, 12, 13, ..
		console.log(this); // Orang {...}
	}, 1000);
};
const syuhendar = new Orang();
