const express = require('express')
const app = express()
const port = 3000

function calsum(x){
    sum = 0
    for( i = 0 ; i<= x;i++){
        sum+=i
    }
    return sum
}

function handlerequest(req,res){
    var calculatedsum = calsum(100);
    console.log(calculatedsum)
    var ans = "the sum is "+calculatedsum;
    res.send(ans)

}
app.get('/', handlerequest)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


calculatedsum = calsum(10)