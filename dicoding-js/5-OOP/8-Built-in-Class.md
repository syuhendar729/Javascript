# Built-in Class

Dalam JavaScript sendiri terdapat built-in class bawaan, misalnya Date, Object, Array, Math,
dan String. Built-in class tersebut dapat digunakan untuk memanipulasi data-data terkait
dengan array, perintah matematik, manipulasi karakter, dan manipulasi objek.

Date merupakan built-in object bawaan dari bahasa pemrograman JavaScript yang digunakan untuk
utilitas terkait tanggal dan waktu. Ini sangat membantu ketika dalam program yang kita buat
terdapat penggunaaan dan manipulasi tanggal dan waktu.

Untuk menggunakannya kita dapat meng-instansiasi Date object tersebut dengan 4 cara:

```javascript
// #1 tanpa parameter, yang berarti `myDate` akan berisi tanggal dan waktu saat ini
const myDate = new Date(); 
 
// #2 parameter tanggal dalam bentuk string, misal  "January 01, 2021" 
const myDate = new Date(dateString); 
 
// #3 parameter dalam bentuk number, misal 87400000
const myDate = new Date(miliseconds); 
 
// #4 parameter tanggal dalam bentuk number (7 parameter), [hour,minute,second,millisecond] bersifat opsional
const myDate = new Date(year,month,date,hour,minute,second,millisecond); 
```



Dalam object Date terdapat beberapa method yang dapat kita gunakan. Berikut adalah daftar
method yang umum digunakan.

| *Methods*         | *Penjelasan*                                                 | *Contoh penggunaan*      |
| ----------------- | ------------------------------------------------------------ | ------------------------ |
| getMonth()        | Nilai kembaliannya adalah bulan dalam bentuk angka (0 sampai 11), 0 berarti Januari. | myDate.getMonth()        |
| getFullYear()     | Nilai kembaliannya adalah tahun, misalkan 2021.              | myDate.getFullYear()     |
| getDate()         | Nilai kembaliannya adalah tanggal dari 1 sampai 31.          | myDate.getDate()         |
| getHours()        | Nilai kembaliannya adalah jam dari 0 sampai 23               | myDate.getHours()        |
| getMinutes()      | Nilai kembaliannya adalah menit dari 0 sampai 59             | myDate.getMinutes()      |
| getSeconds()      | Nilai kembaliannya adalah detik dari 0 sampai 59             | myDate.getSeconds()      |
| getMilliseconds() | Nilai kembaliannya adalah mili-detik dari 0 to 999           | myDate.getMilliseconds() |
| getTime()         | Nilai kembaliannya adalah waktu dalam bentuk epoch mili-detik (dimulai dari 1 January, 1970 yang berarti 0) | myDate.getTime()         |
| getDay()          | Nilai kembaliannya adalah hari dalam seminggu dari 0 sampai 6. 0 berarti minggu | myDate.getDay()          |



Selain itu, juga terdapat static method yang dapat digunakan tanpa perlu melakukan instansiasi, yaitu:

| ***Method***          | ***Penjelasan***                                             | ***Contoh Penggunaan***  |
| --------------------- | ------------------------------------------------------------ | ------------------------ |
| parse(datestring)     | digunakan untuk merubah tanggal dalam format string, menjadi epoch miliseconds | Date.parse("2021-01-01") |
| UTC(year, [..params]) | digunakan untuk merubah tanggal dalam format string, menjadi epoch miliseconds | Date.UTC(2021, 01, 01)   |



## Date String Format

ketika kita menggunakan tanggal dan waktu, kita perlu memahami format yang dipakai oleh standar dunia. Ini berguna dan memudahkan kita untuk melakukan konversi dan manipulasi sebuah tanggal. Format date string sendiri, secara umum terdiri dari:

| ***Format*** | ***Penjelasan***                             |
| ------------ | -------------------------------------------- |
| YYYY         | 4 digit tahun, misalkan : 2021               |
| MM           | 2 digit bulan, misalkan : 01 berarti Januari |
| DD           | 2 digit tanggal 0 sampai 31                  |
| HH           | 2 digit jam 0 sampai 23                      |
| mm           | 2 digit menit 0 sampai 59                    |
| ss           | 2 detik detik 0 sampai 49                    |
| sss          | 3 digit milidetik 0 sampai 999               |
| -            | Pemisah untuk tanggal                        |
| :            | Pemisah untuk waktu                          |
| Z            | Berarti tanggal akan diatur sebagai UTC      |

Dari tabel format di atas, ketika misalnya kita akan melakukan parsing baik dari string ke milliseconds ataupun sebaliknya, kita dapat memanfaat format di atas.

Untuk Date Object javascript sendiri, nilai epoch dimulai dari 0 untuk tanggal 1 January, 1970, 00:00:00 UTC



## Contoh Penggunaan Date

Berikut ini adalah kode misalkan kita ingin menghitung berapa umur kita dengan memanfaatkan object date.

```javascript
// parameter birthday dapat berupa miliseconds ataupun date string
const myAge = birthday => {
  const birtday = new Date(birthday);
  const today = Date.now(); // today menghasilkan nilai miliseconds saat ini
  
  const diff_ms = today - birtday.getTime(); // menghitung selisih nilai miliseconds hari ini dan tanggal lahir
  const diffDate = new Date(diff_ms);
  
  return diffDate.getFullYear() - 1970; // 1970 adalah representasi 0 dari miliseconds
};

myAge('2000-01-22'); // 21 tahun
```

Selain Date, kita juga dapat menggunakan built-in class javascript yang lainnya.

```javascript
const listOfContent = [1,2,”President”, {}];
console.log(Array.isArray(listOfContent)); 
// result is true
 
const splitText = "12:20:00".split(':');
// result is [ '12', '20', '00' ]
```



