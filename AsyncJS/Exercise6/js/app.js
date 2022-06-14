"use strict";

//Refactor the promise code to create an async function that will take a todo object as a parameter and add the todo to the jsonplaceholder site. Make sure you account for possible errors.

let todo = {
    completed: false,
    userId: 1,
    title: "Learn Promises"
};

(async function mainFunction (){
    try {
        let resultPost = await fetch('https://jsonplaceholder.typicode.com/todos/', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(todo)
        })
        let resultObj = await resultPost.json();
        console.log(resultObj);
    } catch(error) {
        console.log(error);
    }
})();

console.log('Other code');