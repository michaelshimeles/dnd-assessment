const { sortNames } = require("./nameSorter");
const fs = require("fs");

describe("sortNames", () => {
  const inputFilePath = "./unsorted-test.txt";
  const outputFilePath = "./sorted-test.txt";

  it("should sort names alphabetically by last name even if the names don't start with capital letters", () => {
    sortNames(inputFilePath, outputFilePath);
    const output = fs.readFileSync(outputFilePath, "utf-8");
    expect(output.trim()).toEqual("Michael Black\nJohn Cena\nDwayne Rock");
  });
});
