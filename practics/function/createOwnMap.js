Array.prototype.myMap = function(callback){
    let newArray = [];
    for(let i = 0;i<this.length;i++){
        newArray.push(callback(this[i],i,this))
    }
    return newArray
}

let arr = [23, 65, 98, 5, 13];

let multipleByTwo = arr.myMap(item => item *2)
console.log(multipleByTwo);