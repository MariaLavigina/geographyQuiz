
document.querySelectorAll(".testOneAnswers-container img").forEach(img => {
    img.addEventListener("click", function () {
        const feedbackToQuestionText = document.getElementById("feedbackToQuestionText");
        let questionResult = false;  // for the summary page - Initialize the result as false by default



        if (this.getAttribute("data-correct") === "true") {

            questionResult = true;  //for the summery page - marking as correct if the answer is correct 

            feedbackToQuestionText.innerHTML = `
            <div class = "feedback-container-for-text">
               <div class = "correct-answer-quiz">Well done! You nailed it! </div>
      <div class="feedback-text">
        Death Valley proudly holds the title for the highest air temperature on Earth. 
        On July 10, 1913, Furnace Creek in California reached a scorching 56.7°C (134.1°F). 
        Yes, you read that right—Furnace Creek.<br><br>
        So, our advice? If you plan on visiting, leave your Edinburgh puffer jacket at home. 
        You’ll be melting before you even unpack it! 
    </div></div>
            `;
            feedbackToQuestionText.style.color = "#28a745"; 
        } else if (this.getAttribute("alt") === "Lut Desert Iran") {
            feedbackToQuestionText.innerHTML = `
              <div class = "feedback-container-for-text">
                <div class =" incorrect-answer-quiz">Nice try, but Lut Desert isn’t the right answer! </div>
              
                <div class="feedback-text">
                  The Lut Desert in Iran is so insanely hot that scientists once measured a surface temperature of 159.3°F 
                   That’s hot enough to fry an egg on the ground - if you don’t mind a little sand in your omelet. 
                </div></div>
            `;
        } else {
            feedbackToQuestionText.innerHTML = `
              <div class = "feedback-container-for-text">
                <div class = " incorrect-answer-quiz"> Oops, nice try, but Turpan Depression isn’t the right answer! </div>
            
                <div class="feedback-text">
                The Turpan Depression in China is one of the hottest and lowest places on Earth, sitting at 505 feet (154 meters) below sea level! 
                 It’s so scorching that locals use the extreme heat to bake bread in the sand—yes, actual sand-baked bread!
                 Now that’s taking “hot and fresh” to a whole new level! 

                </div></div>
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
            window.location.href = "TestTwo.html"; 
        });
    }
});
