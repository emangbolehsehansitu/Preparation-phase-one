/*
================
Recursive - Hanya Bilangan Terbagi Nol
================

dividableRecursive adalah sebuah function yang
 menerima dua parameter berupa array dan num.
function akan mereturn sebuah sebuah number yang 
hanya sisa baginya nol dari bilangan num

[RULE]
- Wajib menggunakan recursive
- Dilarang menggunakan regex .match dan lainnya!
- Tidak boleh membuat variable diluar function
- Tidak boleh menambahkan parameter baru
- Tidak boleh menggunakan looping while/for    
*/

function dividableRecursive(array, num) {
  //code here
  function sisaBagi(array, num, index) {

    let hasil = ''
    // base case
    if (index === array.length) {
      return hasil
    }

    if (array[index] % num === 0) {
      hasil = hasil + " " + array[index]
    }

    return hasil.concat(sisaBagi(array, num, index + 1))
    
  }

  return sisaBagi(array, num, 0)
}

// DRIVER CODE
console.log(dividableRecursive([66, 33, 55, 44, 11], 3)) // 66 33
console.log(dividableRecursive([123, 222, 100, 50, 32], 2)) // 222 100 50 32
console.log(dividableRecursive([125, 500, 201, 202, 66], 5)) // 125 500
console.log(dividableRecursive([66, 33, 55, 44, 132], 6)) // 66 132
