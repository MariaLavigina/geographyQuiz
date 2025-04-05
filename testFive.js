
document.querySelectorAll(".testOneAnswers-container img").forEach(img => {
    img.addEventListener("click", function () {
        const feedbackToQuestionText = document.getElementById("feedbackToQuestionText");

               const questionIndex = 5;  
            
        if (this.getAttribute("data-correct") === "true") {

            feedbackToQuestionText.innerHTML = `
                <div class = "feedback-container-for-text">
                    <div class = "correct-answer-quiz">Well done! You got it right!</div>
                    <div class="feedback-text">
                    -----------
                    </div>
                </div>
            `;
            feedbackToQuestionText.style.color = "#28a745"; 
                    
                      localStorage.setItem(`q${questionIndex}_result`, 'correct'); 
        } 

        else if (this.getAttribute("alt") === "Liechtenstein") {
            feedbackToQuestionText.innerHTML = `
                <div class = "feedback-container-for-text">
                    <div class = "incorrect-answer-quiz">Nice try, but Liechtenstein isn’t the right answer!</div>
                    <div class="feedback-text">
            -----------
                    </div>
                </div>
            `;

            feedbackToQuestionText.style.color = "#dc3545"; 

            localStorage.setItem(`q${questionIndex}_result`, 'incorrect');
     
        } 

        else if (this.getAttribute("alt") === "Monoco") {
            feedbackToQuestionText.innerHTML = `
                <div class = "feedback-container-for-text">
                    <div class = "incorrect-answer-quiz">Nice try, but Monaco isn’t the right answer!</div>
                    <div class="feedback-text">
                     ---------
                    </div>
                </div>
            `;
            feedbackToQuestionText.style.color = "#dc3545"; 

          
            localStorage.setItem(`q${questionIndex}_result`, 'incorrect');
           
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
            window.location.href = "SummaryPage.html"; 
        });
    }
});
