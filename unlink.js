var fs = require('fs');

//create a file called deleteMe.txt then we delete interval
fs.unlink('deleteMe.txt',(err,data) => {
    if(err){
        throw err;
    }else{
        console.log("deleteMe.txt deleted successfully!");
    }
});
