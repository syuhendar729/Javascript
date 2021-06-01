const box = document.querySelector(".box");

// Sebelum ada arrow function
// box.addEventListener("click", function () {
// 	let that = this;
// 	this.classList.toggle("size");
// 	setTimeout(function () {
// 		// this.classList.toggle("caption");
// 		console.log(that); // <div class='box' ...
// 	}, 600);
// });

// Setelah ada arrow function
box.addEventListener("click", function () {
	let satu = "size";
	let dua = "caption";
	if (this.classList.contains(satu)) {
		[satu, dua] = [dua, satu];
	}
	this.classList.toggle(satu);
	setTimeout(() => {
		this.classList.toggle(dua);
	}, 600);
});
