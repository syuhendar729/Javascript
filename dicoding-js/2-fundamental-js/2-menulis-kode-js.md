# Menulis Kode JavaScript Pertama

Menulis kode dalam suatu bahasa pemrograman sederhananya adalah menuliskan instruksi-instruksi
untuk dijalankan oleh komputer. Kode di bawah ini merupakan instruksi bagi terminal atau konsol
untuk mencatat (log) kalimat “Hello, World!”.

```javascript
console.log(“Hello, World!”);
```

![nameImg](path/to/img)

console.log adalah kode bawaan JavaScript untuk menampilkan pesan ke konsol, bisa berupa web
konsol atau konsol dari terminal/command prompt.

20210325154056ff249691c73019066c7b072c3cf2a270.png

Kode atau teks yang berada di dalam tanda kurung adalah pesan yang ingin ditampilkan. Pada
contoh kode di atas, kita menggunakan tanda kutip (“”) untuk menandakan bahwa pesan yang ingin
ditampilkan merupakan sebuah string atau teks. Kita akan membahas mengenai tipe data pada
beberapa modul ke depan. Saat ini kita akan fokus untuk menampilkan teks terlebih dulu.
Sekarang cobalah untuk menampilkan nama Anda sendiri ke konsol.

```javascript
console.log("Hello, World!");

// Tampilkan nama Anda ke layar pada kode di bawah:
```
JavaScript membagi instruksi secara umum menjadi dua jenis, yaitu expression dan statement.

Expression adalah unit kode yang dapat dievaluasi menjadi suatu nilai. Untuk lebih mudahnya,
perhatikan contoh kode berikut:

```javascript
5; // Baris kode ini merupakan expression karena interpreter akan membaca kode ini dan
menghasilkan nilai 5.
2 + 3; // Baris kode ini juga merupakan expression. Interpreter mengevaluasi kode dan juga akan
menghasilkan nilai 5.
```
Sementara itu, statement adalah instruksi untuk melakukan sebuah aksi tertentu. Aksi ini bisa
termasuk membuat variabel, melakukan perulangan, pengecekan kondisi, dll.

```javascript
var yourName;
let yourAge;
const numberOfDays;  // declaration statement
```

Jika Anda masih bingung untuk membedakan expression dan statement, tidak perlu khawatir. Saat
ini belum banyak kode yang bisa kita jadikan contoh. Namun, konsep ini akan banyak kita gunakan
pada materi-materi yang akan datang. Yang perlu Anda ingat adalah:

- Expression merupakan kode yang menghasilkan nilai.
- Statement menunjukkan aksi yang dilakukan.

