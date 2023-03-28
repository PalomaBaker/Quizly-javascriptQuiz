var startBtn = document.getElementById('#start');

// Get the start button element from the DOM
const startButton = document.querySelector('#start');

// Add an event listener to the start button
startButton.addEventListener('click', startQuiz);

// Define the startQuiz function
function startQuiz() {
  // Start the timer by setting an interval to decrement a timer variable every second
  let timeLeft = 60; // Starting time in seconds
  const timer = setInterval(function() {
    timeLeft--;
    // Update the timer display
    document.querySelector('#timer').textContent = timeLeft;

    // End the quiz if time runs out
    if (timeLeft <= 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);

  // Display the first quiz question
  const quizContainer = document.querySelector('#quiz-container');
  const question = document.createElement('h2');
  question.textContent = quizQuestions[0].question;
  quizContainer.appendChild(question);

  // Display the answer choices for the first question
  const answerChoices = document.createElement('ul');
  for (let i = 0; i < quizQuestions[0].answers.length; i++) {
    const answer = document.createElement('li');
    answer.textContent = quizQuestions[0].answers[i];
    answerChoices.appendChild(answer);
  }
  quizContainer.appendChild(answerChoices);
}
