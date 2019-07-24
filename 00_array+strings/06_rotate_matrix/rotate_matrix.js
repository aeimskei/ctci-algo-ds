// =========================================================================== 
//1.7 Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
// =========================================================================== 

// think of it as a four-way edge swap. one way if to copy the top edge to an array, and then move the left to the top, them bottom to the left, and so on. 
// swap each layer, starting from the outermost layer adn working inwards / start inner layer and work outwards

// input: matrix / arrays of arrays 4x4
// output: rotate a four-way edge swap
// time complexity: O(n^2), quadratic bc nested loops

function rotateMatrix(arr) {
  let reverse = arr.reverse();
  // first iteration
  for (let row = 0; row < reverse.length; row++) {
    // console.log(reverse[x]); // basically just reversed
    // console.log('what is x:', x); // 0 1 2 3 each time
    /*
    [13, 14, 15, 16]
    [9, 10, 11, 12]
    [5, 6, 7, 8]
    [1, 2, 3, 4]
    */
    
    // inner iteration
    for (let col = 0; col < row; col++) {
      // console.log('what is row index #:', row); // 1 2 2 3 3 3
      // console.log('what is col index #:', col); // 0 0 1 0 1 2

      // grabs the intersection point value of row and col
      // console.log(reverse[row][col]); // 9 5 6 1 2 3 
      // console.log(reverse[col][row]); // 14 15 11 16 12 8

      // swap the index values
      [reverse[row][col], reverse[col][row]] = [reverse[col][row], reverse[row][col]]; 
    }
  }
  return reverse;
}

let image = [
  [1, 2, 3, 4], 
  [5, 6, 7, 8], 
  [9, 10, 11, 12], 
  [13, 14, 15, 16]
  ]; 

let m = rotateMatrix(image);
console.log(m);

// prints
// [13, 9, 5, 1]
// [14, 10, 6, 2]
// [15, 11, 7, 3]
// [16, 12, 8, 4]

// =========================================================================== 
// version from the book
// =========================================================================== 

// function rotateMatrix(matrix) {
//   // console.log(matrix);
//   // [1, 2, 3, 4]
//   // [5, 6, 7, 8]
//   // [9, 10, 11, 12]
//   // [13, 14, 15, 16]

//   let n = matrix.length; // 4

//   for (let layer = 0; layer < n/2; layer++) {
//     let first = layer;
//     // console.log('first: ', first); // 0

//     let last = n - 1 - layer;
//     // console.log('last: ', last); // 3

//     for (let i = first; i < last; i++) {
//       let offset = i - first;
//       // console.log('offset: ', offset); // 0
//       //save top for right
//       let top = matrix[first][i];
//       // console.log('top: ', top) // 1 2 3
      
//       //start left corner to top
//       matrix[first][i] = matrix[last - offset][first]; // 13 9 5
      
//       // start bottom corner to left
//       matrix[last - offset][first] = matrix[last][last - offset]; // 16 15 14
      
//       // start bottom right to bottom
//       matrix[last][last - offset] = matrix[i][last]; // 4 8 12
      
//       // start right corner top to right;
//       matrix[i][last] = top; // 1 2 3
      
//     }
//     return matrix
//   }
// }

// let image = [
//   [1, 2, 3, 4], 
//   [5, 6, 7, 8], 
//   [9, 10, 11, 12], 
//   [13, 14, 15, 16]
//   ]; 

// let m = rotateMatrix(image);
// console.log(m);