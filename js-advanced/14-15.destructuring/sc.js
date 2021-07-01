// Destructuring variable/ assignment


// Destructuring array
// const perkenalan = ['Halo', 'nama', 'saya', 'Syuhendar']

// const [salam, satu, dua, nama] = perkenalan

// Skipping items
// const [salam, , , nama] = perkenalan
// console.log(nama)

// let a = 1
// let b = 2
// console.log(a)
// console.log(b)
// [b, a] = [a, b]
// console.log(a)
// console.log(b)


// Return value pd function
// function coba() {
// 	return [1, 2]
// }
// const [a, b] = coba()
// console.log(a)


// Rest parameter
// const [a, ...values] = [1,2,3,4,5,6,7]
// console.log(values)


// Destructuring obeject
// const org = {
// 	nama: "Syuhendar",
// 	umur: 17
// }
// const {nama, umur} = org  // key nya harus sama
// console.log(nama)
// const {a, b} = org 	// tdk bisa


// Assignment tanpa deklarasi object
// ({nama, umur} = { nama: "Syuhendar", umur: 17 })
// console.log(nama)


// Memberikan nama baru
// const org = {
// 	nama: "Syuhendar",
// 	umur: 17
// }
// const {nama: n, umur: u} = org 
// console.log(n)


// Memberikan default value
// const org = {
// 	nama: "Syuhendar",
// 	umur: 17,
// 	email: 'gua@gmail.com'
// }
// const {nama, umur, email = 'default@mail.com'} = org  
// console.log(email)


// Memberikan default value + beri nama baru
// const org = {
// 	nama: "Syuhendar",
// 	umur: 17,
// 	email: 'gua@gmail.com'
// }
// const { nama:n, umur:u , email:e = 'default@mail.com' } = org  
// console.log(e)


// Rest parameter
// const org = {
// 	nama: "Syuhendar",
// 	umur: 17,
// 	email: 'gua@gmail.com'
// }
// const { nama:n, ...value } = org
// console.log(value)




// Mengambil field pd object setelah dikirim sebagai parameter function


const org = {
	id: 123,
	nama: "Syuhendar",
	umur: 17,
	email: 'gua@gmail.com'
}

// cara biasa
function getId(org) {
	return org.id
}
// cara baru
function ambilId({id, nama}) {
	return id
}

console.log(getId(org))
console.log(ambilId(org))



