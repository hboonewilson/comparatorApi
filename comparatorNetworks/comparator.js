const runComparator = require('./runComparator')
const  toNewString = function(str){
    var tupArr =  tupleToArray(str);
    var retArr = ''
    tupArr.forEach(element => {
        retArr += `${element[0]} -- ${element[1]}\n`
    });
    return retArr;
}

const compareTheNetwork = function(lis){

    var comparatorNetwork = [ [ 1, 2 ], [ 3, 4 ], [ 1, 3 ], [ 2, 4 ], [ 2, 3 ] ]

    if(!Array.isArray(lis)){
        throw "list passed isn't an array";
    }

    if(runComparator.findHighestWire(comparatorNetwork) > lis.length){
        return false;
    }
    else{
        for (let i = 0; i < comparatorNetwork.length; i++) {
            const element = comparatorNetwork[i];

            let lowWire = element[0] - 1;
            let highWire = element[1] - 1;
            
            if (lis[lowWire] > lis[highWire]){
                let mid = lis[lowWire];
                lis[lowWire] = lis[highWire]
                lis[highWire] = mid 
            }
        }
        return lis 
    }
};

const stringToArray = function(arr){
    return JSON.parse(arr)
}
const tupleToArray = function(tuple){
    return JSON.parse(tuple
        .replace(/\(/g, '[')
        .replace(/\)/g, ']'));
    };


//console.log(stringToArray("[1,2,3,4,5]"))
module.exports = {toNewString, compareTheNetwork, stringToArray}
