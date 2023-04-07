
// Retrieve the array from localStorage
const valuesArray = JSON.parse(localStorage.getItem('highScores')) || [];

// Select the HTML element to display the values
const valuesContainer = document.getElementById('values-container');

// Loop through the array and display each value in a new HTML element
for (let i = 0; i < valuesArray.length; i++) {
  const value = valuesArray[i];

  // Create a new HTML element to display the value and append it to the container
  const newValueElement = document.createElement('div');
  newValueElement.textContent = `${value.initials} - ${value.score}`;
  valuesContainer.appendChild(newValueElement);
}

