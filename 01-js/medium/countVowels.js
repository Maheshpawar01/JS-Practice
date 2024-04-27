/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

// function countVowels(str) {
//     // Your code here
//     // const vowels = ['a', 'e', 'i', 'o,', 'u']
    
//     let countVowels = 0;
//     let string = str.toString();
    
//     for (let i = 0; i<=string.length -1; i++){

//       if(string.charAt(i)=="a" || string.charAt(i)=="e" || string.charAt(i)=="i" || string.charAt(i)=="o" || string.charAt(i)=="u"){
//         countVowels++;
//       }
//     }
//     return countVowels;
// }

// // const str = "Hello world";
// // console.log(countVowels(str))
// module.exports = countVowels;

function countVowels(str) {
  str = str.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u']; // corrected the array

  let countVowels = 0;

  for (let char of str) { // converting the string to lowercase for case insensitivity
      if (vowels.includes(char)) {
          countVowels++;
      }
  }

  return countVowels;
}

module.exports = countVowels;
