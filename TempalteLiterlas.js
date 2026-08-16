const name = "Urvi";
const age = 21;
const city = "Pune";

// ==================== TEMPLATE LITERALS ====================

// Variable interpolation using ${}

console.log(`My name is ${name} and I am ${age} years old. I live in ${city}.`);


// Multi-line string

console.log(`This is a
multi-line
string`);


// Template literal with function

function greet(name) {
    return `Hello ${name}`;
}

console.log(greet("Urvi"));
