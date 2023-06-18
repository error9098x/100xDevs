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

function handleFirstRequest(req, res) {

    var counter = req.body.counter;
    console.log(req.body)
    var calculatedSum = calculateSum(counter);

    var answer = "the sum is " + calculatedSum;
    res.set('X-My-Header', 'custom header value');
    res.send(answer);
}

function createUser(req, res) {
    res.send("hello world");
}

app.post('/handleSum', handleFirstRequest);
app.put('/createUser', createUser);

function started() {
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started);
