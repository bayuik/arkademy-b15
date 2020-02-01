// // buatlah sebuah function dengan satu parameter string
// // untuk mengecek apakah string tersebut terdapat huruf vokal
// // jika iya maka return string jika tidak false (bebas)

// const isStringVowels = (string) => {
//     // variable penampung soalnya loop javascript aneh
//     let isVowel = false;

//     // string to lower case untuk case insensitive
//     let strlowcase = string.toLowerCase();

//     for (let i = 0; i <= strlowcase.length; i++ ) {
//         if (strlowcase[i] == 'a' || strlowcase[i] == 'i' || strlowcase[i] == 'u' || strlowcase[i] == 'e' || strlowcase[i] == 'o') {
//             isVowel = true
//             break; // break karena cuma perlu cek jika contain salah satu vowel aja
//         }
//         else {
//             isVowel = false;
//         }
//     }
//     if(isVowel == true) {
//         return string;
//     }


// }

// console.log(isStringVowels('WOW'));
const vokal = (a, b) => {
    let pattern = str.match(/[aiueo]/gi);
  
    if(str) {
        vokal.replace(vokal)
        return str;
    }
    return false;
}

console.log(vokal('bayu indra kusuma'))