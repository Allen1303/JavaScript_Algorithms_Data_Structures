# JavaScript Algorithms And Data Structures

### Learning JavaScript Algoritm and Data Structure by Building Projects from the FreeCodeCamp certification course

## Table of Contents | Projects

+ Pyramid Generator
+ Roll Playing Game
+ Calorie Counter App

### Pyramid Generator summary

In this practice project, you'll learn fundamental programming concepts in JavaScript by coding a `Pyramid Generator`. You'll learn how to work with _`arrays`_, _`strings`_, _`functions`_, _`loops`_, _`if/else`_ statements, and more.

---
### Role Playing Game summary
In this practice project, you'll learn fundamental programming concepts in`JavaScript` by coding a` Role Playing Game`. You'll learn how to work with _`arrays`_, _`strings`_, _`objects`_, _`functions`_, _`loops`_, _`if/else`_ statements, and more.

---
### Calorie Counter App

In this calorie counter project, you'll learn how to validate user input, perform calculations based on that input, and `dynamically` `update your interface` to display the results.
In this practice project, you'll learn `basic regular expressions`, `template literals`, the `addEventListener() method`, and more.

---
### Pyramid Project Breakdown Key Features

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

---

### RPG Project Breakdown Key Features
Game Features Summary:

1. __`Player Attributes`__: The game keeps track of the player's attributes such as experience points (xp), health, gold, current weapon, and inventory.

```javascript
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let inventory = ["stick"];

```
2. __`Game Locations`__: The game has various locations that the player can navigate through, each with its own set of options and descriptions.
  
  ```javascript
  const locations = [
  {
    name: "Town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: "You are in the town square. You see a sign that says \"Store\"."
  }
  // Other location objects...
  ];

```
3. __`Player Actions`__: The player can perform actions such as buying health, buying weapons, fighting `monsters`, `dodging attacks`, and initiating `special events`.

```javascript
function buyHealth() { /* Function to buy health */}
function buyWeapon() { /* Function to buy a weapon */ }
function attack() { /* Function to attack a monster */ }
function dodge() { /* Function to dodge attacks */ }
function easterEgg() { /* Function to initiate an Easter egg event */ }
```

4. __`Game Progression`__: The game allows for progression through defeating monsters, winning battles, or reaching specific milestones.
```javascript
function defeatMonster() { /* Function to handle defeating a monster */ }
function lose() { /* Function to handle the player losing the game */ }
function winGame() { /* Function to handle the player winning the game */ }
```
These features provide a comprehensive gameplay experience with various` interactions` and `challenges` for the `player.`
