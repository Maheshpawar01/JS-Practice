/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const length = cleanStr.length;

  for (let i = 0; i < length / 2; i++) {
      if (cleanStr[i] !== cleanStr[length - 1 - i]) {
          return false; // Not a palindrome
      }
  }
  
  return true; // Palindrome


}

module.exports = isPalindrome;
