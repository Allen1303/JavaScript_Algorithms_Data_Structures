# JavaScript Algorithms And Data Structures

### Learning JavaScript Algoritm and Data Structure by Building Projects from the FreeCodeCamp certification course

## Table of Contents | Projects

- **Pyramid Generator**
- **Roll Playing Game**
- **Calorie Counter App**
- **Music Player App**

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

### Music Player App

We will learn about some essential `string` and `array methods` like the `find()`, `forEach()`, `map()`, and `join()`. These methods are `crucial` for developing dynamic web applications.

In this project, we code a basic `MP3 player` using `HTM`L, `CSS`, and `JavaScript`. The project covers fundamental concepts such as handling `audio playback`, `managing a playlist`, `implementing play`, `pause`, `next`, `previous`, and `shuffle functionalities`. You'll even learn how to dynamically update your user interface based on the current song.

---

### Pyramid Project Key Concepts

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

### RPG Project Key Concepts

Game Features Summary:

1. **`Player Attributes`**: The game keeps track of the player's attributes such as experience points (xp), health, gold, current weapon, and inventory.

```javascript
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let inventory = ["stick"];
```

2. **`Game Locations`**: The game has various locations that the player can navigate through, each with its own set of options and descriptions.

```javascript
const locations = [
  {
    name: "Town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: 'You are in the town square. You see a sign that says "Store".',
  },
  // Other location objects...
];
```

3. **`Player Actions`**: The player can perform actions such as buying health, buying weapons, fighting `monsters`, `dodging attacks`, and initiating `special events`.

```javascript
function buyHealth() {
  /* Function to buy health */
}
function buyWeapon() {
  /* Function to buy a weapon */
}
function attack() {
  /* Function to attack a monster */
}
function dodge() {
  /* Function to dodge attacks */
}
function easterEgg() {
  /* Function to initiate an Easter egg event */
}
```

4. **`Game Progression`**: The game allows for progression through defeating monsters, winning battles, or reaching specific milestones.

```javascript
function defeatMonster() {
  /* Function to handle defeating a monster */
}
function lose() {
  /* Function to handle the player losing the game */
}
function winGame() {
  /* Function to handle the player winning the game */
}
```

These features provide a comprehensive gameplay experience with various` interactions` and `challenges` for the `player.`

---

### Calorie Counter App Key Concepts

1.  **Input Validation Functions (cleanInputString & isInvalidInput):**

```javascript
// Removes special characters from input string
function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}

// Checks for scientific notation (invalid input)
function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}
```

#### Explanation:

These functions ensure user input quality for calorie values.

- **cleanInputString** removes characters like `"+" or "-"`, which could interfere with numerical parsing. It uses a regular expression` (/[+-\s]/g)` to find these characters and replaces them with an empty string.
- **isInvalidInput** checks if the input string contains scientific notation `(e.g., "1.2e3")`. This pattern is considered invalid for calorie values. It also uses a regular expression `(/\d+e\d+/i)` to detect this pattern and returns a match if found `(indicating an error)`.

---

2. **Adding New Entries (addEntry):**

```javascript
function addEntry() {
  // Get target input container based on dropdown selection
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);

  // Get existing entry count and increment it
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;

  // Create HTML string for the new entry
  const HTMLString = `...`; // (HTML for new name and calorie input fields)

  // Insert the HTML string at the end of the target container
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}
```

#### Explanation:

This function dynamically `adds new entry` sections for users to input calorie information for specific meals or exercises.

- It retrieves the target input container based on the selected value in the `entryDropdown`.
- It calculates the new entry number based on existing entries in the target container.
- It constructs an HTML string containing the necessary elements `(labels and input fields)` for the new entry.
- Finally, it uses `insertAdjacentHTML` to insert this `HTML string` at the end of the target container, effectively adding a new section for user input.

---

3. **Calorie Calculation and Display (calculateCalories):**

```javascript
function calculateCalories(e) {
  e.preventDefault();
  isError = false;

  // Get number inputs for each meal and exercise section
  const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type=number]");
  // ... similar code for lunch, dinner, snacks, and exercise

  // Calculate calories for each section using getCaloriesFromInputs
  const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
  // ... similar code for other sections

  // Check for errors (handled in getCaloriesFromInputs)
  if (isError) {
    return;
  }

  // Calculate total consumed and remaining calories
  const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
  const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;

  // Determine surplus or deficit
  const surplusOrDeficit = remainingCalories < 0 ? "Surplus" : "Deficit";

  // Display the result in the output element
  output.innerHTML = `...`; // (HTML for displaying calorie information)

  output.classList.remove("hide");
}
```

#### Explanation:

This function handles the core `calorie calculation` and displays the results.

- It retrieves the number input elements for each meal and exercise section using `querySelectorAll`.
- It calls `getCaloriesFromInputs` to calculate the total calorie value for each section, handling potential errors.
- It calculates the total consumed calories and remaining calories based on user input and budget.
- It determines whether there's a calorie `surplus` or `deficit`.
- Finally, it constructs and displays the calculated information within the output element using innerHTML. It also `removes` the `"hide"` class to make the output visible.

---

4.  **Clearing the Form (clearForm)**:

```javascript
function clearForm() {
  // Get all input containers
  const inputContainers = Array.from(document.querySelectorAll(".input-container"));

  // Clear the content of each input container
  for (const container of inputContainers) {
    container.innerHTML = "";
  }

  // Reset budget number input and output
  budgetNumberInput.value = "";
  output.innerText = "";
  output.classList.add("hide");
}
```

#### Explanation:

This function` resets` the form by `clearing` all input containers and resetting the budget input and output.

- It retrieves all input containers using `querySelectorAll` and converts the `NodeList` to an array.
- It clears the content of each input container by setting the `innerHTML` to an empty string.
- It resets the budget number input and output elements by setting their values to empty strings.
- It also adds the `"hide"` class to the output element to hide the calorie information display.

---

### Music Player App Key Concepts

1. **DOM Manipulation**:

```javascript
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");
```

**Explanation**:
DOM manipulation is the process of accessing, modifying, or creating `HTML elements` on a web page using JavaScript. In this code snippet, `document.getElementById()` is used to select specific elements from the `HTML document` by their ID attribute, allowing interaction with those elements in JavaScript.

---

2. **Event Handling**:

```javascript
playButton.addEventListener("click", () => {
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    playSong(userData?.currentSong.id);
  }
});
```

**Explanation**:
Event handling involves responding to user interactions or actions on a web page. Here, the `addEventListener()` method is used to attach a click event listener to the play button. When the button is clicked, it executes the provided `callback function`, which determines whether to play the first song or the current song based on the player's state.

---

3. **Array Manipulation and Iteration**:

```javascript
const currentSongIndex = getCurrentSongIndex();
const nextSong = userData?.songs[currentSongIndex + 1];
```

**Explanation**:
Working with arrays is essential in web development. This project demonstrates array manipulation techniques such as accessing `elements`, finding `indexes`, and iterating through `arrays` to perform specific tasks. In the provided code, the current song index is retrieved, and the next song to play is determined by accessing the next element in the array.

---

4. **Conditional Logic**:

```javascript
if (nextSongExists) {
  playNextSong();
} else {
  userData.currentSong = null;
  userData.songCurrentTime = 0;
  pauseSong();
  setPlayerDisplay();
  highlightCurrentSong();
  setPlayButtonAccessibleText();
}
```

**Explanation**:
Conditional logic allows developers to execute different code blocks based on certain conditions. In this snippet, the code checks if there is a next song to play. If `nextSongExists` is true, the next song is played; otherwise, the player is reset, and the `UI` is updated accordingly.

---
