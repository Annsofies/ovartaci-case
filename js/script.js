"use strict";

/* Liste med alle spørgsmål, svar, billede, korrekt svar og feedback */
const questions = [
  {
    question: "Hvad betyder navnet ‘Ovartaci’?",
    answers: ["Overlæge", "Overtosse", "Overkunstner"],
    correctIndex: 1,
    feedback:
      "Navnet Ovartaci forbindes med ordet ‘overtosse’ og indgår som en del af kunstnerens særlige identitet og fortælling.",
  },
  {
    question: "Hvor mange år var Ovartaci indlagt?",
    answers: ["12 år", "24 år", "56 år"],
    correctIndex: 2,
    feedback:
      "Ovartaci tilbragte størstedelen af sit liv på Psykiatrisk Hospital i Risskov.",
  },
  {
    question: "Hvilket tema fylder meget i Ovartacis kunst?",
    answers: ["Sport", "Identitet", "Politik"],
    correctIndex: 1,
    feedback:
      "Identitet, fantasi og menneskesind er centrale temaer i Ovartacis univers.",
  },
  {
    question: "Hvilket materiale arbejdede Ovartaci ofte med?",
    answers: ["Metal", "Glas", "Træ og papmaché"],
    correctIndex: 2,
    feedback:
      "Ovartaci skabte figurer og værker med en fantasifuld brug af materialer.",
  },
  {
    question: "Hvordan beskrev Ovartaci ofte sig selv?",
    answers: ["Som konge", "Som kvinde", "Som astronaut"],
    correctIndex: 1,
    feedback:
      "Køn og identitet spillede en vigtig rolle i Ovartacis selvforståelse og kunst.",
  },
  {
    question: "Hvilket ord beskriver bedst Ovartacis univers?",
    answers: ["Minimalistisk", "Teknologisk", "Fantasifuldt"],
    correctIndex: 2,
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
    feedback:
      "Kunsten blev en måde at udtrykke tanker, følelser, identitet og fantasi på.",
  },
  {
    question: "Hvilken type oplevelse giver Ovartacis kunst ofte?",
    answers: ["Historiske fakta", "Drømme og fantasi", "Action og spænding"],
    correctIndex: 1,
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
const saveNameBtn = document.querySelector("#startButton");
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

/* Variabler der holder styr på quizzen */
let currentQuestionIndex = 0;
let score = 0;
let playerName = "";

/* Viser kun den skærm, som brugeren skal se */
function showScreen(screenName) {
  Object.values(screens).forEach((screen) => {
    screen.classList.remove("active");
  });

  screens[screenName].classList.add("active");
}

/* Opdaterer progressbar og viser hvilket spørgsmål brugeren er på */
function updateProgress() {
  let progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  progressBar.style.width = progress + "%";
  feedbackProgressBar.style.width = progress + "%";

  let questionNumber = currentQuestionIndex + 1;

  questionCounter.textContent = `Spørgsmål ${questionNumber} af ${questions.length}`;
  feedbackCounter.textContent = `Spørgsmål ${questionNumber} af ${questions.length}`;
}

/* Viser spørgsmål, billede og svarmuligheder */
function renderQuestion() {
  let currentQuestion = questions[currentQuestionIndex];

  updateProgress();

  questionText.textContent = currentQuestion.question;
  questionImage.src = currentQuestion.image;

  answers.innerHTML = "";

  currentQuestion.answers.forEach(function (answer, index) {
    let button = document.createElement("button");

    button.textContent = answer;
    button.classList.add("answer-btn");

    button.onclick = function () {
      handleAnswer(index);
    };

    answers.appendChild(button);
  });

  showScreen("question");
}

/* Tjekker om brugeren har svaret rigtigt eller forkert */
function handleAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const correctIndex = currentQuestion.correctIndex;

  if (selectedIndex === correctIndex) {
    score++;
    feedbackTitle.textContent = "Korrekt!";
  } else {
    feedbackTitle.textContent = "Forkert!";
  }

  feedbackText.textContent = currentQuestion.feedback;
  correctAnswerText.textContent = `Rigtigt svar: ${currentQuestion.answers[correctIndex]}`;
  feedbackImage.src = currentQuestion.image;

  showScreen("feedback");
}

/* Går videre til næste spørgsmål eller viser scoreboard */
function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    saveScore();
    renderScoreboard();
    showScreen("score");
  }
}

/* Gemmer brugerens score i localStorage */
function saveScore() {
  const scores = JSON.parse(localStorage.getItem("ovartaciScores")) || [];

  scores.push({
    name: playerName,
    score: score,
    total: questions.length,
  });

  scores.sort((a, b) => b.score - a.score);

  localStorage.setItem("ovartaciScores", JSON.stringify(scores));
}

/* Viser scoreboardet */
function renderScoreboard() {
  const scores = JSON.parse(localStorage.getItem("ovartaciScores")) || [];

  finalScore.textContent = `${playerName}, du fik ${score} ud af ${questions.length} rigtige.`;

  scoreList.innerHTML = "";

  scores.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = `${entry.name}: ${entry.score}/${entry.total}`;
    scoreList.appendChild(li);
  });
}

/* Starter quizzen forfra */
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  renderQuestion();
}

/* Når brugeren klikker på startknappen */
startBtn.addEventListener("click", () => {
  showScreen("alias");
  nameInput.focus();
});

/* Gemmer navnet og starter quizzen */
saveNameBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (name.length < 2) {
    nameError.textContent = "Skriv mindst 2 tegn.";
    return;
  }

  nameError.textContent = "";
  playerName = name;

  startQuiz();
});

/* Gør det muligt at trykke Enter efter navn */
nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    saveNameBtn.click();
  }
});

/* Knap til næste spørgsmål */
nextBtn.addEventListener("click", nextQuestion);

/* Knap til at starte quizzen igen */
restartBtn.addEventListener("click", () => {
  showScreen("alias");
});
