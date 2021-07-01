// == Promise ==

// const res = fetch('https://omdbapi.com/?apikey=f1786a62&s=indonesia')
// console.log(res)

// -- contoh connect ke API
// fetch('https://omdbapi.com/?apikey=f1786a62&s=indonesia')
//  .then( (res) => res.json() )
//  .then( (res) => { console.log(res) } )

// Promise = janji
// => object yang merepresentasikan keberhasilan/kegagalan yg sebuah event yg asynchronous di masa yg mendatang
// kondisi 	:
// janji 	( terpenuhi / teringkari )
// state 	( fullfilled / rejected / pending )
// callback ( resolve / reject / finally )
// aksi 	( then / catch )


// -- Contoh promise:
let ditepati = true
const janji1 = new Promise( (resolve, reject) => {
	if (ditepati) {
		resolve('Janji ditepati')

	} else {
		reject('Janji diingkari')
	}
} )

// console.log(janji1)

// jika ingin mengambil resolve nya
// janji1
//  .then(res => console.log(`OK ${res}`))
//  .catch(res => console.log(`NOT OK ${res}`))



// -- Contoh 2
let ditepati2 = true
const janji2 = new Promise( (resolve, reject) => {
	if (ditepati2) {
		setTimeout(()=>{
			resolve('Ditepati setelah bbrp waktu')
		}, 2000)
	} else {
		setTimeout(()=>{
			reject('Tdk ditepati setalah bbrp waktu')
		}, 2000)
	}
} )

// console.log('Mulai')
// console.log(janji2.then(res => console.log(res))) // menampilkan pending juga
// janji2
//  .finally(()=> console.log('selesai menunggu')) // apapun isi dari ditepati2 ini akan dijalankan dlu
//  .then(res => console.log(res)) // jika benar maka menghasilkan resolve
//  .catch(res => console.log(res)) // jika salah maka menghasilkan reject
// console.log('Selesai')



// -- Promise.all()
const anime = new Promise((resolve, reject) => {
	setTimeout(()=> {
		resolve([{
			judul: 'Tokyo Ghoul',
			Genre: 'Thriller',
			Rating: 8.6
		}])
	}, 1000)
})

const cuaca = new Promise((resolve, reject)=> {
	setTimeout(()=> {
		resolve([{
			kota: 'Tangsel',
			temp: 30,
			kondisi: 'Cerah berawan'
		}])
	})
})





// anime.then(res => console.log(res))
// cuaca.then(res => console.log(res))

// jalanin semua promise
Promise.all([anime, cuaca, janji1, janji2]).then(res => {
	const [anime, cuaca, janji1, janji2] = res
	console.log(anime)
	console.log(cuaca)
	console.log(janji1)
	console.log(janji2)
}).catch(res => console.log(res))







