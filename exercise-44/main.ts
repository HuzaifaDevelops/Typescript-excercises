function make_sandwich(items: string[]): void {
  console.log("\nSandwich order summary:");
  console.log("  - Customer needs following sandwiches:");
  items.forEach((item, index) => {
    console.log(`\t${index + 1}. ${item}`);
  });
}

make_sandwich(["Club Sandwich", "Cheese Sandwich", "Egg Sandwich"]);
make_sandwich(["Grilled Sandwich", "Veggies Sandwich"]);
make_sandwich(["Chichken Sandwich"]);
