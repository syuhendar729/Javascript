// Kemudian di dalam function

// function membuat local Execution Context
// yg di dlm nya terdapat creation phase (fase pembuatan) dan execution phase (fase eksekusi)
// window
// arguments => dibuat
// hoisting

// Contoh lain

var nama = "Syuhada Rantisi";
var username = "syuhendar729";

function cetakURL() {
  console.log(arguments[0]);
  var igURL = "https://instagram.com/";
  return igURL + username; // menggunakan variabel global
}
// di dalam function akan ngambil var di dlm nya,
// kalau gk ada akan ngambil dari argument nya,
// kalau gk ada baru dari var global

console.log(cetakURL("gua"));
// argument "gua" akan tetap masuk ke dalam array arguments di local function nya
