# Uninstall Package

Kita sudah mengetahui cara memasang dan menggunakan package npm. Lalu, bagaimana caranya
untuk menghapus package yang sudah tidak gunakan?

Untuk melakukannya cukup mudah. Jika package berada pada objek dependencies, kita dapat
menghapusnya menggunakan perintah:

```javascript
npm uninstall <package-name>
```

Jika package terdapat pada devDependencies, kita cukup menambahkan --save-dev di akhir
perintahnya.

```javascript
npm uninstall <package-name> --save-dev
```

Contoh, jika kita ingin menghapus package lodash dari project, berarti tuliskan perintah:

```bash
npm uninstall lodash
```

Dengan begitu, package lodash akan dihapus dari objek dependencies pada berkas
package.json.

```javascript
{
  "name": "play-with-npm",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

Selain menghapus nilainya dari package.json, perintah tersebut juga akan menghapus semua
berkas yang berhubungan dengan package lodash pada folder node_modules.

Setelah menghapus package, tentu fungsi-fungsi dari package lodash sudah tidak dapat kita
gunakan lagi.

Perintah uninstall juga memiliki beberapa alias, sehingga dapat lebih cepat dalam
menuliskan perintahnya. Anda bisa melihat apa saja alias yang dapat digunakan dengan
menjalankan perintah:

```bash
npm uninstall -h
```
