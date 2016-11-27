var EventEmitter = require('events');
var util = require('util');

function Man(){}

util.inherits(Man,EventEmitter);

var man = new Man();

function buyCar(who){
    console.log('买车'+who);
}
function buyPack(who){
    console.log('买包'+who);
}

man.on('有钱',buyCar);
man.on('有钱',buyPack);
man.removeAllListeners('有钱');
man.emit('有钱','妹子');













