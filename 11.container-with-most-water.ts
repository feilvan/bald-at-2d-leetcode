/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 *
 * https://leetcode.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (59.13%)
 * Likes:    33264
 * Dislikes: 2141
 * Total Accepted:    4.9M
 * Total Submissions: 8.2M
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * You are given an integer array height of length n. There are n vertical
 * lines drawn such that the two endpoints of the i^th line are (i, 0) and (i,
 * height[i]).
 *
 * Find two lines that together with the x-axis form a container, such that the
 * container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 *
 * Notice that you may not slant the container.
 *
 *
 * Example 1:
 *
 *
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array
 * [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the
 * container can contain is 49.
 *
 *
 * Example 2:
 *
 *
 * Input: height = [1,1]
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * n == height.length
 * 2 <= n <= 10^5
 * 0 <= height[i] <= 10^4
 *
 *
 */
const h: number[] = [1, 2];
// @lc code=start
function maxArea(height: number[]): number {
  let out: number = 0;
  if (height.length === 2) {
    out += Math.min(height[0], height[1]);
    // console.log(out);
  }
  while (height.length != 0) {
    const area =
      Math.min(height[0], height[height.length - 1]) * (height.length - 1);
    // console.log(height[0], height[height.length - 1], height.length - 1, area);
    if (area > out) out = area;
    if (height[0] > height[height.length - 1]) height.pop();
    else height.shift();
  }
  // console.log(out);
  return out;
}
// @lc code=end
maxArea(h);
/*
04m24s 65/65 cases passed (2416 ms)
       Your runtime beats 5.02 % of typescript submissions
       Your memory usage beats 61.4 % of typescript submissions (64.2 MB)
*/
