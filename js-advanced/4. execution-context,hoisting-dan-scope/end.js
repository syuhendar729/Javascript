function satu() {
  var nama = "Dar";
  console.log(nama);
}

function dua() {
  console.log(nama);
}

console.log(nama);
var nama = "Hendar";
satu();
dua();
console.log(nama);

// output:
// undefined
// Dar
// Hendar
// Hendar
