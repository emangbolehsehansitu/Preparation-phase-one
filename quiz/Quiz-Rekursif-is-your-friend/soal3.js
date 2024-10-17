/**
  Vowels Counter Recursive
  Diberikan sebuah function consonantCounterRecursive(sentences) yang 
  menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat 
  di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.
  - Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
*/

function consonantCounterRecursive(sentences) {
  //code here
  // base case
   if (sentences.length === 0) {
    return 0;
  }

  
  let firstChar = sentences[0].toLowerCase();
  let isLetter = firstChar >= 'a' && firstChar <= 'z'; 

  // Cek apakah konsonan
  let isVowel = firstChar === 'a' || firstChar === 'i' || firstChar === 'u' || firstChar === 'e' || firstChar === 'o';
  
  if (isLetter && !isVowel) { 
    return 1 + consonantCounterRecursive(sentences.slice(1));
  } else {
    return consonantCounterRecursive(sentences.slice(1)); 
  }

}

console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) //10
console.log(consonantCounterRecursive('AziZy')) // 3
console.log(consonantCounterRecursive('awt6an')) // 3
