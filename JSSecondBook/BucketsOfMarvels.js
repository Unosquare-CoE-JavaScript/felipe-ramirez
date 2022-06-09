// red (1) Global Scope
var vowels 

function firstFunction (str1) {
    // Blue (2)
    let vowels = ['a','e','i','o','u'] // Shadowing the var from the global scope
    return function vowelFinder(str2) { // Function Scope
        // Green (3)
        let foundVowels = []
        for (let i = 0; i < str1.length; i++) { // Identifier
            // Orange (4) 
            if (vowels.includes(str1[i])) {
                foundVowels.push(str1[i])
            }
        }
        for (let i = 0; i < str2.length; i++) { // Block Scopes
            // Orange (4)
            if (vowels.includes(str2[i])){
                foundVowels.push(str2[i])
            }
        }
        return foundVowels
    }
}

let stringWithVowel = firstFunction('hola')
console.log(stringWithVowel('felipe'))