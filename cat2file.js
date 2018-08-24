let express = require('express');
let app = express();
var fs = require('fs');
var concat = require('concat-files');

// 3)
inputFile1 = 'hello.txt';
inputFile2 = 'world.txt';

function combineFiles (inputFile1, inputFile2){
    var promise = new Promise(function (resolve, reject) {

        input = fs.appendFile(inputFile1, inputFile2, function(err){
            if (err) reject(err);
        })

        fs.readFile(input, function(err){
            if (err) reject(err);
        })

        fs.writeFile('output.txt', input, function(err){
            if (err) reject(err);
        })
    })

//         fs.writeFile(output.txt, url, function(err){
//             if (err) reject(err);

//     }).then(function(results) {
//     console.log("results here: " + results)
// }).catch(function(err) {
//     console.log("error here: " + err);
// })
}


app.listen(3000);