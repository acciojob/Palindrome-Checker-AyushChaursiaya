// complete the given function

function isPalindrome(s) {
  // Helper function to check if a character is alphanumeric
  function isAlphanumeric(char) {
    let code = char.charCodeAt(0);
    return (
      (code >= 48 && code <= 57) || // 0-9
      (code >= 65 && code <= 90) || // A-Z
      (code >= 97 && code <= 122)   // a-z
    );
  }

  // Convert uppercase to lowercase without using toLowerCase
  function toLowerCase(char) {
    let code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(code + 32);
    }
    return char;
  }

  // Clean the string by removing non-alphanumeric characters and converting to lowercase
  let cleanedString = '';
  for (let i = 0; i < s.length; i++) {
    if (isAlphanumeric(s[i])) {
      cleanedString += toLowerCase(s[i]);
    }
  }

  // Check if the cleaned string is a palindrome
  let left = 0;
  let right = cleanedString.length - 1;

  while (left < right) {
    if (cleanedString[left] !== cleanedString[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
module.exports = isPalindrome
