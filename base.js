function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createListNodeNumber(n) {
  const arr = String(n)
    .split("")
    .map((v) => Number(v));
  let first = arr.shift();
  let l = arr.reduce((a, b) => new ListNode(b, a), new ListNode(first));
  return l;
}

global.ListNode = ListNode;
global.createListNodeNumber = createListNodeNumber;

// module.exports = {
//   ListNode,
// };
