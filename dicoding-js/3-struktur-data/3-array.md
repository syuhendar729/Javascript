# Array

Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam
satu variabel. Contoh:

```
let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);

/* output:
[ 'Cokelat', 42.5, 22, true, 'Programming'  ]
*/
```

Perbedaan array dengan object adalah data pada array disusun secara berurutan dan diakses menggunakan
index. Untuk mengakses nilai di dalam array, kita gunakan tanda kurung siku `[]` yang di dalamnya berisi
angka yang merupakan posisi nilai yang ingin diakses.


```
console.log(myArray[1]);
```

Jika Anda mengira bahwa konsol akan menampilkan teks ‘Cokelat’, maka tebakan Anda kurang tepat. Dalam
sebuah array, indeks dimulai dari 0, sehingga ketika kita mengakses data pada myArray yang berada pada
indeks ke-1 artinya data tersebut merupakan data pada posisi ke-2. Jadi nilai yang akan ditampilkan
pada konsol adalah 42.5.


```
let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray[1]);

/* output:
42.5
*/
```

Lalu, apa yang akan terjadi jika kita berusaha mengakses index di luar ukuran array-nya? Jika kita
mengakses nilai array lebih dari index-nya, maka hasilnya akan `undefined`. Index terakhir array selalu
jumlah nilai array - 1.

```
let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

/* output:
Coklat
42.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
*/
```

Sejauh ini kita baru belajar menginisialisasi dan mengakses elemen dari sebuah array. Pastinya Anda
bertanya, “Bagaimana kita memanipulasi data pada array tersebut?” 

Nah, untuk menambahkan data ke dalam array, kita bisa menggunakan metode `push()`. Fungsi push ini akan
menambahkan data di akhir array.

```
const myArray = ["Coklat", 42.5, 22, true, "Programming"];

myArray.push('JavaScript');
console.log(myArray);

/* output
[ 'Coklat', 42.5, 22, true, 'Programming', 'JavaScript'  ]
 */
```

Sedangkan untuk mengeluarkan data atau elemen terakhir dari array, kita bisa gunakan metode `pop()`.

```
const myArray = ["Orange", 42.5, 22, true, "Programming"];

myArray.pop();
console.log(myArray);

/* output
[ Orange, 42.5, 22, true  ]
*/
```

Metode lain yang bisa kita gunakan untuk memanipulasi data pada array adalah `shift()` dan `unshift()`.
Metode shift() digunakan untuk mengeluarkan elemen pertama dari array, sementara unshift() digunakan
untuk menambahkan elemen di awal array.

```
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.shift();
myArray.unshift("Apple");

console.log(myArray);

/* output
[ 'Apple', 42.5, 22, true, 'Programming'  ]
*/
```

Lalu bagaimana jika kita ingin menghapus data dari array? Sama seperti object, kita bisa menggunakan
keyword `delete`.

```
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

delete myArray[1];
console.log(myArray);

/* output
[ 'Apple', <1 empty item>, 22, true, 'Programming'  ]
*/
```

Namun, perhatikan di sini bahwa keyword `delete` hanya menghapus data pada index yang ditentukan lalu
membiarkan posisi tersebut kosong. Untuk menghapus elemen, gunakan metode `splice()` seperti ini:

```
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.splice(2, 1);   // Menhapus dari index 2 sebanyak 1 elemen
console.log(myArray);

/* output
[ 'Cokelat', 42.5, true, 'Programming'  ]
*/
```








