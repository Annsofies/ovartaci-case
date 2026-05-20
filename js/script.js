"use strict";

/* Liste med alle spørgsmål, svar, billede, korrekt svar og feedback */
const questions = [
  {
    question: "Hvad betyder navnet ‘Ovartaci’?",
    answers: ["Overlæge", "Overtosse", "Overkunstner"],
    correctIndex: 1,
    image: "img/ovi.png",
    feedback:
      "Navnet Ovartaci forbindes med ordet ‘overtosse’ og indgår som en del af kunstnerens særlige identitet og fortælling.",
  },
  {
    question: "Hvor mange år var Ovartaci indlagt?",
    answers: ["12 år", "24 år", "56 år"],
    correctIndex: 2,
    image: "img/ovi.png",
    feedback:
      "Ovartaci tilbragte størstedelen af sit liv på Psykiatrisk Hospital i Risskov.",
  },
  {
    question: "Hvilket tema fylder meget i Ovartacis kunst?",
    answers: ["Sport", "Identitet", "Politik"],
    correctIndex: 1,
    image: "img/ovi.png",
    feedback:
      "Identitet, fantasi og menneskesind er centrale temaer i Ovartacis univers.",
  },
  {
    question: "Hvilket materiale arbejdede Ovartaci ofte med?",
    answers: ["Metal", "Glas", "Træ og papmaché"],
    correctIndex: 2,
    image: "img/ovi.png",
    feedback:
      "Ovartaci skabte figurer og værker med en fantasifuld brug af materialer.",
  },
  {
    question: "Hvordan beskrev Ovartaci ofte sig selv?",
    answers: ["Som konge", "Som kvinde", "Som astronaut"],
    correctIndex: 1,
    image: "img/ovi.png",
    feedback:
      "Køn og identitet spillede en vigtig rolle i Ovartacis selvforståelse og kunst.",
  },
  {
    question: "Hvilket ord beskriver bedst Ovartacis univers?",
    answers: ["Minimalistisk", "Teknologisk", "Fantasifuldt"],
    correctIndex: 2,
    image: "img/ovi.png",
    feedback:
      "Ovartacis univers opleves ofte som drømmende, særligt og fantasifuldt.",
  },
  {
    question: "Hvor skabte Ovartaci størstedelen af sin kunst?",
    answers: [
      "På kunstakademiet",
      "I Paris",
      "På psykiatrisk hospital i Risskov",
    ],
    correctIndex: 2,
    image: "img/ovi.png",
    feedback:
      "Hospitalet i Risskov blev rammen om en stor del af Ovartacis kunstneriske produktion.",
  },
  {
    question: "Hvad var vigtigt for Ovartaci gennem kunsten?",
    answers: [
      "At blive rig",
      "At male realistisk",
      "At udtrykke sit indre univers",
    ],
    correctIndex: 2,
    image: "img/ovi.png",
    feedback:
      "Kunsten blev en måde at udtrykke tanker, følelser, identitet og fantasi på.",
  },
  {
    question: "Hvilken type oplevelse giver Ovartacis kunst ofte?",
    answers: ["Historiske fakta", "Drømme og fantasi", "Action og spænding"],
    correctIndex: 1,
    image: "img/ovi.png",
    feedback: "Værkerne inviterer til fortolkning, fantasi og refleksion.",
  },
  {
    question: "Hvad gør en interaktiv museumsoplevelse mere spændende?",
    answers: [
      "Lange tekstforklaringer",
      "Ingen lyd eller animation",
      "At man selv deltager aktivt",
    ],
    correctIndex: 2,
    image: "img/ovi.png",
    feedback:
      "Når brugeren deltager aktivt, bliver formidlingen mere involverende og engagerende.",
  },
];

/* Finder de forskellige sider i HTML */
const screens = {
  start: document.querySelector("#startScreen"),
  alias: document.querySelector("#aliasScreen"),
  question: document.querySelector("#questionScreen"),
  feedback: document.querySelector("#feedbackScreen"),
  score: document.querySelector("#scoreScreen"),
};

/* Finder knapper og elementer fra HTML */
const startBtn = document.querySelector("#start-btn");
const saveNameBtn = document.querySelector("#saveNameBtn");
const nextBtn = document.querySelector("#nextBtn");
const restartBtn = document.querySelector("#restartBtn");

const nameInput = document.querySelector("#nameInput");
const nameError = document.querySelector("#nameError");

const questionCounter = document.querySelector("#questionCounter");
const questionTitle = document.querySelector("#questionTitle");
const questionText = document.querySelector("#questionText");
const questionImage = document.querySelector("#questionImage");
const answers = document.querySelector("#answers");

const feedbackCounter = document.querySelector("#feedbackCounter");
const feedbackTitle = document.querySelector("#feedbackTitle");
const feedbackText = document.querySelector("#feedbackText");
const correctAnswerText = document.querySelector("#correctAnswerText");
const feedbackImage = document.querySelector("#feedbackImage");

const progressBar = document.querySelector("#progressBar");
const feedbackProgressBar = document.querySelector("#feedbackProgressBar");

const finalScore = document.querySelector("#finalScore");
const scoreList = document.querySelector("#scoreList");
