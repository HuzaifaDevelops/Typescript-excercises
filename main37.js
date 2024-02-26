var defaultLargeMessage = "I love TypeScript";
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = defaultLargeMessage; }
    return { size: size, message: message };
}
var largeShirt = make_shirt();
console.log("Large Shirt:", largeShirt);
var mediumShirt = make_shirt("medium");
console.log("Medium Shirt:", mediumShirt);
var customShirt = make_shirt("small", "Hello world");
console.log("Custom Shirt:", customShirt);
