const Comparator = require("../comparatorObjects/comparator")

const createSubArray = (arr) => {
    retArr = [];
    index = 1;
    let evaluateComparator = arr[index];
    while(index < arr.length-1 && arr[0].hi != evaluateComparator.lo ){
        retArr.push(evaluateComparator);
        index += 1;
        evaluateComparator = arr[index];
    }
    return retArr;
}
const compressedSegement = (arr) => {
    let compressComp = [];
    let subArr = createSubArray(arr);
    let firstElement = arr.shift();
    compressComp.push(firstElement);
    
}
const dealWithSubArr = (arr, subArr, compressComp) => {
    for (let i = 0 ; i < arr.length ; i++){

    }
}
//take first comparator out to compare
//create subArr from old arr
//create new Arr with first comparator in it
// add elelments from subArr to new Arr WHILE THEY STILL FIT
// removing those elements that were added to new arr from the old arr

module.exports = {createSubArray}