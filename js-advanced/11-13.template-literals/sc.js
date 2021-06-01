// ==================================
// Template literals
// ==================================

const nama = "Syuhendar";
const kelas = 11;
console.log(`Halo nama saya ${nama}
Saya duduk di kelas ${kelas}`); // tidak memerlukan concet
console.log("Halo nama saya " + nama + "\nSaya duduk di kelas " + kelas);

// Embeded expression
console.log(`${1 + 3 * 7}`);
const x = 10;
console.log(`${x % 2 == 0 ? "Genap" : "Ganjil"}`);
// console.log(`${alert("Hello world")}`);

// HTML Fragments
const org = {
	nama: "Suada",
	kelas: 10,
	energi: (x) => x * 10,
};
const htm = `
<div class="coba">
	<ul>
		<li>Nama : ${org.nama}</li>
		<li>Kelas : ${org.kelas}</li>
		<li>Energi : ${org.energi(2)}</li>
	</ul>
</div>

`;

console.log(htm);
