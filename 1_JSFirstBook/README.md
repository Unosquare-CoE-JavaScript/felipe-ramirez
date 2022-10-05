<!------------------------------------------------------------------------------------------------------------------------------>JS
Tags:
Label
Primitives
Objects
Classes
Modules
ECMAScript
Clousure
This keyword
Prototypes

<!------------------------------------------------------------------------------------------------------------------------------>Chapter 1 What is JS:

Babel is used for convert from a newer JS syntax version to an equivalent older syntax

<Link>
https://babeljs.io
</Link>

The flow of written code is the following:

1. After a program leaves a developer’s editor, it gets transpired by Babel (then packed by web pack)
2. The JS engine parses the code to an AST
3. Then the engine converts that AST to a kind-of byte code
4. Finally the JS Virtual Machine executes the program
   In conclusion, JS is a compiled language, multi-paradigm language (Procedural, Object Oriented, Functional)

Chapter 2: Surveying JS
values: primitives and objects,

<Link>
https://www.edureka.co/blog/data-types-in-javascript/
</Link>
Primitives: number, string, boolean, undefined
Objects: Arrays, object
Function: function
Declaring and using variables
Difference between var, let, const and function

<!------------------------------------------------------------------------------------------------------------------------------>Chapter 2: How to organize JS

✅ ————————————————Classes———————————————————————
<Link>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
</Link>
Class Inheritance: it refers to how a class can inherit behaviors of a parent class using the keyword extends and super, example:

Class Publication {
constructor(title, author, pubDate) {
this.title = title;
this.author = author;
this.pubDate = pubDate;
}

    print () {
    	console.log(this.title, this.author, this.pubDate)
    }

}

Class Book extends Publication {
constructor (bookDetails){
super(
bookDetails.title,
bookDetails.author,
bookDetails.PublishedOn
);
this.publisher = bookDetails.publisher
this.ISB = bookDetails.ISBN
}
print() {
super.print();
console.log(this.publisher, this.ISBN)
}
}

Child classes:

    var YDKJSY = new Book ({
    	title: “title of the book”,
    	author: “Me”,
    	publishedOn: “Today”,
    	publisher: “OMG”,
    	ISBN: “12345”
    })

    YDKJSY.print() /* It prints all data from book, including parent class and child class, print method in this case was overridden of the inherited print()
    The reason that both inherited and overridden methods can have the same name (print) and co-exist is called polymorphism */

✅ ————————————————————— Modules ———————————————————————————
<Link>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
</Link>
This is the way the class above is written using modules:

Function Publication(title, author, pubDate) {
	var publicAPI = {
		print() {
			console.log(title, author, pubDate)
			}
		return public API
	}
}

Function Book (bookDetails) {
	var pub = Publication(
	bookDetails.title,
	bookDetails.author,
	bookDetails.publishedOn
)

    var publicApi = {
    	print() {
    		pub.print():
    		console.log(bookDetails.publisher, bookDetails.ISBN
    	}
    }

    return publicAPI

}

✅ ——————————————————————————ECMAScript Modules————————————————————————
<Link>
https://nodejs.org/dist./v14.10.0/docs/api/esm.html
</Link>
Consider the file publication.js

Function printDetails(title, author, pubDate) {
console.log(title, author, pubDate)
}

Export function create(title, author, pubDate) {
	var publicAPI = {
		print() {
			printDetails(title, author, pubDate)
		}
	}
	return publicAPI
}

To import and use this module, from another ES module like blogpost.js:

Import { create as createPub } from “publication.js”;

Function printDetails(pub, URL) {
	pub.print():
	console.log(URL)
}

Export function create(title, author, pubDate, URL) {
var pub = createPub(title, author, pubDate);

    var publicAPI = {
    	print() {
    		printDetails(pub, URL);
    	}
    }

    return publicAPI

}

And finally to use this module, we import into another ES module like main.js

Import { create as newBlogPost } from “blogpost.js”

Var forAgainstLet = newBlogPost(
“name”,
“author”,
“date”,
“url”
)

forAgainstLet.print()

<!------------------------------------------------------------------------------------------------------------------------------>Chapter 3: Digging to the roots of JS

✅ —————————— Clousure ——————————:
<Link>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
</Link>

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

✅ —————————— “This” keyword——————————:
<Link>
https://www.w3schools.com/js/js_this.asp
</Link>

Function classroom(teacher) {
	return function study() {
		console.log( teacher, this.topic)
	}
}

Var assignment = classroom(“Felipe”)

assignment();
// Felipe, undefined (This.topic is undefined)

But, if you call the function giving a context like:

Var homework = {
topic: “JS”,
assignment: assignment
}

Homework.assignment ();
// Felipe, JS (this is not undefined anymore, because it has a context which is homework)

Finally, another way to call a function is using the word call

Var otherHomework = {
topic: “Math”
}
assignment.call(otherHomework)
//Felipe, Math (Now, this is solved with the new context otherHomework)

✅ ————————————— Prototypes ————————————— :

Consider defining an object as a normal literal:
Var homework = {
topic: “JS”
}
The homework object only has a single proper on it: topic but its default prototype linkage connects to the object.protype object which has common built-in methods on it like toString() and valueOf(), among others

✅ ————————————— Object Linkage ————————————— :

example:
Var otherHomework = Object.create(homework)
otherHomework.topic; (“JS”)

The two objects homeWork and otherHomework are linked by prototype Object, but if a property changes in one object does not mean the other will be changed

✅ ————————————— This and Prototypes————————————— :

Var homework = {
	study() {
		console.log(this.topic)
	}
}

Var jsHomework = Object.create(homework)
jsHomework.topic = “Js”
jsHomework.study(); // it prints “Js”

<!------------------------------------------------------------------------------------------------------------------------------>Chapter 4: The bigger Picture

✅ ————————————— Pillar 1: Scope and closure————————————— :
JS is lexically scoped.
Closure is a natural result of lexical scope when the language has functions as first-class values, as JS does, When a function makes reference to variables from an outer scope, and that function is passed around as a value and executed in other scopes, it maintains access to its original scope variables.

✅ ————————————— Pillar 2: Prototypes————————————— :
Class inheritance is similar to behavior delegation the first one uses POO and the second one uses prototypes to create objects using the same “features” as other.

✅ ————————————— Pillar 3: Types and coercion————————————— :
Types and conversion

<!------------------------------------------------------------------------------------------------------------------------------>Appendix A: Exploring Further

Primitive values create a copy when you assign to another value
myFirstVar = “Hola”
mySecondvar = myFirstVar // This is a copy
mySecondVar = “Adios”
console.log(myFirstVar) // Hola

But when you do the same with objects, a copy always make a reference between them

objectOne = {
	propertyOne: “hola”,
	propertyTwo: “hola2”
}

ObjectTwo = ObjectOne

ObjectTwo.propertyTwo = “Adios”

console.log(objectOne.propertyTwo) // Adios
