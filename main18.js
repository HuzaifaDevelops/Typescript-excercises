var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Switzerland", "Dubai", "America", "Maldives", "Japan"];
console.log("Original Order:");
console.log(places);
console.log("\nAlphabetical Order (without modifying original list):");
console.log(__spreadArray([], places, true).sort());
console.log("\nOriginal Order");
console.log(places);
console.log("\nReverse Alphabetical Order (without modifying original list):");
console.log(__spreadArray([], places, true).reverse());
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
