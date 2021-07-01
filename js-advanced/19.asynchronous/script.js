
// Synchronous
console.log(1)
console.log(2)
console.log(3)

// cth lain:
function kalikan(a, b) {
	return a * b // 2
}

function hitungLuas(sisi) {
	return kalikan(sisi, sisi) // 3
}

function cetakLuasPersegi(sisi) {
	const luas = hitungLuas(sisi) // 4
	console.log(luas) // 5
}

cetakLuasPersegi(5) // 1


// http://latenflip.com/loupe // => web utk ilustrasi code asynchronous javascript


// Asynchronous

console.log('satu')
setTimeout(() => {
	console.log('dua')
}) // di-skip
console.log('tiga')

/*
	output:

	satu
	tiga
	dua
	
*/


