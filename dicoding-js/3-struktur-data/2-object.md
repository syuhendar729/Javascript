# Object

Kali ini kita akan berkenalan dengan tipe data object. Sebuah tipe data yang sangat berguna dalam
pengembangan aplikasi dengan JavaScript. Object mampu menyimpan nilai dari beragam tipe data dan
membentuk data yang lebih kompleks.

Untuk menetapkan objek pada sebuah variabel kita gunakan tanda kurung kurawal `{}`

```
const user = {};
```

Object berisi pasangan `key` dan `value` yang juga dikenal dengan `property`. Key berperan mirip seperti
nama variabel yang menyimpan sebuah nilai. Sementara, value berisi nilai dengan tipe data apa pun
termasuk objek lain. Key dan value di dalam object dituliskan seperti berikut:

```
let object = {key1: "value1", key2: "value2", key3: "value3"}
```

Key harus berupa string dan dituliskan sebelum titik dua (:), lalu diikuti dengan value-nya. Meskipun
key merupakan string, kita tidak perlu menuliskan tanda petik kecuali ada karakter khusus seperti
spasi.

```
const character = {
	name: "Gua",
	age: 19,
	"Hair colors": "red",
}
```

Tanda koma di akhir properti bersifat opsional. Namun, jika tanda koma tersebut ditulis akan lebih
memudahkan ketika kita ingin memindah, mengubah, atau menghapus properti.

Satu object dapat memiliki beberapa pasang key-value yang dipisahkan dengan tanda koma (,).

```
const user = {firstName: "Luke", lastName: "Skywalker", age: 19, isJedi: true};
```

Dalam menuliskan objek, baris baru tidaklah penting dan tidak akan berpengaruh apa pun. Sehingga lebih
baik setiap kita menetapkan key-value buatlah baris baru untuk memisahkan antar nilainya. Hal ini akan
memudahkan kita dalam membaca dan memahami struktur data dari sebuah object.

```
const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,

};
```

Kemudian untuk mengakses nilai dari properti object, kita dapat memanggil nama object lalu tanda titik
dan diikuti nama propertinya. Contoh:

```
const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,

};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);

/* output
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
*/
```

Selain dot operator, kita juga bisa mengakses properti dari object menggunakan bracket atau tanda
kurung siku.

```
user[“home world”];
```

Untuk mengakses key yang memiliki spasi atau karakter khusus lainnya maka kita perlu menggunakan
bracket seperti di atas.

```
const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine"

};
console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["home world"]}`);

/* output
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
Saya berasal dari Tattooine
*/
```

Setelah mempelajari bagaimana membuat object dan menampilkan property di dalamnya, selanjutnya kita
akan memodifikasi sebuah object. Untuk mengubah nilai properti di dalam object kita gunakan assignment
operator (=).

```
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"

};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
console.log(spaceship);

/* output
   {
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1300,
  color: 'Glossy red'

   }
 */
```

Tunggu dulu. Object `spaceship` dideklarasikan sebagai `const`, tetapi kenapa kita bisa mengubah nilainya?

Yang perlu diperhatikan adalah mengubah nilai berbeda dengan menginisialisasi ulang nilai. Ketika
membuat sebuah object, kita tidak terikat dengan properti di dalamnya sehingga kita masih bisa
memodifikasi nilainya. Berbeda jika kita menginisialisasi ulang variabel dari object.

```
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"

};
 
spaceship = { name: "New Millenium Falcon"  }; // Error
```

Ketika kita mengubah object menggunakan assignment operator dan property/key-nya sudah ada, maka nilai
di dalamnya akan tergantikan dengan nilai yang baru. Sedangkan, jika property dengan nama key yang
ditentukan tidak ditemukan, maka property baru akan ditambahkan ke object.

```
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"

};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
spaceship.class = "Light freighter";

console.log(spaceship);

/* output
   {
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1300,
  color: 'Glossy red',
  class: 'Light freighter'

   }
*/
```

Kita juga dapat menghapus property pada object menggunakan keyword `delete` seperti berikut:

```
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"

};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;

delete spaceship.manufacturer;

console.log(spaceship);

/* output
{ name: 'Millenium Falcon', maxSpeed: 1300, color: 'Glossy red'  }
 */
```














