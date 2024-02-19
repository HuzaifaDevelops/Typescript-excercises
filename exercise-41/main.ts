function show_magicians(magicians: string[]): void {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

const magicians: string[] = [
  "Magician1",
  "Magician2",
  "Magician3",
  "Magician4",
];

show_magicians(magicians);
