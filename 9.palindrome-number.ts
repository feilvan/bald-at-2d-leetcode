/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    let result = true;
    for (let i = 0; i < x.toString().length / 2; i++) {
        if (x.toString()[i] !== x.toString()[x.toString().length - 1 - i]) {
            result = false;
            break;
        }
    }
    return result;
}
// @lc code=end
