"use strict";

// const findColor = name => 
//     ({red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'}[name])

// const res = findColor('red')

// console.log(res)

// To deal with undefined issues:

const Right = x => 
({
    chain: f => f(x),
    map: f => Right(f(x)),
    fold: (f,g) => g(x),
    toString: 'Right ' + x
})

const Left = x => 
({
    chain: f => Left(x),
    map: f => Left(x),
    fold: (f,g) => f(x),
    toString: 'left ' + x 
})
const findColor = name => {
    const found = {red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'}[name]
    return found ? Right(found) : Left('not found')
}

const res = () => 
    findColor('red')
    .map(x => x.toUpperCase())
    .fold(
        () => 'no color!',
        color => color
    )