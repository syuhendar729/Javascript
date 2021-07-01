// for of VS for in

// for of
// sebuah looping yang bisa mengulang object2 iterable
/*

Iterable object:
1. String
2. Array
3. Arguments / Nodelist
4. Typed array
5. Map
6. Set
7. User-defined iterables

*/

// - Array -
const org = ['Syuhendar', 'Dar', 'Rantisi']

// for(let i = 0; i < org.length; i++){
// 	console.log(org[i])
// }

// org.forEach(n => console.log(n))

// for(const o of org){
//     console.log(o)
// }


// - String -
const nama = 'Syuhendar'
// for(const n of nama){
//     console.log(n)
// }
//
// nama.forEach(n => console.log(n)) // tdk bisa pake forEach

//----------------------------------------------------------------------------

// dgn forEach parameter ke 2 menjadi index
// org.forEach((o, i)=> console.log(`${o} adalah orang ke-${i+1}`))

// for of tdk bisa 2 parameter
// for(const o of org){
	// console.log(o)
// }

// dgn menambahkan entries() jd bisa 2 parameter utk index
// for(const [i, o] of org.entries()){
	// console.log(`${o} adalah orang ke-${i+1}`)
// }


// - NodeList -
const liNama = document.querySelectorAll('.nama')
// console.log(liNama) // NodeList

// looping bisa pake forEach *jika browser support
liNama.forEach(n => console.log(n.textContent))


// pake for of
for(const n of liNama){
	console.log(n.innerHTML)
}


// - Arguments -
function jumlahAngka(){
	// return arguments.reduce((a, i)=> a + i) // reduce tdk bisa utk arguments
	// arguments.forEach(n => hasil += n) // forEach juga tdk bisa
	let hasil = 0
	// dgn for of
	for(n of arguments){
		hasil += n
	}
	return hasil
}

// console.log(jumlahAngka(1, 2, 3, 4, 5))



// =======================================================================================
// for..in
// sebuah looping yang hanya bisa mengulang object2 enumerable

const orang = {
	nama: 'Syuhada',
	kelas: 11,
	email: 'syuhendar@gmail.com'
}

for(const a in orang){
	console.log(a)
}
// utk mengambil value nya
for(const a in orang){
	console.log(orang[a])
}











