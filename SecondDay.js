let a = 5, b = 7, c = 9;
if (a < b) {
    console.log("b is greater than a");
}
else if (b < c) {
    console.log("c is greater than b");
}
else {
    console.log("a is greater than c");
}


let food = "masta";

switch (food) {
    case "pizza":
        console.log("pizza");
        break;
    case "burger":
        console.log("burger");
        break;
    case "pasta":
        console.log("pasta");
        break;
    default:
        console.log("other food not in the menu");
}


let i = 0;
while (i <= 5) {
    console.log(i);
    i++;
}


let j = 10;
do {
    console.log(j);
    j--;
} while (j >= 5);
