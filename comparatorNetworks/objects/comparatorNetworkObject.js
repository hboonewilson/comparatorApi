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
    createParallelNetwork() {
        var arr = []
        this.compArr.forEach(element => {
            insertCompIntoParralellNet(element, arr);
        });
        this.parallelNetwork = arr;
        return arr;
    }
    parallelNetworkToString(){
        var comparatorStr = '[';
        var comparatorArr = this.parallelNetwork;
        for (let i = 0; i < comparatorArr.length; i++) {
            let list = comparatorArr[i];
            comparatorStr += '[';
            for (let j = 0; j < list.length; j++) {
                const comparator = list[j];
                comparatorStr += `(${comparator.lowWire},${comparator.highWire}`;
                j < list.length-1 ? comparatorStr += ")," : comparatorStr += ")";
            }
            i < comparatorArr.length - 1 ? comparatorStr += "]," : comparatorStr += "]";
        }
        comparatorStr += "]";
        return comparatorStr;
    }
    

}
const insertCompIntoParralellNet = (comp, arrayOne) => {
    var highWire = comp.highWire;
    var lowWire = comp.lowWire;
    var wasInserted = false;
    //console.log("arrayOne", arrayOne);
    //arrayOne has another nested array inside 
    //array two is the nested array and contains the comparators that can be run in paralell.
    for (let i = 0; i < arrayOne.length; i++) {
        var arrayTwo = arrayOne[i];
        var canBeInArrayTwo = true;
        for (let j = 0; j < arrayTwo.length; j++) {
            const comparator = arrayTwo[j];
                if ( highWire == comparator.highWire || lowWire == comparator.highWire ||
                    highWire == comparator.lowWire || lowWire == comparator.lowWire ) {
                        canBeInArrayTwo = false;
                    }
    
        if(canBeInArrayTwo) { 
            arrayTwo.push(comp) 
            //console.log("returning array One", arrayOne);
            wasInserted = true;
            return arrayOne;
            
            }
        }
    }

    if(!wasInserted) {
        arrayOne.push([comp])
    }
    return arrayOne;
};
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

module.exports = {Network, Comparator, insertCompIntoParralellNet}