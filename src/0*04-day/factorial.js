/**
 * Problem: Write a recursive function to compute the factorial of a number n.
 * 
 * Constraints:
 * 0 <= n <= 15
 * 
 */

function factorial(n) {
    
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

console.log(factorial(5));
console.log(factorial(1));