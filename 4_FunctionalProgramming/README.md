 <!------------------------------------------------------------------------------------------------------------------------------>Functional Programming
 Tags:
 Pure Functions
 Currying Functions
 Composition
 Identify Functor
 Monad Functor

✅ ———————————————— Pure Functions————————————————
<Link>
https://www.geeksforgeeks.org/pure-functions-in-javascript/
</Link>
-Deterministic: Always the same output for the same input
-No Side Effects

Reliable
Portable
Reusable
Testable
Composable
 

✅ ———————————————— Currying Functions————————————————
<Link>
https://javascript.info/currying-partials
</Link>

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

✅ ———————————————— Composition————————————————
<Link>
https://www.educative.io/answers/function-composition-in-javascript
</Link>

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


✅ ———————————————— Identity Functor————————————————
<Link>
https://javascript.plainenglish.io/the-definite-guide-to-functors-in-js-6f5e82bd1dac
</Link>

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

✅ ———————————————— Monad Functor————————————————  

const findColor = name => 
    ({red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'}[name])

const res = findColor('red)

console.log(res)

To deal with undefined issues:
See ExampleMonad.js


✅ ———————————————— Additional Info———————————————— 

Not from the course, but video Intro to Functional Programming Youtube (Channel Fazt)

Functional Programming:

Programming Paradigm:
    - OPP -> Objects
    - Imperative -> Steps
    - Functional -> Functions

Style code
A mindset
A trend
Avoid changing state and Mutable data
Data in -> data out

Why FP:
OPP JS is confusing for typical OPP devs (this, prototypes)
Easier to debug, mantain, safer of "this"
Community

 
Express everything in terms of functions
Avoid Side Effects because of the use of pure Functions

Use Higher functions: a function that return functions
 
Examples:

var name = "Isaac"
var greeting = "Hi, I'm"
console.log(greeting + name )

Functional:
const greet => "Hi, I'm " + name
greet ('Isaac')



