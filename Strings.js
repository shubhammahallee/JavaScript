// ==================== STRING METHODS ====================

let name = "Urvi";

console.log(name.length);                  // 4
console.log(name.toUpperCase());           // URVI
console.log(name.toLowerCase());           // urvi
console.log(name.includes("Urvi"));        // true
console.log(name.startsWith("Ur"));        // true
console.log(name.endsWith("vi"));           // true
console.log(name.charAt(0));               // U
console.log(name.indexOf("r"));            // 1
console.log(name.replace("Urvi", "Shubham")); // Shubham
console.log(name.slice(0, 2));             // Ur
console.log(name.substring(0, 2));         // Ur
console.log(name.trim());                  // Urvi
console.log(name.split(""));               // [ 'U', 'r', 'v', 'i' ]
console.log(name.concat(" is a student")); // Urvi is a student
console.log(name.repeat(3));               // UrviUrviUrvi


// ==================== REGEX ====================

let mail = "urvigoel@gmail.com";

console.log(mail.match(/gmail/)?.[0]);
// gmail


let pass = "Urvi@123";

console.log(pass.match(/^[a-zA-Z0-9]{8,}$/));
// null because @ is not allowed
