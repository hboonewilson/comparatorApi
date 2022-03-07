const { Network, Comparator } = require("../objects/comparatorNetworkObject");

describe("Comparator Class Check", () => {
    var comparator;
    beforeEach(() => {
        comparator = new Comparator([1,2]);
      });

    test("Given constructing comparator, should return correct high and low wire", () => {
        expect(comparator.lowWire).toBe(1);
        expect(comparator.highWire).toBe(2);

    })
})
describe("Network Class Check", () => {
    var comp1;
    var comp2;
    var comp3;

    var network;
    
    beforeEach(() => {
        comp1 = new Comparator([1,2]);
        comp2 = new Comparator([3,4]);
        comp3 = new Comparator([2,4]);


        network = new Network("[(1,2), (3,4), (2,4)]")
    })
    test("Given constructing a Network, should create a list of Comparators and set the highest wire", () => {
        expect(network.theTopWire).toBe(4);
        expect(network.compArr).toEqual([comp1, comp2, comp3])
    })
})