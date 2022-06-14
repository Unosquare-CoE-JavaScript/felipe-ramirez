 _______________________________________________Pure Functions:__________________
-Deterministic: Always the same output for the same input
-No Side Effects

Reliable
Portable
Reusable
Testable
Composable
 

 _______________________________________________Currying Functions:_______________

 const curry = f => x => y => f(x,y)
 const modulo = curry((x,y) => y % x)
 const isOdd(modulo(2))

 const filter = curry ((f, xs) => xs.filter(f))
 const getOdds = filter(isOdd);
 const result = getOdds([1,2,3,4,5])
 console.log(result)

 But, using curry from ram da it would be

 const {curry} = require('ramda');

 const replace = curry((regex, replacement, str) => // data happens last
    str.replace(regex, replacement)
)

const replaceVowels = replace(/[AEIOU/ig, '!');
const result = replaceVowels('Hey I have words')

_______________________________________________Composition_________________________

const toUpper = str => str.toUpperCase();
const exclaim = str => str + '!';
const first = xs => xs[0]

const compose = (f,g) => x => f(g(x))

const shout = compose(exclaim, toUpper);
console.log(shout('tears')) // 'TEARS!' 

Using ramda
import { compose } from 'ramda'
and nest the amount of functions that I want in an associative way. 

Examples:

const src = _.compose(_.prop('url), _.head, _.prop('blablabla'), _.prop('moreblabla'));

const images = _.compose(_.map(imageTag), src)

const widget = _.compose(_.map(images), getJSON, url)


_______________________________________________Identity Functor_________________________

const Box = x => 
({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: x
})

const halfTheFirstLargeNumber = xs => 
    Box(xs)
    .map(xs => xs.filter(x => x >= 20))
    .map(found => first(found) /2)
    .fold(answer => 'The answer is ' + answer)

_______________________________________________Monad Functor_________________________  

const findColor = name => 
    ({red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'}[name])

const res = findColor('red)

console.log(res)

To deal with undefined issues:
See ExampleMonad.js



