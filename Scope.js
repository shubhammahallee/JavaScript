// ==================== GLOBAL & LOCAL SCOPE ====================

// Global variables
let x = 5; 
let y = 10;


// Local variable inside function
function demonstrateLocalScope() {
    let z = 11;

    // Global variable can be accessed inside the function
    console.log(x);
}

demonstrateLocalScope();


// Local variable belongs only to its function
function demonstrateLocalVariable() {
    let z = 12;

    console.log(z);
}

demonstrateLocalVariable();


// Global variables are accessible inside different functions
function demonstrateGlobalScope() {
    console.log(x, y);
}

demonstrateGlobalScope();
