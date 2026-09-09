// ==================== ARRAY BASICS ====================  

let arr = [1, 2, 3, 4, 5];  

console.log(arr); 
console.log(arr.length);

console.log(arr[0]);   // Access the first element using index 0
console.log(arr[1]);   // Access the second element using index 1
console.log(arr[2]);   // Access the third element using index 2
console.log(arr[3]);   // Access the fourth element using index 3
console.log(arr[4]);   // Access the fifth element using index 4

console.log("--------------------------------------------");  

// ==================== ADD / REMOVE ELEMENTS ====================

console.log(arr.unshift(6)); // Add an element at the beginning and return the new array length
console.log(arr.push(7)); // Add an element at the end and return the new array length

console.log(arr.shift()); // Remove and return the first element
console.log(arr.pop()); // Remove and return the last element
 
console.log(arr.splice(2, 2)); // Remove 2 elements starting from index 2 and return the removed elements
console.log(arr.slice(2, 4)); // Return elements from index 2 up to index 4 (index 4 is excluded); original array remains unchanged

console.log("--------------------------------------------");

// ==================== SEARCH METHODS ====================

console.log(arr.indexOf(0)); // Return the index of the element; return -1 if the element is not found
console.log(arr.indexOf(7)); // Return the index of the element; return -1 if the element is not found

console.log(arr.includes(0)); // Return true if the element exists; otherwise return false
console.log(arr.includes(7)); // Return true if the element exists; otherwise return false

console.log("--------------------------------------------");

// ==================== ARRAY TRANSFORMATION ====================

console.log(arr.reverse()); // Reverse the order of elements in the array
console.log(arr.sort()); // Sort the elements in the array

console.log(arr.toString()); // Convert the array into a string
console.log(arr.join("-")); // Convert array elements into a string using "-" as the separator

console.log("--------------------------------------------");

// ==================== ARRAY ITERATION ==================== 

// Traditional for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("--------------------------------------------");

// for...in → iterates over indexes
for (let i in arr) {
    console.log(arr[i]);
}

console.log("--------------------------------------------");

// for...of → iterates over values
for (let i of arr) {
    console.log(i);
}

console.log("--------------------------------------------");

// ==================== ARRAY OF OBJECTS ====================

let arr1 = [
    {
        name: "Shubham",
        age: 20,
        city: "Delhi"
    },
    {
        name: "Rahul",
        age: 21,
        city: "Mumbai"
    },
    {
        name: "Priya",
        age: 22,
        city: "Kolkata"
    }
];

console.log(arr1);

console.log("--------------------------------------------");

// ==================== FOREACH LOOP ====================

let arr2 = [1, 3, 5, 7, 9];

// forEach with normal function
arr2.forEach(function (element) {
    console.log(element);
});

console.log("--------------------------------------------");

// forEach with arrow function
arr2.forEach((element) => {
    console.log(element);
});

console.log("--------------------------------------------");

// forEach with implicit arrow function
arr2.forEach(element => console.log(element));
