# Intruksi

1. expression => unit kode dpt dievaluasi

```javascript
5; // Baris kode ini merupakan expression karena interpreter akan membaca kode ini dan menghasilkan nilai 5.
2 + 3; // Baris kode ini juga merupakan expression. Interpreter mengevaluasi kode dan juga akan menghasilkan nilai 5.
```

2. statement => intruksi utk melakukan sbuah aksi tertentu

```javascript
var yourName;
let yourAge;
const numberOfDays;  // declaration statement
for(), if()
```

intinya:

-   Expression merupakan kode yang menghasilkan nilai.
-   Statement menunjukkan aksi yang dilakukan.

beberapa aturan dalam penamaan variabel yang perlu Anda ketahui:

-   Harus dimulai dengan huruf atau underscore (\_).
-   Dapat terdiri dari huruf, angka, dan underscore (\_) dengan berbagai kombinasi.
-   Tidak boleh mengandung spasi (whitespace). Jika penamaan variabel lebih dari dua kata, tuliskan secara camelCase. Contoh firstName, lastName, catName, dll.
-   Tidak boleh mengandung karakter spesial (! . , / \ + \* = dll.)


# Tipe data

## Increment dan Decrement

- Jika dituliskan setelah variabel (x++), expression akan menghasilkan nilai variabel sebelum ditingkatkan nilainya.
- Jika dituliskan sebelum variabel (++x), expression akan menghasilkan nilai variabel setelah ditingkatkan nilainya.

```javascript
let postfix = 5;
console.log(postfix++);
/* output: 5 */
console.log(postfix);
/* output: 6 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */
```

## bigInt
- buat nyimpen angka besar -25^53 sampai 25^53
- tambahkan caracter n dibelakang
- pada operasi pembagian, hasilnya akan dibulatkan ke bawah dan tanpa mengandung nilai desimal
```javascript
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/


console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);

/* output
7n
3n
10n
2n; Bukan 2.5n
1n
*/
```

## string
```javascript
const answer = '"I think it\'s awesome!" he answered confidently';
console.log(answer)

// solusi jika tanda petik 2 di string, gunakan bacslash \
```
- concatenation => penggabung string
- string interpolation => template literals

## Symbol
```javascript
const id = Symbol("id");

console.log(id);

/* output
Symbol(id)
*/


const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);

/* output
false
*/
```














