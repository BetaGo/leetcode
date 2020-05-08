const { addTwoNumbers } = require("./2.add-two-numbers");
require("./base");

test("0 + 0", () => {
  let a = createListNodeNumber(0);
  let b = createListNodeNumber(0);
  let res = createListNodeNumber(0);
  expect(addTwoNumbers(a, b)).toEqual(res);
});

test("342 + 465", () => {
  let a = createListNodeNumber(342);
  let b = createListNodeNumber(465);
  let res = createListNodeNumber(342 + 465);
  expect(addTwoNumbers(a, b)).toEqual(res);
});

test("15 + 5", () => {
  let a = createListNodeNumber(15);
  let b = createListNodeNumber(5);
  let res = createListNodeNumber(15 + 5);
  expect(addTwoNumbers(a, b)).toEqual(res);
});

test("9 + 1", () => {
  let a = createListNodeNumber(9);
  let b = createListNodeNumber(1);
  let res = createListNodeNumber(9 + 1);
  expect(addTwoNumbers(a, b)).toEqual(res);
});
