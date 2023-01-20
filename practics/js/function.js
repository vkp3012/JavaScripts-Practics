let product = {
    productId : "10-665740",
    costPrice : 2750,
    profitPercentage : 15,
    sellingPrice : 0
}

// function calculateSellingPrice(product){
//     let sellingPrice = product.costPrice + (product.profitPercentage / 100 * product.costPrice);
//     product.sellingPrice = sellingPrice;
// }

// arrow function
const calculateSellingPrice = (product) => {
    let sellingPrice = product.costPrice + (product.profitPercentage / 100 * product.costPrice)
    product.sellingPrice = sellingPrice
}

calculateSellingPrice(product)
// console.log(product);

// var x = function(a,b){
//     var result = 1;
//     for(var count = 0;count<b;count++) result *= a;
//     return result;
// }

// console.log(x(2,10));

var f = function(x){
    console.log("inside function " + x);
}

// f(12)
// console.log(x);

// var square = function ab(x){
//     x++;
//     return x*x;
// }

// console.log(ab(5));
// console.log(square(12));


myFunction();
function myFunction(){
    var address = "1233, New York ,US"
}

// console.log("The address is " + typeof address);

// function() {
//     console.log("inside");
// }

// function()

// var make Noise = function(){
//     console.log("Ping !");
// }

// make Noise()

// ab(12)
// function ab(){
//     return x*x;
// }


// console.log(square(6));
// var square = function ab(x) {
//     return x * x;
// };

for(var num=10;num>=1;num--) { console.log(num); }
// var num=10; while(num>=1) { console.log(num); num; }
// for(var num=10;num>=1;num++) { console.log(num); }


