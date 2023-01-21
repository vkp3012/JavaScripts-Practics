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
    ['Shinile Nail Pant',10],
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

//find primum product price is greate 300
const primumProduct = products.filter(product => product[1] >300);
console.log(primumProduct);

//find nonprimum product price is less than 300 and nonprimum product discount is 15%
const nonprimumProducts = products.filter(product => product[1] <= 300);
console.log(nonprimumProducts);

const discountProduct = nonprimumProducts.map(product=>[product[0],product[1]-product[1]*15/100])
console.log(discountProduct);


//create a stock of each products type.
let productStocks = products.reduce((stocks,product)=>{
    let stockItem = stocks.find(stock => stock[0] == product[0]);

    if(!stockItem)
        stocks.push([product[0],1])
    else
        ++stockItem[1];

    return stocks
},[])

console.log(productStocks);


const nonprimumProductStocks = products.filter(product => product[1]<=300)
    .map(prod => [prod[0].toUpperCase(),prod[1]])
    .reduce((stocks,currentproduct)=>{
        let stocksItems = stocks.find(stock => stock[0] == currentproduct[0])

        if(!stocksItems)
            stocks.push([currentproduct[0],1])
        else
            ++stocksItems[1]

        return stocks
    },[])

console.log(nonprimumProductStocks);



//Create Object Using Initializer and Constructor

function Engine(cylinders,size){
    this.cylinders= cylinders;
    this.size = size;
}

function Car(make,model,color,Cylinders,size){
    this.make = make;
    this.model = model;
    this.color = color;
    this.engine = new Engine(Cylinders,size)
}

let jackCar = new Car("Eagle","Talon TSI","Silver",4,2.2);
let jillCar = new Car("Audi","300ZX","Black",6,2.2);

console.log(jackCar);
console.log(jillCar);

//add some additional property
jackCar.year = 2015

console.log(jackCar);
console.log(jillCar);

let myCar = {
    make : "Honda",
    mode : "200ZY",
    color : "White",
    engine : {
        Cylinders : 4,
        Size: 4.2
    }
}

console.log(myCar);
