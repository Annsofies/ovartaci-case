"use strict";

// GEMMER HVILKET SVAR BRUGEREN HAR VALGT 
let selectedAnswerIndex = null;

// OPDATERER PROGRESSBAR + SPØRGSMÅL COUNTER 
function updateProgress() {
  let progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  progressBar.style.width = progress + "%";
  feedbackProgressBar.style.width = progress + "%";

  let questionNumber = currentQuestionIndex + 1;

  questionCounter.textContent = `Spørgsmål ${questionNumber} af ${questions.length}`;

  feedbackCounter.textContent = `Spørgsmål ${questionNumber} af ${questions.length}`;
}

// VISER SPØRGSMÅL + SVARMULIGHEDER 
function renderQuestion() {
  // nulstiller valgt svar
  selectedAnswerIndex = null;
  let currentQuestion = questions[currentQuestionIndex];
  updateProgress();

  // indsætter spørgsmål 
  questionText.textContent = currentQuestion.question;

  // indsætter billede
  questionImage.src = currentQuestion.image;

  // rydder gamle svar
  answers.innerHTML = "";

  // laver nye svar-knapper
  currentQuestion.answers.forEach(function (answer, index) {
    let button = document.createElement("button");

    button.textContent = answer;

    button.classList.add("answer-btn");

    // når brugeren klikker på et svar
    button.onclick = function () {
      // gemmer valgt svar
      selectedAnswerIndex = index;

      // fjerner markering fra andre knapper
      document.querySelectorAll(".answer-btn").forEach((btn) => {
        btn.classList.remove("selected");
      });

      // markerer valgt knap
      button.classList.add("selected");
    };

    answers.appendChild(button);
  });

  // viser question screen
  showScreen("question");
}

// VISER FEEDBACK
function handleAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];

  const correctIndex = currentQuestion.correctIndex;

  // tjekker om svaret er korrekt
  if (selectedIndex === correctIndex) {
    score++;

    feedbackTitle.textContent = "Korrekt!";
  } else {
    feedbackTitle.textContent = "Forkert!";
  }

  // indsætter feedback
  feedbackText.textContent = currentQuestion.feedback;

  // viser korrekt svar
  correctAnswerText.textContent = `Rigtigt svar: ${currentQuestion.answers[correctIndex]}`;

  // feedback billede
  feedbackImage.src = currentQuestion.image;

  // viser feedback screen
  showScreen("feedback");
}

// GÅR VIDERE TIL NÆSTE SPØRGSMÅL
function nextQuestion() {
  currentQuestionIndex++;

  // hvis der stadig er spørgsmål
  if (currentQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    saveScore();

    renderScoreboard();

    showScreen("score");
  }
}

// NÆSTE KNAP 
nextBtn.addEventListener("click", () => {
  // stopper hvis intet svar er valgt
  if (selectedAnswerIndex === null) {
    return;
  }

  // viser feedback
  handleAnswer(selectedAnswerIndex);
});