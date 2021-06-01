// ---------------------------------------------------------------------
// Object => kumpulan data yg memiliki nama
// ---------------------------------------------------------------------
// 3 cara Membuat object
// ---------------------------------------------------------------------

// Object literal
const siswa1 = {
	nama: "Nama Siswa",
	kelas: 11,
	jusurusan: "IPA",
	nilai: 100,
};

// Function declaration
function masukkanSiswa(nama, kelas, jurusan, nilai) {
	const siswa = {};
	siswa.nama = nama;
	siswa.kelas = kelas;
	siswa.jurusan = jurusan;
	siswa.nilai = nilai;
	return siswa;
}

const siswa2 = masukkanSiswa("Syuhendar", 10, "IPA", 90);
const siswa3 = masukkanSiswa("Darrr", 12, "IPS", 110);

// Constructor
function Siswa(nama, kelas, jurusan, nilai) {
	this.nama = nama;
	this.kelas = kelas;
	this.jurusan = jurusan;
	this.nilai = nilai;
}

const siswa4 = new Siswa("Dir", 1, "PK", 60);
const siswa5 = new Siswa("Dur", 9, "IT", 1000);

console.log(siswa1);
console.log(siswa2);
console.log(siswa3);
console.log(siswa4);
console.log(siswa5);
