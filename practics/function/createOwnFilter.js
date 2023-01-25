// Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). 
// You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.

Array.prototype.myFiter = function(callback){
    let newArray = [];
    for(let i = 0;i<this.length;i++){
        // if(Boolean(callback(this[i],i,this))===true){
        //     newArray.push(this[i]);
        // }
        // if(callback(this[i],i,this)==true){
        //     newArray.push(this[i]);
        // }
        for(const [index,elem] of this.entries()){
            if(callback(elem,index,this)){
                newArray.push(elem)
            }
        }
    }

    return newArray;
}

let arr = [23, 65, 98, 5, 13];

let filterList = arr.myFiter(list=>list % 2)
console.log(filterList);