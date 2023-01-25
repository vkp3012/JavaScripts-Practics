function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
         return anim.slice(beginSlice,endSlice);
        // return arr;
        // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));


function nonMutatingSplice(cities) {
    // Only change code below this line
    return cities.slice(0,3);

// Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));