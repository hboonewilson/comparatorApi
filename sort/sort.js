const {createComparatorNet} = require('../createComparatorNet/createComparator')
const createArrFromStr = (arrStr) => {
    return JSON.parse(arrStr);
}
const sortArr = (arr) => {
    const comparatorNet = createComparatorNet(arr.length);
    comparatorNet.forEach(comp => {
        const numLow = arr[comp.lo]
        const numHi = arr[comp.hi]
        if (numLow > numHi){
            let mid = arr[comp.lo];
            arr[comp.lo] = arr[comp.hi];
            arr[comp.hi] = mid;
        }
    });
    return arr;
}
const tryAndSort = (arr, compArr) => {
    //used to pass possible sorting arrays in 
    compArr.forEach(comp => {
        const numLow = arr[comp.lo]
        const numHi = arr[comp.hi]
        if (numLow > numHi){
            let mid = arr[comp.lo];
            arr[comp.lo] = arr[comp.hi];
            arr[comp.hi] = mid;
        }
    });
    return arr;
}
module.exports = {sortArr, tryAndSort, createArrFromStr}