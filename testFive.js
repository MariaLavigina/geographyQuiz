
document.querySelectorAll(".testOneAnswers-container img").forEach(img => {
    img.addEventListener("click", function () {
        const feedbackToQuestionText = document.getElementById("feedbackToQuestionText");

        let questionResult = false;  // for the summary page - Initialize the result as false by default
        

        if (this.getAttribute("data-correct") === "true") {

            questionResult = true;  //for the summery page - marking as correct if the answer is correct 


            feedbackToQuestionText.innerHTML = `
                <div class = "feedback-container-for-text">
                    <div class = "correct-answer-quiz">Well done! You got it right!</div>
                    <div class="feedback-text">
                        Vatican City is the smallest country in the world because if it were any bigger, 
                        the Pope would need a golf cart to get around instead of just walking everywhere!
                    </div>
                </div>
            `;
            feedbackToQuestionText.style.color = "#28a745"; 
        } 

        else if (this.getAttribute("alt") === "Liechtenstein") {
            feedbackToQuestionText.innerHTML = `
                <div class = "feedback-container-for-text">
                    <div class = "incorrect-answer-quiz">Nice try, but Liechtenstein isn’t the right answer!</div>
                    <div class="feedback-text">
            Liechtenstein isn’t the smallest country in the world because it’s too busy being the world’s best-kept secret of 
            luxury and mountains! It’s like the cool, quiet neighbor that lets everyone else hog the spotlight. Meanwhile, 
            Vatican City holds the "smallest" title because it’s got a holy monopoly on compactness. After all, it's got literally 
            just enough space for the Pope, a few Swiss Guards, and a never-ending supply of incense!
                    </div>
                </div>
            `;
        } 

        else if (this.getAttribute("alt") === "Monoco") {
            feedbackToQuestionText.innerHTML = `
                <div class = "feedback-container-for-text">
                    <div class = "incorrect-answer-quiz">Nice try, but Monaco isn’t the right answer!</div>
                    <div class="feedback-text">
                        Monaco may be glamorous and tiny, but it’s not the smallest country in the world. 
                        It’s just big enough to fit all the luxury yachts and casinos!
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
            window.location.href = "SummaryPage.html"; 
        });
    }
});
