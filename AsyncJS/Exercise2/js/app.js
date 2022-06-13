var MAINAPP = (function(nsp) {
    "use strict";

    var url = "https://jsonplaceholder.typicode.com";
    var nsp = {}

    let posts = fetch(url + '/posts')
        .then(response => response.json());
        
    let comments = fetch(url + '/comments')
        .then(response => response.json());
    
    let todos = fetch(url + '/todos')
        .then(response => response.json());


    Promise.all([posts, comments, todos])
        .then((result) => {
            nsp.posts = result[0]
            nsp.comments = result[1]
            nsp.todos = result[2]
        })
        .catch ((msg) =>{
            console.error(msg)
        })
    //public
    return nsp;
})(MAINAPP || {});