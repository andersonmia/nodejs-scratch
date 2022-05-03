var stuff = require('./custom_modules');
//stuff = modules.exports only
console.log(stuff.counter(['james','jemimma','lois']));
//counter is not the function but the property of module.exports which equals to the function
console.log(stuff.sum(5,stuff.pi));