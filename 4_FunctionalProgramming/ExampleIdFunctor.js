"use strict";

// const nextCharForNumberString = str => {
//     const trimmed = str.trim();
//     const number = parseInt(trimmed);
//     const nextNumber = new Number(number + 1);
//     return String.fromCharCode(nextNumber)
// };

// const result = nextCharForNumberString(' 64');
// console.log(result)

//Changing to an Identify Functor:

const Box = x => 
({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: x
})

// const result = () =>
//     ['a']
//     .map(x => x.toUpperCase())
//     .map(x => String.fromCharCode(x))

// console.log(result())

// Now we will rewrite the nextCharForNumberString function

const nextCharForNumberString = str => {
    Box(str)
    .map(x=> x.trim())
    .map(trimmed => parseInt(trimmed, 10))
    .map(number => new Number(number + 1))
    .fold(String.fromCharCode)
};

const first = xs => xs[0];

const halfTheFirstLargeNumber = xs => 
    Box(xs)
    .map(xs => xs.filter(x => x >= 20))
    .map(found => first(found) /2)
    .fold(answer => 'The answer is ' + answer)

// const result = nextCharForNumberString(' 64');3

// console.log(result)

const result2 = halfTheFirstLargeNumber([1,4,50]);
console.log(result2)

 