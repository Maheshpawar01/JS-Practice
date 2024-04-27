/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

// function findLargestElement(numbers) {
//     for(let i=0; i<numbers.length; i++){
//         if (arr[i] > largest) {
//             largest = arr[i]; // Update largest if the current element is greater
//         }
//     }
//     return largest;
// }

// // let arr = [3, 7, 2, 9, 1];
// const arr = [3, 7, 2, 9, 1];
// const largestElement = findLargestElement(input);
// console.log("Output:", largestElement); // Output: 9
// // module.exports = findLargestElement;

function findLargestElement(arr) {
    // Check if the array is empty
    // if (arr.length === 0) {
    //     return undefined; // Return undefined for an empty array
    // }

    let largest = arr[0]; // Assume the first element is the largest

    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; // Update largest if the current element is greater
        }
    }

    return largest; // Return the largest element found
}

module.exports = findLargestElement;
