const fs = require("fs");

const readNamesFromFile = (inputFilePath) => {
  if (!inputFilePath) {
    throw new Error("Input file path is required");
  }
  // Reading the names from the file and putting them in an array & removing any empty lines;
  const readNames = fs
    .readFileSync(inputFilePath, "utf-8")
    .split("\n")
    .filter((line) => line.trim() !== "");

  return readNames;
};

const writeSortedNamesToFile = (outputFilePath, sortedNames) => {
  // Write the sorted list of names to the output file
  fs.writeFileSync(
    outputFilePath,
    sortedNames.map((name) => `${name.givenNames} ${name.lastName}`).join("\n")
  );
};

const sortNames = (inputFilePath, outputFilePath) => {
  const readNames = readNamesFromFile(inputFilePath);

  // extract givenNames and lastName
  const extractNames = readNames.map((name) => {
    const names = name.split(" ");

    // capitalize first letter of last name
    const lastName = names.pop().replace(/^\w/, (c) => c.toUpperCase());

    // capitalize first letter of given names
    const givenNames = names
      .map((n) => n.replace(/^\w/, (c) => c.toUpperCase()))
      .join(" ");
      
    return { lastName, givenNames };
  });

  // Sort by lastname, if lastname is the same, sort by given names
  extractNames.sort((a, b) => {
    if (a.lastName < b.lastName) return -1;
    if (a.lastName > b.lastName) return 1;
    if (a.givenNames < b.givenNames) return -1;
    if (a.givenNames > b.givenNames) return 1;
    return 0;
  });

  // print the sorted list of names to the console
  console.log(
    extractNames.map((name) => `${name.givenNames} ${name.lastName}`).join("\n")
  );

  writeSortedNamesToFile(outputFilePath, extractNames);
};

module.exports = { sortNames };

