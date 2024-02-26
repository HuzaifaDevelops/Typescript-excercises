var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Function to show magicians
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
var originalMagicians = ["Magician1", "Magician2", "Magician3", "Magician4"];
var modifiedMagicians = make_great(__spreadArray([], originalMagicians, true));
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("\nModified Magicians:");
show_magicians(modifiedMagicians);
