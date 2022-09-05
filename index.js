function isPalindrome(word) {
  const wordReverse = word.split("").reverse().join("");
  if(word === wordReverse){
    return true
  }
  else{
    return false
  }

  // Write your algorithm here
}
console.log(isPalindrome('racecar'))
console.log(isPalindrome("robot"))

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  I declared a "wordReverse" variable with parameter 'word'. i used the split method on word that splits it.
  the reverse method reverses the letters in the string and the join method concatenates yhe reversed letters to form a string
  I then used the if statement to set the conditions for returning if the string is a palindrone or not
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
