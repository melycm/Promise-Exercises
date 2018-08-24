let express = require('express');
let app = express();
var rp = require('request-promise');
let axios = require('axios');
var fs = require('fs');

// 2)

let url = 'https://en.wikipedia.org/wiki/Harry_Styles'
let filename = 'hello.txt'

function saveWebPage (url, filename){
        rp(url).then(function(url){
            fs.writeFile(filename, url, function(err){
                if (err) reject(err);
            })
        }).then(function(results) {
        console.log("results here: " + results)
    }).catch(function(err) {
        console.log("error here: " + err);
})
}

saveWebPage(url, filename)

app.listen(3000);