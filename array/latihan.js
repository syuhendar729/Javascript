const penumpang = ["Dar", undefined, "Dir", "Dur"];

const tambahPenumpang = function (namaPenumpang, penumpang) {
	if (penumpang.length == 0) {
		penumpang.push(namaPenumpang);
		return namaPenumpang;
	} else {
		for (var i = 0; i < penumpang.length; i++) {
			if (penumpang[i] == undefined) {
				// penumpang[i] = namaPenumpang; // sama saja dengan splice
				penumpang.splice(i, 1, namaPenumpang);
				return penumpang;
			} else if (penumpang[i] == namaPenumpang) {
				console.log(namaPenumpang + " Sudah ada");
				return penumpang;
			} else if (i == penumpang.length - 1) {
				penumpang.push(namaPenumpang);
				return penumpang;
			}
		}
	}
};

const hapusPenumpang = function (namaPenumpang, penumpang) {
	if (penumpang.length == 0) {
		console.log("Angkot kosong, tidak ada penumpang yang bisa diturunkan");
		return penumpang;
	} else {
		for (var i = 0; i < penumpang.length; i++) {
			if (penumpang[i] == namaPenumpang) {
				penumpang[i] = undefined;
				// penumpang.splice(i, 1, undefined)
				return penumpang;
			}
		}
		console.log("Nama penumpang tidak ada");
		return penumpang;
	}
};

/*
// --------------------------------------------------------------------- 
// Output
// --------------------------------------------------------------------- 

> penumpang
[ 'Dar', undefined, 'Dir', 'Dur' ]

> hapusPenumpang('Dir', penumpang)
[ 'Dar', undefined, undefined, 'Dur' ]

> tambahPenumpang('Der', penumpang)
[ 'Dar', 'Der', undefined, 'Dur' ]

> tambahPenumpang('Dor', penumpang)
[ 'Dar', 'Der', 'Dor', 'Dur' ]

> hapusPenumpang('Dor', penumpang)
[ 'Dar', 'Der', undefined, 'Dur' ]

> hapusPenumpang('Dir', penumpang)
Nama penumpang tidak ada
[ 'Dar', 'Der', undefined, 'Dur' ]

> hapusPenumpang('Dur', penumpang)
[ 'Dar', 'Der', undefined, undefined ]

> hapusPenumpang('Der', penumpang)
[ 'Dar', undefined, undefined, undefined ]

> hapusPenumpang('Dar', penumpang)
[ undefined, undefined, undefined, undefined ]

> hapusPenumpang(undefined, penumpang)
[ undefined, undefined, undefined, undefined ]

*/
