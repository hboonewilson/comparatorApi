const { test, expect } = require('@jest/globals');
const comparator = require('../comparator')
test('given comparator string: should return new string format', () => {
    expect(comparator.toNewString("[(1,2),(3,4),(1,3),(2,4),(2,3)]"))
      .toEqual("1 -- 2\n3 -- 4\n1 -- 3\n2 -- 4\n2 -- 3\n");
  });

test('given length of comparator is smaller than the list, should return false', () => {
  expect(comparator.compareTheNetwork([1,2,3])).toBe(false);
});

test("given a valid list input to compareTheNetwork, should return list sorted", () => {
  expect(comparator.compareTheNetwork([4,3,2,1])).toEqual([1,2,3,4]);
});
test("given an invalid data type (not list), should throw error", () =>{
  expect(() => comparator.compareTheNetwork("a string")).toThrow();
  expect(() => comparator.compareTheNetwork(1)).toThrow();
})