// Buat lagi

// function Hero(nama, umur, nyawa) {
//   this.nama = nama;
//   this.umur = umur;
//   this.nyawa = nyawa;
// }

// Hero.prototype.makan = function (porsi) {
//   this.nyawa += porsi;
//   console.log(`nyawamu bertambah karna makan menjadi ${this.nyawa}`);
// };

// Hero.prototype.tidur = function (mnt) {
//   this.nyawa += mnt;
//   console.log(`nyawamu bertambah karna tidur menjadi ${this.nyawa}`);
// };

// Hero.prototype.main = function (mnt) {
//   this.nyawa -= mnt;
//   console.log(`nyawamu berkurang karna main menjadi ${this.nyawa}`);
// };

// let heroku = new Hero("Dar", 16, 10);

// cara lain dengan class

class Hero {
  constructor(nama, umur, nyawa) {
    this.nama = nama;
    this.umur = umur;
    this.nyawa = nyawa;
  }

  main(mnt) {
    this.nyawa -= mnt;
    console.log(`Nyawamu : ${this.nyawa}`);
  }

  tidur(mnt) {
    this.nyawa += mnt;
    console.log(`Nyawamu : ${this.nyawa}`);
  }

  makan(porsi) {
    this.nyawa += porsi;
    console.log(`Nyawamu : ${this.nyawa}`);
  }
}

let heroku = new Hero("Dir", 20, 10);
