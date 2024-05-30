"use strict";

const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

//This array will store all the tasks along with their associated data, including title, due date, and description
const taskData = [];
let currentTask = {};

/**
 * Adds an event listener to the "openTaskFormBtn" element that toggles the visibility of the "taskForm" element when clicked.
 */
openTaskFormBtn.addEventListener("click", () => {
  taskForm.classList.toggle("hidden");
});

/**
 * Adds an event listener to the "closeTaskFormBtn" button that displays a confirmation dialog when clicked.
 * The confirmation dialog is shown using the "showModal" method of the "confirmCloseDialog" element.
 */
closeTaskFormBtn.addEventListener("click", () => {
  confirmCloseDialog.showModal();
});

cancelBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
});

discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  taskForm.classList.toggle("hidden");
});

taskForm.addEventListener("submit", (e) => {
  //stop the browser from refreshing the page after submitting the form.
  e.preventDefault();
});

