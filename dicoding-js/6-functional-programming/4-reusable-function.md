# Reusable Function

Dengan menerapkan konsep-konsep yang ada di dalam paradigma FP, fungsi yang Anda buat akan bersifat
reusable. Karena fungsi yang Anda buat merupakan pure function, ia tidak akan dipengaruhi ataupun
mempengaruhi keadaan di/dari luar. Hal ini tentu membuat fungsi dapat digunakan berkali-kali tanpa
khawatir mendapatkan hasil di luar ekspektasi Anda.

Pada materi kali ini kita tidak berfokus untuk membuat banyak reusable function di JavaScript. Kami
percaya, dengan memahami konsep functional programming secara matang, Anda dapat membuatnya sendiri
sesuai kebutuhan.

Alih-alih membuatnya sendiri, kita akan coba membahas dan menggunakan beberapa reusable function
yang sudah ada di JavaScript. Khususnya beberapa Higher-Order Function yang dimiliki array, seperti
map, filter, dan forEach.


## Array Map

Fungsi array.map() merupakan fungsi bawaan dari array yang sangat berguna dan banyak sekali
digunakan. Fungsi ini dapat dipanggil dari sebuah data bertipe array dan menerima satu buah
callback function.


```javascript
['Harry', 'Ron', 'Jeff', 'Thomas'].map(() => {  });
```

Callback function tersebut akan dipanggil sebanyak jumlah panjang array dan akan memiliki akses
pada index array sesuai dengan iterasinya.

```javascript
['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => {  });
```

Seperti yang Anda ketahui di awal, fungsi map akan mengembalikan array baru. Nilai tiap item pada
array yang dikembalikan, dihasilkan dari kembalian callback function-nya. Karena callback function
dapat mengakses item array, biasanya developer menggunakannya untuk menghasilkan nilai baru.

```javascript
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!`});

console.log(newArray);

/**
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * 
 */
```

## Array Filter

Sama seperti array.map(), fungsi array.filter() merupakan fungsi bawaan dari data yang bertipe
array di JavaScript. Sesuai namanya, fungsi ini sangat berguna untuk melakukan proses penyaringan
(filtering) terhadap nilai array yang ada. Bila Anda memiliki kasus di mana Anda ingin
menghilangkan beberapa item di array berdasarkan spesifikasi tertentu, fungsi ini sangatlah cocok
Anda gunakan.

Cara kerja fungsi ini mirip seperti array.map(). Namun, callback function dari fungsi ini harus
mengembalikan boolean. Di mana nilai boolean ini digunakan untuk menentukan apakah item array lolos
saring atau tidak.

Sama seperti fungsi map(), fungsi filter() juga akan mengembalikan array yang telah disaring dalam
bentuk array baru.

Contoh penggunaan ketika Anda ingin menghilangkan seluruh nilai falsy pada array:

```javascript
const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));

console.log(truthyArray);

/**
 * output:
 * [ 1, 'Hallo', 'Harry', 14 ]
 * 
 */
```

Contoh lain, penggunaan filter untuk menyaring array dari objek siswa yang layak mendapatkan
beasiswa berdasarkan nilai skor yang didapat.

```javascript
const students = [
  {
    name: 'Harry',
    score: 60,
  },
  {
    name: 'James',
    score: 88,
  },
  {
    name: 'Ron',
    score: 90,
  },
  {
    name: 'Bethy',
    score: 75,
  }
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

console.log(eligibleForScholarshipStudents);

/**
 * output:
 * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
 * 
 */
```

## Array Reduce

Sama seperti array.map(), array.reduce() adalah fungsi bawaan dari data yang bertipe array yang
digunakan untuk mengeksekusi nilai pada setiap elemen dan menampilkan dalam sebuah nilai saja.

```javascript
arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])
```

Callback function dari fungsi ini dapat diolah untuk manipulasi data currentValue dan menyimpannya
pada accumulator. Selain itu, fungsi reduce juga memiliki nilai awal yang dapat didefinisikan pada
bagian initialValue.

Contoh penggunaannya misalkan ketika kita ingin menjumlahkan total nilai siswa:

```javascript
const students = [
  {
    name: 'Harry',
    score: 60,
  },
  {
    name: 'James',
    score: 88,
  },
  {
    name: 'Ron',
    score: 90,
  },
  {
    name: 'Bethy',
    score: 75,
  }
];

const totalScore = students.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore);

/**
 * output:
 * 313
 * 
 */
```


## Array some

array.some() merupakan fungsi bawaan dari array yang cukup sering digunakan. Fungsi ini akan
menghasilkan nilai boolean.

```javascript
arr.some(callback(element[, index[, array]])[, thisArg])
```

Nilai yang dihasilkan didasarkan pada pernyataan apakah ada setidaknya satu dari deretan nilai
dalam array tersebut lolos berdasarkan kriteria yang kita tuliskan dalam callback function.

Contoh penggunaannya misalkan kita ingin mengetahui apakah dalam deretan angka terdapat angka
genap.

```javascript
const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);

