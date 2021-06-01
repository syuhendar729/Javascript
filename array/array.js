// =================================================================================
//
// METHOD PADA ARRAY
//
// =================================================================================

const angka = [1, 7, 3, 7, 4, 6, 1, 2, 9, 10, 20];
const nama = ["dar", "dir", "dur", "der", "dor"];

// =================================================================================
// 1. JOIN
// => gabungin all data array jadiin string
// ---------------------------------------------------------------------------------
console.log(angka.join(" - "));

// =================================================================================
// 2. LENGTH
// => jumlah index array
// ---------------------------------------------------------------------------------
console.log(nama.length);

// =================================================================================
// 3. PUSH & POP
// => dari belakang
// => push nambah data
// => pop hapus data
// ---------------------------------------------------------------------------------
nama.push("buuum");
// console.log(nama.join(" - "));
nama.pop();
// console.log(nama.join(" - "));

// =================================================================================
// 4. UNSHIFT & SHIFT
// => (dari depan)
// => unshift nambah data
// => shift hapus data
// ---------------------------------------------------------------------------------
nama.unshift("booom");
// console.log(nama.join(" - "));
nama.shift();
// console.log(nama.join(" - "));

// =================================================================================
// 5. SPLICE
// => menyambung array
//
// Rumus @param :
// variabel.splice(indexAwal, hapusBerapaKedepan, elementBaru1, elementBaru2, ...)
// ---------------------------------------------------------------------------------
nama.splice(1, 0, "baaam", "biiim");
// console.log(nama.join(" - "));
nama.splice(1, 2, "baru1", "baru2");
// console.log(nama.join(" - "));

// =================================================================================
//  6. SLICE
// => memotong atau mengambil array di tengah2
// Rumus @param :
// const masukinKeVariabel2 = variabel1.slice(indexAwal, indexAkhir)
//
// *note : indexAkhir tidak ikut terpotong
// ---------------------------------------------------------------------------------
const nama2 = nama.slice(1, 3);
// console.log(nama2.join(" - "));

// =================================================================================
// 8. forEach dan map
// forEach => menampilkan isi array sampai abis
// map => sama dengan forEach
// ---------------------------------------------------------------------------------
nama.forEach(function (e) {
	// console.log("nama : " + e);
});
nama.forEach(function (e, i) {
	// console.log("var ke-" + (i + 1) + " : " + e);
});

const namaMap = angka.map(function (e) {
	// console.log(e);
	return e; // bisa return nilai
});
// console.log(namaMap.join(" - "));

// =================================================================================
// 9. sort => ngurutin array
// ---------------------------------------------------------------------------------
angka.sort(function (a, b) {
	return a - b;
});
// console.log(angka.join(" - "));

// =================================================================================
// 10. filter & find
// => memfilter dan mencari
// cth filter :
// kembalikan nilai yg lebih dari 5
// cth find :
// kembalikan nilai yg lebih dari 3
// tetapi find hanya mengembalikan 1 nilai yg pertama kali ketemu
// ---------------------------------------------------------------------------------
const number = [1, 3, 4, 0, 8, 3, 6, 7, 1];
const filterNum = number.filter(function (x) {
	return x > 5;
});
// console.log(filterNum.join(" - "));
const filterNum2 = number.find(function (x) {
	return x > 3;
});
console.log(filterNum2);
