/**
 * Comparator Object is an object with two wires. (lo, hi) 
 * lo and hi are used to compare numbers on the lo wire and the hi wire
 */
class Comparator{
    constructor(low, high){
        this.lo = low - 1;
        this.hi = high - 1;
    }
}
module.exports = Comparator;