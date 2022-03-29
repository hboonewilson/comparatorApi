const { response } = require('express')
const express = require('express');
const res = require('express/lib/response');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000
const {createReturnString} = require('./createComparatorNet/createComparator')
const {testArrays} = require('./test/testing')
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})
const mockReturn = {
  "comparatorData" : [
    {
      "name" : "sort",
      "endPoint" : "/sort",
      "input" : "Unsorted Array ([4,5,8,1,10,15])",
      "output" : "Sorted input Array ([1,4,5,8,10,15])",
      "description" : "ABCDEFGHIJKLMNOPQRSTUV",
      "isActive" : true
    },
    {
      "name" : "parallel",
      "endPoint" : "/parallel",
      "input" : "Comparator Network not in paralell",
      "output" : "Comparator Network in parallel",
      "description" : "YOYoYO",
      "isActive" : false
    },
    {
      "name" : "create",
      "endPoint" : "/create",
      "input" : "Number n",
      "output" : "Parallel Comparator Network to sort Array of n elements",
      "description" : "YOYoYO",
      "isActive" : true
    },
    {
      "name" : "test",
      "endPoint" : "/test",
      "input" : "Network",
      "output" : "True/False on if comparator network input Network is a comparator network",
      "description" : "YOYoYO",
      "isActive" : true
    }
  ]
}
let numberCalls = 0;
app.get('/number', (req, res) => {
  try{
    console.log(numberCalls);
    numberCalls += 1;
    res.json(mockReturn);
  }
  catch (error){
    console.log(error);
  }
})

app.get('/create', (req, response) => {
  try {
    if(!req.query.number){throw "No number argument!"}
    const responseArr = createReturnString(parseInt(req.query.number));
    response.send(responseArr);
  }
  catch(e) {
    response.send(e);
  }
})
app.get('/test', (req, res) => {
  try {
    if(!req.query.number){throw "No compNet argument"}
    const yesOrNo = testArrays(req.query.number);
    res.send(yesOrNo);
  }
  catch(e) {
    response.send(e);
  }
})
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})


//https://comparator-api.herokuapp.com/
