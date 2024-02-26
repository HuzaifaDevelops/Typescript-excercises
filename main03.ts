let personName: string = "Muhammad Huzaifa";

let lowercaseName: string = personName.toLowerCase();

let uppercaseName: string = personName.toUpperCase();

function toTitleCase(input: string): string {
  return input
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const titleCaseString = toTitleCase(personName);

console.log("Lowercase:", lowercaseName);
console.log("Uppercase:", uppercaseName);
console.log("Titlecase", titleCaseString);
