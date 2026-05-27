"use strict";

const questions = [
  {
    question: "Hvad betyder navnet ‘Ovartaci’?",
    answers: ["Overlæge", "Overtosse", "Overkunstner"],
    correctIndex: 1,
    image: "img/ovi-smile.png",
    feedback:
      "Navnet Ovartaci forbindes med ordet ‘overtosse’ og indgår som en del af kunstnerens særlige identitet og fortælling.",
  },

  {
    question: "Hvor skabte Ovartaci størstedelen af sin kunst?",
    answers: [
      "På kunstakademiet",
      "I Paris",
      "På psykiatrisk hospital i Risskov",
    ],
    correctIndex: 2,
    image:
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=900&auto=format&fit=crop",
    feedback:
      "Hospitalet i Risskov blev rammen om en stor del af Ovartacis kunstneriske produktion.",
  },

  {
    question: "Hvor mange år var Ovartaci indlagt på Psykiatrisk Hospital?",
    answers: ["12 år", "24 år", "56 år"],
    correctIndex: 2,
    image: "img/hospital.png",
    feedback:
      "Ovartaci tilbragte størstedelen af sit liv på Psykiatrisk Hospital i Risskov.",
  },
  {
    question: "Hvilket tema fylder meget i Ovartacis kunst?",
    answers: ["Sport", "Identitet", "Politik"],
    correctIndex: 1,
    image: "img/ovi-hehe.png",
    feedback:
      "Identitet, fantasi og menneskesind er centrale temaer i Ovartacis univers.",
  },
  {
    question: "Hvilket materiale arbejdede Ovartaci ofte med?",
    answers: ["Metal", "Glas", "Træ og papmaché"],
    correctIndex: 2,
    image: "img/dukker.png",
    feedback:
      "Ovartaci skabte figurer og værker med en fantasifuld brug af materialer.",
  },
  {
    question: "Hvordan beskrev Ovartaci ofte sig selv?",
    answers: ["Som konge", "Som kvinde", "Som astronaut"],
    correctIndex: 1,
    image: "img/kvinde.png",
    feedback:
      "Køn og identitet spillede en vigtig rolle i Ovartacis selvforståelse og kunst.",
  },
  {
    question: "Hvilket ord beskriver bedst Ovartacis univers?",
    answers: ["Minimalistisk", "Teknologisk", "Fantasifuldt"],
    correctIndex: 2,
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=900&auto=format&fit=crop",
    feedback:
      "Ovartacis univers opleves ofte som drømmende, særligt og fantasifuldt.",
  },
  {
    question: "Hvad var vigtigt for Ovartaci gennem kunsten?",
    answers: [
      "At blive rig",
      "At male realistisk",
      "At udtrykke sit indre univers",
    ],
    correctIndex: 2,
    image: "img/ovi-hehe.png",
    feedback:
      "Kunsten blev en måde at udtrykke tanker, følelser, identitet og fantasi på.",
  },
  {
    question: "Hvilken type oplevelse giver Ovartacis kunst ofte?",
    answers: ["Historiske fakta", "Drømme og fantasi", "Action og spænding"],
    correctIndex: 1,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=900&auto=format&fit=crop",
    feedback:
      "Når brugeren deltager aktivt, bliver formidlingen mere involverende og engagerende.",
  },
];

const screens = {
  start: document.querySelector("#startScreen"),
  alias: document.querySelector("#aliasScreen"),
  quiz: document.querySelector("#quizScreen"),
  feedback: document.querySelector("#feedbackScreen"),
  score: document.querySelector("#scoreScreen"),
};

