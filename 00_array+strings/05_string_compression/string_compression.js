// =========================================================================== 
// 1.6 String Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the compressed string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a-z). 
// =========================================================================== 

// input: one string
// output: string (compressed, show the char and count length, add next to char)

/*
input: aabcccccaaa
output: a2b1c5a3
*/

function stringCompression(str) {
  let occurrence = str.match(/(\w)(\1*)/g); 
  console.log("occurrence => ", occurrence);
  // test 1 print occurrence, ["aa", "b", "ccccc", "aaa"]
  // test 2 print occurrence, ["aa"]
  // test 3 print occurrence, ["a", "b", "ccc", "dddd", "bbb"]
  let compression = '';

  for (let i = 0; i < occurrence.length; i++) {
    // identifies the letter/char
    compression += occurrence[i][0];
    // console.log(compression);

    // next, identify the length of the letter occurrence
    compression += occurrence[i].length;
    console.log("iterate & update compression => ", compression);
  }
  return compression;
}

let s1 = stringCompression('aabcccccaaa'); // a2b1c5a3
console.log(s1);

// let s2 = stringCompression('aa'); // a2
// console.log(s2);

// let s3 = stringCompression('abcccddddbbb'); // a1b1c3d4b3
// console.log(s3);