const myNums=[1,2,3]

// const myTotal = myNums.reduce( function(acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
        
//     return acc +currval
// },0)// to start from 0,, value of accumulator

const myTotal = myNums.reduce( (acc,currval) =>acc+currval,0)
console.log(myTotal);

 const shoppingCart = [ //array of objects
    {
        itemName: "js course",
        price: 299,
    },
    {
        itemName: "python course",
        price: 399,
    },
    {
        itemName: "c++ course",
        price: 899,
    },
]

const priceToPay=shoppingCart.reduce( (acc,item) => acc+item.price,0)
console.log(priceToPay);
