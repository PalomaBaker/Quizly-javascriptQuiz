 // Set the quiz duration and time penalty for wrong answers
 const quizDuration = 60; // seconds
 const timePenalty = 10; // seconds
 
 // Select the HTML elements
 const startButton = document.getElementById("start-button");
 const quizContainer = document.getElementById("quiz-container");
 const questionElement = document.getElementById("question");
 const choicesContainer = document.getElementById("choices-container");
 const timerElement = document.getElementById("timer");
 const gameOverContainer = document.getElementById("game-over-container");
 const initialsInput = document.getElementById("initials-input");
 const saveButton = document.getElementById("save-button");
 
 // Set the initial values
 let questionIndex = 0;
 let timeRemaining = quizDuration;
 let timerId = null;
 
 // Helper function to start the timer and update the timer element
 function startTimer() {
   timerId = setInterval(() => {
     timeRemaining--;
     timerElement.textContent = `Time: ${timeRemaining}`;
 
     if (timeRemaining <= 0) {
       clearInterval(timerId);
       endGame();
     }
   }, 1000);
 }
 
 // Helper function to display the current question and choices
 function displayQuestion() {
   const currentQuestion = quizQuestions[questionIndex];
 
   questionElement.textContent = currentQuestion.question;
   choicesContainer.innerHTML = "";
 
   currentQuestion.choices.forEach(choice => {
     const choiceButton = document.createElement("button");
     choiceButton.textContent = choice;
     choiceButton.addEventListener("click", () => {
       if (choice === currentQuestion.answer) {
         questionIndex++;
 
         if (questionIndex >= quizQuestions.length) {
           endGame();
         } else {
           displayQuestion();
         }
       } else {
         timeRemaining -= timePenalty;
 
         if (timeRemaining <= 0) {
           clearInterval(timerId);
           endGame();
         } else {
           displayQuestion();
         }
       }
     });
 
     choicesContainer.appendChild(choiceButton);
   });
 }
 
 // Helper function to end the game and show the game over screen
 function endGame() {
   clearInterval(timerId);
 
   quizContainer.style.display = "none";
   gameOverContainer.style.display = "block";
 }
 
 // Event listener for the start button
 startButton.addEventListener("click", () => {
   startButton.style.display = "none";
   quizContainer.style.display = "block";
 
   startTimer();
   displayQuestion();

// Event listener for the save button
// Save the initials and score to a database or localStorage
   saveButton.addEventListener("click", function() {
      const initials = initialsInput.value;
      var score = timeRemaining;
      score = localStorage.getItem("score");
      const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    
      highScores.push({ initials: initials, score: score });
      localStorage.setItem("highScores", JSON.stringify(highScores));
    
      window.location.href = "highscores.html";
    });
});
