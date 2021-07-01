// Destructuring

function kalkulasi(a, b){
	return [a+b, a-b, a*b, a/b]
}

// const jumlah = kalkulasi(2, 3)[0]
// const kurang = kalkulasi(2, 3)[1]

// const [jumlah, kurang, kali, bagi='tidak ada'] = kalkulasi(2, 3)
// console.log(jumlah)


// Agar tidak perlu sesuai urutan, bisa gunakan object sebagai return value nya
function kalkulasi2(a, b){
	return {
		jumlah: a+b,
		kurang: a-b,
		kali: a*b,
		bagi: a/b
	}
}
const {kali, bagi, kurang, jumlah} = kalkulasi2(2, 3)
// console.log(kali)




// Destructuring function arguments
const org1 = {
	nama: 'Syuhada Rantisi',
	kelas: 11,
	nilai: {
		uh: 80,
		uts: 75,
		uas: 85
	}
}

function hello(org){
	return `Hello, nama saya ${org.nama}, kelas ${org.kelas}, dan nilai UTS ${org.nilai.uts}`
}
console.log(hello(org1))


// cara lain dengan destructuring -- lebih efisien
// destructuring bersarang
function hello2({nama, kelas, nilai: {uh, uts, uas}}){
	return `Hello, nama saya ${nama}, kelas ${kelas}, dan nilai UAS ${uas}`
}
console.log(hello2(org1))


















