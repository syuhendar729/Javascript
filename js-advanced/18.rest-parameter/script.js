// Rest parameter
// => merepresentasikan arguments pada function dgn jumlah yang tdk terbatas menjadi sebuah array

// penggunaan dasar
function myFunc(a, b, ...myArg) {
	// ...myArg => harus diakhir 
	// return myArg // isi array 3 - 5
	
	// pake argumnets:
	// return Array.from(arguments) 
	return [...arguments]

}

console.log(myFunc(1,2,3,4,5))


// Menjumlahkan semua angka
function jumlahkan(...angka) {
	// let hasil = 0
	// for (const n of angka){
	// 	hasil += n
	// }
	// return hasil

	return angka.reduce((n , a)=> n += a)
}

console.log(jumlahkan(1,2,3,4,5))



// Array destructuring
const kelompok = ['Syuhada', 'Rantisi', 'Dar', 'Dir', 'Dur']
const [ketua, wakil, ...anggota] = kelompok
console.log(ketua)


// Object destructuring
const team = {
	koor: 'Syuhendar',
	sekre: 'Dodo',
	bendahara: 'Dar',
	humas1: 'Dir',
	humas2: 'Dur',
	logistik: 'Der',
	keamanan: 'Dor',
}

const {koor, ...myTeam} = team
console.log(koor)
console.log(myTeam)


// Filtering
function filterBy(tipeData, ...data) {
	return data.filter(d => typeof d == tipeData)
}

console.log(filterBy('number', 1, true, 'Hello', 7, '10', false, 100, 'P'))









