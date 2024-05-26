# JavaScript Algorithms And Data Structures

### Learning JavaScript Algoritm and Data Structure by Building Projects from the FreeCodeCamp certification course

## Table of Contents | Projects
- **Pyramid Generator**

- **Roll Playing Game**

- **Calorie Counter App**

- **Music Player App**

+ **Date Formatter**

+ __Football Cards Page__

### Pyramid Generator summary

In this practice project, you'll learn fundamental programming concepts in JavaScript by coding a `Pyramid Generator`. You'll learn how to work with _`arrays`_, _`strings`_, _`functions`_, _`loops`_, _`if/else`_ statements, and more.

---

## Role Playing Game summary

In this practice project, you'll learn fundamental programming concepts in`JavaScript` by coding a` Role Playing Game`. You'll learn how to work with _`arrays`_, _`strings`_, _`objects`_, _`functions`_, _`loops`_, _`if/else`_ statements, and more.

---

## Calorie Counter App

In this calorie counter project, you'll learn how to validate user input, perform calculations based on that input, and _`dynamically` `update your interface`_ to display the results.
In this practice project, you'll learn _`basic regular expressions`, `template literals`_, the _`addEventListener() method`_, and more.

---

## Music Player App

We will learn about some essential _`string` and `array methods` like the `find()`, `forEach()`, `map()`, and `join()`_. These methods are _`crucial`_ for developing dynamic web applications.

In this project, we code a basic _`MP3 player` using `HTM`L, `CSS`, and `JavaScript`_. The project covers fundamental concepts such as handling _`audio playback`, `managing a playlist`, `implementing play`, `pause`, `next`, `previous`, and `shuffle functionalities`_. You'll even learn how to dynamically update your user interface based on the current song.

---
## Date Formatter
Working with dates in JavaScript can be challenging. You have to navigate various _`methods`, `formats`_, and _`time zones`_. In this project, we learn how to work with the JavaScript _`Date object`_, including its methods and properties. You'll also learn how to correctly format dates.
This project will cover concepts such as the _`getDate()`, `getMonth()`, and `getFullYear()`_ methods.

---

## Football Cards
One common aspect of building web applications is: processing datasets, and then outputting information to the screen. In this sports team cards project, we learn how to work with _`DOM manipulation`_, _`object destructuring`_, _`event handling`_, and _`data filtering`_. This project will cover concepts like _`switch statements`, `default parameters`, `Object.freeze()`, the `map()`_ method, and more.

### Pyramid Project Key Concepts

#### Looping:

For loops are used to iterate over a range of values, which is essential for creating the rows of the pyramid.
  
  ```javascript
  example:

  for (let i = 0; i < rows; i++) {
  let row = padRow(i, rows);
  rows.push(row);
}
```
#### String Manipulation:

String manipulation involves techniques like concatenation and repetition to format the pyramid's text output.
```javascript
example:

let row = " ".repeat(rows - i - 1) + "*".repeat(2 * i + 1) + " ".repeat(rows - i - 1);
```
#### Conditional Statements:

Conditional statements, such as if statements, are used to determine whether to generate an inverted pyramid.
```javascript
example:

if (inverted) {
  rows = rows.reverse();
}
```
#### Functions:
Functions encapsulate reusable code blocks and allow parameter passing to generate each row of the pyramid.
```javascript
example:

function padRow(i, rows) {
  return " ".repeat(rows - i - 1) + "*".repeat(2 * i + 1) + " ".repeat(rows - i - 1);
}
```
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
### Date Formatter Key Concepts

1. #### DOM Manipulation:
_The Document Object Model `(DOM)` is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content_.
  
  ```javascript
  Example:

  const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");
const formattedDateParagraph = document.getElementById("formatted-date");

  Context: document.getElementById("current-date") gets a reference to the paragraph element where the date will be displayed. document.getElementById("date-options") gets a reference to the dropdown menu used for selecting date formats.
  ```

2. #### Date Object:
_The Date object in JavaScript is used to work with dates and times. It provides methods to get and set the `day`, `month`, `year`, `hours`, `minutes`, and other date parts_.
  ```javascript
  Example:

  const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1; // Months are zero-based
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

Context: A new Date object is created to get the current date and time. date.getDate(), date.getMonth() + 1, date.getFullYear(), date.getHours(), and date.getMinutes() extract the specific parts of the date needed for formatting.
```

3. #### String Interpolation and Formatting:
 _String interpolation allows you to embed expressions inside string literals, using `template literals` with backticks `(``)`_.
```javascript
Example:

const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;

Context: ${day}-${month}-${year} formats the date as a string in the day-month-year format. currentDateParagraph.textContent is then used to set the text content of the paragraph element to this formatted date string.
```

4. #### Event Handling and Switch Statement:
_An event listener is used to execute code when an event occurs (`e.g., user selects a date format`). A switch statement is used to perform different actions based on different conditions_.
```javascript
Example:

dateOptionsSelectElement.addEventListener("change", () => {
  switch (dateOptionsSelectElement.value) {
    case "yyyy-mm-dd":
      currentDateParagraph.textContent = formattedDate.split("-").reverse().join("-");
      break;
    case "mm-dd-yyyy-h-mm":
      currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
      break;
    default:
      currentDateParagraph.textContent = formattedDate;
  }
});

Context: An event listener is added to the dropdown menu to listen for changes. When a new option is selected, the switch statement checks the value and formats the date accordingly. For yyyy-mm-dd, the date string is split, reversed, and joined. For mm-dd-yyyy-h-mm, the date and time are formatted with hours and minutes included.
```
---
### Football Cards Project Key JavaScript Concepts

1. #### DOM Manipulation
Explanation: The __Document Object Model__ `(DOM)` represents the structure of an `HTML` document as a tree of objects. JavaScript can be used to manipulate the DOM to `dynamically` `update` content, structure, and styles.
```javascript
Example:

const teamName = document.getElementById("team");
teamName.textContent = team;
```
2. #### Object Destructuring
Explanation: `Destructuring` is a syntax that allows you to unpack `values` from `arrays` or `properties` from` objects` into distinct variables.
```javascript
Example:

const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

 
This code extracts properties from the myFavoriteFootballTeam object into individual variables.

```
3. #### Array Methods (filter, map, join)
Explanation: JavaScript provides several `built-in methods` to work with arrays. `filter()` creates a new array with elements that pass a test, `map()` creates a new array by applying a function to each element, and `join()` concatenates all elements of an array into a string.
```javascript
const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(({ name, position, number, isCaptain, nickname }) => `
      <div class="player-card">
        <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
        <p>Position: ${position}</p>
        <p>Number: ${number}</p>
        <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
      </div>
    `)
    .join("");
};

This code uses map to transform each player object into an HTML string, and join to concatenate them into a single string.

```
4. #### Event Handling
Explanation: `Event handling` is the process of using JavaScript to respond to user interactions, such as `clicks`, `changes`, and other actions on `HTML` elements.
```javascript
playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    // ... other cases
    default:
      setPlayerCards();
  }
});

This code adds an event listener to a dropdown list, which filters and displays player cards based on the selected value.
```