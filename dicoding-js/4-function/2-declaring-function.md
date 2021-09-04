# Declaring Function

Fungsi merupakan bagian penting dalam bahasa pemrograman. Tanpa sadar, sebenarnya kita sudah
menggunakan sebuah fungsi pada contoh kode yang ada sebelumnya. log() pada console.log() merupakan
sebuah function yang berguna untuk menampilkan data pada konsol. Tapi sebenarnya apa itu function?
Bagaimana ia bisa bekerja?

Mirip dengan fungsi pada matematika, fungsi dalam pemrograman juga digunakan untuk menghasilkan output
berdasarkan input tertentu.

![function](img/1.png)

Namun, fungsi juga bisa digunakan sebagai blok kode atau prosedur yang dapat digunakan secara
berulang. Dalam arti lain, kita dapat berpikir bahwa function merupakan sebuah variabel yang berisi
blok logika. Blok logika tersebut akan dieksekusi ketika variabelnya dipanggil.

Semua fungsi memiliki struktur yang sama. Fungsi dideklarasikan dengan keyword function dan nama
fungsinya. Nama fungsi selalu diikuti dengan tanda kurung (parentheses) tanpa spasi, lalu terdapat
sepasang kurung kurawal yang berisi logika dari fungsi tersebut.

![img2](img/2.png)

Terkadang di dalam tanda kurung kita membutuhkan sebuah informasi tambahan yang disebut dengan
parameter. Parameter merupakan data yang digunakan pada fungsi untuk diproses di dalamnya. Sebagai
contoh, fungsi console.log() dapat menerima argument berupa string atau data lain untuk ditampilkan
ke konsol.

Berikut merupakan ilustrasi dari struktur fungsi dengan parameter:

![img3](img/3.png)

## Parameter & Argument

Di dalam fungsi kita akan banyak bertemu istilah parameter & argument. Penggunaan istilah ini
sering kali tertukar, bahkan di kalangan developer.

Perbedaan mendasar antara keduanya antara lain:

Parameter merupakan variabel yang didefinisikan sebagai inputan dari sebuah fungsi. Contoh:

```javascript
function multiply(a, b) {
    return a * b;

}
```

Argument merupakan nilai atau expression yang dimasukkan ke dalam fungsi. Contohnya:

```javascript
multiply(3, 4);
```

Setelah membuat fungsi kita dapat memanggilnya dengan menuliskan nama fungsi diikuti tanda kurung
dan memasukkan argumen di dalamnya (jika ada).

```javascript
function greeting() {
    console.log("Good Morning!")

}

greeting();

/* output
Good Morning!
*/
```

Tetapi jika sebuah fungsi hanya menjalankan baris kode yang sama dirasa kurang fungsional, bukan?
Kita dapat membuat fungsi tersebut untuk menerima dan memanfaatkan parameter untuk mengubah
perilaku dari fungsinya.

Untuk menambahkan parameter pada fungsi, tambahkan variabel di dalam tanda kurung fungsi. Namun,
variabel tersebut tidak memerlukan keyword var, let, ataupun const. Kita juga bisa menambahkan
lebih dari satu parameter dengan memberikan tanda koma antar variabel parameternya. Contohnya
fungsi greeting akan kita tambahkan parameter name dan language seperti ini:

```javascript
function greeting(name, language) {
	if(language === "English") {
        console.log(`Good Morning ${name}!`);
    
	} else if (language === "French") {
        console.log(`Bonjour ${name}!`);
    
	} else {
        console.log(`Selamat Pagi ${name}!`);
    
	}

}
```

Sehingga dalam memanggilnya pun kita perlu mengirimkan dua buah nilainya sebagai argumen:

```javascript
function greeting(name, language) {
	if(language === "English") {
        console.log(`Good Morning ${name}!`);
    
	} else if (language === "French") {
        console.log(`Bonjour ${name}!`);
    
	} else {
        console.log(`Selamat Pagi ${name}!`);
    
	}

}

greeting("Harry", "French");

/* output
Bonjour Harry!
*/
```

Satu hal lagi, function dapat menghasilkan output atau mengembalikan sebuah nilai. Dengan nilai
kembalian, kita dapat membuat function yang berfungsi untuk melakukan perhitungan matematika dan
hasilnya dapat kita masukkan ke dalam sebuah variabel. Contohnya seperti ini:


```javascript
function multiply(a, b) {
    return a * b;

}

let result = multiply(10, 2)
console.log(result)

/* output
20
*/
```

Agar fungsi bisa mengembalikan nilai, gunakan keyword return diikuti dengan nilai yang akan
dikembalikan. Nilai kembalian tidak hanya number, bisa juga berupa string, boolean, object, array,
atau tipe yang lain. Seperti inilah fungsi greeting() jika kita ubah agar mengembalikan nilai
string:

```javascript
function greeting(name, language) {
	if(language === "English") {
        return `Good Morning ${name}!`
    
	} else if (language === "French") {
        return `Bonjour ${name}!`;
    
	} else {
        return `Selamat Pagi ${name}!`;
    
	}

}

let greetingMessage = greeting("Harry", "French");
console.log(greetingMessage);

/* output
Bonjour Harry!
*/
```

Yang perlu kita perhatikan lagi, ketika statement return tereksekusi, maka fungsi akan langsung
terhenti dan mengembalikan nilai.


## Expression Function

Cara lain untuk membuat sebuah fungsi pada JavaScript adalah expression function. Ingat kembali
bahwa expression adalah kode atau instruksi yang mengembalikan nilai, sehingga expression function
bisa disimpan dalam sebuah variabel.

Pada expression function umumnya kita tidak perlu menuliskan nama fungsinya. Fungsi yang tidak
bernama juga dikenal dengan anonymous function. Berikut ini merupakan contoh penulisan expression
function:

```javascript
const greeting = function(name, language) {
	if(language === "English") {
        return "Good Morning " + name + "!";
    
	} else if (language === "French") {
        return "Bonjour " + name + "!";
    
	} else {
        return "Selamat Pagi " + name + "!";
    
	}

}

console.log(greeting('Ron', 'English'));

/* output
Good Morning Ron!
 */
```











