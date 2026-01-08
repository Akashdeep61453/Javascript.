const coding = ["js","ruby","python","cpp"]

const values = coding.forEach( (item) => {
    console.log(item)
    return item// still undefined
})
console.log(values);// undefined

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num>5)
// const newNums = myNums.filter( (num)=>{
//     return num > 4 // use return in {}
// })

const newNums =[]
myNums.forEach( (num)=> {
    if( num > 5){
        newNums.push(num)
    }
})

console.log(newNums);

const books=[
    {title: 'Book 1', genre: 'fiction', publish:1981,
    },
    {title: 'Book 2', genre: 'science', publish:1991,
    },
    {title: 'Book 3', genre: 'non-fiction', publish:1971,
    },
    {title: 'Book 4', genre: 'non-fiction', publish:1941,
    },
    {title: 'Book 5', genre: 'science', publish:1951,
    }
]

let userBooks =books.filter( (bk) => bk.genre==='non-fiction')
userBooks = books.filter( (bk) => {
    return bk.publish >=1960 && bk.genre==="non-fiction" //  use (bk .) here no single '' here
})
console.log(userBooks);
