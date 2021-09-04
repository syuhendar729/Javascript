# setTimeout

Fungsi setTimeout() merupakan cara yang paling mudah untuk membuat kode kita dijalankan
secara asynchronous. Fungsi ini menerima dua buah parameter. Parameter pertama adalah fungsi
yang akan dijalankan secara asynchronous. Kedua adalah nilai number dalam milisecond sebagai
nilai tunggu sebelum fungsi dijalankan. Contoh penggunaannya adalah seperti ini:

```javascript
console.log("Selamat datang!");
setTimeout(() => {
  console.log("Terima kasih sudah mampir, silakan datang kembali!");
}, 3000);
console.log("Ada yang bisa dibantu?");
```

Jika hanya mengenal program secara synchronous, maka kita dapat membayangkan hasilnya
memiliki urutan sebagai berikut:

- Mencetak -> Selamat datang!

- Menunggu selama tiga detik.

- Mencetak -> Terima kasih sudah mampir, silakan datang kembali!

- Mencetak -> Ada yang bisa dibantu?

Namun, nyatanya setTimeout() tidak akan menghentikan JavaScript untuk melakukan eksekusi
kode pada baris berikutnya. Sehingga urutannya menjadi seperti berikut:

- Mencetak -> Selamat datang!

- Mencetak -> Ada yang bisa dibantu?

- Menunggu selama tiga detik

- Mencetak -> Terima kasih sudah mampir, silakan datang kembali!

Jika kode tersebut dijalankan, ia akan menampilkan output seperti berikut:

![nameImg](img/1-setTimeout.gif)

