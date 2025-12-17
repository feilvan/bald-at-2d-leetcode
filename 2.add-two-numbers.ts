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

const lt1: ListNode = {
  val: 1,
  next: {
    val: 0,
    next: {
      val: 0,
      next: {
        val: 0,
        next: {
          val: 0,
          next: {
            val: 0,
            next: {
              val: 1,
              next: null,
            },
          },
        },
      },
    },
  },
};
const lt2: ListNode = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null,
    },
  },
};

// @lc code=start
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null | number[] {
  const temp1: number[] = [];
  const temp2: number[] = [];

  function listToFlipNum(from: ListNode | null, to: number[]) {
    if (from) {
      listToFlipNum(from.next, to);
      to.push(from.val);
    }
  }

  listToFlipNum(l1, temp1);
  listToFlipNum(l2, temp2);

  let str1: string = "";
  let str2: string = "";
  temp1.forEach((v) => {
    str1 += String(v);
  });
  temp2.forEach((v) => {
    str2 += String(v);
  });

  const resStr = String(Number(str1) + Number(str2)).split(""); // OK
  const resNum: number[] = []; // OK
  const resList: ListNode = new ListNode();

  resStr.forEach((v) => {
    resNum.push(Number(v));
  });

  function numToFlipList(to: ListNode) {
    to.val = resNum[resNum.length - 1];
    console.log(resNum);
    resNum.pop();
    if (resNum.length >= 1) {
      to.next = new ListNode();
      numToFlipList(to.next);
    }
  }
  numToFlipList(resList);

  console.log(Object(resList));

  return resList;
}
// @lc code=end

addTwoNumbers(lt1, lt2);

/*
! Optimize
Runtime error with this testcase:
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
[5,6,4]

Possible fix:
handle only until (l2.length + 1 ) length

*/
