What is TS
TS is an open source typed syntatic superset of JS

- Compiles to readable JS
- Three Parts: Language, Laguange server, and compiler,
- kind of like fancy linter

Anatomy of the project

Let’s consider your a very simple TypeScript project that consists of only three files:

package.json # Package manifest
tsconfig.json # TypeScript compiler settings
src/index.ts # "the program"

package.json

{
"name": "hello-ts",
"license": "NOLICENSE",
"devDependencies": {
"typescript": "^4.3.2"
},
"scripts": {
"dev": "tsc --watch --preserveWatchOutput"
}
}

tsconfig.json

{
"compilerOptions": {
"outDir": "dist", // where to put the TS files
"target": "ES3" // which level of JS support to target
},
"include": ["src"] // which files to compile
}

src/index.ts

/\*\*

- Create a promise that resolves after some time
- @param n number of milliseconds before promise resolves
  \*/
  function timeout(n: number) {
  return new Promise((res) => setTimeout(res, n))
  }

/\*\*

- Add three numbers
- @param a first number
- @param b second
  \*/
  export async function addNumbers(a: number, b: number) {
  await timeout(500)
  return a + b
  }

//== Run the program ==//
;(async () => {
console.log(await addNumbers(3, 4))
})()

------------------------------------------ Variables and Values

In TypeScript, variables are “born” with their types. Although there are ways of making them more specific in certain branches of code, there’s no (safe) way of changing age’s type from number to string.

Literal Types

The type 6 is called a literal type. If our let declaration is a variable that can hold any number, the const declaration is one that can hold only 6 — a specific number.

Implicit any and type annotations

Sometimes, we need to declare a variable before it gets initialized, like endTime below:

// between 500 and 1000
const RANDOM_WAIT_TIME =
Math.round(Math.random() \* 500) + 500

let startTime = new Date()
let endTime

let endTime: any

setTimeout(() => {
endTime = 0
endTime = new Date()
}, RANDOM_WAIT_TIME)

Function arguments and return values

The : foo syntax we’ve just seen for variable type annotations can also be used to describe function arguments and return values. In this example it’s not clear, even from the implementation of the function, whether add should accept numbers or strings.

function add(a, b) {
return a + b // strings? numbers? a mix?
}

------------------------------------------------- Objects, Arrays and Tuples

Objects

In general, object types are defined by:

The names of the properties that are (or may be) present
The types of those properties
For example, if we had the concept of a Car like “2002 Toyota Corolla” with properties:

make: the manufacturer (in this case, “Toyota”)
model: the particular product (in this case, “Corolla”)
year: the “model year” of the product (in this case, 2002)
We could create a JavaScript object to represent this information:

{
make: "Toyota",
model: "Corolla",
year: 2002
}

The type that would describes this object’s structure:

{
make: string
model: string
year: number
}

We can use this type with a variable using the same : foo notation we’ve already discussed!

let car: {
make: string
model: string
year: number
}

We could create a function to print values of this type to the console:

/\*\*

- Print information about a car to the console
- @param car - the car to print
  \*/
  function printCar(car: {
  make: string
  model: string
  year: number
  }) {
  console.log(`${car.make} ${car.model} (${car.year})`)
  }

Index signatures

Sometimes we need to represent a type for dictionaries, where values of a consistent type are retrievable by keys.

Let’s consider the following collection of phone numbers:

const phones = {
home: { country: "+1", area: "211", number: "652-4515" },
work: { country: "+1", area: "670", number: "752-5856" },
fax: { country: "+1", area: "322", number: "525-4357" },
}

Array Types

ou could use our more complicated car type too, following the type for our 3-property object with [] as shown in the tooltip below:

const cars = [

const cars: {
make: string;
model: string;
year: number;
}[]
{
make: "Toyota",
model: "Corolla",
year: 2002,
},
]

Tuples

Sometimes we may want to work with a multi-element, ordered data structure, where position of each item has some special meaning or convention. This kind of structure is often called a tuple.

Let’s imagine we define a convention where we can represent the same “2002 Toyota Corolla” as

// [Year, Make, Model ]
let myCar = [2002, "Toyota", "Corolla"]
// destructured assignment is convenient here!
const [year, make, model] = myCar

