const apple: string = "apple";
const banana: string = "banana";
console.log(
  "Test for equality with strings: 'apple' == 'apple'. I predict True."
);
console.log("apple" == "apple");

console.log(
  "Test for inequality with strings: 'apple' != 'banana'. I predict True."
);
console.log(apple !== banana);

console.log(
  "Test using lowercase function: 'HELLO'.toLowerCase() === 'hello'. I predict True."
);
console.log("HELLO".toLowerCase() === "hello");

const a: number = 5;
const b: number = 10;
console.log("Numerical test for equality: 5 == 5. I predict True.");
console.log(5 == 5);

console.log("Numerical test for inequality: 5 != 10. I predict True.");
console.log(a != b);

console.log("Numerical test for greater than: 10 > 5. I predict True.");
console.log(10 > 5);

console.log("Numerical test for less than: 5 < 10. I predict True.");
console.log(5 < 10);

console.log(
  "Numerical test for greater than or equal to: 10 >= 10. I predict True."
);
console.log(10 >= 10);

console.log(
  "Numerical test for less than or equal to: 5 <= 10. I predict True."
);
console.log(5 <= 10);

let c: boolean = true;
let d: boolean = false;

console.log("Test using 'and' operator: true && true. I predict True.");
console.log(a && true);

console.log("Test using 'or' operator: true || false. I predict True.");
console.log(true || b);

const fruits = ["apple", "banana", "orange"];
console.log("Test whether 'apple' is in the fruits array. I predict True.");
console.log(fruits.includes("apple"));

console.log("Test whether 'grape' is not in the fruits array. I predict True.");
console.log(!fruits.includes("grape"));
