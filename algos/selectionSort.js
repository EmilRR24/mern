/* 
  https://visualgo.net/en/sorting
    
  Selection sort works by iterating through the list, finding the maximum
  value, and moving it to the end of the list. Then, ignoring the last
  position, which is now sorted, iterate through the list again to find the
  next maximum value and move it to the end. This continues until all values
  are sorted.
  Unstable sort.
  
  Time Complexity
    - Best: O(n^2) quadratic.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic.
  Space: O(1) constant.
  Selection sort is one of the slower sorts.
  - ideal for: pagination, where page 1 displays 10 records for example,
      you run selection sort for 10 iterations only to display the first 10
      sorted items.
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */
function selectionSort(nums) {
    // LOOP TO START THE SORTING FROM BEGINNING
    for(let i=0; i<nums.length; i++) {
        let largest = 0;
        // LOOP ITERATE FROM BEGINNING OF THE ARRAY TO THE END
        for(let j=1; j<nums.length-i; j++) {
            // AS WE ITERATE THROUGH ARRAY, FIND THE INDEX OF THE LARGEST VALUE
            if(nums[largest] < nums[j]){
                largest = j;
            }
            // if (j === nums.length-i-1){
                // temp = nums[largest];
                // nums[largest] = nums[j];
                // nums[j] = temp;
            // }
        }
        // SWAP THE LARGEST INDEX WITH THE END OF THE UNSORTED SECTION OF ARRAY
        console.log(nums);
        [nums[largest], nums[nums.length-i-1]] = [nums[nums.length-i-1], nums[largest]];
    }
    return nums;
}
console.log(selectionSort(numsRandomOrder));