"use strict";

// ALIAS / TOUCH KEYBOARD

const input = document.getElementById("nameInput");
const keys = document.querySelectorAll(".key");
const backspace = document.getElementById("backspace");
const space = document.getElementById("space");
const shift = document.getElementById("shift");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

let isUpperCase = true;
let cursorPosition = 0;

function updateCursorToEnd() {
  cursorPosition = input.value.length;
}

function resetAliasForm() {
  input.value = "";
  cursorPosition = 0;
  isUpperCase = true;

  keys.forEach((key) => {
    key.textContent = key.textContent.toUpperCase();
  });
}

function insertAtCursor(text) {
  const currentText = input.value;

  if (currentText.length >= input.maxLength) return;

  const beforeCursor = currentText.slice(0, cursorPosition);
  const afterCursor = currentText.slice(cursorPosition);

  input.value = beforeCursor + text + afterCursor;
  cursorPosition += text.length;
}

keys.forEach((key) => {
  key.addEventListener("click", () => {
    insertAtCursor(key.textContent);
  });
});

backspace.addEventListener("click", () => {
  if (cursorPosition > 0) {
    const currentText = input.value;
    const beforeCursor = currentText.slice(0, cursorPosition - 1);
    const afterCursor = currentText.slice(cursorPosition);

    input.value = beforeCursor + afterCursor;
    cursorPosition--;
  }
});

space.addEventListener("click", () => {
  insertAtCursor(" ");
});

leftArrow.addEventListener("click", () => {
  if (cursorPosition > 0) {
    cursorPosition--;
  }
});

rightArrow.addEventListener("click", () => {
  if (cursorPosition < input.value.length) {
    cursorPosition++;
  }
});

shift.addEventListener("click", () => {
  isUpperCase = !isUpperCase;

  keys.forEach((key) => {
    key.textContent = isUpperCase
      ? key.textContent.toUpperCase()
      : key.textContent.toLowerCase();
  });
});

window.updateAliasCursorToEnd = updateCursorToEnd;
window.resetAliasForm = resetAliasForm;
