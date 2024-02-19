function make_sandwich(items) {
    console.log("\nSandwich order summary:");
    console.log("  - Customer needs following sandwiches:");
    items.forEach(function (item, index) {
        console.log("\t".concat(index + 1, ". ").concat(item));
    });
}
make_sandwich(["Club Sandwich", "Cheese Sandwich", "Egg Sandwich"]);
make_sandwich(["Grilled Sandwich", "Veggies Sandwich"]);
make_sandwich(["Chichken Sandwich"]);
