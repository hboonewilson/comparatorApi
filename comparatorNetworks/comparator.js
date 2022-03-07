const { Comparator, Network } = require('./objects/comparatorNetworkObject');
const  toNewString = function(str){
    var tupArr =  tupleToArray(str);
    var retArr = ''
    tupArr.forEach(element => {
        retArr += `${element[0]} -- ${element[1]}\n`
    });
    return retArr;
}

const compareTheNetwork = function(lis){
    //the place holder for now.
    var comparatorNetwork = new Network("[(1,2),(3,4),(1,3),(2,4),(2,3)]")
    if(!Array.isArray(lis)){
        throw "list passed isn't an array";
    }

    if(comparatorNetwork.theTopWire > lis.length){
        return false;
    }
    else{
        compLis = comparatorNetwork.compArr
        for (let i = 0; i < compLis.length; i++) {
            const comp = compLis[i];

            let lowWire = comp.lowWire - 1
            let highWire = comp.highWire - 1;
            
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
module.exports = {toNewString, compareTheNetwork, stringToArray, tupleToArray}
