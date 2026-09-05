/**
 * Write a function that takes a string and returns it 
 * reversed. Do not use the build-in .reverse() menthod.
 *
 * Constrants:
 * Input string length <= 1000
 * Must use iteration or recursion
 * 
 */

function reverseString(str) {
    const reversed = [];

    for (let i = str.length - 1; i >=0; i--) {
        reversed.push(str[i]);   
    }

    return reversed.join('');
}


console.log(reverseString("hello"))
