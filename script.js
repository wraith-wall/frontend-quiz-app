"use strict";

fetch("./data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    window.quizData = data;
    console.log("Quiz data loaded:", window.quizData);
  })
  .catch((error) => {
    console.error("Error fetching quiz data:", error);
    alert("Failed to load quiz data. Please try again.");
  });

let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];

function initializeQuiz() {
  const urlParams = new URLSearchParams(window.location.search);
  const subject = urlParams.get("subject") || "HTML";
  currentQuiz = window.quizData.quizzes.find((quiz) => quiz.title === subject);
  if (!currentQuiz) {
    alert("Quiz not found for this subject!");
    return;
  }
  document.querySelector(".quiz__title").textContent = currentQuiz.title;
  document.querySelector(".quiz__type-icon").src = currentQuiz.icon;

  console.log("Quiz initialized", currentQuiz);
}
