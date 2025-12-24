/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Medium (31.19%)
 * Likes:    15025
 * Dislikes: 13933
 * Total Accepted:    4.6M
 * Total Submissions: 14.8M
 * Testcase Example:  '123'
 *
 * Given a signed 32-bit integer x, return x with its digits reversed. If
 * reversing x causes the value to go outside the signed 32-bit integer range
 * [-2^31, 2^31 - 1], then return 0.
 *
 * Assume the environment does not allow you to store 64-bit integers (signed
 * or unsigned).
 *
 *
 * Example 1:
 *
 *
 * Input: x = 123
 * Output: 321
 *
 *
 * Example 2:
 *
 *
 * Input: x = -123
 * Output: -321
 *
 *
 * Example 3:
 *
 *
 * Input: x = 120
 * Output: 21
 *
 *
 *
 * Constraints:
 *
 *
 * -2^31 <= x <= 2^31 - 1
 *
 *
 */

// * TESTCASE
const x: number = 2147483647;

// @lc code=start
function reverse(x: number): number {
  const limit = {
    min: -2147483648,
    max: 2147483647,
  };
  const xArr = x.toString().split("");
  const xArrR = xArr.toReversed();
  const sign = Number.isInteger(Number(xArr[0]));
  if (!sign) xArrR.unshift("-");
  let out = Number.parseInt(xArrR.join(""));
  if (out > limit.max || out < limit.min) out = 0;
  console.log(out, Math.clz32(out));
  return out;
}
// @lc code=end

reverse(x);

/*
10m01s 1036/1045 cases passed (N/A)
15m31s 1045/1045 cases passed (77 ms)
       Your runtime beats 5.74 % of typescript submissions
       Your memory usage beats 99.13 % of typescript submissions (55.5 MB)

There must be a more elegant solutions...

*/
