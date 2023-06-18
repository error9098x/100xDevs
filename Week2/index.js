const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000
let noofreq = 0;

app.use(bodyParser.json())
function middleware1(req, res, next){
 
    noofreq+=1
    console.log(noofreq)
    next();
}

app.use(middleware1);

function calculateSum(counter) {
    var sum = 0;
    for (var i =0 ; i<=counter; i++) {
        sum = sum + i;
    }
    return sum;
}

function calculateMul(counter) {
    var Mul = 1;
    for (var i =1 ; i<=counter; i++) {
        Mul = Mul * i;
    }
    return Mul;
}


function handleFirstRequest(req, res) {
  var counter = req.body.counter

  var calculatedSum = calculateSum(counter);
  var calculatedMul = calculateMul(counter);

  var answerObject = {
    sum: calculatedSum,
    mul: calculatedMul
  }

  res.status(200).send(answerObject);
}

function createUser(req, res) {
    res.send("hello world");
}
function givepage(req,res){
    var counter = req.query.counter;
    var calculatedSum = calculateSum(counter);

    res.send(`<!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8" />
            <title>Hello</title>
        </head>
        <body>
             <h1>Hi there</h1>
             The Sum = ${calculatedSum}
        </body>
        </html>`)
}
app.post('/handleSum', handleFirstRequest);
app.put('/createUser', createUser);
app.get('/',givepage)
function started() {
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started);
