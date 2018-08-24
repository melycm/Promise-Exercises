let express = require('express');
let app = express();
var fs = require('fs');

// 4)
var x = 5
var y = 6
function sum (x, y){
    Promise.all([x, y])
    .then(function(response) {
        console.log(response[0] + response[1]);
    }).catch(function (error) { 
        console.log(error); 
  });
}

sum(x,y)

app.listen(3000);