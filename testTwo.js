
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
           The Eastern Antarctic Plateau is basically where thermometers go to give up on life, with temperatures routinely plummeting below -90°C. If you ever visit, bring a coat... or better yet, just stay home with a hot chocolate! 
    </div></div>
            `;
            feedbackToQuestionText.style.color = "#28a745"; 
        } else if (this.getAttribute("alt") === "North Ice Greenland") {
            feedbackToQuestionText.innerHTML = `
              <div class = "feedback-container-for-text">
                <div class =" incorrect-answer-quiz"> You are almost right, but North Ice Greenland isn’t the right answer! </div>
                <div class="feedback-text">
                   North Ice, Greenland, was so cold that even polar bears probably took a detour! 
                 In 1954, it recorded a bone-chilling −66.1°C, making it one of the coldest places in the Northern Hemisphere.
                </div></div>
            `;
        } else {
            feedbackToQuestionText.innerHTML = `
              <div class = "feedback-container-for-text">
                <div class = " incorrect-answer-quiz"> Oops, nice try, but Oymyakon, Russia isn’t the right answer! </div>
            
                <div class="feedback-text">
                 Oymyakon is so cold that eyeglasses can freeze to your face, and pens stop working because the ink freezes solid! 
                 This Siberian village holds the record for the coldest inhabited place on Earth, with temperatures dropping to −67.7°C in 1933. It’s so chilly that locals leave their cars running all day—because if they turn them off, they might never start again! 
                 On the bright side, no need for a fridge—just leave your groceries outside! 

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
            window.location.href = "testThree.html"; 
        });
    }
});
