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
