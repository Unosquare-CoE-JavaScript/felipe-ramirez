<!------------------------------------------------------------------------------------------------------------------------------>JS
Tags:
- React Core Syntax and JSX
- Working with components
- Working with data

A client-side JS library
All about building modern reactive user interfaces
Declarative, component-focused approach

- Single Page App (SPA)
React can be used to control parts of HTML pages or entire pages
React can also be used to control the entire front end of a web app

In this module, I provided a brief introduction into some core next-gen JavaScript features, of course focusing on the ones you'll see the most in this course. Here's a quick summary!

✅ ———————————————— let & const  ————————————————
Read more about let : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

Read more about const : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

let  and const  basically replace var . You use let  instead of var  and const  instead of var  if you plan on never re-assigning this "variable" (effectively turning it into a constant therefore).

✅ ————————————————ES6 Arrow Functions  ————————————————
Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Arrow functions are a different way of creating functions in JavaScript. Besides a shorter syntax, they offer advantages when it comes to keeping the scope of the this  keyword (see here)

Arrow function syntax may look strange but it's actually simple.

function callMe(name) { 
    console.log(name);
}
which you could also write as:

const callMe = function(name) { 
    console.log(name);
}
becomes: 

const callMe = (name) => { 
    console.log(name);
}
Important: 

When having no arguments, you have to use empty parentheses in the function declaration:

const callMe = () => { 
    console.log('Max!');
}
When having exactly one argument, you may omit the parentheses:

const callMe = name => { 
    console.log(name);
}
When just returning a value, you can use the following shortcut:

const returnMe = name => name
That's equal to:

const returnMe = name => { 
    return name;
}

✅ ———————————————— Exports & Imports  ————————————————
In React projects (and actually in all modern JavaScript projects), you split your code across multiple JavaScript files - so-called modules. You do this, to keep each file/ module focused and manageable.

To still access functionality in another file, you need export  (to make it available) and import  (to get access) statements.

You got two different types of exports: default (unnamed) and named exports:

default => export default ...; 

named => export const someData = ...; 

You can import default exports like this:

import someNameOfYourChoice from './path/to/file.js'; 

Surprisingly, someNameOfYourChoice  is totally up to you.

Named exports have to be imported by their name:

import { someData } from './path/to/file.js'; 

A file can only contain one default and an unlimited amount of named exports. You can also mix the one default with any amount of named exports in one and the same file.

When importing named exports, you can also import all named exports at once with the following syntax:

import * as upToYou from './path/to/file.js'; 

upToYou  is - well - up to you and simply bundles all exported variables/functions in one JavaScript object. For example, if you export const someData = ...  (/path/to/file.js ) you can access it on upToYou  like this: upToYou.someData .

✅ ———————————————— Classes  ————————————————
Classes are a feature which basically replace constructor functions and prototypes. You can define blueprints for JavaScript objects with them. 

Like this:

class Person {
    constructor () {
        this.name = 'Max';
    }
}
 
const person = new Person();
console.log(person.name); // prints 'Max'

In the above example, not only the class but also a property of that class (=> name ) is defined. The syntax you see there, is the "old" syntax for defining properties. In modern JavaScript projects (as the one used in this course), you can use the following, more convenient way of defining class properties:

class Person {
    name = 'Max';
}
 
const person = new Person();
console.log(person.name); // prints 'Max'
You can also define methods. Either like this:

class Person {
    name = 'Max';
    printMyName () {
        console.log(this.name); // this is required to refer to the class!
    }
}
 
const person = new Person();
person.printMyName();
Or like this:

class Person {
    name = 'Max';
    printMyName = () => {
        console.log(this.name);
    }
}
 
const person = new Person();
person.printMyName();
The second approach has the same advantage as all arrow functions have: The this  keyword doesn't change its reference.

You can also use inheritance when using classes:

class Human {
    species = 'human';
}
 
class Person extends Human {
    name = 'Max';
    printMyName = () => {
        console.log(this.name);
    }
}
 
const person = new Person();
person.printMyName();
console.log(person.species); // prints 'human'
Spread & Rest Operator
The spread and rest operators actually use the same syntax: ... 

Yes, that is the operator - just three dots. It's usage determines whether you're using it as the spread or rest operator.

Using the Spread Operator:

The spread operator allows you to pull elements out of an array (=> split the array into a list of its elements) or pull the properties out of an object. Here are two examples:

const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5]; // This now is [1, 2, 3, 4, 5];
Here's the spread operator used on an object:

const oldObject = {
    name: 'Max'
};
const newObject = {
    ...oldObject,
    age: 28
};
newObject  would then be

{
    name: 'Max',
    age: 28
}
The spread operator is extremely useful for cloning arrays and objects. Since both are reference types (and not primitives), copying them safely (i.e. preventing future mutation of the copied original) can be tricky. With the spread operator you have an easy way of creating a (shallow!) clone of the object or array. 

✅ ———————————————— Destructuring  ————————————————
Destructuring allows you to easily access the values of arrays or objects and assign them to variables.

Here's an example for an array:

const array = [1, 2, 3];
const [a, b] = array;
console.log(a); // prints 1
console.log(b); // prints 2
console.log(array); // prints [1, 2, 3]
And here for an object:

const myObj = {
    name: 'Max',
    age: 28
}
const {name} = myObj;
console.log(name); // prints 'Max'
console.log(age); // prints undefined
console.log(myObj); // prints {name: 'Max', age: 28}
Destructuring is very useful when working with function arguments. Consider this example:

