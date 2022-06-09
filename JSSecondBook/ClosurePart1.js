
function isPrime (v) {
    let isPrime = function Idk () {
        if (v <= 3) {
            return v > 1
        }
        if (v % 2 == 0 || v % 3 == 0) {
            return false
        }
        var vSqrt = Math.sqrt(v);
        for (let i = 5; i <= vSqrt; i += 6) {
            if (v % i == 0 || v % (i + 2) == 0) {
                return false
            }
        }
        return true
    }

    return function factorize () {
        console.log(isPrime)
        if (!isPrime){
            let i = Math.floor(Math.sqrt(v));
            while ( v % i != 0){
                i--;
            } 
            return [
                ... factorize(i),
                ...factorize(v/i)
            ]
        }
        return [v]
    }
}

var testOne = isPrime()
console.log(testOne(16))



