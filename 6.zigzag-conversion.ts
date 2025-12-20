/*
 * @lc app=leetcode id=6 lang=typescript
 *
 * [6] Zigzag Conversion
 */

// * TESTCASE
const s = "ABCD";
const numRows = 2;

// @lc code=start
function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  const sArr = s.split("");
  interface resObj {
    y: number;
    x: number;
    v: string;
  }
  let resArr: resObj[] = [];
  let y: number = 0;
  let x: number = 0;
  let zag = false;
  sArr.forEach((v) => {
    if (!zag) {
      resArr.push({ y, x, v });
      if (y % numRows === numRows - 1) {
        zag = !zag;
        y--;
        x++;
      } else y++;
    } else {
      resArr.push({ y, x, v });
      if (y === 0) {
        zag = !zag;
        y++;
      } else {
        y--;
        x++;
      }
    }
  });
  let out: string = "";
  resArr.sort((a, b) => a.y - b.y);
  resArr.forEach((v) => {
    out = out.concat(v.v);
  });
  console.log(out);
  return out;
}
// @lc code=end

convert(s, numRows);

/*
57m49s    1071/1157 cases passed (N/A)
58m35s    1114/1157 cases passed (N/A)
01h02m16s 1157/1157 cases passed (25 ms)
          Your runtime beats 18.05 % of typescript submissions
          Your memory usage beats 24.27 % of typescript submissions (63 MB)
*/
