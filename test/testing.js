const {tryAndSort} = require('../sort/sort')
const {createComparator} = require('../createComparatorNet/createComparator')
//must make the sorting algorithm now.
const testArrays = (compArr) => {
  const [len, comparatorNet] = makeNet(compArr);
  console.log("belo makeNet")
  const onesAndZeros = createOnesAndZeros(len);
  console.log("below createOnesAndZeros")
  for (let i = 0; i < onesAndZeros.length; i++) {
    const lis = onesAndZeros[i];
    let sortedArr = tryAndSort(lis, comparatorNet);
    if(!sortedCorrectly(sortedArr)){ return false }
  }
  return true

}
const sortedCorrectly = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const element1 = arr[i-1];
    const element2 = arr[i];
    if(element1 > element2){return false}
  }
  return true;
}
const createOnesAndZeros = (num) => {
    let arr = [];
    generate(0,0, "", num, arr);
    const finalArr = createNumberArr(arr)
    return finalArr;
}
const createNumberArr = (arrOfStr) => {
    retStr = [];
    arrOfStr.forEach(element => {
        const newElement = element.split("").map(Number);
        retStr.push(newElement);
        
    });
    return retStr;

}
const generate = (ones, zeroes, str, len, arr) => {
    if(len === str.length) {
        arr.push(str)
        return;
    }
    generate(ones + 1, zeroes, str + "1", len, arr);
    if (ones > zeroes) {
    generate(ones, zeroes + 1, str + "0", len, arr);
  }
}
const makeNet = (compStr) => {
  compArr = [];
  const tupleToArray = JSON.parse(compStr
    .replace(/\(/g, '[')
    .replace(/\)/g, ']')
  );
  let max = 0;
  tupleToArray.forEach(comp => {
    compArr.push(createComparator(comp[0]));
    if (comp[0] > max) {max = comp[0]}
    if (comp[1] > max) {max = comp[1]}

  });
  return [max, compArr];
}
module.exports = {createOnesAndZeros, sortedCorrectly, makeNet, testArrays}
