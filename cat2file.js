let express = require('express');
let app = express();
var fs = require('fs');
var concat = require('concat-files');

// 3)
let inputFile1 = 'hello1.txt';
let inputFile2 = 'world1.txt';
let catFiles;


function combineFiles (inputFile1, inputFile2){

    var promise = new Promise(function (resolve, reject) {
        try{
            fs.readFile(inputFile1, 'utf8', function(err, data){
                if (err){
                    reject(err)
                }
                else{
                    catFile = data;
                    resolve(data);
                }
            })
        }
        catch(error){
            reject(error)
        }
    })
    .then (function(results){
        fs.readFile(inputFile2, 'utf8', function(err, data){
            if (err){
                reject(err);
            }else{
                catFile += data;
                return results;
            }
        })
    })
    .then (function(results){
        console.log(catFile);
        fs.writeFile('output.txt', catFile, 'utf8', function(err){
            if (err) reject(err);
        })
    }).catch(function(err) {
        console.log("error here: " + err);
    });
    return promise;
}

combineFiles(inputFile1, inputFile2);


app.listen(3000);