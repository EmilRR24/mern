// From a technical interview with an AWS engineer: https://youtu.be/t0OQAD5gjd8

/* 
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution.

  These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
*/

const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
const expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums2 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
const expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums3 = [1, 1, 2, 2, 3, 3];
const k3 = 3;
const expected3 = [1, 2, 3];
/* 
  Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
  a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
  1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints. 
*/
/**
 * - Time: O(n) + O(n) + O(n^2) + O(k) -> O(n^2) quadratic due to sort's worst
 *    case.
 * - Space: O(n) linear.
 */
function kMostFrequentSort(nums, k) {
    // your code here
    let newArr=[]
    let result=[]
    let obj = {}
    for (let i=0; i<nums.length; i++){
        if(obj.hasOwnProperty(nums[i])){
            obj[nums[i]]++
        }
        else{
            obj[nums[i]]=1
        }
    }
    console.log(obj)
    newArr=Object.keys(obj)
    while(result.length <= k){
        for(let i= 0; i<newArr.length; i++){
            for(let j = 0; j<newArr.length; j++){
                result.push(newArr[i][j])
            }
        }
    }
    return result;
}

console.log(kMostFrequentSort(nums1,k1))