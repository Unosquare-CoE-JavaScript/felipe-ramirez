var MAINAPP =(function(nsp) {
    "use strict";

    (async function () {
        try {
            let url = 'https://jsonplaceholder.typicode.com/';
            let posts = await fetch(url + 'posts/');
            nsp.posts = await posts.json();
        } catch (err) {
            console.log(`Problem retrieving posts: ${err}`)
        } 
    })();

    //public
    return nsp;
})(MAINAPP || {});


