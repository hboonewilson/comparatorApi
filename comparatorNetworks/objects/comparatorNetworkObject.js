class Comparator {
    constructor(comp){
        this.lowWire = comp[0];
        this.highWire = comp[1];
    }
    
}

class Network {
    constructor(compLis){
        var arr = tupleToArray(compLis);
        this.theTopWire = findHighestWire(arr); 
    
        this.compArr = []
        arr.forEach(element => {
            var comp = new Comparator(element);
            this.compArr.push(comp);
        });
    }
}
const tupleToArray = (tuple) => {
    return JSON.parse(tuple
        .replace(/\(/g, '[')
        .replace(/\)/g, ']'));
    };
const findHighestWire = (lis) => {
    var highestWire = 0;
    for (let i = 0; i < lis.length; i++) {
        var wireOne = lis[i][0];
        var wireTwo = lis[i][1];
        
        if (wireOne > highestWire){ highestWire = wireOne}
        if (wireTwo > highestWire){ highestWire = wireTwo}
    }
    return highestWire;
}
module.exports = {Network, Comparator}