var http = require('http');
var fs = require('fs');

/**In routing, the response depends on the request */
var server = http.createServer((req,res) =>{
    console.log(req.url);
    var readStream ;
    //routing
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200,{'Text-Content':'text/html'});
        readStream = fs.createReadStream(__dirname + '/index.html','utf8');
        readStream.pipe(res);
    }else if(req.url === '/contact'){
        res.writeHead(200,{'Text-Content':'text/html'});
        readStream = fs.createReadStream(__dirname + '/contact.html','utf8');
        readStream.pipe(res);
    }else if(req.url === '/api/ninjas'){
        var ninjas = [{name : 'ryu',
        age: 29},
        {name : 'ryan',
        age: 21}
        ];
        res.writeHead(200,{'Text-Content':'application/json'});
        res.end(JSON.stringify(ninjas));
    }else{        
        res.writeHead(400,{'Text-Content':'txt/html'});
        readStream = fs.createReadStream(__dirname + '/404.html','utf8');
        readStream.pipe(res);
    }
});
server.listen(3000,'127.0.0.1');