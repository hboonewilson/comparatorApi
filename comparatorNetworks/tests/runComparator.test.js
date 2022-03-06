const { test, expect } = require('@jest/globals');
const runComparator = require('../runComparator');

test("given array of tuples, should return the higest number", ()=>{
    expect(runComparator.findHighestWire([ [ 1, 2 ], [ 3, 4 ], [ 1, 3 ], [ 2, 4 ], [ 2, 3 ] ]))
    .toBe(4)
});