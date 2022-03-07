const { test, expect } = require('@jest/globals');
const parallel = require('../parallel');

describe("createParallelLis", () => {
    test('should throw exception when not valid list', () =>{
        expect(() => parallel.createParallelLis("hello")).toThrow();
        expect(() => parallel.createParallelLis(12)).toThrow();
    });
});
describe("insertArrIntoParallelLis", () => {
    test("given insertArrIntoParallelLis should add comparator to correct lis", () =>{

        expect(parallel.insertArrIntoParallelLis([1,2], [[[2,3],[4,5]],[[2,4]]]))
        .toEqual([[[2,3],[4,5]],[[2,4]],[[1,2]]])

        expect(parallel.insertArrIntoParallelLis([8,9], [[[2,3],[4,5]],[[2,4]]]))
        .toEqual([[[2,3],[4,5],[8,9]],[[2,4]],[[1,2]]])
    })
});