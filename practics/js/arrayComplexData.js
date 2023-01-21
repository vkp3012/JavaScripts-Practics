let products = [
    {
        productName : 'Gucci Round Backlet Belt',
        price : 350
    },
    {
        productName : 'Gucci Round Backlet Belt',
        price : 450
    },
    {
        productName : 'Gucci Round Backlet Belt',
        price : 550
    },
    {
        productName : 'Smiley T-Shirt',
        price : 250
    },
    {
        productName : 'Smiley T-Shirt',
        price : 350
    },
    {
        productName : 'Smiley T-Shirt',
        price : 550
    },
    {
        productName : 'Shinile Nail Pant',
        price : 450
    },
    {
        productName : 'Shinile Nail Pant',
        price : 250
    },
    {
        productName : 'Shinile Nail Pant',
        price : 350
    },
    {
        productName : 'Esbeda Wallet',
        price : 150
    },
    {
        productName : 'Esbeda Wallet',
        price : 250
    },
    {
        productName : 'Esbeda Wallet',
        price : 350
    },
    {
        productName : 'Esbeda Wallet',
        price : 450
    },
]

//find primum product stocks...
let primumProduct = products.filter(product => product.price > 300)
    .map(product => {
        return {
            productName : product.productName.toUpperCase(),
            price : product.price
        }
    })
    .reduce((stocks,currentProduct)=>{
        let stockItem = stocks.find(product => product.productName === currentProduct.productName);
        if(stockItem)
            ++stockItem.stock
        else
            stocks.push({
                productName : currentProduct.productName,
                stock : 1
            })
        
        return stocks;
    },[])

console.log(primumProduct);


//find non-primum product stock.

let nonprimumProducts = products.filter(product => product.price <= 300)
    .map(product => {
        return {
            productName : product.productName.toUpperCase(),
            price : product.price,
            // price : product.price - product.price *15/100
        }
    })
    .reduce((stocks,currentProduct)=>{
        let stocksItem = stocks.find(product => product.productName === currentProduct.productName);
        if(stocksItem)
            ++stocksItem.stock
        else 
            stocks.push({
                productName : currentProduct.productName,
                stock : 1
            })

        return stocks;
    },[])

console.log(nonprimumProducts);