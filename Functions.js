function greet() {
    console.log("hello");
}

greet();


function add(a, b) {
    return a + b;
}

console.log(add(1, 2));


function add(a, b) {
    console.log(a + b)
}
add(3, 6);


// ==================== ARROW FUNCTIONS ====================

const add = (a, b) => {
    return a + b;
};

console.log(add(1, 2));


const add = (a, b) => a + b;

console.log(add(1, 2));
