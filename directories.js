var fs = require('fs');

// /*Synchronous*/
// //creating directory called stuff
// let create = fs.mkdirSync('stuff');
// if(create){
//   console.log('stuff created successfully!');
// }

// //remove stuff
// let remove = fs.rmdirSync('stuff');
// if(remove){
//   console.log('stuff removed successfully!');
// }

// /*Asynchronous*/
// //create stuffs
// fs.mkdir('stuffs',(err,data) => {
//   if(err){
//     log('Failed to create a directory');
//   }else {
//     console.log('stuffs created successfully!');
//   }
// });

// //remove stuffs
// fs.rmdir('stuffs',(err,data) => {
//   if(err){
//     console.log("Failed to delete stuffs");
//   }else{
//     console.log('stuffs deleted successfully!');
//   }
// });

/**creating a directory and writing a file into it */
fs.mkdir('stock',() => {
  fs.readFile('readMe.txt',(err,data) => {
    fs.writeFile('./stock/stock.txt',data,() => {
      console.log('Operation completed successfull!');
    });
  });
});

/**you cannot delete a non-empty dir (unlink the files then remove the dir)*/
fs.rmdir('stock',(err,data) => {
  if(err) throw err;
  console.log('deleted');
});
