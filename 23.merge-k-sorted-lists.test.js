const { mergeKLists } = require("./23.merge-k-sorted-lists");
require("./base");

test(`
* Input:
* [
* 1->4->5,
* 1->3->4,
* 2->6
* ]
* Output: 1->1->2->3->4->4->5->6
`, () => {
  let res = createListNodeNumber(65443211);
  expect(
    mergeKLists([
      createListNodeNumber(541),
      createListNodeNumber(431),
      createListNodeNumber(62),
    ])
  ).toEqual(res);
});

test(`
* Input: []
* Output: []
`, () => {
  let res = null;
  expect(mergeKLists([])).toEqual(res);
});

test(`
* Input: [null]
* Output: []
`, () => {
  let res = null;
  expect(mergeKLists([])).toEqual(res);
});

test(`
* Input: [[],[-1,5,11],[],[6,10]]
* Output: [-1,5,6,10,11]
`, () => {
  // TODO:
  // let res = createListNodeNumber();
  // expect(mergeKLists([])).toEqual(res);
});
