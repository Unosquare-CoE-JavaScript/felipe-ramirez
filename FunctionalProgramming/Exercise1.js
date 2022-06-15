const _ = R;
const split = _.curry((delimiter, string) => string.split(delimiter))


// Exercise 1
//==============

const words = split(' ');

// Exercise 1a
//==============
//use map to make a new words fn that not only works on 1 string, but on an array of strings.

const sentences = _.map(words);

// Exercise 2
//==============
const filterQs = xs =>  _.filter(_.test(/q/ig, x));

// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max

const _keepHighest = (x,y) => x >= y ? x : y // <- leave be

// TODO: rewrite max in its "simplest" form
const max =  _.reduce(_keepHighest, 0);

// Bonus 1:
// ============
// wrap array's built in slice to be functional and curried like ramda fn's.
// //[1,2,3].slice(0, 2)

const slice = _.curry((start, end, xs) => xs.slice(start, end))

// Bonus 2:
// ============
// use slice to define a function take() that takes n elements from an array. make it curried

const take = slice(0)