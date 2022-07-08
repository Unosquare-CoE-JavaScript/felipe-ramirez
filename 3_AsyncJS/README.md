<!------------------------------------------------------------------------------------------------------------------------------>Asynchronous JavaScript Deep Dive 
Tags
Async vs Sync
Event loop
Callbacks
Promises
Generators


Important Concepts:

Asynchronous Coding
Event Loop

✅ ———————————————— Async vs Sync ———————————————— :
<Link>
https://www.30secondsofcode.org/articles/s/javascript-sync-async
</Link>
Sync Advantages:
Easy to write and to reason about and understand.
Sync Disadvantages:
May create blocking code
Less Performant

Async Advantages:
Very Performant, fast
Eliminate code blocking
Disadvantage
It difficult to understand, harder to write.


✅ ———————————————— Event Loop ———————————————— :
<Link>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
</Link>

Purpose: Make sure that all the code is handle
Event loop helps Async to be executed while sync function are executed one by one. 

This implies different parts of the JS Engine
The heap: Physical memory spaces that is used to store variables.
The stack: This is where function and API calls are stored  last-in-first-out structure
APIS: This is where the actual functionality for built-in functions like setTimeout and fetch are located.- 
Callback queue first-in first-out structure
Event Loop: is an Algorithm that constantly checks the call stack to see if there are any function calls that need to be run. 

✅ ———————————————— Callbacks ———————————————— :
<Link>
https://www.freecodecamp.org/espanol/news/que-es-una-funcion-callback-javascript/
</Link>
Is a simply function that is invoked or called after something else happens.
Asynchronous coding and Callbacks 
The fact that we put call back does not mean we have async, because it does not take advantage on event loop. 


✅ ———————————————— Promises ———————————————— :
<Link>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
</Link>
Is an Object with properties and methods
Represent the eventual completion or failure of an async operation
Provides a result value

✅ ———————————————— Generators ———————————————— :
<Link>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
</Link>

* and “yield” keyword

Function genTest () {
	Let x = 0;
	console.log(“start”);
	x++;
	console.log(x);
	console.log(“end”);
}

Let gen = genTest();

Function  *genTest () {
	Let x = 0;
	console.log(“start”);
	yield;
	yield x++;
	console.log(x);
	console.log(“end”);
}

Let gen = genTest();

Let it = arr[Symbol.iterator]() // This is a generator Func.















