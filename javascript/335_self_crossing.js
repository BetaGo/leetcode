/**
 * You are given an array x of n positive numbers.
 * You start at point (0,0) and moves x[0] metres to the north, then x[1] metres to the west, x[2] metres to the south, x[3] metres to the east and so on.
 * In other words, after each move your direction changes counter-clockwise.

  Write a one-pass algorithm with O(1) extra space to determine, if your path crosses itself, or not.

  Example 1:
  Given x = 
  [2, 1, 1, 2]
  ,
  ?????
  ?   ?
  ???????>
      ?

  Return true (self crossing)
  Example 2:
  Given x = 
  [1, 2, 3, 4]
  ,
  ????????
  ?      ?
  ?
  ?
  ?????????????>

  Return false (not self crossing)
  Example 3:
  Given x = 
  [1, 1, 1, 1]
  ,
  ?????
  ?   ?
  ?????>

  Return true (self crossing)
 */

/**
 * @param {number[]} x
 * @return {boolean}
 */
var isSelfCrossing = function (x) {
  let [b, c, d, e, f] = [0, 0, 0, 0, 0];
  for (let a of x) {
    // if ((d >= b) && ((a >= c) || ((a >= c - e) && (d <= b + f)))) {
    //   return true;
    // }
    // console.log(a, b, c, d, e, f);
    if (c > 0 && d > 0) {
      if (a >= c && d >= b) {
        return true;
      }
      if ( d >=b && c >= e && a + e >= c && b + f >= d ) {
        return true;
      }
    }
    f = e;
    e = d;
    d = c;
    c = b;
    b = a;
  }
  // console.log(a,b,c,d,e,f);
  return false
}


/**
 * @param {number[]} x
 * @return {boolean}
 */
/*
var isSelfCrossing = function (x) {
  if (x.length < 4) {
    return false;
  }
  let counter = 1;
  let north = 0;
  let west = 0;
  let south = 0;
  let east = 0;
  for (let i = 0; i < x.length; i++) {
    switch (counter) {
      case 1:
        north = north + x[i];
        counter = counter + 1;
        break;
      case 2:
        west = west + x[i];
        counter = counter + 1;
        break;
      case 3:
        south = south + x[i];
        counter = counter + 1;
        break;
      case 4:
        east = east + x[i];
        counter = 1;
        break;
      default:
        break;
    }
  }
  console.log(north, west, south, east);
  if ((north >= south) && (east >= west)) {
    return true;
  }
  return false;
};
*/

let input0 = [2, 1, 1, 2] // true
let input1 = [1, 2, 3, 4] // false
let input2 = [1, 1, 1, 1] // true
let input3 = [1, 2, 2, 3, 4] // false
let input4 = [1, 1, 2, 1, 1] // true
let input5 = [3, 3, 4, 2, 2] // false
let input6 = [3,3,3,2,1,1] // false

console.log(isSelfCrossing(input0));
console.log(isSelfCrossing(input1));
console.log(isSelfCrossing(input2));
console.log(isSelfCrossing(input3));
console.log(isSelfCrossing(input4));
console.log(isSelfCrossing(input5));
console.log(isSelfCrossing(input6));