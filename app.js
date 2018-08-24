
let express = require('express');
let app = express();
var rp = require('request-promise');

// 1) 
var urls = [ 'https://en.wikipedia.org/wiki/Futures_and_promises', 'https://en.wikipedia.org/wiki/Continuation-passing_style', 'https://en.wikipedia.org/wiki/JavaScript', 'https://en.wikipedia.org/wiki/Node.js', 'https://en.wikipedia.org/wiki/Google_Chrome' ];

var p1 = rp(urls[0]);
var p2 = rp(urls[1]);
var p3 = rp(urls[2]);
var p4 = rp(urls[3]);
var p5 = rp(urls[4]);

Promise.all([p1,p2, p3, p4, p5])
.then(function (responses) {
    console.log(responses[0])
    console.log(responses[1])
    console.log(responses[2])
    console.log(responses[3])
    console.log(responses[4])
});

// Promise.all([urls.map])
// .then(function (responses) {
//     // console.log(responses[0].data);
//     rp(urls.map)
//     .then(function(response){
//     console.log(response)
// });
// });

// Promise.all([urls])
// .then(function (responses) {
//     // console.log(responses[0].data);
//     .then(function (responses) {
//         console.log(responses[0].data);
//     })
//     .catch(function (err) {
//         console.log(err)
//     });
// });

// setTimeout(function () {
//     console.log('hello');
// }, 3000);

// let api_url1 = "https://en.wikipedia.org/wiki/Futures_and_promises"
// let api_url2 = 'https://en.wikipedia.org/wiki/Continuation-passing_style'

// var p1 = axios.get(api_url1)
// let p2 = axios.get(api_url2)

// Promise.all([p1,p2])
// .then(function (responses) {
//     console.log(responses[0].data)
//     console.log(responses[1].data);
//     // console.log(responses[13]);
// });

// rp(api_url1 , api_url2)
// .then(function(response){
//     console.log(response)
// })


app.listen(3000);