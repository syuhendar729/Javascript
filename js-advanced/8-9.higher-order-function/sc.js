// Higher order function
// pengertian => funtion yang memiliki parameter berupa function (callback) atau yang memiliki nilai return sebuah function lagi

// contoh:

setInterval(function () {
	// ini adalah callback
	// yaitu parameter di dalam function
}, 1000);

function sayHello(nama) {
	// mereturn function di dlm function
	return function () {
		console.log(`Hello ${nama}`);
	};
}
sayHello("Suada")();

function repeat(n, action) {
	for (let i = 0; i < n; i++) {
		action(i);
	}
}
repeat(10, console.log);
repeat(2, alert);
