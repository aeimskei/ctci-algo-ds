// =========================================================================== 
// 1.3 URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the length of the string. (Note: If implementing in Java, please use a character array so that you can perform this operation in place)
// =========================================================================== 

// Use the trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.)
// Use the replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. 

// input: string
// output: string with '%20' in place of the spaces

function urlify(str) {
  let clean = str.trim(); // "Mr John Smith"
  let url = clean.replace(/\s/g, '%20');

  console.log(url);
}

urlify("Mr John Smith     ");  // "Mr%20John%20Smith"