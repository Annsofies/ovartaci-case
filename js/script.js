"use strict";

const questions = [
  {
    chapter: "Identitet",
    question: "Hvad betyder navnet “Ovartaci”?",
    answers: ["Overlæge", "Overtosse", "Overkunstner"],
    correctIndex: 1,
    image: "img/ovi-hehe.png",
    feedback:
      "Navnet Ovartaci forbindes med ordet “overtosse” og blev en vigtig del af kunstnerens identitet og særlige univers.",
    reflection: "Hvordan tror du et navn kan påvirke et menneskes identitet?",
  },

  {
    chapter: "Stedet",
    question: "Hvor skabte Ovartaci størstedelen af sin kunst?",
    answers: [
      "På kunstakademiet i København",
      "På Psykiatrisk Hospital i Risskov",
      "På et museum i Paris",
    ],
    correctIndex: 1,
    image: "img/risskovhospital.png",
    feedback:
      "På Psykiatrisk Hospital i Risskov skabte Ovartaci størstedelen af sine værker og udviklede sit særlige kunstneriske univers.",
    reflection: "Hvordan tror du omgivelser påvirker et menneskes kreativitet?",
  },

  {
    chapter: "Livsfortælling",
    question:
      "Hvor længe var Ovartaci indlagt på Psykiatrisk Hospital i Risskov?",
    answers: ["12 år", "24 år", "56 år"],
    correctIndex: 2,
    image: "img/kvinde.png",
    feedback:
      "Ovartaci tilbragte størstedelen af sit liv på Psykiatrisk Hospital i Risskov, hvor han både boede og arbejdede med sin kunst.",
    reflection:
      "Hvordan tror du det påvirker et menneske at opholde sig samme sted i mange år?",
  },

  {
    chapter: "Håndværk",
    question:
      "Hvad arbejdede Louis Marcussen som, før han blev kendt som Ovartaci?",
    answers: ["Bygningsmaler", "Håndværker", "Sømand"],
    correctIndex: 0,
    image: "img/ovi-smile.png",
    feedback:
      "Før han blev kendt som Ovartaci, arbejdede Louis Marcussen med maling og dekoration som bygningsmaler.",
    reflection:
      "Hvordan kan tidligere erfaringer påvirke den kunst, man skaber?",
  },

  {
    chapter: "Indre univers",
    question: "Hvilket tema fylder meget i Ovartacis kunst?",
    answers: ["Sport", "Identitet", "Politik"],
    correctIndex: 1,
    image: "img/identitet.png",
    feedback:
      "Identitet, fantasi og menneskesind er centrale temaer i Ovartacis kunst og fortællinger.",
    reflection: "Hvordan kan kunst vise tanker og følelser uden ord?",
  },

  {
    chapter: "Rum og regler",
    question:
      "Hvorfor lavede Ovartaci hængedukker i stedet for at male direkte på væggene?",
    answers: [
      "Fordi han ikke måtte male direkte på væggene",
      "Fordi han ikke kunne lide maling",
      "Fordi væggene var for små",
    ],
    correctIndex: 0,
    image: "img/dukke.png",
    feedback:
      "Derfor fandt Ovartaci en kreativ løsning ved at lave bevægelige papirdukker, som kunne hænges op i rummet.",
    reflection: "Kan begrænsninger nogle gange føre til nye kreative idéer?",
  },

  {
    chapter: "Objekter",
    question: "Hvordan blev Ovartacis “rygefantomer” brugt?",
    answers: ["Som legetøj", "Til at ryge gennem", "Som lamper"],
    correctIndex: 1,
    image: "img/rygefantomer.png",
    feedback:
      "Tobakken blev placeret i figurens hoved, mens røgen blev suget gennem benene og fødderne.",
    reflection:
      "Hvordan kan almindelige objekter få nye betydninger gennem fantasi?",
  },

  {
    chapter: "Frihed",
    question: "Hvad drømte Ovartaci om at bygge?",
    answers: ["En helikopter", "Et slot", "En ubåd"],
    correctIndex: 0,
    image: "img/ovi-og-figur.png",
    feedback:
      "Ovartaci byggede en helikopter i fuld størrelse, men den kom aldrig til at flyve. Projektet viser hans store fantasi og fascination af teknik og frihed.",
    reflection: "Hvad tror du drømmen om at flyve symboliserede for Ovartaci?",
  },

  {
    chapter: "Bevægelse",
    question: "Hvad blev et vigtigt symbol på frihed for Ovartaci?",
    answers: ["En cykel", "Et tog", "En båd"],
    correctIndex: 0,
    image: "img/hospital.png",
    feedback:
      "At kunne cykle rundt gav Ovartaci en følelse af frihed og selvstændighed.",
    reflection: "Hvorfor tror du bevægelse kan føles som frihed?",
  },

  {
    chapter: "Transformation",
    question:
      "I 1954 amputerede Ovartaci sin penis. Hvad gjorde han efter amputationen?",
    answers: [
      "Han gemte den i en kasse",
      "Han dyppede den i rød maling og smed den væk",
      "Han afleverede den til lægerne",
    ],
    correctIndex: 1,
    image: "img/amputation.png",
    feedback:
      "Ovartaci dyppede den i rød maling for at sikre, at lægerne ikke kunne sy den på igen. Episoden viser, hvor stærkt han ønskede fysisk og psykisk forvandling.",
    reflection:
      "Hvordan tror du kroppen kan hænge sammen med identitet og selvopfattelse?",
  },

  {
    chapter: "Kunst og fortælling",
    question: "Hvad ønskede Ovartaci især at udtrykke gennem sin kunst?",
    answers: ["At blive berømt", "At male realistisk", "Sit indre univers"],
    correctIndex: 2,
    image: "img/ovi-og-figur.png",
    feedback:
      "Kunsten blev en måde for Ovartaci at udtrykke tanker, følelser, fantasi og identitet på.",
    reflection: "Hvad kan kunst fortælle, som ord nogle gange ikke kan?",
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
const nameInput = document.querySelector("#nameInput");
const nameError = document.querySelector("#nameError");
const questionCounter = document.querySelector("#questionCounter");
const feedbackCounter = document.querySelector("#feedbackCounter");
const progressBar = document.querySelector("#progressBar");
const feedbackProgressBar = document.querySelector("#feedbackProgressBar");
const questionText = document.querySelector("#questionText");
const questionImage = document.querySelector("#questionImage");
const answersContainer = document.querySelector("#answers");
const submitAnswerBtn = document.querySelector("#submitAnswerBtn");
const feedbackTitle = document.querySelector("#feedbackTitle");
const feedbackText = document.querySelector("#feedbackText");
const correctAnswerText = document.querySelector("#correctAnswerText");
const feedbackImage = document.querySelector("#feedbackImage");
const reflectionText = document.querySelector("#reflectionText");
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

  let selectedIndex = null;

  submitAnswerBtn.disabled = true;

  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");

    button.className = "answer-btn";
    button.type = "button";
    button.textContent = answer;

    button.addEventListener("click", () => {
      // Fjern gammel markering
      document.querySelectorAll(".answer-btn").forEach((btn) => {
        btn.classList.remove("selected");
      });

      // Marker valgt svar
      button.classList.add("selected");

      selectedIndex = index;

      submitAnswerBtn.disabled = false;
    });

    answersContainer.appendChild(button);
  });

  // Bekræft svar
  submitAnswerBtn.onclick = () => {
    if (selectedIndex !== null) {
      handleAnswer(selectedIndex);
    }
  };

  showScreen("quiz");
}
function handleAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];

  const isCorrect = selectedIndex === currentQuestion.correctIndex;

  // Giver point hvis svaret er korrekt
  if (isCorrect) {
    score += 1;
  }

  // Tilføjer korrekt/forkert styling
  screens.feedback.classList.toggle("correct", isCorrect);
  screens.feedback.classList.toggle("wrong", !isCorrect);

  // Feedback tekst
  feedbackTitle.textContent = isCorrect ? "Korrekt!" : "Forkert!";

  feedbackText.textContent = currentQuestion.feedback;

  correctAnswerText.textContent = `Rigtigt svar: ${
    currentQuestion.answers[currentQuestion.correctIndex]
  }`;

  reflectionText.textContent = currentQuestion.reflection;

  // Vis feedback screen
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
  if (window.resetAliasForm) {
    window.resetAliasForm();
  }

  playerName = "";
  localStorage.removeItem("ovartaciPlayerName");

  nameError.textContent = "";
  showScreen("alias");
  nameInput.focus();
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
  if (event.key === "Enter") {
    saveNameBtn.click();
  }
});

nextBtn.addEventListener("click", nextQuestion);

restartBtn.addEventListener("click", () => {
  if (window.resetAliasForm) {
    window.resetAliasForm();
  }

  playerName = "";
  localStorage.removeItem("ovartaciPlayerName");

  nameError.textContent = "";
  showScreen("start");
});

const backgroundVideo = document.querySelector(".background-video");

backgroundVideo.addEventListener("ended", () => {
  setTimeout(() => {
    backgroundVideo.currentTime = 0;
    backgroundVideo.play();
  }, 6000);
});
