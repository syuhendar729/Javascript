# Export Beberapa Nilai pada Node.js

Pada materi sebelumnya kita telah mengetahui cara export nilai dari suatu berkas JavaScript. Lantas
bagaimana jika kita perlu meng-export beberapa nilai sekaligus?

Mari kita contohkan dengan menambahkan variabel isCoffeeMachineReady pada berkas state.js seperti
berikut:


```javascript
const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
};
 
const isCoffeeMachineReady = true;
```

Kita tidak bisa melakukan export dari kedua nilai di atas dengan cara seperti di bawah ini:


```javascript
module.exports = coffeeStock;
module.exports = isCoffeeMachineReady;
```

Baris kode kedua berarti kita menginisialisasikan ulang nilai properti module.exports sehingga
nilai yang di-export hanya variabel isCoffeeMakerReady.

Solusinya adalah kita tetap mengekspor satu nilai, tetapi kita akan memanfaatkan object literals
({  }).

```javascript
module.exports = {coffeeStock, isCoffeeMachineReady}; 
```

Jika kita lihat nilai module pada console, nilai dari properti exports merupakan sebuah objek yang
menampung nilai dari objek coffeeStock dan variabel isCoffeeMachineReady.

```javascript
Module {
  id: '.',
  path: '/home/dicoding/Playground/javascript/CoffeeMachine',
  exports: {
    coffeeStock: { arabica: 100, robusta: 150, liberica: 200 },
    isCoffeeMachineReady: true
  },
  parent: null,
  filename: '/home/dicoding/Playground/javascript/CoffeeMachine/state.js',
  loaded: false,
  children: [],
  paths: [
    '/home/dicoding/Playground/javascript/CoffeeMachine/node_modules',
    '/home/dicoding/Playground/javascript/node_modules',
    '/home/dicoding/Playground/node_modules',
    '/home/dicoding/node_modules',
    '/home/node_modules',
    '/node_modules'
  ]
}
```

Lalu bagaimana cara import kedua nilai tersebut? Masih ingat dengan materi destructuring object?
Pada berkas index.js kita gunakan teknik destructuring object untuk mendapatkan nilai yang
di-import seperti ini:

```javascript
const {coffeeStock, isCoffeeMachineReady} = require('./state');
 
console.log(coffeeStock);
console.log(isCoffeeMachineReady);
 
/* output
{ arabica: 100, robusta: 150, liberica: 200 }
true
*/
```

Namun ingat, ketika menggunakan destructuring object pastikan penamaan variabel lokal sesuai dengan
properti objeknya. Jika tidak, maka variabel tersebut akan menghasilkan undefined.







