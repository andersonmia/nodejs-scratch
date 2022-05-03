var fs = require('fs');

/**writable stream */
//read load.txt then write it to writeStream.txt
var readStream = fs.createReadStream(__dirname + '/load.txt');
var writeStream = fs.createWriteStream(__dirname + '/writeStream.txt');
let chunkCounter = 0;
readStream.on('data',(chunk) =>{
    writeStream.write(chunk);
    if(chunk){
        chunkCounter += 1;
        console.log('Chunk ' + chunkCounter + ' written in writeStream.txt');
    }
});
