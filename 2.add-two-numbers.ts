/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// * TESTCASE
const test1 = [9, 9, 9, 9, 9, 9, 9];
const test2 = [9, 9, 9, 9];
const lt1 = new ListNode();
const lt2 = new ListNode();

function numArrToList(from: number[], to: ListNode) {
  to.val = from[from.length - 1];
  from.pop();
  if (from.length >= 1) {
    to.next = new ListNode();
    numArrToList(from, to.next);
  }
}

numArrToList(test1.reverse(), lt1);
numArrToList(test2.reverse(), lt2);

// @lc code=start
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null | number[] {
  const l3: ListNode = new ListNode();
  let remainder = 0;
  function fill(l1: ListNode | null, l2: ListNode | null, l3: ListNode) {
    const n1 = l1?.val || 0;
    const n2 = l2?.val || 0;
    const res = n1 + n2 + remainder;
    remainder = 0;
    l3.val = res % 10;
    if (res >= 10) remainder = 1;
    if (l1?.next || l2?.next || remainder === 1) {
      l3.next = new ListNode();
      fill(l1?.next || null, l2?.next || null, l3.next);
    }
  }
  fill(l1, l2, l3);
  console.log(l3);
  return l3;
}
// @lc code=end

addTwoNumbers(lt1, lt2);

/*
Accepted
1569/1569 cases passed (70 ms)
Your runtime beats 5.48 % of typescript submissions
Your memory usage beats 5.31 % of typescript submissions (65.7 MB)
*/
