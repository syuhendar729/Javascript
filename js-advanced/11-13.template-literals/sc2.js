// lanjutan
// ---------------------
// 1. HTML Fragments
// ---------------------
const org = {
	nama: "Suada",
	kelas: 10,
	energi: (x) => x * 10,
};
const htmOrg = `
<div class="org">
	<ul>
		<li>Nama : ${org.nama}</li>
		<li>Kelas : ${org.kelas}</li>
		<li>Energi : ${org.energi(2)}</li>
	</ul>
</div>
`;
// document.body.innerHTML = htmOrg;

// ---------------------
// 2. Looping
// ---------------------
const hewan = [
	{
		nama: "kucing",
		makanan: "daging ikan",
	},
	{
		nama: "kelinci",
		makanan: "pelet",
	},
	{
		nama: "singa",
		makanan: "daging apa aja",
	},
];
const htmHewan = `
<div class="hewan">
	${hewan
		.map(
			(hewan) => `
		<ul>
			<li>Nama : ${hewan.nama}</li>
			<li>Makanan : ${hewan.makanan}</li>
		</ul>`
		)
		.join("")}
</div>
`;
// document.body.innerHTML = htmHewan;

// -----------------------
// 3. Conditional
// -----------------------
// ternary
const anime = {
	judul: "Angel Beats",
	rating: 8.3,
	sinopsis:
		"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, asperiores cumque, id veniam hic mollitia! Non recusandae error totam, cumque fuga dolore animi. Fugiat necessitatibus incidunt atque, quibusdam quod facilis?",
};
const htmAnime = `
<div class="anime">
	<ul>
		<li>Judul : ${anime.judul}</li>
		<li>Rat : ${anime.rating}</li>
		${anime.sinopsis ? `<li>Sin : ${anime.sinopsis}</li>` : ""}
	</ul>
</div>
`;

// document.body.innerHTML = htmAnime;

// -----------------------
// 4. Nested
// -----------------------
// HTML Fragments bersarang
const daftarSantri = [
	{
		nama: "Syuhada",
		kelas: 11,
		mapel: ["mtk", "biologi", "fisika", "kimia"],
	},
	{
		nama: "Rantisi",
		kelas: 10,
		mapel: ["mtk", "b.arab", "pkn", "sejarah"],
	},
	{
		nama: "Hendar",
		kelas: 12,
		mapel: ["mtk", "b.ing", "b.indo"],
	},
];

function cetakMapel(mapel) {
	return `
		<ol>
			${mapel.map((mapel) => `<li>${mapel}</li>`).join("")}
		</ol>
	`;
}

const htmlSantri = `
<div class="santri">
	${daftarSantri.map(
		(santri) => `
		<ul>
			<li>Nama : ${santri.nama}</li>
			<li>Kelas : ${santri.kelas}</li>
			<li>Mapel : ${cetakMapel(santri.mapel)}</li>
		</ul>
		`
	)}
</div>
`;
document.body.innerHTML = htmlSantri;
