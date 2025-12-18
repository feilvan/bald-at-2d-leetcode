/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// * TESTCASE
const t1 = [1, 2, 3, 4, 5];
const t2 = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let merged: number = 0;
  const mergedArr = nums1.concat(nums2).toSorted((a, b) => a - b);
  if (mergedArr.length % 2 === 1)
    merged = mergedArr[Math.ceil(mergedArr.length / 2) - 1];
  else
    merged =
      (mergedArr[mergedArr.length / 2 - 1] + mergedArr[mergedArr.length / 2]) /
      2;
  console.log(mergedArr);
  return merged;
}
// @lc code=end
findMedianSortedArrays(t1, t2);
/*
12m22s  1050/2098 cases passed (N/A)
12m22s  2098/2098 cases passed (53 ms)
        Your runtime beats 10.19 % of typescript submissions
        Your memory usage beats 5.71 % of typescript submissions (65.8 MB)
*/
