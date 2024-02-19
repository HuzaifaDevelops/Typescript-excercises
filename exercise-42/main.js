// Function to show magicians
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Function to make magicians great
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Array of magician's names
var magicians = ["Magician", "Magician2", "Magician3", "Magician4"];
// Call make_great to modify the array
magicians = make_great(magicians);
// Call the function to show magicians
show_magicians(magicians);
