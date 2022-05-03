const _ = require('lodash');

//random number
var number = _.random(1,1000);
console.log(number);

//function to run once only
const salut = _.once(() =>{
  console.log('Hello there.. \nLodash will ensure that i run once only!');
});

salut();
salut();
