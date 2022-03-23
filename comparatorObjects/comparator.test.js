const Comparator = require('./comparator');
describe("Tests for comparator", () => {
    test("test object is created and lo and hi are set properly to be one lower than passed in", () => {
        const comp = new Comparator(4,5);
        expect(comp.lo).toBe(3);
        expect(comp.hi).toBe(4);        
    })
    

})