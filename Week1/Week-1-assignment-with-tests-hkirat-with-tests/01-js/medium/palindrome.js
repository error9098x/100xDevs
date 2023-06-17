/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  word = str.toLowerCase()
  word = word.replace(/[^a-zA-Z0-9]/g, "")
  mid = 0
  if (word.length % 2 == 0){
    mid = word.length/2 + 1
  }
  split = word.length/2
  back = word.length-1
  for ( i = 0; i < split ; i++){
       if (word[i] != word[back]){
        console.log(word[i])
        console.log(word[back])
            return false
       }
       back-=1
  }
  return true;
}
console.log(isPalindrome("Able, was I ere I saw Elba!"))
module.exports = isPalindrome;
