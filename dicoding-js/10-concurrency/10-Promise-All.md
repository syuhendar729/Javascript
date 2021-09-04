# Promise All

Pada materi sebelumnya kita belajar bagaimana promise dapat menangani situasi di mana
terdapat asynchronous process yang saling membutuhkan untuk melaksanakan tugasnya. Lalu
bagaimana jika kita ingin menjalankan banyak promise sekaligus tanpa memedulikan urutan?
Bukankah concurrency memungkinkan kita melakukan banyak proses bersamaan agar lebih efisien?

Ketika pergi ke sebuah kedai kopi bersama rekan kerja, kita biasanya memesan kopi secara
bersamaan. Meskipun kopi yang kita pesan berbeda, tak jarang pelayanan mengantarkan pesanan
bersamaan. Nah, pada kasus inilah pelayan menggunakan teknik Promise.all().

Method Promise.all() dapat menerima banyak promise dalam bentuk array pada parameternya.
Kemudian method tersebut akan mengembalikan nilai seluruh hasil dari promise dalam bentuk
array.

Contohnya seperti berikut:

```javascript
const promises = [firstPromise(), secondPromise(), thirdPromise()];
 
Promise.all(promises)
    .then(resolvedValue => {
        console.log(resolvedValue);
    });
 
/* output
[ 'first promise', 'second promise', 'third promise' ]
*/
```

Pada kasus mesin kopi, kita bisa menambahkan proses untuk memanaskan air dan menggiling biji
kopi.

```javascript
const boilWater = () => {
    return new Promise((resolve, reject) => {
        console.log("Memanaskan air...");
        setTimeout(() => {
            resolve("Air panas sudah siap!");
        }, 2000);
    })
}
 
const grindCoffeeBeans = () => {
    return new Promise((resolve, reject) => {
        console.log("Menggiling biji kopi...");
        setTimeout(() => {
            resolve("Kopi sudah siap!");
        }, 1000);
    })
}
```
Keduanya dapat berjalan bersamaan. Kita akan memanfaatkan Promise.all() untuk menjalankan kedua
fungsi di atas sebelum fungsi brewCoffee(). Ubah kode fungsi makeEspresso() menjadi seperti ini:

```javascript
function makeEspresso() {
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStock();
        })
        .then(value => {
            console.log(value);
            const promises = [boilWater(), grindCoffeeBeans()];
            return Promise.all(promises);
        })
        .then((value) => {
            console.log(value)
            return brewCoffee();
        })
        .then(value => {
            console.log(value);
            state.isCoffeeMachineBusy = false;
        })
        .catch(rejectedReason => {
            console.log(rejectedReason);
            state.isCoffeeMachineBusy = false;
        });
}
 
makeEspresso();
 
/* output
Mesin kopi siap digunakan.
Stok cukup. Bisa membuat kopi.
Memanaskan air...
Menggiling biji kopi...
[ 'Air panas sudah siap!', 'Kopi sudah siap!' ]
Membuatkan kopi Anda...
Kopi sudah siap!
*/
```

Ketika kode di atas dieksekusi, kita perlu menunggu dua (2) detik untuk proses boilWater dan
grindCoffeeBeans (durasi terlama dari promise yang dijalankan dari Promise.all()). Ini menunjukkan
bahwa semua promise di dalam Promise.all() berjalan bersamaan dan menunggu sampai semua proses di
dalamnya selesai dijalankan.

Yang perlu kita perhatikan, urutan nilai yang dihasilkan oleh method ini sesuai dengan promise yang
kita tentukan pada parameternya.

```javascript
/* output
[ 'Air panas sudah siap!', 'Kopi sudah siap!'  ]
*/
```

Nilai dari boilWater akan tetap berada di posisi pertama, meskipun proses ini membutuhkan waktu lebih
lama.


