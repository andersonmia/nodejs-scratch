var fs = require('fs');

/* fs in synchronous mode*/
// read
var readMe = fs.readFileSync('readMe.txt','utf8');
console.log('Sync: ' + readMe);
// write
fs.writeFileSync('writeMe.txt',readMe);

/*fs in asynchronous*/
//read: add 3rd param which is a callback when done nad we write in bcz we have to get data from what is read
fs.readFile('readMe.txt','utf8',function(err,data){
  fs.writeFileSync('writeMe2.txt',data);
});
//write
var cool = 'Hatred can consume you';
fs.writeFile('writeMe3.txt',cool,function(err){
  if(err){
    console.log(err);
  }
});

// to check if a file exists before running code
if(fs.existsSync('path-to-file')){
  //code to be executed
}
