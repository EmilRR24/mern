/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
    [2, 5, 3, 6],
    [3, 6, 7],
];

const nums2 = [];
const sum2 = 5;
const expected2 = [];

const nums3 = [10, 15, 20, 35, 30];
const sum3 = 5;
const expected3 = [];

// Bonus:
const nums4 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum4 = 16;
const expected4 = [
    [2, 5, 3, 6],
    [3, 6, 7],
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0],
];

// Bonus:
const nums5 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum5 = -16;
const expected5 = [
    [-2, -5, -3, -6],
    [-3, -6, -7],
    [-3, -6, -7, -0],
    [-3, -6, -7, -0, -0],
];

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(n^2) quadratic.
 * - Space: O(n^2) quadratic.
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */

 function findConsecutiveSums(nums, targetSum) {
    const summableSubsets = [];
    let i = 0, j = i+1;
    let sum = nums[i];
    while (i < nums.length){
        console.log(`i: ${i} || j: ${j} || sum: ${sum}`)
        // Break statement for resetting 'inner' j index
        if (j >= nums.length) {
            i++;
            j=i+1;
            sum = nums[i];
            continue;
        }

        // Update sums
        sum += nums[j];

        // Conditionals  for  what  happens next
        if(sum === targetSum) {
            summableSubsets.push(nums.slice(i, j+1))
            j++
        }
        else if (targetSum >= 0 && sum > targetSum){
            i++;
            j=i+1;
            sum = nums[i];
        }
        else if (targetSum < 0 && sum < targetSum){
            i++;
            j=i+1;
            sum = nums[i];
        }
        else if (targetSum >= 0 && sum < targetSum){
            j++;
        }
        else if (targetSum < 0 && sum > targetSum){
            j++;
        }
    }
    return summableSubsets;
}
console.log(findConsecutiveSums(nums1, sum1))
console.log(findConsecutiveSums(nums2, sum2))
console.log(findConsecutiveSums(nums3, sum3))
console.log(findConsecutiveSums(nums4, sum4))
console.log(findConsecutiveSums(nums5, sum5))