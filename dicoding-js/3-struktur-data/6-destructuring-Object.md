# Destructuring Object

Penulisan sintaksis destructuring object pada ES6 menggunakan object literal ({  }) di sisi kiri
dari operator assignment.

```
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18

}
 
const {firstName, lastName, age} = profile;
console.log(firstName, lastName, age);
 
/* output:
John Doe 18
*/
```

Pada contoh di atas tanda kurung kurawal merepresentasikan object yang akan didestrukturisasi. Di
dalamnya terdapat firstName, lastName, dan age yang merupakan variabel untuk menyimpan nilai
properti dari object profile. Kita juga perlu perhatikan penamaan variabelnya. Pastikan penamaannya
sama seperti properti object-nya. Melalui nama variabel inilah nilai-nilai properti object akan
dimasukkan secara otomatis. Sehingga variabel firstName akan berisikan nilai profile.firstName,
lastName akan berisikan nilai profile.lastName, begitu juga dengan variabel age akan berisikan
nilai profile.age.

Dalam destructuring object, kita bisa menentukan salah satu nilai yang ingin kita
desktrukturisasikan. Sehingga kita tidak perlu membuat variabel sebanyak properti yang dimiliki
objeknya, contohnya:

```
const {lastName} = profile;
```

# Destructuring Assignment

Pada contoh sebelumnya, kita telah melakukan destructuring object pada deklarasi variabel. Namun,
pada kasus tertentu mungkin kita perlu melakukannya pada variabel yang sudah dideklarasikan.

```
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18

}
 
let firstName = "Dimas";
let age = 20;

// menginisialisasi nilai baru melalui object destruction
({firstName, age} = profile);
 
console.log(firstName);
console.log(age);
 
/* output:
John
18
*/
```

Saat melakukan destructuring assignment, kita perlu menuliskan destructuring object di dalam tanda
kurung. Jika tidak menuliskan tanda kurung, tanda kurung kurawal akan membuat JavaScript mengira
kita membuat block statement, sementara block statement tidak bisa berada pada sisi kiri
assignment.

```
// tidak bisa karena JavaScript mengira kita membuat block statement
// block statement tidak bisa berada pada sisi kiri assignment
{firstName, age} = profile;
```

Nah, inilah fungsinya tanda kurung. Ia akan memberi tahu JavaScript bahwa tanda kurawal di dalamnya
bukan sebuah block statement melainkan sebuah expression, sehingga assignment dapat dilakukan.

```
({firstName, age} = profile);
```

# Default Values

Ketika kita mendestruksikan objek dan menetapkan variabel dengan nama yang bukan merupakan properti
dari objek, maka nilai dari variabel tersebut menjadi undefined. Contohnya:

```
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18

}
 
 
const {firstName, age, isMale} = profile;
 
console.log(firstName)
console.log(age)
console.log(isMale)
 
/* output:
John
18
undefined
*/
```

Alternatifnya, kita bisa secara opsional mendefinisikan nilai default pada properti tertentu jika
tidak ditemukan. Untuk melakukanya, tambahkan tanda assignment (=) setelah nama variabel dan
tentukan nilai default-nya seperti ini:

```
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18

}
 
 
const {firstName, age, isMale = false} = profile;
 
console.log(firstName)
console.log(age)
console.log(isMale)
 
/* output:
John
18
false
*/
```

Jika nilai properti tidak ditemukan, maka nilai default akan diterapkan pada variabel.


# Assigning to Different Local Variable Names

Sampai saat ini kita tahu bahwa untuk melakukan destrukturisasi object pada variabel lokal, kita
perlu menyeragamkan penamaan variabel lokal dengan properti object-nya. Namun, sebenarnya dalam
proses destrukturisasi object kita bisa menggunakan penamaan variabel lokal yang berbeda. ES6
menyediakan sintaksis tambahan yang membuat kita dapat melakukan hal tersebut. Penulisannya mirip
seperti ketika kita membuat properti beserta nilainya pada object.

```
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18

}
 
const {firstName: localFirstName, lastName: localLastName, age: localAge} = profile;

console.log(localFirstName);
console.log(localLastName);
console.log(localAge);
 
 
/* output:
John
Doe
18
*/
```






















