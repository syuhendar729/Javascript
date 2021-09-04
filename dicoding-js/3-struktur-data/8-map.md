# Map

Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. Yang
membedakan adalah Map memperbolehkan key dengan tipe data apa pun, dibandingkan Object yang hanya
mengizinkan key bertipe String atau Symbol.

Untuk mendefinisikan Map gunakan constructor seperti di bawah ini:


```javascript
const myMap = new Map();
```

Apabila ingin menetapkan nilai dari Map secara langsung, gunakan array multi dimensi seperti ini:

```javascript
const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]

]);

console.log(myMap);

/* output
Map(3) { '1' => 'a String key', 1 => 'a number key', true => true  }
*/
```

Array pertama (luar) menyimpan masing-masing elemen atau pasangan key-value dari Map. Kemudian array
di dalamnya memiliki dua elemen, di mana elemen pertama adalah key dan array keduanya merupakan value.

Ketika sudah membuat objek Map, kita bisa mendapatkan nilainya berdasarkan key tertentu dengan metode
get(). Lalu, untuk menambahkan pasangan key-value baru gunakan metode set().

```javascript
const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]

]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));

/* output
3
England
4
India
 */
```

Note:
Meskipun kita bisa menetapkan dan mendapatkan data pada map seperti ini:

```javascript
const wrongMap = new Map();
 
wrongMap["My Key"] = "My Value";
console.log(wrongMap["My Key"]);
```

Namun, kode di atas bukanlah cara yang sesuai untuk mengoperasikan Map. Ketika kita menetapkan nilai map seperti di atas,
data akan disimpan sebagai generic object. Ini akan mengakibatkan data tidak tersimpan dalam Map query dan tidak bisa
menggunakan fitur dari Map seperti .has atau .delete.

```javascript
const wrongMap = new Map();
wrongMap["My Key"] = "My Value";

console.log(wrongMap.has("My Key"));
console.log(wrongMap.delete("My Key"));

/* output
false
false
 */
```

Jadi, pastikan untuk menggunakan metode .set() dan .get() untuk Map.







