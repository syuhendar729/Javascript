const penumpang = [];
const a = [];

function tambahPenumpang(namaPenumpang, x) {
	if (x.length == 0) {
		x.push(namaPenumpang);
		return x;
	} else {
		for (var i = 0; i < x.length; i++) {
			if (x[i] == undefined) {
				x[i] = namaPenumpang;
				return x;
			} else if (x[i] == namaPenumpang) {
				console.log("penumpang ini sudah ada");
				return x;
			} else if (i == x.length - 1) {
				x.push(namaPenumpang);
				return x;
			}
		}
	}
}

console.log(penumpang);
