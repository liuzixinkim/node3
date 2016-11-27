//订阅发布模式
//监听方法on  有钱了 -> 很多方法（买车 买包）

//emit 有钱了
//移出的方法 取消掉买车的方法

function Man (){
    this.events = {};
}
//创建个私有的盒子 来装所有一对的关系
Man.prototype.on = function (eventName,callback){
    // 表示1对多 有钱：['',''],没钱:['','']
    if(this.events[eventName]){ //存在
        this.events[eventName].push(callback);
    }else{  //不存在
        this.events[eventName] = [callback];
    }
}
Man.prototype.removeListener = function (eventName,callback){
    this.events[eventName] = this.events[eventName].filter(function (item){
        return (item != callback) && (callback != item.g);
    });
}
Man.prototype.once = function (eventName,callback){
    var that = this;
    function one(){
        callback.apply(this,arguments);
        that.removeListener(eventName,one);
    }
    one.g = callback;
    this.on(eventName,one);
}
Man.prototype.emit = function (eventName){
    this.events[eventName].forEach(function (item){
        item();
    })
}

function buyPack(){
    console.log('有钱了 买包');
}

function buyCar(){
    console.log('有钱了 买车');
}

var man = new Man();
// man.on('有钱了',buyPack);
man.once('有钱了',buyPack);
man.on('有钱了',buyCar);
man.removeListener('有钱了',buyCar);
man.removeListener('有钱了',buyPack);

man.emit('有钱了');
man.emit('有钱了');
man.emit('有钱了');
man.emit('有钱了');







