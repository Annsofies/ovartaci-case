"use strict";

//  HTML ELEMENTER - Henter elementer fra HTML
const input = document.getElementById("nameInput");
const keys = document.querySelectorAll(".key");
const backspace = document.getElementById("backspace");
const space = document.getElementById("space");
const shift = document.getElementById("shift");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

// VARIABLES / STATE - Gemmer keyboardets status
let isUpperCase = true; // Holder styr på store/små bogstaver
let cursorPosition = 0; // Holder styr på cursorens position i teksten

// SKRIV BOGSTAVER
keys.forEach((key) => {
  key.addEventListener("click", () => {
    const letter = key.textContent; // Henter bogstavet fra knappen

    insertAtCursor(letter); // Indsætter bogstavet i inputfeltet
  });
});

//  INSERT TEKST
function insertAtCursor(text) {
  const currentText = input.value; // Den nuværende tekst i inputfeltet

  const beforeCursor = currentText.slice(0, cursorPosition); // Tekst før cursoren

  const afterCursor = currentText.slice(cursorPosition); // Tekst efter cursoren

  input.value = beforeCursor + text + afterCursor; // Indsætter teksten i inputfeltet/Samler teksten igen med det nye bogstav

  cursorPosition += text.length; // Flytter cursoren frem
}

//  BACKSPACE - Sletter bogstav før cursoren
backspace.addEventListener("click", () => {
  // Kun hvis cursor ikke er først
  if (cursorPosition > 0) {
    const currentText = input.value; // Henter nuværende tekst

    const beforeCursor = currentText.slice(0, cursorPosition - 1); // Tekst før det bogstav der skal slettes

    const afterCursor = currentText.slice(cursorPosition); // Tekst efter cursoren

    input.value = beforeCursor + afterCursor; // Samler teksten uden det slettede bogstav

    cursorPosition--; // Flytter cursoren tilbage
  }
});

//  SPACE - indsætter mellemrum
space.addEventListener("click", () => {
  insertAtCursor(" "); // Indsætter mellemrum
});

//  PILE - flytter cursor-position
leftArrow.addEventListener("click", () => {
  // Kun hvis cursor ikke er helt til venstre
  if (cursorPosition > 0) {
    cursorPosition--;
  }
});

rightArrow.addEventListener("click", () => {
  // Kun hvis cursor ikke er efter sidste bogstav
  if (cursorPosition < input.value.length) {
    cursorPosition++;
  }
});

//  SHIFT - skifter mellem store/små bogstaver
shift.addEventListener("click", () => {
  isUpperCase = !isUpperCase; // Skifter true/false

  keys.forEach((key) => {
    // Gennemgår alle bogstav-knapper

    const current = key.textContent; // Henter nuværende tekst på knappen

    if (isUpperCase) {
      key.textContent = current.toUpperCase();
    } else {
      key.textContent = current.toLowerCase();
    }
  });
});
