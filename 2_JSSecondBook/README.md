					_____________________________SCOPES AND CLOSURES_____________________________

______________________________________________________________________________________________Chapter 1: What is the Scope

JS functions are themselves first-class values, they can be assigned ad passed around just like numbers or strings

Two phases:
Parsing/compilation
Execution
Examples showing JS is a compiled language are: Syntax errors, early errors and hoisting
1. Syntax error (I know them)
2. Early, like two arguments in a function with the same name
3. Hoisting: Cannot access variables before inicialization

Var students  = [
	{ id: 14, name: “Kyle” },
	{ id: 14, name: “Suzy” },
	{ id: 14, name: “Frank” },
	{ id: 14, name: “Sarah” }
]

Function getStudentName(studentID) {
	for (let student of students) {
		if (student.id == studentID) {
			return student.name
		}
	}
}

Var nextStudent = getStudentname(73);
console.log(nextStudent)

Notes:

Scope is determined as the program is compiled and should not generally be affected by runtime conditions.
However in non-strict mode, there are technically still two ways to cheat this rule modifying program’s scope during runtime

______________________________________________________________________________________________Chapter 2 Illustrating lexical Scope:

Concepts:
Engine: Responsible for start-to-finish compilation and execution
Compiler: handles parsing and code-generation
Scope Manager: collects and mantains a lookup list of all declared variables/identifiers and enforces a set of rules to access them 


______________________________________________________________________________________________Chapter 3 The scope chain:

Shadowing:
Example:

Var studentName = “Susy”;

Function printStudent(studentName) {
	studentName = studentName.toUpperCase();
	console.log(studentName)
}

printStudent(“Frank”) // FRANK

printStudent(studentName) //SUZY

console.log(studentName) // Suzy

______________________________________________________________________________________________Chapter 4 Around the Global Scope:

—————————————————————How do all separate JS files get stitched together in a single runtime context by engine ?????

First, if using ES modules these files are loaded individually by the JS environment. Each module then import references to whichever other modules it needs to access.
The separate module files cooperate with each other exclusively through these shared imports without needing any shared outer scope.

Second, if using a bundler in your build process, all the files are typically concatenated together before delivery to the browser and JS engine, which then only processes one big file.
Even with all the pieces of the application co-located in a single file, some mechanism is necessary for each piece to register a name to be referred to by other pieces, as well as some
Facility for that access to occur.
In some builds setups, the entire contents of the file are wrapped in a single enclosing scope such as a wrapper function, universal module (UMD) Each piece can register itself for access
From other pieces by way of local variables in that shared scope. 

Example:

(Function wrappingOuterScope () {
	var moduleOne = (function One () {
		// …
	}) ();

	var moduleTwo = (function two () {
		// ..

		function callModuleOne () {
			moduleOne.someMethod ();
		}
	}) ()
}) ()

The moduleOne and moduleTwo local variables inside the wrappingOuterScope () function scope are declared so that these modules can access each other for their cooperation

Third, whether a bundler tool is used for an application or whether the non-ES module files are simply loaded in the browser individually if there’s no single surrounding scope
Encompassing all these pieces, the global scope is the only way for them to cooperate with each other

The example here is the same as the second case, but without the wrappingOuterScope function
The global Scope is also where:}

JS exposes its built-ins:
-Primitives: undefined, null, Infinity, NaN,
-natives: Date(), Object(), String(), etc,
-Global Functions: eval(), parseInt(),
- namespaces: Math, atomics, JSON,
-Friends of JS: Intl, WebAssembly

The environment hosting the Js engine exposes its own built-ins:
-console
-DOM
-timers (setTimeout, etc)
-web platform APIs: navigator, history, geolocation, etc

————————————————————— ES Modules (ESM)

Var studentName = “Kyle”;

Function hello () {
	console.log(“Hello “ + studentName)
}

hello();

Export hello;

studentName and hello are “module-global”

—————————————————————  Node:

The top level of Node programs is never actually the global Scope, the way it is when loading a non-module file in the browser

From node:

Function Module (module, require, __dirname, …) {
	var studentName = “Kyle;

	function hello () {
		console.log(“Hello “ + studentName)
	}

	hello ();
	module.exports.hello = hello;
}

To call the global context in Node, you’ve got to use:

global.studentName = “Kyle”;

______________________________________________________________________________________________Chapter 5 The Secret lifecycle of variables:

When you declare functions or var you can use them over all the scope, even before declare it (it has some exceptions)

