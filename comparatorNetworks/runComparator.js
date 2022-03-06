
const findHighestWire = function(lis){
    var highestWire = 0;
    for (let i = 0; i < lis.length; i++) {
        var wireOne = lis[i][0];
        var wireTwo = lis[i][1];
        
        if (wireOne > highestWire){ highestWire = wireOne}
        if (wireTwo > highestWire){ highestWire = wireTwo}
    }
    return highestWire;
}
module.exports = {findHighestWire}