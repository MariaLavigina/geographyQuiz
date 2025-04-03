
document.querySelectorAll(".testOneAnswers-container img").forEach(img => {


    img.addEventListener("click", function () {
        const feedbackToQuestionText = document.getElementById("feedbackToQuestionText");

        let questionResult = false;  // for the summary page - Initialize the result as false by default
        

        if (this.getAttribute("data-correct") === "true") {

            questionResult = true;  //for the summery page - marking as correct if the answer is correct 

            feedbackToQuestionText.innerHTML = `
            <div class = "feedback-container-for-text">
               <div class = "correct-answer-quiz">  Well done! You nailed it!  </div>
          <div class="feedback-text">
         Brazil didn’t just win the water lottery—it hacked the system! With the Amazon River. water than the next 7 biggest rivers combined, it’s like Mother Nature accidentally left the tap running for millions of years! 
         If Brazil ever threw a pool party, the whole world could show up—and there’d still be room for more! Just don’t bring a straw… because even drinking non-stop for a lifetime wouldn’t make a dent!
         </div></div>
            `;
            feedbackToQuestionText.style.color = "#28a745"; 
        } else if (this.getAttribute("alt") === "Canada") {
            feedbackToQuestionText.innerHTML = `
              <div class = "feedback-container-for-text">
                <div class =" incorrect-answer-quiz"> You are almost right, but Canada isn’t the right answer! </div>
                <div class="feedback-text">
                  Canada has so much freshwater that if beavers ever declared independence, they’d have their own country! 
                  With over 2 million lakes (yes, you read that right!), Canada is basically Earth’s biggest waterpark. If you stacked all its lakes together, they’d cover more land than Germany! 
                  But here’s the catch—most of that water is frozen! So unless you enjoy drinking ice cubes, you might want to bring a kettle! 
                </div></div>
            `;
        } else {
            feedbackToQuestionText.innerHTML = `
              <div class = "feedback-container-for-text">
                <div class = " incorrect-answer-quiz"> Oops, nice try, but Scotland isn’t the right answer! </div>
            
                <div class="feedback-text">
             The real reason Scotland isn’t #1? Whisky. A suspicious amount of its fresh water mysteriously disappears into distilleries… and no one’s complaining! 
            Scotland has so much rain that locals don’t check the weather forecast—they just assume it’s wet!
            With over 30,000 lochs, countless rivers, and waterfalls around every corner, Scotland could challenge Brazil... if only half of it didn’t fall from the sky daily! 
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
            window.location.href = "TestFour.html"; 
        });
    }
});
