/*
=====================
DOUBLE REVERSE ARRAY
=====================

[INSTRUCTION]
Terdapat function doubleReverse yang menerima parameter berupa array of string, 
function ini akan memutar elemen array, string yang berada di dalam elemen array juga akan dibalik atau diputar jika panjang string GENAP

[EXAMPLE]
input: ['rabu', 'cinta', 'benci', 'masuk', 'nikmat']
proses: memutar isi array, dan memutar elemen array yang panjang katanya genap
output: [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]

[RULES]
- Function bawaan javascript yang boleh digunakan hanyalah .push dan .length
- DILARANG menggunakan .reverse()
*/

function doubleReverse(arr) {
    //code here 
    let simpanArr = []

    let sementara = ""

    for (let index = arr.length - 1; index >= 0; index--) {
        simpanArr.push(arr[index])
    }

    for (let a = 0; a < simpanArr.length; a++) {
        if (simpanArr[a].length % 2 == 0) {
            for (let j = simpanArr[a].length - 1; j >= 0; j--) {
                sementara = sementara + simpanArr[a][j];
            }
            simpanArr[a] = sementara;
            sementara = ""
        }
    }

    return simpanArr;
}

console.log(doubleReverse(['rabu', 'cinta', 'benci', 'masuk', 'nikmat']));
// [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]
console.log(doubleReverse(['aku', 'sayang', 'kamu']));
// // [ 'umak', 'gnayas', 'aku' ]
console.log(doubleReverse(['pelakor', 'perusak', 'rumah', 'tangga']));
// //[ 'anggnat', 'rumah', 'perusak', 'pelakor' ]
console.log(doubleReverse([]))
// // invalid input parameter
