/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// * TESTCASE
const t = "babad";
// @lc code=start
function longestPalindrome(s: string): string {
  const sArr = s.split("");
  let longest: string[] = [];
  let palindromes: string[][] = [];
  let current: string[] = [];

  function checkNeighbors(s: string[]): string[] {
    let res: string[] = [];
    if (s[0] === s[s.length - 1]) {
      res.concat(s);
      return res;
    }
    if (s.length === 3) {
      if (s[1] === s[0]) {
        res.push(s[0], s[1]);
        return res;
      }
      if (s[1] === s[2]) {
        res.push(s[1], s[2]);
        return res;
      }
      return [s[1]];
    }
    return s;
  }

  sArr.forEach((v, i, r) => {
    /*
    * AN ENGLIGHTENMENT
    for each,
    check left and right
    
      if both same, then palindrome (odd substring length)
      if (left || right) === v, also palindrome (even substring length)
    further check left and right
    * END OF ENGLIGHTENMENT
    */
    let subs: string[] = [];
    let curLen: number = 0;
    if (i !== 0 && i !== r.length) {
      subs.push(r[i - 1], r[i], r[i + 1]);
      subs = checkNeighbors(subs);
      curLen = subs.length;
    }
    if (subs.length > longest.length) {
      longest = [];
      longest.concat(subs);
    }
    if (subsRes.length > 1) {
      subsRes = checkNeighbors(subs);
    }
  });
  let out = "";
  out = longest.join();
  return out;
}
// @lc code=end
longestPalindrome(t);

/*
57m57s
31m58s
*/
