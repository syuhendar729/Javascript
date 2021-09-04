# Arrow Function

ES6 memperkenalkan fungsi baru yang dinamakan arrow function expression atau lebih dikenal sebagai
arrow function. Arrow function mirip seperti regular function secara perilaku, tetapi berbeda dalam
penulisannya. Sesuai namanya, fungsi didefinisikan menggunakan tanda panah atau fat arrow ( =>  ).
Tentunya penulisan arrow function ini akan lebih singkat.

Selain perbedaan sintaksis, terdapat perbedaan perilaku antara arrow function dan regular function.
Regular function dapat berupa function declaration dan function expression. Namun, arrow function
hanya berupa expression function saja. Itu sebabnya arrow function memiliki nama lengkap “arrow
function expression”.

Regular function
```javascript
// function declaration
function sayHello(greet) {
    console.log(`${greet}!`);

}
 
// function expression
const sayName = function (name) {
    console.log(`Nama saya ${name}`)

}
```

Arrow function
```javascript
// function expression
const sayHello = (greet) => {
    console.log(`${greet}!`)

}
 
const sayName = (name) => {
    console.log(`Nama saya ${name}`)

}
```

Pada arrow function kita tidak perlu menuliskan keyword function setiap membuat fungsi. Kita tetap
menuliskan parameter di dalam tanda kurung lalu diikuti dengan tanda panah (=>) sebelum kurung
kurawal.

```javascript
const sayName = (name) => {
    console.log(`Nama saya ${name}`)

}
```

Apabila fungsi hanya memiliki satu parameter, maka kita bisa menghapuskan tanda kurung seperti
berikut:

```javascript
const sayName = name => {
    console.log(`Nama saya ${name}`)

}

sayName("Leia");

/* output
Nama saya Leia
 */
```

Namun, jika kita sama sekali tidak membutuhkan parameter, maka kita tetap menuliskan tanda kurung
namun kosong seperti ini:

```javascript
const sayHello = () => {
    console.log("Selamat pagi semuanya!")

};

sayHello();

/* output
Selamat pagi semuanya!
 */
```

Satu hal yang menarik, ketika body dari function hanya terdiri dari satu baris, kita bisa menghapus
tanda kurung kurawal. Tentunya ini akan menghemat baris kode yang kita tulis.

```javascript
const sayName = name => console.log(`Nama saya ${name}`);
sayName("Leia");

const sayHello = () => console.log("Selamat pagi semuanya!");
sayHello();

/* output
Nama saya Leia
Selamat pagi semuanya!
 */
```

Ketika sebuah fungsi perlu mengembalikan nilai, kita tidak perlu lagi menuliskan return (hanya
bekerja untuk fungsi satu baris).

```javascript
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

/* output
12
 */
```



