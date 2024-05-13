"use strict";
const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;

/**
 * Removes all plus, minus, and whitespace characters from a given string.
 * 
 * @param {string} str - The input string to be cleaned.
 * @returns {string} - The cleaned string with plus, minus, and whitespace characters removed.
 */
function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}

/**
 * Checks if the input string contains invalid input.
 * Invalid input is defined as a string that matches the pattern of a number in scientific notation.
 * 
 * @param {string} str - The input string to be checked.
 * @returns {boolean} - True if the input string contains invalid input, false otherwise.
 */
function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

/**
 * Adds a new entry to the input container based on the selected dropdown value.
 */
function addEntry() {
  // Get the target input container based on the selected dropdown value
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);

  // Get the number of existing input elements in the target input container and increment it by 1
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;

  // Create an HTML string for the new entry
  const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input
      type="number"
      min="0"
      id="${entryDropdown.value}-${entryNumber}-calories"
      placeholder="Calories"
    />`;

  // Insert the HTML string at the end of the target input container
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

/**
 * Calculates the remaining calories based on the user's input and displays the result.
 * @param {Event} e - The event object.
 */
function calculateCalories(e) {
  e.preventDefault();
  isError = false;

  // Get the number inputs for each meal and exercise
  const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type=number]");
  const lunchNumberInputs = document.querySelectorAll("#lunch input[type=number]");
  const dinnerNumberInputs = document.querySelectorAll("#dinner input[type=number]");
  const snacksNumberInputs = document.querySelectorAll("#snacks input[type=number]");
  const exerciseNumberInputs = document.querySelectorAll("#exercise input[type=number]");

  // Calculate the calories for each meal and exercise
  const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
  const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
  const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
  const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
  const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
  const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

  // Check for any errors
  if (isError) {
    return;
  }

  // Calculate the total consumed calories and remaining calories
  const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
  const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;

  // Determine if there is a surplus or deficit in calories
  const surplusOrDeficit = remainingCalories < 0 ? "Surplus" : "Deficit";

  // Display the result
  output.innerHTML = `
  <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
  <hr>
  <p>${budgetCalories} Calories Budgeted</p>
  <p>${consumedCalories} Calories Consumed</p>
  <p>${exerciseCalories} Calories Burned</p>
  `;

  output.classList.remove("hide");
}

/**
 * Calculates the total calories from a list of input values.
 * @param {Array} list - The list of input values.
 * @returns {number|null} - The total calories or null if there is an invalid input.
 */
function getCaloriesFromInputs(list) {
  let calories = 0;

  for (const item of list) {
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);

    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    }
    calories += Number(currVal);
  }
  return calories;
}

/**
 * Clears the form by removing the content of all input containers and resetting the budget number and output.
 */
function clearForm() {
  // Get all input containers
  const inputContainers = Array.from(document.querySelectorAll(".input-container"));

  // Clear the content of each input container
  for (const container of inputContainers) {
    container.innerHTML = "";
  }

  // Reset the budget number input value
  budgetNumberInput.value = "";

  // Reset the output text and hide it
  output.innerText = "";
  output.classList.add("hide");
}

addEntryButton.addEventListener("click", addEntry);
calorieCounter.addEventListener("submit", calculateCalories);
clearButton.addEventListener("click", clearForm);
