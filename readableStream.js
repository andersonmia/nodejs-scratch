var fs = require('fs');

//readable stream
var readStream = fs.createReadStream(__dirname + '/load.txt');
readStream.on('data',(chunk) =>{
    console.log('New chunk received: ');
    console.log(chunk);
});
//or to read the text and display add 'utf8' as param 2
