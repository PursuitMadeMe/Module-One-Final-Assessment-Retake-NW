/**
* Takes an array of words and counts how many times each word occurs in the array.
* 
* @param {string[]} arr - An array of lowercase words
* @returns {object} - an object where the key is the word, and the value is the count of that word
*
* ex: countWords(["good", "good", "great"]);
* returns: { "good": 2, "great": 1 }
* 
* ex: countWords(["dog", "cat", "goat"]);
* returns: { "dog": 1, "cat": 1, "goat": 1}
* 
* ex: countWords([]);
* returns: {}
*/

function countWords(arr) {
  //creates a variable called wordCount as an object to return 
  let wordCount = {};
  //for of loop through the array of words called arr
  for (let word of arr){
    //conditional statement iteration through arr reaches a word it will add the word and the number of times what word appears to the object wordCount
      if(wordCount[word]){
          wordCount[word] += 1
      } else {
        //else it will leave wordCount object with the word count of 1
        wordCount[word] = 1
      }
  }
  //return the new object with the word key and the counts value
  return wordCount;
}

module.exports = countWords
