const Comparator = require('../comparatorObjects/comparator')
const {createOnesAndZeros,  sortedCorrectly, makeNet, testArrays} = require('./testing')

test("create array of 1111  1110  1101  1100  1011  1010 from createOnesAndZeros(4)", () =>{
    const expected = [[1,1,1,1],[1,1,1,0],[1,1,0,1],[1,1,0,0],[1,0,1,1],[1,0,1,0]]
    expect(createOnesAndZeros(4)).toEqual(expected)
})
test("sorted correctly should return true as long as the next item isn't smaller than last and viceversa", () => {
    expect(sortedCorrectly([1,2,3,4,5,5])).toBe(true);
    expect(sortedCorrectly([1,2,2,3,4])).toBe(true);
    expect(sortedCorrectly([5,2])).toBe(false);
})
test("makeNet() should create valid comparator array", () => {
    expect((makeNet("[(1,2),(2,3)]"))).toEqual([3, [new Comparator(1, 2), new Comparator(2,3)]])
})
test("given valid compNet testArrays() should return true and false if not", () => {
    expect(testArrays("[(1,2),(2,3),(1,2),(3,4),(2,3),(1,2)]")).toBe(true);
    expect(testArrays("[(1,2),(2,3),(1,2),(5,6),(2,3),(1,2)]")).toBe(false);
    expect(testArrays("[(1,2),(7,8)]")).toBe(false);


})