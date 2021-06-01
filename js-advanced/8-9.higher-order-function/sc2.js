// ===================================
//
//  Filter, Map, dan Reduce
//
// ===================================

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// console.log(angka.length);

// cari angka yang >= 3
// gunakan for
const angkaBaru = [];
for (let i = 0; i < angka.length; i++) {
	if (angka[i] >= 3) {
		angkaBaru.push(angka[i]);
	}
}
console.log(angkaBaru);
// gunakan filter
const angkaBaru2 = angka.filter((a) => a >= 3);
console.log(angkaBaru2);

// kalikan semua angka dengan 2
// gunakan map
const angkaBaru3 = angka.map((a) => a * 2);
console.log(angkaBaru3);

// reduce
// menjumlahkan seluruh element array
// -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
const jumlahSemua = (accumulator, currentValue) => accumulator + currentValue;
// angka.reduce(function(), default_mulai_dari_0)
const angkaBaru4 = angka.reduce(jumlahSemua, 0); // 26
console.log(angkaBaru4);

//
// Method Chaining = fungsi berantai
// kasus :
// angka yang > 5
// kalikan dgn 3
// jumlahkan semuanya
const hasilAkhir = angka
	.filter((a) => a > 5) // 8,9,9
	.map((b) => b * 3) // 24,27,27
	.reduce((acc, cur) => acc + cur); // 78
console.log(hasilAkhir);
