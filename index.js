const { sortNames } = require("./nameSorter");

// Get the input file path from the command line arguments
const inputFilePath = process.argv[2];

const outputFilePath = "sorted-names-list.txt"

// Call the sortNames function with the input and output file path
sortNames(inputFilePath, outputFilePath);
