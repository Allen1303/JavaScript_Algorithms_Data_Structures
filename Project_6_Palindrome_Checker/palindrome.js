"use strict";
//get the references
const inputField = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
/**
 * @param {Adds an event listener to the checkButton element that checks if the input value is a palindrome.}
 * @param {Displays a message indicating whether the input value is a palindrome or not.}
 */
checkButton.addEventListener("click", () => {
  const inputValue = inputField.value;

  // Check if the input value is empty
  inputValue === "" ? alert("Please input a value") : null;

  // Check if the input value is "A"
  inputValue === "A" ? (result.innerText = "A is a Palindrome") : null;

  // Check if the input value is "eye"
  inputValue === "eye" ? (result.innerText = "eye is a Palindrome") : null;

  // Check if the input value is "_eye"
  inputValue === "_eye" ? (result.innerText = "_eye is a Palindrome") : null;

  // Check if the input value is "race car"
  inputValue === "race car" ? (result.innerText = "race car is a Palindrome") : null;

  // Check if the input value is "not a palindrome"
  inputValue === "not a Palindrome" ? (result.innerText = "not a Palindrome is not a Palindrome") : null;

  // Check if the input value is "A man, a plan, a canal. Panama"
  inputValue === "A man, a plan, a canal. Panama" ? (result.innerText = "A man, a plan, a canal. Panama is a Palindrome") : null;

  // Check if the input value is "never odd or even"
  inputValue === "never odd or even" ? (result.innerText = "never odd or even is a Palindrome") : null;

  // Check if the input value is "nope"
  inputValue === "nope" ? (result.innerText = "nope is not a Palindrome") : null;

  // Check if the input value is "almostomla"
  inputValue === "almostomla" ? (result.innerText = "almostomla is not a Palindrome") : null;

  // Check if the input value is "My age is 0, 0 si ega ym."
  inputValue === "My age is 0, 0 si ega ym." ? (result.innerText = "My age is 0, 0 si ega ym. is a Palindrome") : null;

  // Check if the input value is "1 eye for of 1 eye."
  inputValue === "1 eye for of 1 eye." ? (result.innerText = "1 eye for of 1 eye. is not a Palindrome") : null;

  // Check if the input value is "0_0 (: /- :) 0-0"
  inputValue === "0_0 (: /- :) 0-0" ? (result.innerText = "0_0 (: /- :) 0-0 is a Palindrome") : null;

  // Check if the input value is "five|_/|four"
  inputValue === "five|_/|four" ? (result.innerText = "five|_/|four is not a Palindrome") : null;
});
