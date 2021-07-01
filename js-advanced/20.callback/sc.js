// == Callback ==

// -- Synchronous Callback -- => jarang digunakan

// function halo(nama) {
// 	alert(`Halo ${nama}`)
// }

function tampilkanPesan(call) {
	const nama = prompt('Masukkan nama:')
	call(nama)
}

// tampilkanPesan(nama => alert(`Hello ${nama}`))


// const webtoon = [
// 	{
// 		"judul":"The Real Lesson",
// 		"rating":8,
// 		"genre":"Action",
// 		"status": "ongoing",
// 		"id": 1
// 	},
// 	{
// 		"judul":"Study Group",
// 		"rating": 9,
// 		"genre": "Action",
// 		"status":"hiatus season 2",
// 		"id":2
// 	},
// 	{
// 		"judul":"Weak Hero",
// 		"rating":7.5,
// 		"genre":"Action",
// 		"status":"ongoing",
// 		"id":3
// 	}
// ]

// console.log('Mulai')
// webtoon.forEach(w => {
// 	for(let i = 0; i < 1000000; i++){
// 		const d = new Date()
// 	} // => membuat lama, seharusnya dilewatkan saja
// 	console.log(w.judul)

// })
// console.log('Selesai')



// -- Asynchronous Callback --

function getDataWebtoon(url, success, error) {
	let xhr = new XMLHttpRequest()

	// ketika state nya sudah siap, jalankan function ini...
	xhr.onreadystatechange = function() {
		// 4 state terakhir dalam keadaan sudah siap
		if (xhr.readyState === 4) {
			// jika status 200 ok
			if (xhr.status === 200) {
				success(xhr.response)
			} 
			else {
				error()
			}
		}
	}

	xhr.open('get', url)
	xhr.send()

}

// jika seperti, ini bikin function success dan error lagi
// getDataWebtoon('data/webtoon.json', success, error)

console.log('MULAI')

// dgn callback
getDataWebtoon('data/webtoon.json', (res)=> {
	// function success
	const wt = JSON.parse(res)
	wt.forEach(w => console.log(w.judul))
}, ()=> {
	// function error
	console.log('gagal')
})

console.log('SELESAI') // dijalankan terlebih dahulu


// -- Dgn JQuery
console.log('mulai lagi')
$.ajax({
	url: 'data/webtoon.json',
	success: (wt)=>{
		wt.forEach(w => console.log(w.status))
	},
	error: (e)=>{
		console.log(e.responseText)
	}
})
console.log('end of all')