const startBtn = document.querySelector("#startBtn");
const saveNameBtn = document.querySelector("#saveNameBtn");
const nextBtn = document.querySelector("#nextBtn");
const restartBtn = document.querySelector("#restartBtn");
const clearScoresBtn = document.querySelector("#clearScoresBtn");
const nameInput = document.querySelector("#nameInput");
const nameError = document.querySelector("#nameError");
const questionCounter = document.querySelector("#questionCounter");
const feedbackCounter = document.querySelector("#feedbackCounter");
const progressBar = document.querySelector("#progressBar");
const feedbackProgressBar = document.querySelector("#feedbackProgressBar");
const questionText = document.querySelector("#questionText");
const questionImage = document.querySelector("#questionImage");
const answersContainer = document.querySelector("#answers");
const feedbackTitle = document.querySelector("#feedbackTitle");
const feedbackText = document.querySelector("#feedbackText");
const correctAnswerText = document.querySelector("#correctAnswerText");
const feedbackImage = document.querySelector("#feedbackImage");
const finalScore = document.querySelector("#finalScore");
const scoreList = document.querySelector("#scoreList");

let currentQuestionIndex = 0;
let score = 0;
let playerName = localStorage.getItem("ovartaciPlayerName") || "";

function showScreen(screenName) {
  Object.values(screens).forEach((screen) => {
    if (screen) screen.classList.remove("active");
  });

  if (screens[screenName]) {
    screens[screenName].classList.add("active");
  }
}

function updateProgress() {
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
  feedbackProgressBar.style.width = `${progress}%`;
  questionCounter.textContent = `Spørgsmål ${currentQuestionIndex + 1}/${questions.length}`;
  feedbackCounter.textContent = `Spørgsmål ${currentQuestionIndex + 1}/${questions.length}`;
}

function renderQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  updateProgress();
  questionText.textContent = currentQuestion.question;
  questionImage.src = currentQuestion.image;
  feedbackImage.src = currentQuestion.image;
  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => handleAnswer(index));
    answersContainer.appendChild(button);
  });

  showScreen("quiz");
}

function handleAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedIndex === currentQuestion.correctIndex;

  if (isCorrect) score += 1;

  screens.feedback.classList.toggle("correct", isCorrect);
  screens.feedback.classList.toggle("wrong", !isCorrect);
  feedbackTitle.textContent = isCorrect ? "Korrekt!" : "Forkert!";
  feedbackText.textContent = currentQuestion.feedback;
  correctAnswerText.textContent = `Rigtigt svar: ${currentQuestion.answers[currentQuestion.correctIndex]}`;
  showScreen("feedback");
}

function nextQuestion() {
  currentQuestionIndex += 1;

  if (currentQuestionIndex < questions.length) {
    renderQuestion();
    return;
  }

  saveScore();
  renderScoreboard();
  showScreen("score");
}

function saveScore() {
  const scores = JSON.parse(localStorage.getItem("ovartaciScores")) || [];
  scores.push({
    name: playerName,
    score,
    total: questions.length,
    date: new Date().toISOString(),
  });
  scores.sort((a, b) => b.score - a.score);
  localStorage.setItem("ovartaciScores", JSON.stringify(scores.slice(0, 8)));
}

function renderScoreboard() {
  const scores = JSON.parse(localStorage.getItem("ovartaciScores")) || [];
  finalScore.textContent = `${playerName}, du fik ${score}/${questions.length} rigtige.`;
  scoreList.innerHTML = "";

  scores.forEach((entry) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${entry.name}</span><span>${entry.score}/${entry.total}</span>`;
    scoreList.appendChild(li);
  });
}

function startNewQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  renderQuestion();
}

startBtn.addEventListener("click", () => {
  nameInput.value = playerName;
  showScreen("alias");
  nameInput.focus();

  if (window.updateAliasCursorToEnd) {
    window.updateAliasCursorToEnd();
  }
});

saveNameBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (name.length < 2) {
    nameError.textContent = "Skriv mindst 2 tegn.";
    return;
  }

  nameError.textContent = "";
  playerName = name;
  localStorage.setItem("ovartaciPlayerName", playerName);
  startNewQuiz();
});

nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") saveNameBtn.click();
});

nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", () => {
  showScreen("start");
});
clearScoresBtn.addEventListener("click", () => {
  localStorage.removeItem("ovartaciScores");
  renderScoreboard();
});
