/**
 * Problem: Check if a given string is a palindrome
 * (reads the same forward and backward). Ignore spaces and case.
 * 
 * Constraints:
 * Input contains only alphanumeric and spaces
 * Return true or false
 * 
 */

function isPalindrome(str) {
    // Remove spaces and convert to lowercase
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    
    // Check if the cleaned string is equal to its reverse
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("racecar"));