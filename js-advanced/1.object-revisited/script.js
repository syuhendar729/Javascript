// Cara membuat object pada javascript

// 1. Object literal
/* let orang = {
    nama: 'Syuhendar',
    kelas: 'XI IPA2',
    nilai: 0,
    belajar: function (n) {
        this.nilai = this.nilai + n;
        console.log(`Selamat datang ${this.nama}`)
    }
} */

// 2. Object declaration
/* function orang(nama, kelas, nilai) {
    santri = [];
    santri.nama = nama;
    santri.kelas = kelas;
    santri.nilai = nilai;
    
    santri.belajar = function (wkt) {
        this.nilai += wkt;
        console.log(`Hi ${this.nama}, nilai anda ${this.nilai}`)
    }

    santri.maen = function (wkt) {
        this.nilai -= wkt;
        console.log(`Hi ${this.nama}, nilai anda ${this.nilai}`)
    }
    
    return santri;
}

let orang1 = orang('Dar', 10, 50)
let orang2 = orang('Dir', 11, 40)
 */

// 3. Constructor
function Orang(nama, kelas, nilai) {
    this.nama = nama;
    this.kelas = kelas;
    this.nilai = nilai;
    
    this.belajar = function (wkt) {
        this.nilai += wkt;
        console.log(`Hi ${this.nama}, nilai anda ${this.nilai}`)
    }

    this.maen = function (wkt) {
        this.nilai -= wkt;
        console.log(`Hi ${this.nama}, nilai anda ${this.nilai}`)
    }

}

const orang1 = new Orang('Dar', 10, 50)
const orang2 = new Orang('Dir', 11, 40)

// 4. Object.create()
// ??
