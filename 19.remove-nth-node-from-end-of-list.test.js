const { removeNthFromEnd } = require("./19.remove-nth-node-from-end-of-list");
require("./base");

//[1,2]
// 2
// [2]

test('1 -> 2, and n = 2 => 2', () => {
  const res = createListNodeNumber(2);
  expect(
    removeNthFromEnd(
      createListNodeNumber(21),
      2
    )
  ).toEqual(res);
})

test('1 -> 2, and n = 1 => 1', () => {
  const res = createListNodeNumber(1);
  expect(
    removeNthFromEnd(
      createListNodeNumber(21),
      1
    )
  ).toEqual(res);
})

test('1->2->3->4->5, and n = 2 => 1->2->3->5', () => {
  const res = createListNodeNumber(5321);
  expect(
    removeNthFromEnd(
      createListNodeNumber(54321),
      2
    )
  ).toEqual(res);
});

//[1,2]
// 1
test('1, and n = 2 => null', () => {
  const res = null;
  expect(
    removeNthFromEnd(
      createListNodeNumber(1),
      2
    )
  ).toEqual(res);
});