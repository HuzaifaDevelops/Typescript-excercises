let places: string[] = ["Switzerland", "Dubai", "America", "Maldives", "Japan"];

console.log("Original Order:");
console.log(places);

console.log("\nAlphabetical Order (without modifying original list):");
console.log([...places].sort());

console.log("\nOriginal Order");
console.log(places);

console.log("\nReverse Alphabetical Order (without modifying original list):");
console.log([...places].reverse());

console.log("\nOriginal Order");
console.log(places);

// Reverse the order of the list
places.reverse();
console.log("\nReversed Order:");
console.log(places);

places.reverse();
console.log("\nRestored Original Order:");
console.log(places);

places.sort();
console.log("\nSorted in Alphabetical Order:");
console.log(places);

places.reverse();
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(places);
