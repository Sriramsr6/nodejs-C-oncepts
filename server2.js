// HTTP Module 

// var http = require('http');

// http.createServer((req,res)=>{
//     let date = new Date();
//     // add a day
//     date.setDate(date.getDate() + 1);
//     console.log('server running at "localhost:3000" ')
// }).listen(8080)

// Filesystem module

var http = require('http');
var fs = require('fs');

// http.createServer((req,res)=>{
//     res.write(req.url );
//     res.end();
//     console.log('server running at "localhost:3000" ')
// }).listen(8080)



// http.createServer((req,res)=>{
//     fs.readFile('index.html', (err,data)=>{
//         res.write(req.url);
//         res.end();
//     }
// }).listen(8080)



// http.createServer((req,res)=>{
//     fs.readFile('test.txt', (err,data)=>{
//         res.write(data);
//         res.end();
//     })



// http.createServer((req,res)=>{
//     fs.appendFile('test.txt','Thankyou', (err,data)=>{
//         res.write(data);
//         res.end();
//     })



// http.createServer((req,res)=>{
//     fs.writeFile('test.txt','Thankyou!!', (err,data)=>{
//         res.write(data);
//         res.end();
//      })

// http.createServer((req,res)=>{
//     fs.unlink('test.txt',(err)=>{
//         if (err) throw err;
//         console.log('file deleted')
//     })





//     console.log('server running at "localhost:3000" ')
// }).listen(8080)

// Url Module // host, pathname, search

// var url = require('url');

// var address = 'https://www.naukri.com/mnjuser/pendingactio?year=2020&&monty=jul'

// var q = url.parse(address, true);

// console.log(q.search);