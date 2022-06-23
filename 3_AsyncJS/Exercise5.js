
"use strict";

var url = "https://jsonplaceholder.typicode.com";

var retrievePost = async function getData (userId) {
    let posts = await fetch(url + '/posts').then(response => response.json());
    let postsFiltered = posts.filter(function(post) {
        return post.userId === userId
    })
    return postsFiltered
};

var MAINAPP = (async function () {
    return await retrievePost(3)
})();



