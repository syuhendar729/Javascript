// ambil semua elemen video
const videos = Array.from(document.querySelectorAll("[data-duration]"));
// pilih yg hanya OOP PHP
const video = videos
	.filter((video) => video.textContent.includes("OOP PHP"))
	// ambil durasi masing2 video
	.map((waktu) => waktu.dataset.duration)
	// ubah durasi menjadi int, ubah menit menjadi detik
	.map((durasi) => {
		const parts = durasi.split(":").map((part) => parseFloat(part));
		return parts[0] * 60 + parts[1];
	})
	// jumlahkan semua detik
	.reduce((acc, cur) => acc + cur);
// ubah formatnya jadi jam menit detik
const jam = Math.floor(video / 3600);
const mnt = Math.floor((video - jam * 3600) / 60);
const detik = video - (mnt * 60 + jam * 3600);
// simpan di DOM

const totalDurasi = document.querySelector(".total-durasi");
const totalVideo = document.querySelector(".jumlah-video");
totalDurasi.textContent = `${jam} jam, ${mnt} menit, ${detik} detik`;
totalVideo.textContent = `${
	videos.filter((video) => video.textContent.includes("OOP PHP")).length
}`;

// console.log(totalDurasi);
console.log(video);
console.log(jam);
console.log(mnt);
console.log(detik);