————————————————————— Hoisting:
Is a mechanism for re-ordering code  or sth like that
The JS engine doesn’t actually re-arrange the code, it can’t magically look ahead and find declarations; the only way to accurately find them as well as all the scope boundaries 
In the program, would be to full parse the code (Passing is the first phase of the two-phase processing. 

When you use var, you can redeclare a variable, but using let will throw an error (This is for the updates of JS)
Using const is not possible, redeclare nor reassign a variable

Syntax Error: Represent faults in the program that stop it from even starting execution.
Type Error: represent faults that arise during program execution.


——————————————————— Temporal Dead Zone
Is te time window where a variable exists but is still uninitialized, and therefore cannot be accessed in any way.
example:

askQuestion (); // Reference error 

Let studentName = “Susy”;

Function askQuestion () {
	console.log(studentName)	
}

console.log is referencing studentName comes after the let studentName declaration, timing wise the askQuestion() function is invoked before the let statement is encountered
While studentName is still in its TDZ

TDZ errors occur because let/const declarations do hoist their declarations to the top of their scopes, but unlike var, they defer the auto-initialization of their variables until the moment
In the code’s sequencing where the original declaration appeared.

______________________________________________________________________________________________Chapter 6 Limiting Scope Exposure

Least exposure:
Means that the least exposure has a variable, the better it is to prevent:
-Naming Collisions
-Unexpected behavior
-Unintented dependency

———————————————————— Hiding in plain (Function) Scope:

Example:

Function hideTheCache () {
	var cache = {}
	return factorial;

	function factorial (x) {
		if (x<2) return 1;
		if (!(x in cache)) {
			cache[x] = x * factorial(x-1):
		}
		return cache[x]
	}
}

Var factorial = hideTheCache();

factorial(6)
//720

The hideTheCache() function serves no other purpose than to create a Scope for cache to persist in across multiple calls to factorial. 

Rather than defining a new and uniquely named function each time one of those situations, a better solution is a function expression:

Var factorial = (function hideTheCache () {
	var cache = {}
	function factorial (x) {
		if (x<2) return 1;
		if (!(x in cache)) {
			cache[x] = x * factorial(x-1):
		}
		return cache[x]
	}
	return factorial
	
}) ()

———————————————————— Invoking Functions Expressions Immediately

The second () in the last lines, is calling the function expression we defined.
We are defining a functions expression that’s then immediately invoked. They are the immediately invoked functions Expressions (IIFE) :D

Is useful when we want to create a scope to hide variables/Functions (it can be named or anonymous)

Here’s an example:
//outer scope
(Function () {
	//inner hidden scope
})() ;
//more outer scope

———————————————————— Scoping with Blocks
Let declarations with nested blocks
You can use { } to define scope (Sometimes)

————————————————————var and Let:
Var signaled “variable that belongs to a whole function”, no matter where appears
Var should be reserved for use in the top-level scope of a function

Var better communicates function-scoped than let does and let both communicates block-scoping where var is inssufficient.

———————————————————— Function Declarations in Blocks FiB

Example:
If (false) {
	function ask() {
		console.log(“Does it run?”);
	}
}

Ask();

It will result as a Reference error or TypeError Exception depending on the JS engine
So, it is better to avoid place a function declaration directly inside any block!!!



______________________________________________________________________________________________Chapter 7: Using Closures

Function lookupStudent (studentID) {
	var students = [
		{id: 14, name: “Felipe”}…
	]

	return function greetStudent(greeting) {
		var student = students.find(student => student.id == studentID);

		return (greeting + ‘ ’ + student.name)
	}
}

Var chosenStudents = [
	lookupStudent(4),
	lookupStudent(5)
]

chosenStudents[0].name; // greetStudent
chosenStudents[0](“Hello”) // Hello Felipe

Closure Allows greetStudent() to continue to access those outer variables even after the outer scope is finished (When each call to lookupStudent() completes)
Instead of the instances of students and studentID being GC’d (Garbage Collector) they stay around in memory.

The fact that the execution of chosenStudents[0](“Hello”) works and return sth means it was still able to access the student and studentID variables. This is CLOSURE!!!.

Function adder(num1) {
	return function addTo(num2) {
		return num1 + num2
	}
}

Var add10To = adder(10);
Var add42To = adder(42);

add10To(15); // 25
add42To(9) // 51

Example where the closed-over variable is updated:

Function makeCounter () {
	var count = 0;
	
	return getCurrent() {
		count = count + 1
		return count
	}
}

Var hits = makeCounter();

hits() // 1
hits() // 2
hits() // 3


———————————————————— Common Closures: Ajax and Events:

Function lookupStudentRecord (studentID) {
	ajax(
		‘https/some.api/student/${studentID}’,
		function onRecord (record) {
			console.log(record.name, studentID)
		}
	)
}

lookupStudentRecord(114)

Function listenForClicks(btn, label) {
	btn.addEventListener(“click”, function onClick () {
		console.log(label)
	}
}

Var submitBtn = document.getElementById(“submit-btn”);

listenForClicks(submitBtn, “Checkout”)

Closure is observed when a function uses variables from outer scope(s) even while running in a scope where those variable(s) wouldn’t be accesible.
- Must be a function involved
- Must reference at least one variable from an outer scope
- Must be invoked in a different branch of the scope chain of variable(s)


______________________________________________________________________________________________Chapter  8: The module Pattern

———————————————————— Encapsulation and Least Exposure:

Modules: 
A module is a collections of related data and functions (often referred to as methods in this context), characterized by a division between hidden private details and public accssible
Details usually called the public API.

What is NOT a module:

Namespaces:
If you group a set of related functions together, without data, then you don’t really have the expected encapsulation a module implies.

Var Utils = {
	function1 () {},
	function2 () {},
	function3 () {}
}

Data Structures:
Data an stateful functions together
Var student = {
	records: [],
	function1 () {}
}

What IS a module:
Not only grouping and state, but also access control through visibility (private vs public)

Var student (function defineStudent () {
	var records = [];

	var publicAPI = {
		function1
	}

	return publicAPI;

	function function1 () { 
		return sth
	}
})

Student.function1();

Student is now an instance of a module. It features a public API with a single method: function1 () this method to access the private hidden data.

———————————————————— Module Factory (Multiple Instances):
Just changing the last lines of the last example as follows:

Var variableToSavefunction = defineStudent();
variabletoSavefunction.function1();

Classic Module Definition:

So to clarify what makes something a classic module:

- There must be an outer scope, typically from a module factory function running at least once
- The module’s inner scope must have at least one piece of hidden information that represents state for the module.
- The module must return on its public API a reference to at least one function that has closure over the hidden module state


———————————————————— Node CommonJS Modules:
CommonJs modules are file-based (one module per file)

module.exports.function1 = function1

Var records = [],

Function function1 () {
	return something related with records :D
}

Don’t do this:

Module.exports = {
	function1, function2 (As I did it in last project
}

Do this way:

Object.assign(module.exports, {
	function1, function2 ….
});

To include another module instance into your module/program, use Node’s require() method.

———————————————————— Modern ES Modules (ESM):
One big difference with commonJs Modules is ESm files are assumed to be strict-mode without needing a “use-strict” pragma at the top.

Instead of module.exports ESM uses  export  And import, example:

Export function1;

Var records = [];

Function function1 () {
	return something
}

It also can be expressed like:

Export function function1 () {
	return something
}
Or 
Export default function function1 () {
	return something
}

The default export is a shorthand for consumers of the module when they import giving them a terser syntax when they only need this single API member.

To import:
Named Import:
Import { function1 } from “/../file path.js”

Or import {function1 as theNameThatIWant} from “././filepath.js”

If function1 is a DEFAULT EXPORT of the module we can import it like this:

Import function1 from “././filepath.js”
Or import { default as function1, /* —— */ } from “././filepath.js”

Namespace Import:
Import * as WhicheverName from “././filepath.js”



______________________________________________________________________________________________Appendix A: Exploring further:

———————————————————— Implied Scopes:
Parameter Scope:
- Never shadow parameters with local variables - Avoid using a default parameter function that closes  over any of the parameters 
Function Name Scopes:
Var askQuestion = function oftheTheacher () {
	let oftheTeacher = “Confusing!!!”
}

Named Functions:
Function thisIsNamed () {
}
Ajax(“some.url”, function thisIsAlsoNamed () {}

Var notNamed = function () {}

makeRequest ({
	data: 42, 
	cb: function () {} // also a not named function
})

Var stillNotNamed = function butThisIs () {}

Anonymous function expressions passed as callbacks are incapable of receiving and inferred name.

The advise is to always name functions!!!

———————————————————— Arrow Functions:
They are always anonymous
They don’t define this keyword at all

———————————————————— IIFE variations:
(Function putANameHere() {
}) (); 
You can use !, +, or other unary operators instead of () to define IIFE or just the word void.

———————————————————— Hoisting: Functions and Variables:
Function hoisting (lifting) makes code more readable through a flowing progressive reading order, from top to bottom (calling a function before it is defined)
Variable hoisting is a bad idea :(

The case for “Var”:
Const could be dangerous because it can’t be reassigned but you can push or add a key in case they are an array or object, so it could be a trap for future readers of your code.
Always use var in the top-level scope of any function
Rarely use a var inside a block that’s what let is for

TDZ: Temporal Dead Zone:
Var initializes a variable to the whole scope, but let does not
Const can’t change its value, so it can’t be first undefined, to be reachable from the whole scope and then change to a value, so it is in the TDZ
But, the author Thinks there is an error locating let in TDZ because is more alike to var than to const. 

Are Synchronous Callbacks still Closures?
Closure is a function instance remembering it outer variables even as that function is passed around and invoked in other scopes
Closure is a function instance and its scope environment being preserved in-place while any references to it are passed around and invoked from other scopes. 

———————————————————— Classic Module Variations:
Var studentList = (function defineModule(Student) {
	var elms =[];

	var publicAPI = {
		renderList();
	}
	
	return publicAPI;
})(Student);

Asynchronous Module Definition (AMD):

define([“./Student”], function StudentList (Student) {
	var elms = [];
	
	return {
		renderList () {
		}
	}
})

Universal Modules (UMD):

(Function UMD(name, context, definition) {
	if (typeof define === “function” && define.amd) {
		define(definition)
	} else if ( typeof module !== “undefined” && module.exports) {
		module.exports = definiton(name, context)
	} else {
		context[name] = definition(name, context)
	}
}) (“StudentList”, this, function DEF(name, context) {
	var elms = [];

	return {
		render list () {}
	}
})
















