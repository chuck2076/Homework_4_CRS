
//Start button <div class="start-btn"> goes to Welcome Screen <div class="info-box"> display: none; to display: visible; on click
//Welcome screen <button class="restart"> goes Question Screen on start <div class="quiz-box"> display: none; to display: visible;
//Welcome screen goes back to Start button <div class="start-btn"> on click 
//Need way to transition to new display screen (i.e., display none, display visible)

//Question Screen:
//1. Pulls from a Very large Array holding all questions to correct positions on screen
//2. Question screen pulls from array:
//question.length();
//questions[index].choices.length;
//For (let j = 0; j < questions.length; j++) { 
//    for (let i = 0; i < questions[j].choices.length; i++) {
//          var choiceBtn = document.createElement('button');
//            choiceBtn.textContent = questions[0].choices[i];
//            choiceBtn.setAttribute('type', 'button');
 //            choiceBtn.setAttribute('type', 'button');
 //            choiceBtn.setAttribute('id', 'submitBtn')
 //            choiceBtn.setAttribute('id', 'submitBtn')
 //            choiceBtn.setAttribute('id', 'submitBtn')
  //           choiceBtn.setAttribute('value', questions[j].choices[i])
  //            contactContainer.append(choiceBtn);
    
  //           choiceBtn.onclick = buttonClick;
    
    
  //         }
  //         function buttonClick(){
  //             if(this.value === questions[j].answer){
  //                 console.log("correct")
 //              }else{
 //                  console.log("wrong")
 //              }
    
 //           }
 //    }

//Timer function <div class="time-sec"> counts down
//If User misses question <div class="time-sec"> goes down by 3 sec
//If User gets questions right <div class="time-sec"> goes up by 3 sec
//If timer reaches zero <div class="time-sec"> EVENT goes to Final Page
//When question answered User clicks <button class="next-btn"> to go to refresh and pull the next question
//When questions answered Local Storage logs to console true/false for correct answer
//When all questions answered on final questions FOR LOOP logs all questions and final loop sends user to Game Over Screen
//Game Over page has Local Storage for initials and score

