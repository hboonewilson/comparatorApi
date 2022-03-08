
const createParallelLis = (lis) => {
    if(!Array.isArray(lis)){
        throw("not valid input")
    }
    //var retLis
    //lis.map( comp => comp)
}
// //take the comparator and insert it into the paralellLis that will allow it
// const insertArrIntoParallelLis = (comp, arrayOne) => { 
//     var highWire = comp.highWire;
//     var lowWire = comp.lowWire;
//     var hasBeenInserted = false;
//     //arrayOne has another nested array inside 
//     //array two is the nested array and contains the comparators that can be run in paralell.
//     arrayOne.forEach(arrayTwo => {
//         var canBeInArrayTwo = true;
//         arrayTwo.forEach(comparator => {
//             if ( highWire == comparator.highWire || lowWire == comparator.highWire ||
//                 highWire == comparator.lowWire || lowWire == comparator.lowWire ) {
//                     canBeInArrayTwo = false;
//                 }
//         });
//         if(canBeInArrayTwo && !hasBeenInserted) { 
//             arrayTwo.push(comp) 
//             hasBeenInserted = true;
//         }

//     });
//     if(!hasBeenInserted) {
//         arrayOne.push([comp])
//     }
//     return arrayOne;
// };
module.exports = {}