// The sort method sorts the elements of an array according to the callback function.
//q-1
let arr = [23,2,28,12,15]
let sortArr = ascendingOrder(arr)

function ascendingOrder(arr){
    return arr.sort(function(a,b){
        return a - b;
    })
}

console.log(sortArr);

//q-2
let arr1 = ['l', 'h', 'z', 'b', 's']
let alpha = reverseAlpha(arr1);

function reverseAlpha(arr){
    return arr.sort(function(a,b){
        return a === b ? 0 :  a > b ? 1 : -1 
    })
}

console.log(alpha);

//q-3
let alpha1 = alphabeticalOrder(arr1);
function alphabeticalOrder(arr){
    return arr.sort(function(a,b){
        return a === b ? 0 : a < b ? 1 : -1
    })
}

console.log(alpha1);

//q -4 Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. 
// The function should return a new array, and not mutate the globalArray variable.

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(globalArray){
    let newArr = [].concat(globalArray);
    return newArr.sort(function(a,b){
        return a === b ? 0 : a > b ? 1 : -1
    })
}

console.log(nonMutatingSort(globalArray));

