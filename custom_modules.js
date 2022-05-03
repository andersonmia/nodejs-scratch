var counter  = (arr) =>{
    return 'There are ' +arr.length+ ' elements in this array';
};

var sum = (a,b) =>{
    return `The sum of ${a} and ${b} is ${a+b}`;
};

var pi = 3.142;

//export
/**module.exports.counter = counter
 * module.exports has a property counter == variable counter
*/
module.exports ={
    counter: counter,
    sum: sum,
    pi: pi
};