-----------------------------------------------Structural vs. Nominal Types

What is type checking?

Type-checking can be thought of as a task that attempts to evaluate the question of compatibility or type equivalence:

function foo(x) {
// ... mystery code ...
}
//
// TYPE CHECKING
// -------------
// Is `myValue` type-equivalent to
// what `foo` whats to receive?
foo(myValue)

Static vs dynamic

Sorting type systems as either static or dynamic has to do with whether type-checking is performed at compile time or runtime.

TypeScript’s type system is static.
Java, C#, C++ all fit into this category. Keep in mind that inferrence can still occur in static type systems — TypeScript, Scala, and Haskell all have some form of static type checking.

Dynamic type systems perform their “type equivalence” evaluation at runtime. JavaScript, Python, Ruby, Perl and PHP fall into this category.

Nominal vs structural

Nominal type systems are all about NAMES. Let’s take a look at a simple Java example:

public class Car {
String make;
String model;
int make;
}
public class CarChecker {
// takes a `Car` argument, returns a `String`
public static String printCar(Car car) { }
}
Car myCar = new Car();
// TYPE CHECKING
// -------------
// Is `myCar` type-equivalent to
// what `checkCar` wants as an argument?
CarChecker.checkCar(myCar);

------------------------------------------------------ Union and Intersection Types

Union and Intersection Types, Conceptually

Union and intersection types can conceptually be thought of as logical boolean operators (AND, OR) as they pertain to types. Let’s look at this group of two overlapping sets of items

Union Types in TypeScript

Union types in TypeScript can be described using the | (pipe) operator.

For example, if we had a type that could be one of two strings, "success" or "error", we could define it as

"success" | "error"

For example, the flipCoin() function will return "heads" if a number selected from (0, 1) is >= 0.5, or "tails" if <=0.5.

function flipCoin(): "heads" | "tails" {
if (Math.random() > 0.5) return "heads"
return "tails"
}

const outcome = flipCoin()

const outcome: "heads" | "tails"

Let’s make this a bit more interesting by using tuples, that is structured as follows:

[0] either "success" or "failure"
[1] something different, depending on the value found in [0]

"success" case: a piece of contact information: { name: string; email: string; }
"error" case: an Error instance

Narrowing with type guards

Ultimately, we need to “separate” the two potential possibilities for our value, or we won’t be able to get very far. We can do this with type guards.

Type guards are expressions, which when used with control flow statement, allow us to have a more specific type for a particular value.
I like to think of these as “glue” between the compile time type-checking and runtime execution of your code. We will work with one that you should already be familiar with to start: instanceof.

const outcome = maybeGetUserInfo()
const [first, second] = outcome

const second: Error | {
name: string;
email: string;
}
if (second instanceof Error) {
// In this branch of your code, second is an Error
second

const second: Error
} else {
// In this branch of your code, second is the user info
second

const second: {
name: string;
email: string;
}
}

Intersection Types in TypeScript

Intersection types in TypeScript can be described using the & (ampersand) operator.

For example, what if we had a Promise, that had extra startTime and endTime properties added to it?

function makeWeek(): Date & { end: Date } {
//⬅ return type

const start = new Date()
const end = new Date(start.valueOf() + ONE_WEEK)

return { ...start, end } // kind of Object.assign
}

const thisWeek = makeWeek()
thisWeek.toISOString()

const thisWeek: Date & {
end: Date;
}
thisWeek.end.toISOString()

(property) end: Date

-------------------------------------------------------------------------- Interfaces and Type Aliases
TypeScript provides two mechanisms for centrally defining types and giving them useful and meaningful names: interfaces and type aliases. We will study both concepts in depth, and explain when it makes sense to use each type.

Type aliases

Think back to the : {name: string, email: string} syntax we’ve used up until this point for type annotations. This syntax will get increasingly complicated as more properties are added to this type. Furthermore, if we pass objects of this type around through various functions and variables, we will end up with a lot of types that need to be manually updated whenever we need to make any changes!

Type aliases help to address this, by allowing us to:

define a more meaningful name for this type
declare the particulars of the type in a single place
import and export this type from modules, the same as if it were an exported value

We can see a couple of things here:

