/**
  Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k),
  where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h.
  Write an algorithm to reconstruct the queue.

  Note:
  The number of people is less than 1,100.

  Example

  Input:
  [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

  Output:
  [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
 */

const input0 = [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]];
const input1 = [[9,0],[7,0],[1,9],[3,0],[2,7],[5,3],[6,0],[3,4],[6,2],[5,2]];
const output0 = [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]];

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  people.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return b[0] - a[0];
    }
  });
  // people.sort((a, b) => a[1] - b[1]);
  for ( let i = 0; i < people.length; i++ ) {
    if ( people[i][1] !== i) {
      let index = people[i][1];
      let specPerson = people.splice(i, 1)[0];
      people.splice(index, 0, specPerson);
    }
  }
  return people;
};

console.log(reconstructQueue(input1));

