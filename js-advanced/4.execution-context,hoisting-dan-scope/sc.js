// 2.1 Execution context, Hoisting & Scope

// console.log(nama);
// var nama = "Gua";

// Creation phase pada Global Context => fase pembuatan
// Yg dilakukan:
// nama var = undefined
// nama function = fn()
// hoisting = mengerek bendara =>  menaikkan code nya ke atas
// window = global object
// this = window

// Execution phase => fase peng-eksekusian

console.log(say);
// output:
// ƒ say() {
//  return `Nama anda : ${nama} , Umur anda : ${umur}`;
// }

console.log(say());
// output:
// Nama anda : undefined , Umur anda : undefined

var nama = "Dar";
var umur = 18;

console.log(say());
// output
// Nama anda : Dar , Umur anda : 18

function say() {
  return `Nama anda : ${nama} , Umur anda : ${umur}`;
}
