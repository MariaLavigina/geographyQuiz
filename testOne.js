
document.querySelectorAll(".testOneAnswers-container img").forEach(img => {
    img.addEventListener("click", function () {
        const feedbackToQuestionText = document.getElementById("feedbackToQuestionText");

       //------
        const questionIndex = 1;  // This is for Question 1
       //------

        if (this.getAttribute("data-correct") === "true") {
            feedbackToQuestionText.innerHTML = `
            <div class="feedback-container-for-text">
                <div class="correct-answer-quiz">Well done! You nailed it!</div>
                <div class="feedback-text">
                  -------
                </div>
            </div>
            `;
            feedbackToQuestionText.style.color = "#28a745"; 

            // Store result in localStorage for correct answer
            localStorage.setItem(`q${questionIndex}_result`, 'correct');
            //----------

        } else if (this.getAttribute("alt") === "Lut Desert Iran") {
            feedbackToQuestionText.innerHTML = `
            <div class="feedback-container-for-text">
                <div class="incorrect-answer-quiz">Nice try, but Lut Desert isn’t the right answer!</div>
                <div class="feedback-text">
                   ------------
                </div>
            </div>
            `;


            feedbackToQuestionText.style.color = "#dc3545"; // red for incorrect

            // Store result in localStorage for incorrect answer (Lut Desert)
            localStorage.setItem(`q${questionIndex}_result`, 'incorrect');
             //------

        } else {
            // Incorrect answer feedback for Turpan Depression
            feedbackToQuestionText.innerHTML = `
            <div class="feedback-container-for-text">
                <div class="incorrect-answer-quiz">Oops, nice try, but Turpan Depression isn’t the right answer!</div>
                <div class="feedback-text">
                    -----------
                </div>
            </div>
            `;
            feedbackToQuestionText.style.color = "#dc3545"; // red for incorrect

            // Store result in localStorage for incorrect answer (Turpan Depression)
            localStorage.setItem(`q${questionIndex}_result`, 'incorrect');
            //------
        }


        const nextQuestionButton = document.getElementById("NextQuestionButtonQuiz");
        if (nextQuestionButton) {
            nextQuestionButton.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const nextQuestionButton = document.getElementById("NextQuestionButtonQuiz");

    if (nextQuestionButton) {
        nextQuestionButton.addEventListener("click", function () {
            window.location.href = "TestTwo.html"; 
        });
    }
});
