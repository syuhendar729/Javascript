// Spread operator
// => "memecah iterables menjadi single element"
// iterables : array, string, arguments, dll


const org = ['Dar', 'Dir', 'Dur']
// console.log(...org)
// console.log(...org[0])



// -- digunakan ketika --

// - menggabungkan array
const org1 = ['Dar', 'Dir', 'Dur']
const org2 = ['Der', 'Dor']
const semuaOrg = [...org1, ...org2]
// console.log(semuaOrg)
// menggabungkan array bisa pake concat juga, tp susah utk tambahin element di tengah2
const allOrg = org1.concat(org2)
// console.log(allOrg)


// - meng-copy nilai pd array
const org3 = org 
// console.log(org3)

// kekurangan diatas, ketika isi di-ubah
org3[0] = 'Dodo'
// console.log(org) // isi array org berubah juga

// dengan spread operator
const org4 = [...org]
org4[1] = 'Hendar'
console.log(org4) // hanya merubah isi array org4
console.log(org) // tdk merubah isi array org


// -- ambil dari dom --
const liNama = document.querySelectorAll('li')
// console.log(liNama[0].innerHTML)

// const org5 = []
// for(let i = 0; i < liNama.length; i++){
// 	org5.push(liNama[i].innerText)
// }
// console.log(org5)

// dengan map, tapi jadikan array dlu
const org5 = [...liNama].map(m => m.innerText)
console.log(org5)


// - study kasus, animasi judul
// memberikan tag span per-huruf
const nama = document.querySelector('.nama')
// console.log(...nama.innerText)
const huruf =  [...nama.innerText].map(m => `<span>${m}</span>`).join('')
console.log(huruf)
nama.innerHTML = huruf


