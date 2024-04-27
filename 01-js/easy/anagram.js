/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// function isAnagram(str1, str2) {
//   return str1=== str2
// }

// module.exports = isAnagram;

// console.log(isAnagram("hello", "World"))

function isAnagram(str1, str2) {
  // Remove spaces and convert to lowercase for case-insensitive comparison
  str1 = str1.replace(/\s/g, "").toLowerCase();
  str2 = str2.replace(/\s/g, "").toLowerCase();
  
  // Check if the lengths of the strings are equal
  if (str1.length !== str2.length) {
      return false;
  }
  
  // Sort both strings
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');
  
  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;

// Example usage:
console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world"));   // Output: false

