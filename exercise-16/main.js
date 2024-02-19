var peoples = ["Kamran Tessori", "Waqar Zaka", "Ashneer Grover"];
peoples.forEach(function (person) {
    console.log("Dear Sir \n ".concat(person, " I'd really like to invite you for a dinner\n"));
});
var absentGuest = "Ashneer Grover";
console.log("\n **** ".concat(absentGuest, ", \"can't join us ****\n"));
peoples[2] = "Muhammad Haris aka (codeWithHarry)";
peoples.forEach(function (person) {
    console.log("Dear Sir \n ".concat(person, " I'd really like to invite you for a dinner\n"));
});
console.log("\n **** We found a bigger table so we're inviting 3 guests more ****\n");
peoples.unshift("Zia Khan");
peoples.splice(2, 0, "Danial Nagori");
peoples.push("Junaid Akram");
peoples.forEach(function (person) {
    console.log("Dear Sir \n ".concat(person, " I'd really like to invite you for a dinner\n"));
});
