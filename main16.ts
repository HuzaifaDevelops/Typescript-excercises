let peoples: string[] = ["Kamran Tessori", "Waqar Zaka", "Ashneer Grover"];

peoples.forEach((person) => {
  console.log(
    `Dear Sir \n ${person} I'd really like to invite you for a dinner\n`
  );
});

let absentGuest: string = "Ashneer Grover";

console.log(`\n **** ${absentGuest}, "can't join us ****\n`);

peoples[2] = "Muhammad Haris aka (codeWithHarry)";

peoples.forEach((person) => {
  console.log(
    `Dear Sir \n ${person} I'd really like to invite you for a dinner\n`
  );
});

console.log(
  "\n **** We found a bigger table so we're inviting 3 guests more ****\n"
);

peoples.unshift("Zia Khan");
peoples.splice(2, 0, "Danial Nagori");
peoples.push("Junaid Akram");

peoples.forEach((person) => {
  console.log(
    `Dear Sir \n ${person} I'd really like to invite you for a dinner\n`
  );
});
