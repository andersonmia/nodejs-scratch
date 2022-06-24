const http = require('http');
const fs = require('fs');

const server =  http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type':'text/html'});

    fs.readFile('./contact.html',(err, data) =>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    });

});


server.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});