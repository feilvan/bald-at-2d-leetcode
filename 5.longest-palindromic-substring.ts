/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// * TESTCASE
const t = "aaaa";
// @lc code=start
function longestPalindrome(s: string): string {
  if (s.length === 1) return s;

  interface subsIndex {
    start: number;
    finish: number;
  }
  const sArr = s.split("");
  let longest: subsIndex = { start: 0, finish: 0 };

  function checkNeighbors(start: number, finish: number): subsIndex {
    // palindrome
    if (sArr[start] === sArr[finish]) return { start, finish };
    // initial loop
    if (finish - start === 2) {
      // palindrome left & middle
      if (sArr[start] === sArr[start + 1]) return { start, finish: start + 1 };
      // palindrome middle & right
      if (sArr[start + 1] === sArr[finish]) return { start: start + 1, finish };
    }
    // not palindrome
    return { start: start + 1, finish: finish - 1 };
  }

  sArr.forEach((v, i, r) => {
    let subs: subsIndex = { start: 0, finish: 0 };
    let start = Math.max(0, i - 1);
    let finish = Math.min(r.length - 1, i + 1);
    let res = checkNeighbors(start, finish);
    console.log(i, res);
    while (subs.finish - subs.start < res.finish - res.start) {
      res = checkNeighbors(start, finish);
      subs = { start: res.start, finish: res.finish };
      console.log(i, res);
    }
    subs = { start: res.start, finish: res.finish };
    console.log(i, res);
    if (subs.finish - subs.start > longest.finish - longest.start)
      longest = { start: subs.start, finish: subs.finish };
  });
  const out: string = sArr.slice(longest.start, longest.finish + 1).join("");
  // console.log(out);
  return out;
}
// @lc code=end
longestPalindrome(t);

/*
137m07s 26/143 cases passed (N/A)
        (i'm tired. looks like i can't solve this. i feel so dumb.)
*/
