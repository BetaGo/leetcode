const { merge } = require("./56.merge-intervals");

test(`
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
`, () => {
  expect(
    merge([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ])
  ).toEqual([
    [1, 6],
    [8, 10],
    [15, 18],
  ]);
});

test(`
 * Input: intervals = [[1,3]]
 * Output: [[1,3]]
`, () => {
  expect(merge([[1, 3]])).toEqual([[1, 3]]);
});

test(`
 * Input: intervals = [
 * Output: []
`, () => {
  expect(merge([])).toEqual([]);
});
