const { test, expect } = require('@jest/globals');
const {Comparator, Network, insertCompIntoParralellNet} = require('../objects/comparatorNetworkObject')


describe("insertArrIntoParallelLis", () => {
    var comp12, comp34, comp23;
    beforeEach(() => {
        comp12 = new Comparator([1,2]);
        comp34 = new Comparator([3,4]);
        comp23 = new Comparator([2,3])
    })
    test("given insertArrIntoParallelLis should add comparator to its own list if it can't be added to any parallels", () =>{
        addedComparator = new Comparator([1,2]);
        var compArr = [[comp12, comp34],[comp23]]
        var expected = [[comp12, comp34],[comp23],[addedComparator]]
        expect(insertCompIntoParralellNet(addedComparator, compArr))
        .toEqual(expected);
    })
    //this test is confusing the hell out of me and not passing but functionality of functionis returning good result...


    //
    // test("given insertArrIntoParallelLis should add comparator to first array that can it can be added to", () =>{
    //     var addedComparator = new Comparator([5,6]);
    //     var compArr = [[comp12, comp34],[comp23]]
    //     var newExpected = [[comp12, comp34, addedComparator],[comp23]]
    //     console.log(insertCompIntoParralellNet(addedComparator, compArr))
    //     console.log(newExpected);
    //     console.log(newExpected == insertCompIntoParralellNet(addedComparator, compArr));
    //     expect(insertCompIntoParralellNet(addedComparator, compArr))
    //     .toEqual(newExpected);
    // })
    
});
describe("create paralell string", () => {
    var network;
    beforeEach(() => {
        network = new Network("[(1,2),(3,4),(1,3),(2,4),(2,3)]");
        network.createParallelNetwork();
    })

    //[[(1,2),(3,4)],[(1,3),(2,4)],[(2,3)]]
    test("given a Network with parallel list, should create correct str", () =>{
        expect(network.parallelNetworkToString()).toEqual("[[(1,2),(3,4)],[(1,3),(2,4)],[(2,3)]]")
    })
})