"use strict";
/*You are now ready to start building your pyramid generator. Your character variable will serve as the building block for the pyramid.
"Hello" might not work very well for that. Change the value of character to be the hash character "#".*/

/*Pyramid Game Logic
We are going to start with a basic for loop. for loops use the following syntax:
for (iterator; condition; iteration) {
    logic;
  }*/
const character = "!";
const count = 10;
const rows = [];
let inverted = false;
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
padRow();

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}
let result = "";

for (const row of rows) {
  result = result + "\n" + row;
}
console.log(result);
