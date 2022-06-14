"use strict"

let asyncFunction = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            resolve("Async function has resolved");
        }, 4000);
    })

};

let asynFunction2 = function () {
    return new Promise(function (resolve, reject){
        setTimeout(function () {
            resolve("Async Function2 is done.");
        }, 3000);
    })
};


asyncFunction()
.then(function (val) {
    console.log(val)
    return asynFunction2();
})
.then(function (val) {
    console.log(val);
});

console.log("its truly async")