const printName = (personObj) => {
    console.log(personObj.name);
}
printName({name: 'Max', age: 28}); // prints 'Max'
Here, we only want to print the name in the function but we pass a complete person object to the function. Of course this is no issue but it forces us to call personObj.name inside of our function. We can condense this code with destructuring:

const printName = ({name}) => {
    console.log(name);
}
printName({name: 'Max', age: 28}); // prints 'Max')
We get the same result as above but we save some code. By destructuring, we simply pull out the name  property and store it in a variable/ argument named name  which we then can use in the function body.


✅ ———————————————— JS Array Functions  ————————————————
Not really next-gen JavaScript, but also important: JavaScript array functions like map() , filter() , reduce()  etc.

You'll see me use them quite a bit since a lot of React concepts rely on working with arrays (in immutable ways).

The following page gives a good overview over the various methods you can use on the array prototype - feel free to click through them and refresh your knowledge as required: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Particularly important in this course are:

<Link>
map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
</Link>




<!------------------------------------------------------------------------------------------------------------------------------>React Basics

Content:
- React Core Syntax and JSX
- Working with components
- Working with data


✅ ———————————————— Components  ————————————————
React is all about Components
A component 
Reusability     ---->>> DRY (Dont Repeat yourself)
Separation of concerns      ----->>> Don't doo many things in one and the same place (function)

✅ ————————————————How is a Component Built ————————————————
HTML    +   CSS     +      JS        =       React

✅ ———————————————— How React Works? ————————————————

    App Component is an special component which imports our components
    Convention to name components, example:
    
    ExpenseItem.js  --->

    Content of a Component: Components are JS functions, ex:

    function ExpenseItem () {
        return <h2>Expense Item</h2>
    }

    export default ExpenseItem;

    Then it is imported in App

    App.js --->
    import ExpenseItem from './path/ExpenseItem'

    function App() {
        return (
            <div>
                <h2>let's get started!</h2>
                <ExpenseItem></ExpenseItem>             /*The name usually starts with an uppercase letter*/
            </div>
        )
    }

✅ ———————————————— JSX Code and CSS Styling ————————————————
    ExpenseItem.css ---->
    ...css code

    ExpenseItem.js ---->

    import './ExpenseItem.css'

    function ExpenseItem () {
        return (
            <div className="class-name">
                <div>Date</div>
                <div>
                    <h2>Title</h2>
                    <div>Amount</div>
                </div>
            <div>
        )
    }

    export default ExpenseItem;


✅ ———————————————— Dynamic Content using Props ————————————————

    App.js --->
    import ExpenseItem from './path/ExpenseItem'

    function App() {
        const expenses = [
            {title: 'id: 01, Car Insurance 1', amount: 294, date: new Date(2021,2,28)},
            {title: 'id: 02, Car Insurance 2', amount: 333, date: new Date(2021,2,28)},
            {title: 'id: 03, Car Insurance 3', amount: 852, date: new Date(2021,2,28)},
            {title: 'id: 04, Car Insurance 4', amount: 988, date: new Date(2021,2,28)}
        ]
        return (
            <div>
                <h2>let's get started!</h2>
                <ExpenseItem  title={expense[0].title} amount={expense[0].amount} date={expenses[0].date}/> 
                <ExpenseItem  title={expense[1].title} amount={expense[1].amount} date={expenses[1].date}/> 
                <ExpenseItem  title={expense[2].title} amount={expense[2].amount} date={expenses[2].date}/> 
                <ExpenseItem  title={expense[3].title} amount={expense[3].amount} date={expenses[3].date}/> 
            </div>
        )
    }


    ExpenseItem.js ---->

    import './ExpenseItem.css'

    function ExpenseItem (props) {
        return (
            <div className="class-name">
                <div>{props.title}</div>
                <div>
                    <h2>{props.amount}</h2>
                    <div>$ {props.date}</div>
                </div>
            <div>
        )
    }
    export default ExpenseItem;


✅ ————————————————Composition - Children Props ————————————————
    To recycle styles, we create components like Card, which will have a component with all styles of a Card 

    Card.css
    .card {
        box-shadow: ...;
    }

    Card.js
    import './Card.css'

    function Card (props) {
        classes = 'card ' + props.className;
        return <div className={classes}>{props.children}</div>     /*Children is a reserved name, to receive everything that comes between
    }                                                           the opening an closing tag where we call the component*/

    export default Card

Now we'll use it into the main component, to reuse the component

    ExpenseItem.js ---->
    import Card from './Card'
    import './ExpenseItem.css'

function ExpenseItem (props) {
        
return (
        <Card className="class-name">
            <div>{props.title}</div>
            <div>
                <h2>{props.amount}</h2>
                <div>$ {props.date}</div>
            </div>
        <Card>
    )
}
export default ExpenseItem;


- Organizing Components Files
--node_modules
--public
--src
|   |
|   -- Components
|   |    --Expenses
|   |    |    ExpenseDate.js
|   |    |    ExpenseDate.css
|   |    |    ExpenseItem.js
|   |    |    ExpenseItem.css
|   |    |    Expenses.js
|   |    |    Expense.css
|   |    --UI
|   |    |    Card.js
|   |    |    Card.css
|   App.js

✅ ———————————————— Alternative Function Syntax ————————————————

const App = () => {
    ... content ...
}

export default App;

    







