
document.querySelectorAll(".testOneAnswers-container img").forEach(img => {


    img.addEventListener("click", function () {
        const feedbackToQuestionText = document.getElementById("feedbackToQuestionText");
        
       const questionIndex = 3;  

        if (this.getAttribute("data-correct") === "true") {


            feedbackToQuestionText.innerHTML = `
            <div class = "feedback-container-for-text">
               <div class = "correct-answer-quiz">  Well done! You nailed it!  </div>
          <div class="feedback-text">
         --------
         </div></div>
            `;
            feedbackToQuestionText.style.color = "#28a745"; 

               localStorage.setItem(`q${questionIndex}_result`, 'correct');
  
        } else if (this.getAttribute("alt") === "Canada") {
            feedbackToQuestionText.innerHTML = `
              <div class = "feedback-container-for-text">
                <div class =" incorrect-answer-quiz"> You are almost right, but Canada isn’t the right answer! </div>
                <div class="feedback-text">
                 ------- 
                </div></div>
            `;
            feedbackToQuestionText.style.color = "#dc3545"; 

  
            localStorage.setItem(`q${questionIndex}_result`, 'incorrect');
          

        } else {
            feedbackToQuestionText.innerHTML = `
              <div class = "feedback-container-for-text">
                <div class = " incorrect-answer-quiz"> Oops, nice try, but Scotland isn’t the right answer! </div>
            
                <div class="feedback-text">
                   ------
                </div></div>
            `;
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
            window.location.href = "TestFour.html"; 
        });
    }
});
