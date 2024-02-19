var personName = "Muhammad Huzaifa";
var lowercaseName = personName.toLowerCase();
var uppercaseName = personName.toUpperCase();
function toTitleCase(input) {
    return input
        .toLowerCase()
        .split(" ")
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
        .join(" ");
}
var titleCaseString = toTitleCase(personName);
console.log("Lowercase:", lowercaseName);
console.log("Uppercase:", uppercaseName);
console.log("Titlecase", titleCaseString);
