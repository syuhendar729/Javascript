const nama = "namaGua";
const umur = 18;
const kawin = true;

const gabung = nama + umur + kawin;

// console.log(nama + " " + umur + " " + kawin);
console.log(`Nama : ${nama} Umur : ${umur} Status : ${kawin}`);
console.log(typeof nama);
console.log(typeof umur);
console.log(typeof kawin);
console.log(typeof gabung);

let a = 0;
const coba = setInterval(() => {
	a++;
	console.log(a);
	if (a == 10) {
		clearInterval(coba);
	}
}, 300);
