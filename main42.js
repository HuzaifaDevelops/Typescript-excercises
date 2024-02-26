function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
var magicians = ["Magician", "Magician2", "Magician3", "Magician4"];
magicians = make_great(magicians);
show_magicians(magicians);
