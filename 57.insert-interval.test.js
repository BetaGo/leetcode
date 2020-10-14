const { insert } = require("./57.insert-interval");

test(`
Input: inervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
`, () => {
  expect(
    insert(
      [
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16],
      ],
      [4, 8]
    )
  ).toEqual([
    [1, 2],
    [3, 10],
    [12, 16],
  ]);
});

test(`
Input: inervals = [], newInterval = [4,8]
Output: [[4,8]]
`, () => {
  expect(insert([], [4, 8])).toEqual([[4, 8]]);
});

test(`
Input: inervals = [[3,5]], newInterval = [4,8]
Output: [[3,8]]
`, () => {
  expect(insert([[3, 5]], [4, 8])).toEqual([[3, 8]]);
});

test(`
Input: inervals = [[1,4],[3,5]], newInterval = [4,8]
Output: [[1,8]]
`, () => {
  expect(
    insert(
      [
        [1, 4],
        [3, 5],
      ],
      [4, 8]
    )
  ).toEqual([[1, 8]]);
});
