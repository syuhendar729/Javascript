// ================================================================================
// Cara membuat object pada javascript
// ================================================================================

// -----------------------------
// 1. Object literal
// -----------------------------
// let orang = {
//     nama: 'Syuhendar',
//     kelas: 'XI IPA2',
//     nilai: 0,
//     belajar: function (n) {
//         this.nilai = this.nilai + n;
//         console.log(`Selamat datang ${this.nama}`)
//     }
// }


// -----------------------------
// 2. Object declaration
// -----------------------------

const methodOrang = {
    belajar: function (wkt) {
        this.nilai += wkt * 2;
        console.log(`Hi ${this.nama}, nilai anda meningkat menjadi ${this.nilai}`)
    },
    
    maen: function (wkt) {
        this.nilai -= wkt;
        console.log(`Hi ${this.nama}, nilai anda menurun menjadi ${this.nilai}`)
    },

    tidur: function (jam) {
        this.nilai += jam 
        console.log(`Hi ${this.nama}, nilai anda meningkat ${this.nilai}`)
    }
}

function orang(nama, kelas, nilai) {
    // Object.create() = {} cara utk membuat object
    // Dengan Object.create() tidak perlu memanggil ulang method nya
    // karna sudah di-definisikan di parameternya
    // Sama dgn mendefinisikan parent di php  
    santri = Object.create(methodOrang);
    santri.nama = nama;
    santri.kelas = kelas;
    santri.nilai = nilai;
    return santri;
}

let orang1 = orang('Dar', 10, 50)
let orang2 = orang('Dir', 11, 40)


// -----------------------------
// 3. Constructor
// -----------------------------
// function Orang(nama, kelas, nilai) {
//     this.nama = nama;
//     this.kelas = kelas;
//     this.nilai = nilai;
    
//     this.belajar = function (wkt) {
//         this.nilai += wkt;
//         console.log(`Hi ${this.nama}, nilai anda ${this.nilai}`)
//     }

//     this.maen = function (wkt) {
//         this.nilai -= wkt;
//         console.log(`Hi ${this.nama}, nilai anda ${this.nilai}`)
//     }

// }

// const orang1 = new Orang('Dar', 10, 50)
// const orang2 = new Orang('Dir', 11, 40)

// -----------------------------
// 4. Object.create()
// ??
// -----------------------------