console.log(even);

/** 
output true
**/
```

## Array find

Mirip dengan array.some(), array.find() sesuai namanya digunakan untuk mencari apakah di dalam
deretan nilai terdapat nilai yang sesuai dengan kriteria yang kita definisikan pada callback
function. 

Yang membedakan array.find() dengan array.some(), find akan menghasilkan satu nilai dari elemen
yang pertama kali ditemukan berdasarkan kriteria tertentu dan akan menghasilkan nilai undefine bila
tidak ada kriteria yang terpenuhi pada item array.

```javascript
arr.find(callback(element[, index[, array]])[, thisArg])
```

Sebagai contoh, misalkan kita akan mencari siswa dengan nama `James`.

```javascript
const students = [
  {
    name: 'Harry',
    score: 60,
  },
  {
    name: 'James',
    score: 88,
  },
  {
    name: 'Ron',
    score: 90,
  },
  {
    name: 'Bethy',
    score: 75,
  }
];

const findJames = students.find(student => student.name === 'James');
console.log(findJames);

/**
output
{ name: 'James', score: 88 }
**/
```

## Array sort

array.sort() merupakan fungsi bawaan dari array yang berguna untuk melakukan pengurutan nilai dari
sebuah deretan nilai. Secara default, fungsi sort akan mengubah semua nilai dalam deretan menjadi
bentuk string dan mengurutkannya secara ascending.

```javascript
arr.sort([compareFunction])
```

Contoh sederhananya adalah sebagai berikut:

```javascript
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);
// output: [ 1, 1000, 101, 121, 30, 4 ]
```

Contoh pengurutan di atas didasarkan pada pengurutan bentuk tipe data string. Oleh karena itu,
ketika kita ingin mengurutkan sesuai dengan kriteria yang kita inginkan (berdasarkan tanggal
ataupun berdasarkan nilai siswa) maka kita perlu membuat compare function tersendiri.

```javascript
const array1 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
  return a - b;
};
const sorting = array1.sort(compareNumber);
console.log(sorting);

/**
output
[ 1, 4, 30, 1000 ]
**/
```

Pada compare function, fungsi akan membandingkan 2 nilai yang akan menghasilkan 3 result yaitu
negatif (-), 0, dan positif (+).

- Jika, negative maka `a` akan diletakan sebelum `b`

- Jika, positive maka `b` akan diletakan sebelum `a`

- Jika, 0 maka tidak ada perubahan posisi.


## Array every

array.every() merupakan fungsi bawaan dari array yang digunakan untuk mengecheck apakah semua nilai
dari sebuah array sesuai dengan kriteria yang didefinisikan. Kembalian dari array.every() adalah
nilai Boolean.

```javascript
arr.every(callback(element[, index[, array]])[, thisArg])
```

Sebagai contoh, kita akan mengecek apakah seorang siswa telah lulus semua uji materi:


```javascript
const scores = [70,85,90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);

/**
output
true
**/
```

## Array forEach

Array forEach merupakan fungsi bawaan dari array yang berfungsi untuk memanggil fungsi callback
pada setiap iterasi index array. Berbeda dari fungsi array lain yang sudah kita bahas, fungsi ini
tidak mengembalikan nilai apa pun. Jadi fungsi ini secara harfiah hanya berfungsi untuk memanggil
fungsi callback-nya saja, tak lebih dari itu.

Melalui fungsi ini, Anda dapat mengubah sintaks perulangan berdasarkan jumlah array secara
imperatif menjadi deklaratif.

Cara imperatif
```javascript
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
for(let i = 0; i < names.length; i++) {
  console.log(`Hello, ${names[i]}!`);

}
 
/**
 * output:
 * Hello, Harry!
 * Hello, Ron!
 * Hello, Jeff!
 * Hello, Thomas!
 * 
 */
```

Cara deklaratif
```javascript
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
names.forEach((name) => {
  console.log(`Hello, ${name}`);
});
 
/**
 * output:
 * Hello, Harry!
 * Hello, Ron!
 * Hello, Jeff!
 * Hello, Thomas!
 * 
 */
```

Namun, ketahuilah bahwa ketika menggunakan forEach, kita tidak bisa menggunakan operator break atau
continue pada proses perulangan (Anda bisa melakukannya pada perulangan for). Hal ini juga berlaku
ketika pada fungsi map dan filter.

```javascript
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
for(let i = 0; i < names.length; i++) {
  if(names[i] === 'Jeff') continue; // Bisa!
  
  console.log(`Hello, ${names[i]}!`);
}
 
names.forEach((name) => {
  if(names[i] === 'Jeff') continue; // Tidak Bisa!
  console.log(`Hello, ${name}`);
});

```








