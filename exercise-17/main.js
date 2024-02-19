var peoples = ["Kamran Tessori", "Waqar Zaka", "Ashneer Grover"];
// peoples.forEach((person) => {
//   console.log(
//     `Dear Sir \n ${person} I'd really like to invite you for a dinner\n`
//   );
// });
var absentGuest = "Ashneer Grover";
// console.log(`\n **** ${absentGuest}, "can't join us ****\n`);
peoples[2] = "Muhammad Haris aka (codeWithHarry)";
// peoples.forEach((person) => {
//   console.log(
//     `Dear Sir \n ${person} I'd really like to invite you for a dinner\n`
//   );
// });
// console.log(
//   "\n **** We found a bigger table so we're inviting 3 guests more ****\n"
// );
peoples.unshift("Zia Khan");
peoples.splice(2, 0, "Danial Nagori");
peoples.push("Junaid Akram");
// peoples.forEach((person) => {
//   console.log(
//     `Dear Sir \n ${person} I'd really like to invite you for a dinner\n`
//   );
// });
console.log("\n **** Really really sorry I just see there our table won't arrive at time so unfortunately we're inviting just 2 guests ****\n");
while (peoples.length > 2) {
    var guest = peoples.pop();
    console.log("\n **** Sorry Sir ".concat(guest, " you're not invited ****\n"));
}
for (var i = 0; i < peoples.length; i++) {
    console.log("Dear Sir ".concat(peoples[i], " \n you're still invited\n "));
}
peoples.splice(0, 2);
console.log(peoples);
// peoples.forEach((person) => {
//   console.log(
//     `Dear Sir \n ${person} I'd really like to invite you for a dinner\n`
//   );
// });
