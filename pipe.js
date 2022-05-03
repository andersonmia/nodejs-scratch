var fs = require('fs');

/**pipe a readable stream into a writable stream */
var readStream = fs.createReadStream(__dirname + '/load.txt','utf8');
var writeStream = fs.createWriteStream('pipe.txt');
readStream.pipe(writeStream);