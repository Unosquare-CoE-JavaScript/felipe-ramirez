var MAINAPP = (function(nsp) {
    "use strict";

    var url = 'https://jsonplaceholder.typicode.com/';
    
    (async function () {
        try {
            let posts = await fetch(url + 'posts/'), 
                comments = await fetch(url + 'comments/'),
                todos = await fetch(url + 'todos/');
            
            let data = await Promise.all([posts, comments, todos])
            nsp.posts = await data[0].json();
            nsp.comments = await data[1].json();
            nsp.todos = await data[2].json();

        } catch (err) {
            console.log(`Problem retrieving todos: ${err}`)
        }
    })();

    //public
    return nsp;
})(MAINAPP || {});

