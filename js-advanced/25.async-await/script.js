// == Async Await ==
// => sebuah function asynchronous, me-return promise, tapi penulisan secara synchronous
// => memiliki keyword await utk menunggu function lain sampai promise selesai

// const coba = new Promise( (resolve) => {
//     setTimeout( () => {
//         resolve('selesai')
//     }, 2000)
// } )
// console.log(coba) // pending
// coba.then(res => console.log(res))


function cobaPromise(){
	const wkt = 5000
	return new Promise( (resolve, reject) => {
		if (wkt < 5000) {
			setTimeout( () => {
				resolve('selesai')
			}, 2000 )
		} else {
			setTimeout( () => {
				reject('kelamaan')
			} )
		}
	})
}

// const coba2 = cobaPromise()
// coba2.then(res => console.log(res))
//  .catch(res => console.log(res))

// -- Memberikan keyword async dan await disebuah function yg asynchronous
async function cobaAsync(arguments){
	// const coba2 = await cobaPromise() // nunggu sampai promise selesai
	// console.log(coba2) // tapi klo reject error `uncaught ...`
	
	// -- solusi --
	// => error handling
	try { // jika resolve
		const coba2 = await cobaPromise()
		console.log(coba2)
	} catch(err) { // jika reject
		console.log(err)
	}
}

cobaAsync()






