var http = require('http');
var fs = require('fs');

//create a server
var server = http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    var readStream = fs.createReadStream(__dirname + '/load.txt','utf8');

    //pipe to server (response)
    readStream.pipe(res);
});
server.listen(3000,'127.0.0.1');
console.log('Now listening form port 3000');