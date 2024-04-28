# JavaScript Algorithms And Data Structures

### Learning JavaScript Algoritm and Data Structure by Building Projects from the FreeCodeCamp certification course

## Table of Contents | Projects

+ Pyramid Generator

### Pyramid Generator summary

In this practice project, you'll learn fundamental programming concepts in JavaScript by coding a `Pyramid Generator`. You'll learn how to work with _`arrays`_, _`strings`_, _`functions`_, _`loops`_, _`if/else`_ statements, and more.

### Building Block Basics: Pyramid Project Breakdown

- `Looping:` The project utilizes for loops to _`iterate`_ over rows and columns, which are fundamental programming concepts.

```javascript
for (let i = 0; i < rows; i++) {
  let row = padRow(i, rows);
  rows.push(row);
}
```

- `String Manipulation`: It demonstrates string manipulation techniques such as _`concatenation`_ `(+)` and repetition _`(repeat() method)`_, which are essential for formatting text output.

```javascript
let row = " ".repeat(rows - i - 1) + "*".repeat(2 * i + 1) + " ".repeat(rows - i - 1);
```

- `Conditional Statements:` The code includes conditional statements _`(if statement)`_ to handle whether to generate an inverted pyramid or not based on the inverted variable.

```javascript
if (inverted) {
  rows = rows.reverse();
}
```

- `Functions`: It defines a function _`padRow()`_ to generate each row of the pyramid. This introduces beginners to _`function`_ creation and `parameter` passing.

```javascript
function padRow(i, rows) {
  return " ".repeat(rows - i - 1) + "*".repeat(2 * i + 1) + " ".repeat(rows - i - 1);
}
```

- `Arrays:` The project uses _`arrays`_ _`(rows)`_ to store each row of the pyramid before printing.

```javascript
let rows = [];
```

- `Console Output`: It prints the final result to the console, teaching beginners how to output information for _`debugging`_ or `display purposes`.

```javascript
console.log(rows.join("\n"));
```

_Overall, by building this project, beginners would reinforce their understanding of basic programming constructs like `looping`, `conditional statements`, `functions`, and `string manipulation` while creating a visually appealing pattern_.
