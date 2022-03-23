const Comparator = require("../comparatorObjects/comparator")

const createComparatorNet = (num) => {
    let arr = [];
    for(let i = 1; i<= num; i++){
        walkDownFunc(arr, i);
    }
    //arr.reverse();
    return arr;
}
const walkDownFunc = (arr, num) => {
    if(num == 1){return null}
    for(let i = 1; i < num; i++){
        lowWire = num - i;
        arr.push(createComparator(lowWire))
    }
    return arr;
}
const createComparator = (bottomWire) => {
    return new Comparator(bottomWire, bottomWire+1)
}
module.exports = {createComparator, createComparatorNet, walkDownFunc}