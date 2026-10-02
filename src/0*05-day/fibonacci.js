/**
 * Problem: Return the nth Fibonacci number (0-indexed).
 * 
 * Constraints:
 * 0 <= n <= 30
 */

function fibonacci(n) {
    if (n < 0 || n > 30) {
        throw new Error("Input must be between 0 and 30 inclusive.");
    }

    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1, fib;

    for (let i = 2; i <= n; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }

    return fib;
}

// Example usage:
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(10)); // Output: 55