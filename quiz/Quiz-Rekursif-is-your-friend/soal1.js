/*

Diberikan sebuah function angka terbesar yang menerima satu parameter berupa array. 
fungsi ini akan mengembalikan atau me return nilai berupa angka terbesar dari array. 
Jika array kosong maka akan mengembalikan nilai -1

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter
- Dilarang Menggunakan Loop
*/

function angkaTerbesar(sentence) {
  //code here
  if (sentence == 0) {
    return -1
  }

  function CariAngka(hai, terbesar) {

    // base case 
    if (hai === sentence.length) {
      return terbesar
    }
    
    if (sentence[hai] > terbesar) {
      terbesar = sentence[hai];
    }
  
    return CariAngka(hai + 1, terbesar);
  }
 
  return CariAngka(0, sentence[0]);
}

// TEST CASES
console.log(angkaTerbesar([2, 3, 7, 6, 5])) // 7
console.log(angkaTerbesar([9, 3, 7, 4, 1])) // 9
console.log(angkaTerbesar([2, 1, 7, 2, 8])) // 8
console.log(angkaTerbesar([])) // -1
