//Muhammad Huzaifa
//So this programs contain a function and requires an argument of string and this function simply convert the string into Title Case..
var toTitleCase = function (str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
        .join(" ");
};
var username = toTitleCase("mUhammaD hUzaIfa");
console.log(username);
