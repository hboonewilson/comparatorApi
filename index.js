const { response } = require('express')
const express = require('express')
const { json } = require('express/lib/response')
const comparatorNetworks = require('./comparatorNetworks')
const paralell = require('./comparatorNetworks/parallel')
const app = express();
const PORT = process.env.PORT || 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/sort', (req, res) => {
  try {
    let arr = JSON.parse(req.query.arr)
    let newLis = comparatorNetworks.compareTheNetwork(arr)

    if(!newLis){ 
      res.send("List is too small for sorting with comparator")
    }
    else { res.send(newLis) }

  } catch (error) {
    res.send("send with valid argument: arr=[a,b,c]")
  }
})
app.get('/parallel', (req, res) => {
  let arr = comparatorNetworks.tupleToArray(req.query.arr);

})
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
paralell.insertArrIntoParallelLis([1,2], [[[1,2],[2,3]],[3,4]])


//https://comparator-api.herokuapp.com/