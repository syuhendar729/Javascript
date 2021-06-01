// this => object global, bisa dipakai dimanapun
// window = this
console.log(this === window)
console.log(this) 

// Function declaration
function hello() {
	console.log(this)
}

hello()
this.hello()


// Object literal
const obj = {}
obj.halo = function () {
	console.log(this)
}

obj.halo()


// Constructor
function Halo() {
	console.log(this)
}

const obj2 = new Halo()
const obj3 = new Halo()
