# Overriding Method

Overriding adalah teknik untuk kita melakukan perombakan (baik secara keseluruhan maupun tidak)
pada sebuah method ataupun constructor yang dimiliki oleh parent class. Sehingga, ia dapat
disesuaikan dengan behavior di child class.

## Overriding Constructor

Sebelumnya kita telah mempelajari tentang constructor dan juga pewarisan. Pada contoh kasus di
inheritance atau pewarisan, kita menemukan kasus seperti di bawah ini.

```javascript
class WhatsApp extends Mail{
	constructor() {
    super();
    this.username = 'dicoding';
    this.isBussinessAccount = true;
  
	}

}
 
//pemanggilan
const wa1 = new WhatsApp(080111000222);
```

Sekarang bagaimana jika kita menambahkan username dan isBussinessAccount ke dalam constructor?
Jika kita membuat constructor baru kodenya akan seperti ini:

```javascript
class WhatsApp extends Mail {
	constructor(username, isBussinessAccount, phone) {
        super();
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    
	}

}
 
const wa1 = new WhatsApp('dicoding', true, 089989090898);
/**
Error:
Must call super constructor in derived class before accessing 'this' or returning from derived
constructor
**/
```

Eror di atas terjadi karena constructor pada kelas parent gagal dieksekusi, meskipun kita telah
menggunakan operator this.nameOfProperty. Solusinya kita dapat menggunakan operator super()
untuk mengeksekusi method parent-nya. Sehingga, constructor pada kelas WhatsApp menjadi seperti
ini.

```javascript
constructor(username, isBussinessAccount, phone) {
  super(phone);
  this.username = username;
  this.isBussinessAccount = true;

}
```

## Overriding Method

Hampir sama dengan overriding constructor, tetapi yang di-override di sini adalah method yang
ada pada parent class. Pada dasarnya semua method yang ada pada kelas parent dapat diakses
langsung di child kelasnya (as is).


```javascript
super.methodName();
```

Kadang kita tidak menggunakan sebuah method seutuhnya sama seperti parent kelasnya. Namun, kita
dapat menambahkan perintah tertentu ataupun menguranginya. Berikut merupakan contoh override
pada method sendMessage.


```javascript
class WhatsApp extends Mail {
    constructor(username, isBussinessAccount, phone) {
        super(phone);
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }
 
    // Overriding method => Melakukan Override Total
    sendMessage(msg, to) {
        console.log('Send by WA');
    }
}
```

Ketika kita memanggil method sendMessage pada contoh di atas, ia hanya akan mengeksekusi kode
yang ada pada child class.

```javascript
const wa1 = new WhatsApp('di', true, 089000999888);
wa1.sendMessage('halo', 089000999888);
 
/**
Output:
Send by WA
**/
```

Untuk tetap melakukan eksekusi kode pada parent class maka perlu menggunakan operator
super.methodName().

```javascript
sendMessage(msg, to) {
    super.sendMessage(msg, to);
    console.log('Send by WA');

}
```

Catatan:

super(...) digunakan untuk memanggil constructor parent dan hanya dapat digunakan di
constructor.

super.methodName(...) digunakan untuk memanggil parent method.




