interface Shirt {
  size: string;
  message: string;
}

const defaultLargeMessage: string = "I love TypeScript";

function make_shirt(
  size: string = "large",
  message: string = defaultLargeMessage
): Shirt {
  return { size, message };
}

const largeShirt: Shirt = make_shirt();
console.log("Large Shirt:", largeShirt);

const mediumShirt: Shirt = make_shirt("medium");
console.log("Medium Shirt:", mediumShirt);

const customShirt: Shirt = make_shirt("small", "Hello world");
console.log("Custom Shirt:", customShirt);
