const { response } = require('express')
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000

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
      "isActive" : false
    },
    {
      "name" : "test",
      "endPoint" : "/test",
      "input" : "Network",
      "output" : "True/False on if comparator network input Network is a comparator network",
      "description" : "YOYoYO",
      "isActive" : false
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


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})


//https://comparator-api.herokuapp.com/
