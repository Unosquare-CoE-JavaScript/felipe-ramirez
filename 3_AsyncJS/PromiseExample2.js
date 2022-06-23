// "use strict"
/*
fetch(url)
.then(data => data.json())
.then(obj => console.log(obj))

var url = "https://jsonplaceholder.typicode.com/todos/";
var todo = { 
    completed: false,
    userId: 1,
    title: "Learn Promises"
};

fetch(url, {
    method: 'POST',
    headers: {
      "Content-type": "application/json"  
    },
    body: JSON.stringify(todo)
})
.then(resp => resp.json())
.then(obj => console.log(obj))
.catch(err => console.log(err))
*/

(function test() {
    console.log(5)
})();