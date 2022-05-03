var http = require('http');

var server = http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type':'Application/JSON'});
    console.log(req.url);
    var myObject = {
        name:'Anderson Mia',
        occupation:'Ninja',
        age: 17
    };
    //res only takes in strings or buffers so stringify myObject
    res.end(JSON.stringify(myObject));
});
server.listen(3000,'127.0.0.1');