the tooltip on info is now a lot cleaner and more semantic (meaningful, in connection with the concept behind it)
import/export of this type works just as it would for a function or a class in JavaScript

Inheritance in type aliases

You can create type aliases that combine existing types with new behavior by using Intersection (&) types.

type SpecialDate = Date & { getReason(): string }

const newYearsEve: SpecialDate = {
...new Date(),
getReason: () => "Last day of the year",
}
newYearsEve.getReason

Interfaces

An interface is a way of defining an object type. An “object type” can be thought of as, “an instance of a class could conceivably look like this”.

For example, string | number is not an object type, because it makes use of the union type operator.

interface UserInfo {
name: string
email: string
}
function printUserInfo(info: UserInfo) {
info.name

(property) UserInfo.name: string
}

Inheritance in interfaces

EXTENDS

If you’ve ever seen a JavaScript class that “inherits” behavior from a base class, you’ve seen an example of what TypeScript calls a heritage clause: extends

class Animal {
eat(food) {
consumeFood(food)
}
}
class Dog extends Animal {
bark() {
return "woof"
}
}

const d = new Dog()
d.eat

(method) Animal.eat(food: any): void
d.bark

interface Animal {
isAlive(): boolean
}
interface Mammal extends Animal {
getFurOrHairColor(): string
}
interface Dog extends Mammal {
getBreed(): string
}
function careForDog(dog: Dog) {
dog.getBreed
}

IMPLEMENTS

interface AnimalLike {
eat(food): void
}

class Dog implements AnimalLike {
bark() {
return "woof"
}
eat(food) {
consumeFood(food)
}
}

There, that’s better. While TypeScript (and JavaScript) does not support true multiple inheritance (extending from more than one base class), this implements keyword gives us the ability to validate, at compile time, that instances of a class conform to one or more “contracts” (types). Note that both extends and implements can be used together:

class LivingOrganism {
isAlive() {
return true
}
}
interface AnimalLike {
eat(food): void
}
interface CanBark {
bark(): string
}

class Dog
extends LivingOrganism
implements AnimalLike, CanBark
{
bark() {
return "woof"
}
eat(food) {
consumeFood(food)
}
}

Open Interfaces

TypeScript interfaces are “open”, meaning that unlike in type aliases, you can have multiple declarations in the same scope:

interface AnimalLike {
isAlive(): boolean
}
function feed(animal: AnimalLike) {
animal.eat

(method) AnimalLike.eat(food: any): void
animal.isAlive

(method) AnimalLike.isAlive(): boolean
}

// SECOND DECLARATION OF THE SAME NAME
interface AnimalLike {
eat(food): void
}

------------------------------------------------------------------ JSON Types

A JSON value MUST be an

- object
- array
- number
- string,
  or one of the following three literal names:
- false
- true
- null

------------------------------------------------------------------ Functions

Callable types

Both type aliases and interfaces offer the capability to describe call signatures:

interface TwoNumberCalculation {
(x: number, y: number): number
}

type TwoNumberCalc = (x: number, y: number) => number

const add: TwoNumberCalculation = (a, b) => a + b

(parameter) a: number
const subtract: TwoNumberCalc = (x, y) => x - y

void

Sometimes functions don’t return anything, and we know from experience with JavaScript, what actually happens in the situation below is that x will be undefined:

function printFormattedJSON(obj: string[]) {
console.log(JSON.stringify(obj, null, " "))
}

const x = printFormattedJSON(["hello", "world"])

const x: void

Construct signatures

Construct signatures are similar to call signatures, except they describe what should happen with the new keyword.

interface DateConstructor {
new (value: number): Date
}

let MyDateConstructor: DateConstructor = Date
const d = new MyDateConstructor()

Function type best practices

Explicitly define return types

TypeScript is capable of inferring function return types quite effectively, but this accommodating behavior can lead to unintentional ripple effects where types change throughout your codebase

consider the following example

export async function getData(url: string) {
const resp = await fetch(url)
const data = (await resp.json()) as {
properties: string[]
}
return data
}

function loadData() {
getData("https://example.com").then((result) => {
console.log(result.properties.join(", "))

(parameter) result: {
properties: string[];
}
})
}

------------------------------------------------------------------ Classes

