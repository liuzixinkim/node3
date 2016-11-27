var school = {};

var fs = require('fs');

fs.readFile('./name.js','utf8',function (err,data){
    school.name = data;
    out();
});

fs.readFile('./age.js','utf8',function (err,data){
    school.age = data;
    out();
});

function out(){
    object.keys(school) == 2 && console.log(school);
}
