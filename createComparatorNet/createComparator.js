const Comparator = require("../comparatorObjects/comparator")

const createComparatorNet = (num) => {
    let arr = [];
    for(let i = 1; i <= num; i++){
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
    return arr
}
const createComparator = (bottomWire) => {
    return new Comparator(bottomWire, bottomWire+1)
}
const createReturnString = (num) => {
    const net = createComparatorNet(num);
    retStr = '[';
    for (let i = 0; i < net.length; i++) {
        const comparator = net[i];
        let lo = comparator.lo+1; 
        let hi = comparator.hi+1;
        let addStr;
        (i<net.length-1) ? addStr = `(${lo},${hi}),` : addStr = `(${lo},${hi})`
        retStr += addStr;
    }
    net.forEach(comparator => {
        
    });
    return retStr+="]";
}
module.exports = {createComparator, createComparatorNet, walkDownFunc, createReturnString}