Class Fields

Let’s go back to our car example. In the JS world, we could have something like:

////////////////////////////////
// JavaScript, not TypeScript //
////////////////////////////////
class Car {
constructor(make, model, year) {
this.make = make
this.model = model

(property) Car.model: any
this.year = year
}
}

let sedan = new Car("Honda", "Accord", 2017)
sedan.activateTurnSignal("left") // not safe!
new Car(2017, "Honda", "Accord") // not safe!

Access modifier keywords

public, private and protected

TypeScript provides three access modifier keywords, which can be used with class fields and methods, to describe who should be able to see and use them.

keyword who can access
public everyone (this is the default)
protected the instance itself, and subclasses
private only the instance itself

JS private #fields

As of TypeScript 3.8, TypeScript supports use of ECMAScript private class fields. If you have trouble getting this to work in your codebase, make sure to double-check your Babel settings

class Car {
public make: string
public model: string
#year: number

constructor(make: string, model: string, year: number) {
this.make = make
this.model = model
this.#year = year
}
}
const c = new Car("Honda", "Accord", 2017)
c.#year
Property '#year' is not accessible outside class 'Car' because it has a private identifier.

readonly

While not strictly an access modifier keyword (because it has nothing to do with visibility), TypeScript provides a readonly keyword that can be used with class fields.

class Car {
public make: string
public model: string
public readonly year: number

constructor(make: string, model: string, year: number) {
this.make = make
this.model = model
this.year = year
}

updateYear() {
this.year++
Cannot assign to 'year' because it is a read-only property.
}
}

Param properties
Now that we know about access modifier keywords, let’s return to an earlier code snippet from our discussion around class fields:

class Car {
make: string
model: string
year: number
constructor(make: string, model: string, year: number) {
this.make = make
this.model = model
this.year = year
}
}

---------------------------------------------------------------- Generics

Defining a type parameter

Type parameters can be thought of as “function arguments, but for types”.

Functions may return different values, depending on the arguments you pass them.

Generics may change their type, depending on the type parameters you use with them.
Our function signature is going to now include a type parameter T:

function listToDict<T>(
list: T[],
idGen: (arg: T) => string
): { [k: string]: T } {
const dict: { [k: string]: T } = {}
return dict
}

he TypeParam, and usage to provide an argument type

<T> to the right of listDict
means that the type of this function is now parameterized in terms of a type parameter T (which may change on a per-usage basis)
list: T[] as a first argument
means we accept a list of T‘s.

TypeScript will infer what T is, on a per-usage basis, depending on what kind of array we pass in. If we use a string[], T will be string, if we use a number[], T will be number.
Try to convince yourself of these first two ideas with the following much simpler (and more pointless) example:

Generics Scopes and Constraints

Generic Constraints

Generic constraints allow us to describe the “minimum requirement” for a type param, such that we can achieve a high degree of flexibility, while still being able to safely assume some minimal structure and behavior.

interface HasId {
id: string
}
interface Dict<T> {
[k: string]: T
}

function listToDict(list: HasId[]): Dict<HasId> {
const dict: Dict<HasId> = {}

list.forEach((item) => {
dict[item.id] = item
})

return dict
}

T EXTENDS VS CLASS EXTENDS

The extends keyword is used in object-oriented inheritance, and while not strictly equivalent to how it is used with type params, there is a conceptual connection:

When a class extends from a base class, it’s guaranteed to at least align with the base class structure. In the same way, T extends HasId guarantees that “T is at least a HasId”.
Scopes and TypeParams

When working with function parameters, we know that “inner scopes” have the ability to access “outer scopes” but not vice versa:

function receiveFruitBasket(bowl) {
console.log("Thanks for the fruit basket!")
// only `bowl` can be accessed here
eatApple(bowl, (apple) => {
// both `bowl` and `apple` can be accessed here
})
}
Type params work a similar way:

// outer function
function tupleCreator<T>(first: T) {
// inner function
return function finish<S>(last: S): [T, S] {
return [first, last]
}
}
const finishTuple = tupleCreator(3)
const t1 = finishTuple(null)

const t1: [number, null]
const t2 = finishTuple([4, 8, 15, 16, 23, 42])
