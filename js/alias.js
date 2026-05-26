"use strict";

// ALIAS / TOUCH KEYBOARD
// Denne fil styrer tastaturet på alias-siden.

// Henter HTML-elementer
const input = document.getElementById("nameInput");
const keys = document.querySelectorAll(".key");
const backspace = document.getElementById("backspace");
const space = document.getElementById("space");
const shift = document.getElementById("shift");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

// Gemmer keyboardets status
let isUpperCase = true;
let cursorPosition = 0;

// Opdaterer cursor-positionen, hvis der allerede står et navn i feltet
function updateCursorToEnd() {
  cursorPosition = input.value.length;
}

// Indsætter tekst dér hvor cursoren står
function insertAtCursor(text) {
  const currentText = input.value;

  // Stopper hvis alias er på max længde
  if (currentText.length >= input.maxLength) return;

  const beforeCursor = currentText.slice(0, cursorPosition);
  const afterCursor = currentText.slice(cursorPosition);

  input.value = beforeCursor + text + afterCursor;
  cursorPosition += text.length;
}

// Bogstav-knapper
keys.forEach((key) => {
  key.addEventListener("click", () => {
    insertAtCursor(key.textContent);
  });
});

// Backspace sletter bogstavet før cursoren
backspace.addEventListener("click", () => {
  if (cursorPosition > 0) {
    const currentText = input.value;
    const beforeCursor = currentText.slice(0, cursorPosition - 1);
    const afterCursor = currentText.slice(cursorPosition);

    input.value = beforeCursor + afterCursor;
    cursorPosition--;
  }
});

// Mellemrum
space.addEventListener("click", () => {
  insertAtCursor(" ");
});

// Venstre pil flytter cursoren tilbage
leftArrow.addEventListener("click", () => {
  if (cursorPosition > 0) {
    cursorPosition--;
  }
});

// Højre pil flytter cursoren frem
rightArrow.addEventListener("click", () => {
  if (cursorPosition < input.value.length) {
    cursorPosition++;
  }
});

// Shift skifter mellem store og små bogstaver
shift.addEventListener("click", () => {
  isUpperCase = !isUpperCase;

  keys.forEach((key) => {
    key.textContent = isUpperCase
      ? key.textContent.toUpperCase()
      : key.textContent.toLowerCase();
  });
});

// Gør funktionen tilgængelig for script.js
window.updateAliasCursorToEnd = updateCursorToEnd;
