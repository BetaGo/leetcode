#!/usr/bin/python3
# -*- coding: utf-8 -*-

"""
    Suppose you have a random list of people standing in a queue.Each person is described by a pair of integers (h, k),
    where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h.
    Write an algorithm to reconstruct the queue.

    Note:
    The number of people is less than 1,100.

    Example

    Input:
    [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

    Output:
    [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
"""

input0 = [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
input1 = [[9,0],[7,0],[1,9],[3,0],[2,7],[5,3],[6,0],[3,4],[6,2],[5,2]]
output0 = [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]

class Solution(object):
    def reconstructQueue(self, people):
        """
        :type people: List[List[int]]
        :rtype: List[List[int]]
        """
        people.sort(key=lambda x: x[1])
        people.sort(key=lambda x: x[0], reverse=True)
        for i in range(len(people)):
            if people[i][1] != i:
                index = people[i][1]
                left = people[:index]
                right = people[index:]
                right.remove(people[i])
                people = left + [people[i]] + right
        return people

solution = Solution()
s_output0 = solution.reconstructQueue(input0)
s_output1 = solution.reconstructQueue(input1)
print(s_output1)
        