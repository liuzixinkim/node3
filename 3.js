/**
 * Created by dell on 2016/11/20.
 */
console.log(this); //{}

(function (){
    console.log(this);
})(); //global


console.log(__dirname);

console.log(__filename);