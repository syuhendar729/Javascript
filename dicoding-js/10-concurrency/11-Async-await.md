# Async-await


Pembahasan terakhir mengenai asynchronous process kali ini adalah penggunaan syntax async-await. Apa
itu?

Seperti yang kita tahu, penulisan kode asynchronous sedikit berbeda dengan proses synchronous.
Contohnya, untuk mendapatkan nilai coffee dari sebuah proses asynchronous, kita tidak dapat
melakukannya dengan teknik seperti ini:

```javascript
function makeCoffee() {
    const coffee = getCoffee(); // async process menggunakan promise
    console.log(coffee);
}
 
makeCoffee();
```

Melainkan harus seperti ini:


- Promise
```javascript
function makeCoffee() {
    getCoffee().then(coffee => {
        console.log(coffee);
    });
}
 
makeCoffee();
```
- Callback
```javascript
function makeCoffee() {
    getCoffee(function(coffee) {
        console.log(coffee);
    });
}
 
makeCoffee();
```

Namun, sejak ES8 (ECMAScript 2017) kita dapat menuliskan asynchronous process layaknya synchronous
process dengan bantuan keyword async dan await.

Fitur async/await sebenarnya hanya syntactic sugar. Itu berarti secara fungsionalitas bukanlah sebuah
fitur baru dalam JavaScript. Namun, hanya gaya penulisan baru yang dikembangkan dari kombinasi
penggunaan Promise dan generator (pembahasan mengenai generator bisa Anda pelajari di sini
`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator` ).
Sehingga, async/await ini tidak dapat digunakan jika tidak ada Promise.

Lantas bagaimana cara menggunakan async/await ini? Pada contoh kode sebelumnya, mari kita lihat juga
fungsi getCoffee() dan bagaimana ia mengembalikan promise.

```javascript
const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 100;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Kopi didapatkan!");
            } else {
                reject("Biji kopi habis!");
            }
        }, 1000);
    })
}
```

Untuk mendapatkan nilai dari fungsi getCoffee() menggunakan .then(), maka kode kita akan seperti ini:

```javascript
function makeCoffee() {
    getCoffee().then(coffee => {
        console.log(coffee);
    });
}
 
makeCoffee();
 
/* output
Kopi didapatkan!
*/
```

Async-await memungkinkan kita menuliskan proses asynchronous layaknya proses synchronous. Kira-kira
kode program kita akan seperti berikut:

```javascript
function makeCoffee() {
    const coffee = getCoffee();
    console.log(coffee);
}
 
makeCoffee();
 
/* output
Promise { <pending> }
*/
```

Namun, ketika kode di atas dijalankan hasilnya tidak akan sesuai yang kita harapkan karena fungsi
getCoffee() merupakan object Promise. Untuk menunggu fungsi getCoffee() yang berjalan secara
asynchronous, tambahkan keyword await sebelum pemanggilan fungsi getCoffee().

```javascript
const coffee = await getCoffee();
```

Kemudian, karena fungsi makeCoffee() sekarang menangani proses asynchronous, maka fungsi  tersebut
juga menjadi fungsi asynchronous. Tambahkan async sebelum deklarasi fungsi untuk membuatnya menjadi
asynchronous.

```javascript
async function makeCoffee() { …  }
```

Dengan perubahan di atas, kita telah berhasil menuliskan proses asynchronous dengan gaya synchronous.

```javascript
async function makeCoffee() {
    const coffee = await getCoffee();
    console.log(coffee);
}
 
makeCoffee();
 
/* output
Kopi didapatkan!
*/
```

Keyword async digunakan untuk memberitahu JavaScript supaya menjalankan fungsi makeCoffee() secara
asynchronous. Lalu, keyword await digunakan untuk menghentikan proses pembacaan kode selanjutnya
sampai fungsi getCoffee() mengembalikan nilai promise resolve.

Walaupun await menghentikan proses pembacaan kode selanjutnya pada fungsi makeCoffee, tetapi ini
tidak akan mengganggu proses runtime sesungguhnya pada JavaScript (global). Karena fungsi makeCoffee
berjalan secara asynchronous, kita tidak dapat menggunakan await tanpa membuat function dalam
scope-nya berjalan secara asynchronous.


## Handle onRejected using async-await

Perlu jadi catatan bahwa await hanya akan mengembalikan nilai jika promise berhasil dilakukan
(onFulfilled). Lantas bagaimana jika promise gagal dilakukan (onRejected)? Caranya cukup sederhana.
Kembali lagi kepada prinsip synchronous code. Kita dapat menangani sebuah eror atau tolakan dengan
menggunakan try...catch.

Ketika menggunakan async/await, biasakan ketika mendapatkan resolved value dari sebuah promise, untuk
menempatkannya di dalam blok try seperti ini:

```javascript
async function makeCoffee() {
    try {
        const coffee = await getCoffee();
        console.log(coffee);
    }
}
```

Dengan begitu kita dapat menggunakan blok catch untuk menangani jika promise gagal dilakukan
(onRejected).

```javascript
async function makeCoffee() {
    try {
        const coffee = await getCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}
 
makeCoffee();
 
/* output
Biji kopi habis!
*/
```




