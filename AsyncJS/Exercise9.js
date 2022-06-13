"use strict";

let getRandomeNumber = function *(end) {
    while (true) {
        let randomNumber = Math.floor(Math.random()* end) + 1;
        yield randomNumber;
    }
}

let test = getRandomeNumber(100);
