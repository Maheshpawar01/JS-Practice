/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

// function calculateTime(n) {
//     const startTime = Date.now();
    
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
    
//     const endTime = Date.now();
//     const elapsedTime = endTime - startTime;
    
//     return { sum: sum, timeInSeconds: elapsedTime / 1000 };
//     // return 0.01;
// }


// // Example usage:
// const n = 1000000; // Change this to any desired value
// const result = calculateTime(n);
// console.log("Sum:", result.sum);
// console.log("Time taken:", result.timeInSeconds, "seconds");

function calculateSumTime(n) {
    const startTime = Date.now();
    
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    
    const endTime = Date.now();
    const totalTime = endTime - startTime;
    
    return { sum: sum, timeInSeconds: totalTime / 1000 };
}

// Example usage:
const n = 10000; // Change this to any desired value
const result = calculateSumTime(n);
console.log("Sum:", result.sum);
console.log("Time taken:", result.timeInSeconds, "seconds");
