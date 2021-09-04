# Callback Function

Hal yang seringkali membingungkan ketika bekerja dengan program synchronous dan asynchronous
adalah bagaimana menangani suatu nilai yang didapatkan secara asynchronous pada program yang
berjalan secara synchronous. Contohnya seperti kode berikut:

```javascript
const orderCoffee = () => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
    }, 3000);
    return coffee;
}
 
const coffee = orderCoffee();
console.log(coffee);
 
/* output
Sedang membuat kopi, silakan tunggu...
null
*/
```

Jika kita melakukan hal seperti di atas untuk mencetak nilai coffee, maka hal tersebut tidak
akan pernah terjadi. Seperti yang sudah kita ketahui, fungsi setTimeout() tidak akan
menghentikan JavaScript untuk mengeksekusi kode yang ada selanjutnya. Jadi, fungsi
orderCoffee() akan selalu mengembalikan nilai null, karena kode return coffee akan
dieksekusi terlebih dulu dibandingkan dengan coffee = "Kopi sudah jadi!";. Kode asynchronous
perlu disusun dengan cara yang berbeda dari synchronous. Cara paling dasar adalah dengan
callback function.

Apa itu callback function? Mari kita bayangkan kembali ketika memesan kopi. Pada kasus ini
mungkin terdapat dua aksi yang bisa kita lakukan:

- (Synchronous) Kita tetap menunggu di kasir sampai kopi datang.

- (Asynchronous) Kita menunggu di meja setelah memesan kopi. Selanjutnya kopi akan
diantarkan oleh pelayan. Sehingga, kita tidak perlu menunggu di kasir dan dapat melakukan
pekerjaan lain.

Nah, pada JavaScript, pelayan ini berperan layaknya callback function. Ia diperintahkan pada
sebuah fungsi asynchronous kemudian akan dipanggil/digunakan ketika tugas itu selesai.

Bagaimana cara menerapkannya dalam kode? Pertama, kita tambahkan parameter dengan nama
callback pada fungsi asynchronous.

```javascript
const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
    }, 3000);
    return coffee;
}
```

Kemudian kita panggil atau gunakan callback yang diisikan dengan data yang akan dibawa
(coffee) ketika task selesai dilakukan.

```javascript
setTimeout(() => {
    coffee = "Kopi sudah jadi!";
    callback(coffee);
}, 3000);
```

Setelah menggunakan callback, fungsi tidak perlu lagi mengembalikan nilai. Sehingga, kita
bisa menghapus kode return coffee;. Keseluruhan fungsi akan tampak seperti ini:

```javascript
const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        callback(coffee);
    }, 3000);
}
```

Kemudian untuk menggunakan fungsi orderCoffee, ubah kode dari:

```javascript
const coffee = orderCoffee();
console.log(coffee);
```

Menjadi:

```javascript
orderCoffee(coffee => {
    console.log(coffee);
});
```

Sehingga ketika dijalankan akan sesuai dengan harapan kita.

```javascript
const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        callback(coffee);
    }, 3000);
}
 
 
orderCoffee(coffee => {
    console.log(coffee);
});
 
 
/* output
Sedang membuat kopi, silakan tunggu...
---- setelah 3 detik ----
Kopi sudah jadi!
*/
```

## Callback Hell

Kita sudah mengetahui bahwa callback dibutuhkan untuk mendapatkan nilai yang berasal dari
asynchronous function. Lantas bagaimana jika terdapat proses yang saling bergantung satu
sama lain? Contohnya, untuk membuat kue tahapan yang perlu kita lakukan adalah:

1. Menyiapkan bahan
2. Membuat adonan
3. Memasukkan adonan ke cetakan
4. Memanggang adonan

Tahapan tersebut sangat bergantung satu sama lain. Kita tidak bisa mencetak adonan sebelum
menyiapkan bahan dan membuat adonan. Jika seluruh tahapan tersebut berjalan secara
synchronous, mungkin kita bisa melakukannya seperti ini:

```javascript
function makeACake(...rawIngredients) {
    const ingredients = collectIngredients(rawIngredients);
    dough = makeTheDough(ingredients);
    pouredDough = pourDough(dough);
    cake = bakeACake(pouredDough);
    console.log(cake);
}
```

Namun, jika fungsi-fungsi tersebut berjalan secara asynchronous, maka kita akan membuat yang
namanya callback hell. Callback hell terjadi karena banyak sekali callback function yang
bersarang karena saling membutuhkan satu sama lain. Sehingga, kode akan tampak seperti ini:

```javascript
function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients, function(ingredients) {
        makeTheDough(ingredients, function(dough) {
            pourDough(dough, function(pouredDough) {
                bakeACake(pourDough, function(cake) {
                    console.log(cake);
                })
            })
        })
    });
}
```

Melihat kode seperti ini saja kepala jadi pusing. Terbayang sulitnya memelihara kode ini di
masa yang akan datang.

Lantas apa solusi agar kita dapat menghindari callback hell? Salah satunya adalah dengan
menggunakan Promise.

```javascript
function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients)
        .then(makeTheDough)
        .then(pourDough)
        .then(bakeACake)
        .then(console.log);
}
```

Dengan Promise, kita dapat meminimalisir callback hell dan mengubahnya menjadi kode yang
sangat mudah dibaca. Bahkan dengan kode seperti itu, non-developer pun dapat mengerti apa
maksud dari kode tersebut.






