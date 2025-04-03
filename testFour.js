
document.querySelectorAll(".testOneAnswers-container img").forEach(img => {
    img.addEventListener("click", function () {
        const feedbackToQuestionText = document.getElementById("feedbackToQuestionText");


        let questionResult = false;  // for the summary page - Initialize the result as false by default
        

        if (this.getAttribute("data-correct") === "true") {

            questionResult = true;  //for the summery page - marking as correct if the answer is correct 

            feedbackToQuestionText.innerHTML = `
                <div class = "feedback-container-for-text">
                    <div class = "correct-answer-quiz">Well done! You nailed it!</div>
                    <div class="feedback-text">
                  Tokyo has the most population because it’s the only place where you can find both the latest robot technology and the 
                  oldest sushi restaurant, all within a five-minute walk! It’s like a never-ending game of "Where’s Waldo?"—except, it’s 
                  “Where’s the next person?” and you’ll never be alone for long!
                    </div>
                </div>
            `;
            feedbackToQuestionText.style.color = "#28a745"; 
        } 

        else if (this.getAttribute("alt") === "Sao Paulo") {
            feedbackToQuestionText.innerHTML = `
                <div class = "feedback-container-for-text">
                    <div class = "incorrect-answer-quiz">Oops, nice try, but Sao Paulo isn’t the right answer!</div>
                    <div class="feedback-text">
                         São Paulo is the second most populous city because it’s the place where coffee and traffic jams are both endless!  
                         It’s so packed, even the traffic lights get impatient and try to skip ahead. If you find yourself alone for more than five 
                         minutes, you’re probably in the middle of a coffee break—and that’s when the real population growth kicks in! 
                    </div>
                </div>
            `;
        } 

        else if (this.getAttribute("alt") === "New Delhi") {
            feedbackToQuestionText.innerHTML = `
                <div class = "feedback-container-for-text">
                    <div class = "incorrect-answer-quiz">Oops, nice try, but New Delhi isn’t the right answer! </div>
                    <div class="feedback-text">
                          New Delhi is in third place for population because it's the only city where auto-rickshaws and cows are part of the same traffic 
                          jam! It's so crowded that if you accidentally drop your keys, they’ll probably get picked up by someone... who’s also stuck in traffic 
                          and might just hand them back to you a few hours later!
                    </div>
                </div>
            `;
        }

                // Storing the result in localStorage
                let currentAnswers = JSON.parse(localStorage.getItem("quizAnswers")) || [];
                currentAnswers.push(questionResult);  // Add the result of this question (if true/false)
                localStorage.setItem("quizAnswers", JSON.stringify(currentAnswers));
        

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
            window.location.href = "TestFive.html"; 
        });
    }
});
