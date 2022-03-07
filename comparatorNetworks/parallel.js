
const createParallelLis = (lis) => {
    if(!Array.isArray(lis)){
        throw("not valid input")
    }
    //var retLis
    //lis.map( comp => comp)
}
//take the comparator and insert it into the paralellLis that will allow it
const insertArrIntoParallelLis = (comp, paralellLis) => { 
    var lowWire = comp[0];
    var highWire = comp[1];


    //is there a smarter way to search through [[[]]]? Create a comparator class

    var noValidParalells = true;
    paralellLis.forEach(element => {
        var isValid = true;
        element.forEach(comparator => {
            if(comparator[0] == lowWire || comparator[1] == lowWire ||
               comparator[0] == highWire || comparator[1] == highWire ){
                   isValid = false;
               }
        });
        if(isValid){ 
            noValidParalells = false;
            element.push(comp)
         }
        
    });
    if(noValidParalells){paralellLis.push([comp])}
    return paralellLis;
};
module.exports = {insertArrIntoParallelLis}