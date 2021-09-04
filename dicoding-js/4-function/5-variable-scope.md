# Variable Scope

Sejauh ini kita sudah mengenal function. Setelah kita memisahkan kode ke dalam blok atau fungsi
terpisah, ada satu hal penting yang perlu kita tahu, yaitu variable scoping. Ada banyak keadaan di
mana kita membutuhkan variabel untuk diakses di seluruh script yang kita buat. Tetapi ada juga
keadaan di mana kita ingin variabel tersebut hanya dapat diakses pada cakupan fungsi dan fungsi
turunannya saja.

Variabel yang dapat diakses dari seluruh script disebut dengan “globally scoped”, sementara
variabel yang hanya diakses hanya pada fungsi tertentu disebut dengan “locally scoped”.

Variabel JavaScript menggunakan fungsi untuk mengelola cakupannya. Jika variabel didefinisikan di
luar fungsi, maka variabel tersebut bersifat global. Jika variabel didefinisikan di dalam fungsi,
maka variabel bersifat lokal dan cakupannya hanya pada fungsi tersebut beserta turunannya.

Berikut ini merupakan contoh scoping dalam kode:

```javascript
// global variable, dapat diakses pada parent() dan child()
const a = 'a'; 
 
function parent() {
    // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.
    const b = 'b'; 
    
function child() {
        // local variable, dapat diakses hanya pada fungsi child().
        const c = 'c';
    
}

}
```

Kita harus berhati-hati dalam mendefinisikan variabel di dalam fungsi. Pasalnya, kita bisa
mendapatkan hasil yang tidak diperkirakan, contohnya seperti berikut:

```javascript
function multiply(num) {
    total = num * num;
    return total;

}

let total = 9;
let number  = multiply(20);

console.log(total)

/* output
400
*/
```

Mungkin kita berharap nilai total akan tetap 9, mengingat variabel total pada fungsi multiply
seharusnya tidak akan berpengaruh untuk kode di luar dari fungsi tersebut. Hal ini bisa terjadi
karena pada fungsi multiply() kita tidak menetapkan variabel total sebagai cakupan lokal. Kita
tidak menggunakan keyword const atau let ketika mendeklarasikan variabel total pada fungsi
multiply() sehingga variabel total menjadi global.

_Perlu kita perhatikan, jika kita lupa menuliskan keyword let, const, atau var pada script ketika
membuat sebuah variabel, maka variabel tersebut akan menjadi global._

Sebisa mungkin kita harus menghindari pembuatan variabel global, karena variabel global dapat
diakses pada seluruh script yang kita tuliskan. Semakin banyak variabel global yang kita tuliskan,
semakin tinggi kemungkinan tabrakan (collision) terjadi.












