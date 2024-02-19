// Function to show magicians
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}


function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}


const originalMagicians: string[] = ["Magician1", "Magician2", "Magician3", "Magician4"];


const modifiedMagicians: string[] = make_great([...originalMagicians]);


console.log("Original Magicians:");
show_magicians(originalMagicians);


console.log("\nModified Magicians:");
show_magicians(modifiedMagicians);
