const Comparator = require('../comparatorObjects/comparator')
const {createSubArray} = require('./parallel')

const comp12 = new Comparator(1,2);
const comp23 = new Comparator(2,3);
const comp34 = new Comparator(3,4);
const comp45 = new Comparator(4,5);
test("given subArray(arr) should return subArray of arr while arr[0].hi != arr[1].lo", () => {
    const compArr = [comp12, comp45, comp34, comp23, comp12, comp45]
    const expected = [comp45, comp34]
    expect(createSubArray(compArr)).toEqual(expected) 
})