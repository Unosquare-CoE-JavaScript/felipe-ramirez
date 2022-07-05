React + Typescript

- What and Why
- Typescript Basics
- Combining React and TS


TypeScript:
Is a super superset to JS
TS add static typing to JS

JS File
function add (a,b) {
    return a + b;
}

const result = add(2,5); // JS does not make any difference about the type of data (It is not restricted)
                            However, its not necessary good, because typing could prevent mistakes and avoid problems

console.log(result);

TS File
function add (a: number, b: number) {       //Type is defined here
    return a + b;
}

const result = add(2,5); 

console.log(result);

Typescript.org (you have to install it!!!)

npm install typescript

invoke the ts compiler because it does not run in the browser 

npx tsc TSFileName.ts

- Base Types:

// Primitives: number, string, boolean
// More Complex: arrays, objects
// Function types, parameters

let age: number = 24;

age = 12;

let hobbies: String[] = ['dsd','dsa'];

let person: any;

person = {
    name: 'Max',
    age: 32
}

let person: {
    name: string,
    age: number
};

person = {
    name: 'Max',
    age: 32
}

let person: {
    name: string,
    age: number
}[];        // This means an array of objects!!


- Type Inference:

let course = 'React- the complete guide'

course = 1234   // This infers the type of the first assignment

- Union Types:

let course: string | number = 'React - the complete guide';

- Type Aliases:

type Person = {
    name: string,
    age: number
}// This makes to define a type 

let people: Person[]

- Function and function Types:

function add (a: number,b: number): number | string {
    return a + b;
}

- Diving into Generics


function insertAtBeginning<T>(array:T[], value:T) {         // Adding T it infers the type of values of arguments
    const newArray = [value,...array];
    return newArray
}

const updatedArray = insertAtBeginning(demoArray, -1)

A Closer Look At Generics
Generic Types ("Generics") can be tricky to wrap your head around.

But indeed, we are working with them all the time - one of the most prominent examples is an array.

Consider this example array:

let numbers = [1, 2, 3];
Here, the type is inferred, but if we would assign it explicitly, we could do it like this:

let numbers: number[] = [1, 2, 3];
number[] is the TypeScript notation for saying "this is an array of numbers".

But actually, number[] is just syntactic sugar!

The actual type is Array. ALL arrays are of the Array type.

BUT: Since an array type really only makes sense if we also describe the type of items in the array, Array actually is a generic type.

You could also write the above example liks this:

let numbers: Array<number> = [1, 2, 3];
Here we have the angle brackets (<>) again! But this time NOT to create our own type (as we did it in the previous lecture) but instead to tell TypeScript which actual type should be used for the "generic type placeholder" (T in the previous lecture).

Just as shown in the last lecture, TypeScript would be able to infer this as well - we rely on that when we just write:

let numbers = [1, 2, 3];
But if we want to explicitly set a type, we could do it like this:

let numbers: Array<number> = [1, 2, 3];
Of course it can be a bit annoying to write this rather long and clunky type, that's why we have this alternative (syntactic sugar) for arrays:

let numbers: number[] = [1, 2, 3];
If we take the example from the previous lecture, we could've also set the concrete type for our placeholder T explicitly:

const stringArray = insertAtBeginning<string>(['a', 'b', 'c'], 'd');
So we can not just use the angle brackets to define a generic type but also to USE a generic type and explicitly set the placeholder type that should be used - sometimes this is required if TypeScript is not able to infer the (correct) type. We'll see this later in this course section!


- Creating a React + TS Project

npx create-react-app name --template typescript

The main Difference is the addition of he TS compiler and TSX files

function Todos: React.FC<{items: string[]}> = (props) {
    return (
        <ul>
            {props.items.map(item =>
                 <li key={item}>{item}</li>
            )}
        </ul>
    )
};

export default Todos;

App. js

function App() {
    return (
        <div>
            <Todos items={[]}/>
        </div>
    )
}

- Data model

todo.ts

class Todo {
   id: sting;
   text: string

   constructor(todoText: string) {
       this.text = todoText;
       this.id = new Date().toISOString;
   }
}

export default Todo


function App() {
    const todos = [
        new Todo('learn React'),
        new todo('Learn TS')
    ]
    return (
        <div>
            <Todos items={todos}/>
        </div>
    )
}

- Form submission in TS

const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
}

<form onSubmit={submitHandler}></form>

- Ref and useRef

const todoTextInputRef = useRef<HTMLInputElement>(null);

const enteredText = todoTextInputRef.current!.value;

- Function Props:

const newTodo: React.FC<{onAddTodo: (text: string)=> void}> = props => {

}

- Managing state with TS

import {useState} from 'react';

const [todos,setTodos] = useState<Todo[]>([])








