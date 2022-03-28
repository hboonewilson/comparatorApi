const Comparator = require('../comparatorObjects/comparator');
const {createComparator, createComparatorNet, walkDownFunc, createReturnString} = require('./createComparator')
describe("Testing createComparator functions", () => {
    const comp12 = new Comparator(1,2);
    const comp23 = new Comparator(2,3);
    const comp34 = new Comparator(3,4);
    const comp45 = new Comparator(4,5);
    const comp56 = new Comparator(5,6);

    test("given createComparator(bottomWire), should return Comparator(bottomwire, bottomwire+1)",() =>{
        expect(createComparator(1)).toEqual(new Comparator(1,2));
    } )
    test("given walkDownFunc(arr, n) should append comparators from (num-1, num) to (1,2)", () =>{
        const expectArr = [comp45, comp34, comp23, comp12];
        expect(walkDownFunc([], 5)).toEqual(expectArr)
    })
    test("given walkDownFunc(arr, n) should return in num is 1)", () =>{
        expect(walkDownFunc([], 1)).toBe(null)
    })
    test("given creatComparatorNet(num) should return comparator net of size num", () => {
        const expected = [comp12, comp23, comp12, comp34, comp23, comp12, comp45,
            comp34, comp23, comp12, comp56, comp45, comp34, comp23, comp12];
            //, new Comparator(1,2)];
        const actual = createComparatorNet(6);
        expect(actual).toEqual(expected);
    })
    test("given createReturnString(arrayOfObjects) should return array of objects in form of Object{hi:x,lo:y} = (x,y)", 
    () => {
        const expected = "[(1,2),(2,3),(1,2),(3,4),(2,3),(1,2),(4,5),(3,4),(2,3),(1,2),(5,6),(4,5),(3,4),(2,3),(1,2)]";
        const actual = createReturnString(6)
        expect(actual).toEqual(expected);
    })
    
})