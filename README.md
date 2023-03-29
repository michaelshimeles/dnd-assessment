# Name Sorter

This program sorts a list of names alphabetically by last name and writes the sorted list to a new file.

## Installation
Clone the repository and run `npm install` to install dependencies.

## Usage
Run the program with `node index <input-file>`, where `<input-file>` is the name of the file containing the unsorted list of names.

Example usage: `node index unsorted-names-list.txt`

## Tests
Run tests with `npm test`.

## Test Cases
Should sort names alphabetically by last name: Asserts that the `sortNames` function correctly sorts a list of names alphabetically by last name. Handles edge case of first letter in names not being capitalized

## Known Issues
None currently.

## Acknowledgements
This unit test was created using Jest.

## Authors
Michael Shimeles
