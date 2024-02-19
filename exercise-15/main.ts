let peoples: string[] = ["Kamran Tessori", "Waqar Zaka", "Ashneer Grover"];

peoples.forEach((person) => {
  console.log(
    `Dear Sir \n ${person} I'd really like to invite you for a dinner\n`
  );
});

let absentGuest: string = "Ashneer Grover";

console.warn(absentGuest, "can't join us\n\n");
peoples[2] = "Muhammad Haris aka (codeWithHarry)";

peoples.forEach((person) => {
  console.log(
    `Dear Sir \n ${person} I'd really like to invite you for a dinner\n`
  );
});
