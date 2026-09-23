/**
 * Problem: Return the maximum number in an array of integers. Do not use Math.max.
 * 
 * Constraints:
 * 
 * Array length ≥ 1
 * Numbers can be negative
 * 
 */

function findMax(arr) {
    let max = arr[0]; // Initialize max with the first element

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if current element is greater
        }
    }

    return max;
}

// Example usage:
console.log(findMax([3, 5, 1, 8, 2])); // Output: 8