var http = require('http');
var fs = require('fs');

var server = http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type':'text/html'});
    console.log(req.url);
    var readStream = fs.createReadStream(__dirname + '/index.html','utf8');
    readStream.pipe(res);
});
server.listen(5000,'127.0.0.1');
