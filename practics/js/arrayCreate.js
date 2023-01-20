// let carMakes = ["Nissan","Ford","Tata"];

// let carMakes = new Array("Nissan","Ford","Tata")
// console.log(carMakes);

// carMakes.push("BMW")
// console.log("after pushing the element BMW");
// console.log(carMakes);

// carMakes.unshift("Audi")
// console.log("after adding the element in the begining");
// console.log(carMakes);

// carMakes.pop()
// console.log("after deleting the element in the end");
// console.log(carMakes);

// carMakes.shift()
// console.log("after deleting the element in the begining");
// console.log(carMakes);


// let cars = [];
// let make = "Eagle";
// let model = "Talon TSI"
// let color = "Blue";

// let car = [];
// car.push(make);
// car.push(model)
// car.push(color)

// cars.push(car)

// console.log(cars);


//array operation

let products = [
    ['Gucci Round Backlet Belt',400],
    ['Gucci Round Backlet Belt',300],
    ['Gucci Round Backlet Belt',200],
    ['Smiley T-Shirt',500],
    ['Smiley T-Shirt',250],
    ['Smiley T-Shirt',50],
    ['Shinile Nail Pant',10].
    ["Esbeda Wallet",220]
]

// const calculateDiscountPrice = discount =>{
//     for(let i = 0;i<products.length;i++){
//         products[i][1] = products[i][1] - products[i][1]*discount/100
//     }
// }

const calculateDiscountPrice = discount => products.map(
    product => [product[0],product[1]-product[1]*discount/100]
)

let discountprice = calculateDiscountPrice(10)
console.log(products);
console.log(discountprice);


