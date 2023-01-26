//q-1 sum all range array
function sum(arr){
    let count = 0;
    // let max = Math.max(arr[0],arr[1]);
    let max = Math.max(...arr);
    let min = Math.min(arr[0],arr[1]);
    for(let i = min;i <= max;i++){
        count += i;
    }

    return count;
}

console.log(sum([1,3]));
console.log(sum([3,1]));

const sumAll = arr => {
    let one = arr[0];
    let two = arr[1];
    let number = Math.abs(one - two) + 1;
    let sum = ((one+two)*number)/2
    return sum;
}

console.log(sumAll([4,4]));


//q-2 difference of arr
const differenceArray = (arr1,arr2) => {
    return arr1
            .concat(arr2)
            .filter(item => !arr1.includes(item) || !arr2.includes(item))

}

console.log(differenceArray([1,2,3,5],[1,2,3,4]));


function diffArray(arr1,arr2){
    let newArr = [];

    function onlyInFirst(first,second){
        for(let i = 0;i<first.length;i++){
            if(second.indexOf(first[i]) === -1){
                newArr.push(first[i]);
            }
        }
    }

    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);

    return newArr;
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

//q-3 value remove to array
// function removeArr(arr){
//     const valueToRemove = Object.values(arguments).slice(1)
//     let newArr = [];
//     for(let i = 0;i < arr.length;i++){
//         let removeArrValue = false;
//         for(let j = 0;j < valueToRemove.length; j++){
//             if(arr[i] === valueToRemove[j]){
//                 removeArrValue = true;
//             }
//         }

//         if(!removeArrValue){
//             newArr.push(arr[i]);
//         }
//     }

//     return newArr;
// }

function removeArr(arr,...value){
    return arr.filter(item => !value.includes(item))
}

console.log(removeArr([1,2,3,1,2,3],2,3));