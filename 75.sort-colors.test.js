const { sortColors } = require("./75.sort-colors");

test(`
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
`, () => {
  let nums = [2, 0, 2, 1, 1, 0];
  sortColors(nums);
  expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
});
