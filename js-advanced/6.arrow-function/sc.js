// contoh function expression
const tampilNama = function (nama) {
	return `Hello ${nama}`;
};
console.log(tampilNama("Syuhendar"));

//=====================
// Arrow function
//=====================

const tampilNama2 = (nama) => {
	return `Hello ${nama}`;
};
console.log(tampilNama2("Dar"));

// Implisit Return
// menjadi lebih singkat
const tampilNama3 = (nama) => `Hello ${nama}`;
console.log(tampilNama3("Dir"));
// tanpa parameter
const tampilNama4 = () => `Hello world`;
console.log(tampilNama4());

// Mempetakan index dari tiap data di array lalu memasukkan nya ke parameter
let org = ["Dar", "Dirr", "Duurr"];
let jumlahHuruf = org.map(function (nama) {
	return nama.length;
});
console.log(jumlahHuruf);
// menggunakan arrow function untuk object ({}) haru ada kurungnya dlu
let jumlahHuruf2 = org.map((nama) => ({ nama: nama, jmlHuruf: nama.length }));
console.table(jumlahHuruf2);
