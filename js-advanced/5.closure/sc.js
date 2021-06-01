// Closure
// pengertian :
// 1. Function di dlm function
// 2. Function yg punya akses ke function parent nya
// 3. Function yg me-return function
// =======================================================================

//  contoh 1 :
// function init() {
//   // let name = "Syuhendar";
//   function tampilNama(name) {
//     console.log(name);
//   }
//   return tampilNama;
// }
// init()("Masuk ke params nama");
// let panggil = init();
// panggil("Hendar");
// panggil("Gua");

// contoh 2 :
// function salam(waktu) {
//   return function (nama) {
//     console.log(`Hai ${nama}, selamat ${waktu}`);
//   };
// }
// salam("siang")("suada");
// let selamatSiang = salam("siang");
// let selamatSore = salam("sore");
// let selamatMalam = salam("malam");
// selamatMalam("Dar");

// Kegunaan dari closure bisa utk private method atau variable
// contoh 3 :
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

let counter = 100; // tidak akan menggunakan variable yg ini
console.log(add());
console.log(add());
console.log(add());
console.log(add());
// output
// 1
// 2
// 3
// 4
