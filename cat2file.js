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


            // input = fs.appendFile(inputFile1, inputFile2, function(err){
            
            //     if (err){
            //         reject(err);
            //     }
            //     console.log('input', input);
            //     resolve(input);
                
            // });
        }
        catch(error){
            reject(error)
        }

        

        // // 

        // resolve('hello world');

    })
    .then (function(results){
        
        fs.readFile(inputFile2, 'utf8', function(err, data){
            
                catFile += data;

                return results;
           
        })
            // fs.readFile(input, function(err){
            //     if (err) reject(err);
            
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
//         fs.writeFile(output.txt, url, function(err){
//             if (err) reject(err);

//     }).then(function(results) {
//     console.log("results here: " + results)
// }).catch(function(err) {
//     console.log("error here: " + err);
// })

    
//}


app.listen(3000);