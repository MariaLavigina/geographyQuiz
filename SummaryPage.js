document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the quiz answers from localStorage
    const quizAnswers = JSON.parse(localStorage.getItem("quizAnswers")) || [];

    // Initialize counters for correct and incorrect answers
    let correctAnswers = 0;
    let incorrectAnswers = 0;

    // Count correct and incorrect answers
    quizAnswers.forEach(answer => {
        if (answer === true) {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }
    });

    // Display the result
    const summaryContent = document.getElementById("summary-content");
    summaryContent.innerHTML = `
        <p>You answered ${correctAnswers} questions correctly!</p>
        <p>You answered ${incorrectAnswers} questions incorrectly.</p>
    `;

    // Display the "Restart Quiz" button
    const restartQuizButton = document.getElementById("restartQuizButton");
    restartQuizButton.style.display = "block";

    // Restart the quiz when the button is clicked
    restartQuizButton.addEventListener("click", function () {
        localStorage.removeItem("quizAnswers");  // Clear the previous answers
        window.location.href = "TestOne.html";    // Redirect to the first question page
    });
});
