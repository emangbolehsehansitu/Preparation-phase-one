/**
 * ////////////////
 * changeXRecursive
 * ////////////////
 * Function ini harus dikerjakan dengan menggunakan rekursif.
 * Function ini menerima dua parameter, yaitu:
 *  1. data yang merupakan string dari number
 *  2. jenis yang merupakan string berisi antara ganjil dan genap
 *
 * [EXAMPLE]
 * Input: data = 012345678922468 dan jenis = ganjil
 * Process: Karena jenisnya ganjil maka setiap bilangan genap diubah menjadi x
 * Output: x1x3x5x7x9xxxxx
 *
 * [RULES]
 * 1. Dilarang mengubah tipe parameter function
 * 2. Dilarang membuat function diluar function yang disediakan
 * 5. Wajib menggunakan rekursif
 */

function changeXRecursive(data, jenis) {
  //code here

  function cariGanjiGenap(data) {

    let hai = ""

    if (jenis === "ganjil") {
      for (let a = 0; a < data.length; a++) {
        if (data[a] % 2 == 0) {
          hai = hai + "x"
        }
        else if (data[a] % 2 != 0) {
          hai = hai + data[a]
        }
      }
    }

    if (jenis === "genap") {
      for (let a = 0; a < data.length; a++) {
        if (data[a] % 2 !== 0) {
          hai = hai + "x"
        }
        else if (data[a] % 2 == 0) {
          hai = hai + data[a]
        }
      }
    }
  


    return hai;
  }

  return cariGanjiGenap(data)
}

console.log(changeXRecursive("012345678922468", "ganjil")); //x1x3x5x7x9xxxxx
console.log(changeXRecursive("0123456789", "genap")); //0x2x4x6x8x
