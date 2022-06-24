const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    
    let route = './routing/';
    switch(req.url){
        case '/':
            route += 'home.html';
            break;
        case '/home':
            res.statusCode = 301;
            res.setHeader('Location','/');
            break;
        case '/about':
            route += 'about-me.html';
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location','/about');
            res.end();
            break;
        case '/recents':
            route += 'recent-posts.html';
            break;        
        case '/recent-posts':
            res.statusCode = 301;
            res.setHeader('Location','/recents');
            res.end();
        default:
            route += '404.html';
            break;
    }
    fs.readFile(route,(err, data) =>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    });
});

server.listen(3000, () =>{
    console.log('Server is running on port 3000');
}
);