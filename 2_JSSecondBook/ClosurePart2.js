
function toggle (...values) {
    return function printValues () {
        let randomIndex = Math.floor(Math.random() * values.length)
        console.log(randomIndex)
        return values[randomIndex]
    }

}

var hello = toggle("hello");
var onOff = toggle("on", "off");
var speed = toggle("slow", "medium", "fast");

console.log(hello());
console.log(hello());

console.log(onOff());
console.log(onOff());
console.log(onOff());

console.log(speed());
console.log(speed());
console.log(speed());
console.log(speed());