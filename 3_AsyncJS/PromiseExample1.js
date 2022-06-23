"use strict"

const swapi = function (num) {
    let url = "https://swapi.dev/api/people/";
    fetch(url + num + "/")
    .then(function (data) {
        return data.json()
    })
    .then(function (data) {
        return fetch (data.homeworld);
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (response) {
        console.log(response)
    })
    .catch(function (err) {
        console.log(err)
    })
}

swapi(1)