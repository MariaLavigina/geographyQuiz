document.addEventListener("DOMContentLoaded", function () {
    const playerQuizTotalQuestions = 5;
    let correct = 0;
    let incorrect = 0;

    // Loop through each question and retrieve the result from localStorage
    for (let i = 1; i <= playerQuizTotalQuestions; i++) {
        const playerSingleQuizResult = localStorage.getItem(`q${i}_result`);
        if (playerSingleQuizResult === 'correct') {
            correct++;
        } else if (playerSingleQuizResult === 'incorrect') {
            incorrect++;
        }
    }

    // Display the result summary
    const playerQuizSummaryScore = document.getElementById("player-summary-score");
    playerQuizSummaryScore.innerHTML = `
        <p>You answered ${correct} questions correctly!</p>
        <p>You answered ${incorrect} questions incorrectly.</p>
    `;

    // Add restart button functionality    restartQuizButton
    const restartQuizButton = document.getElementById("restartQuizButton");
    if (restartQuizButton) {
        restartQuizButton.addEventListener("click", function () {
            // Clear localStorage to reset the quiz
            localStorage.clear();
            // Redirect to the first question page
            window.location.href = "TestOne.html";
        });
    }
});
