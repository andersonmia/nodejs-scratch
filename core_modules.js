var events = require('events');
var util = require('util')

//an example on how to use the EventEmitter
var emit = new events.EventEmitter();
emit.on('speak',(msg) =>{
  console.log(msg);
});
emit.emit('speak','Te amo mi maorí español');

//an example on how to use inherits from util
var Person = function(name){
  this.name = name;
};
    //inheriting the EventEmitter
    util.inherits(Person, events.EventEmitter);
james = new Person('james');
mary = new Person('mary');
ryan = new Person('ryan');
var people = [james,mary,ryan];

people.forEach((person) => {
  person.on('speak',(mssg) =>{
    console.log(person.name +' said: ' + mssg);
  });
});

james.emit('speak','hey dude!');
mary.emit('speak','I love coding for sure');
ryan.emit('speak','No Pain, No Gain')
