function hasTargetSum(array, target) {
  // Write your algorithm here
  // i need to take any array of numbers and make the function add each number in the array to each other number to return a value.
  
  for (let j = 0; j < array.length; j++) {
    let i = 0
    
    while (i < j) {
      let pair = array[i] + array[j]
      if (pair === target) {
        console.log(i, j, pair)
        return true 
      } else {
        i++
      }
    }
  }
  return false
}    

/* 
Write the Big O time complexity of your function here
Time = O(n squared) ? = quadratic
Space = O(n) ? = linear
*/

/* 
Add your pseudocode here
for loop to iterate the second number
while to compare the 2 numbers
return if true
increase first number and loop again if not true
return false if no loop returns true
*/ 

/*
  Add written explanation of your solution here

  Step 1: 
  for loop to iterate the array position of the second number. num2 starts at zero, will loop as long as it is shorter than the array length, and will increase by 1 at the end of each loop.

  start the array position of the first number as zero

  Step 2: 
  While the first position is less than the second, add the two together.

  if, at any point during that first loop, they equal the target sum, then return true

  if not, increase the first number by 1, and start the loop again.

  if there is never a loop that equals the target sum, then return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
