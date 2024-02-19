var peoples = ["Kamran Tessori", "Waqar Zaka", "Ashneer Grover"];
peoples.forEach(function (person) {
    console.log("Dear Sir \n ".concat(person, " I'd really like to invite you for a dinner\n"));
});
var absentGuest = "Ashneer Grover";
console.warn(absentGuest, "can't join us\n\n");
peoples[2] = "Muhammad Haris aka (codeWithHarry)";
peoples.forEach(function (person) {
    console.log("Dear Sir \n ".concat(person, " I'd really like to invite you for a dinner\n"));
});
