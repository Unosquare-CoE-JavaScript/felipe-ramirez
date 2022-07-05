const Box = x =>
({
  map: f => Box(f(x)),
  fold: f => f(x),
  toString: () => `Box(${x})`
})

// Exercise: Box
// Goal: Refactor each example using Box
// Keep these tests passing!
// Bonus points: no curly braces


// Ex1: Using Box, refactor moneyToFloat to be unnested.
// =========================
const moneyToFloat = str =>
    Box(str)
    .map(s => s.replace((/\$/, '')))
    .fold(resultToFloat => parseFloat(resultToFloat))


// Ex2: Using Box, refactor percentToFloat to remove assignment
// =========================
const percentToFloat = str => 
    Box(str)
    .map(str => str.replace(/\%/, ''))
    .map(result => parseFloat(result))
    .fold(value => 'The final value is ' + value * 1000)

const result = percentToFloat('$5.00')
console.log(result)

