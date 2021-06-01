// ================================================================================
// Cara membuat object pada javascript
// ================================================================================

// -----------------------------
// 3. Constructor
// -----------------------------
// prototype itu seperti ada

Orang.prototype.belajar = function (wkt) {
  this.nilai += wkt * 2;
  console.log(`Hi ${this.nama}, nilai anda meningkat menjadi ${this.nilai}`);
};

Orang.prototype.maen = function (wkt) {
  this.nilai -= wkt;
  console.log(`Hi ${this.nama}, nilai anda menurun menjadi ${this.nilai}`);
};

Orang.prototype.tidur = function (wkt) {
  this.nilai += wkt;
  console.log(`Hi ${this.nama}, nilai anda menurun menjadi ${this.nilai}`);
};

function Orang(nama, kelas, nilai) {
  // Sebenarnya yg terjadi :
  // let this = Object.create(Orang.prototype)
  this.nama = nama;
  this.kelas = kelas;
  this.nilai = nilai;
  // Dan ada returnnya
  // return this
}

let orang1 = new Orang("Dar", 10, 50);
let orang2 = new Orang("Dir", 11, 40);

// ===================================================================
// versi class
// ===================================================================
class Manusia {
  constructor(nama, kelas, nilai) {
    this.nama = nama;
    this.kelas = kelas;
    this.nilai = nilai;
  }

  belajar(wkt) {
    this.nilai += wkt * 2;
    console.log(`Hi ${this.nama}, nilai anda meningkat menjadi ${this.nilai}`);
  }

  maen(wkt) {
    this.nilai -= wkt;
    console.log(`Hi ${this.nama}, nilai anda menurun menjadi ${this.nilai}`);
  }

  tidur(wkt) {
    this.nilai += wkt;
    console.log(`Hi ${this.nama}, nilai anda menurun menjadi ${this.nilai}`);
  }
}

let syuhendar = new Manusia("syuhendar", 11, 100);

// let nama = []
// Sebetulnya :
// let nama = new Array();
// function Array() {
//   let this = Object.create(Array.prototype);
// }
//

let angka = [6, 5, 3, 2, 4];
console.log(angka);
console.log(angka.reverse());
// Hasil : ngurut dari index array akhir
console.log(angka.sort());
// Hasil : ngurut dari angka yang terkecil

// Coba doang
//==============================================
// let coba = "syuhendar729";
// console.log(coba.length);
// let cobaambil = coba.slice(coba.length - 2, coba.length);
// console.log(coba.slice(-2));
