const http = require('http');

const server = http.createServer((req,res) =>{
    res.setHeader('Content-Type','text/html');
    console.log(req.method + ' request was made: ' + req.url);
    res.write('<h1>Hello from my server!</h1>');
});
server.listen(3000,() =>{
    console.log('listening on port 3000');
});