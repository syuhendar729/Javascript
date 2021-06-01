// =====================================================================
//
// PENGELOLAAN PENUMPANG ANGKOT - Lebih kompleks
// ~ end
// =====================================================================

// Buat object
function Angkot(sopir, trayek, cas, penumpang) {
	this.sopir = sopir;
	this.trayek = trayek;
	this.cas = cas;
	this.penumpang = penumpang;

	this.penumpangNaik = function (namaPenumpang) {
		for (var i = 0; i < this.penumpang.length; i++) {
			if (this.penumpang[i] == undefined) {
				this.penumpang.splice(i, 1, namaPenumpang);
				return this.penumpang;
			}
		}
		this.penumpang.push(namaPenumpang);
		return this.penumpang;
	};

	this.penumpangTurun = function (namaPenumpang, bayar = 0) {
		for (var i = 0; i < this.penumpang.length; i++) {
			if (this.penumpang[i] == namaPenumpang) {
				this.penumpang.splice(i, 1, undefined);
				this.cas += bayar;
				return this.penumpang;
			}
		}
	};
}

// Instansiasi object
const angkot1 = new Angkot("Syuhendar", ["Jakarta", "Tangsel"], 0, [
	"Dar",
	"Dir",
	undefined,
	"Dur",
]);

const angkot2 = new Angkot("Rantisi", ["Kuningan", "Tangsel"], 0, []);

/*
// --------------------------------------------------------------------- 
// Output
// --------------------------------------------------------------------- 

> angkot1
Angkot {
  sopir: 'Syuhendar',
  trayek: [ 'Jakarta', 'Tangsel' ],
  cas: 0,
  penumpang: [ 'Dar', 'Dir', undefined, 'Dur' ],
  penumpangNaik: [Function (anonymous)],
  penumpangTurun: [Function (anonymous)]
}
> angkot1.penumpangNaik('Der')
[ 'Dar', 'Dir', 'Der', 'Dur' ]
> angkot1
Angkot {
  sopir: 'Syuhendar',
  trayek: [ 'Jakarta', 'Tangsel' ],
  cas: 0,
  penumpang: [ 'Dar', 'Dir', 'Der', 'Dur' ],
  penumpangNaik: [Function (anonymous)],
  penumpangTurun: [Function (anonymous)]
}
> angkot1.penumpangTurun('Der')
[ 'Dar', 'Dir', undefined, 'Dur' ]
> angkot1
Angkot {
  sopir: 'Syuhendar',
  trayek: [ 'Jakarta', 'Tangsel' ],
  cas: 0,
  penumpang: [ 'Dar', 'Dir', undefined, 'Dur' ],
  penumpangNaik: [Function (anonymous)],
  penumpangTurun: [Function (anonymous)]
}
> angkot1.penumpangNaik('Der')
[ 'Dar', 'Dir', 'Der', 'Dur' ]
> angkot1
Angkot {
  sopir: 'Syuhendar',
  trayek: [ 'Jakarta', 'Tangsel' ],
  cas: 0,
  penumpang: [ 'Dar', 'Dir', 'Der', 'Dur' ],
  penumpangNaik: [Function (anonymous)],
  penumpangTurun: [Function (anonymous)]
}
> angkot1.penumpangTurun('Der', 1000)
[ 'Dar', 'Dir', undefined, 'Dur' ]
> angkot1
Angkot {
  sopir: 'Syuhendar',
  trayek: [ 'Jakarta', 'Tangsel' ],
  cas: 1000,
  penumpang: [ 'Dar', 'Dir', undefined, 'Dur' ],
  penumpangNaik: [Function (anonymous)],
  penumpangTurun: [Function (anonymous)]
}
> angkot1.penumpangNaik('Der')
[ 'Dar', 'Dir', 'Der', 'Dur' ]
> angkot1
Angkot {
  sopir: 'Syuhendar',
  trayek: [ 'Jakarta', 'Tangsel' ],
  cas: 1000,
  penumpang: [ 'Dar', 'Dir', 'Der', 'Dur' ],
  penumpangNaik: [Function (anonymous)],
  penumpangTurun: [Function (anonymous)]
}
> angkot1.penumpangTurun('Der', 5000)
[ 'Dar', 'Dir', undefined, 'Dur' ]
> angkot1
Angkot {
  sopir: 'Syuhendar',
  trayek: [ 'Jakarta', 'Tangsel' ],
  cas: 6000,
  penumpang: [ 'Dar', 'Dir', undefined, 'Dur' ],
  penumpangNaik: [Function (anonymous)],
  penumpangTurun: [Function (anonymous)]
}
> angkot1.penumpangNaik(undefined)
[ 'Dar', 'Dir', undefined, 'Dur' ]
> angkot1.penumpangTurun(undefined, 4237)
[ 'Dar', 'Dir', undefined, 'Dur' ]
> angkot1
Angkot {
  sopir: 'Syuhendar',
  trayek: [ 'Jakarta', 'Tangsel' ],
  cas: 10237,
  penumpang: [ 'Dar', 'Dir', undefined, 'Dur' ],
  penumpangNaik: [Function (anonymous)],
  penumpangTurun: [Function (anonymous)]
}
> angkot2
Angkot {
  sopir: 'Rantisi',
  trayek: [ 'Kuningan', 'Tangsel' ],
  cas: 0,
  penumpang: [],
  penumpangNaik: [Function (anonymous)],
  penumpangTurun: [Function (anonymous)]
}
> 


*/
