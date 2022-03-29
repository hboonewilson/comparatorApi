const {sortArr, createArrFromStr} = require("./sort")
test("[6,5,4,3,2,1] ===> [1,2,3,4,5,6]", () => {
    expect(sortArr([6,5,4,3,2,1])).toEqual([1,2,3,4,5,6])
})
test("'[6,5,4,3,2,1]' ====> [6,5,4,3,2,1]", () =>{
    expect(createArrFromStr('[6,5,4,3,2,1]')).toEqual([6,5,4,3,2,1])
})