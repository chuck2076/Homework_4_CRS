
//Creating Global Variables from <div classes>
const startBtn = document.querySelector (".start-btn button");
const infoBox = document.querySelector (".info-box");
const restartBtn = document.querySelector (".buttons .restart");
const exitBtn = document.querySelector (".buttons .quit");
const quizBox = document.querySelector (".quiz-box");
const optionList = document.querySelector (".option-list");
const timeText = document.querySelector (".timer .time-left-txt");
const timeCount = document.querySelector (".timer .time-sec");
const resultBox = document.querySelector (".result-box");

//Question Array:
//1. Pulls from a Very large Array holding all questions to correct positions on screen
//2. Question screen pulls from array:
let questions = [
    {
        numb: 1,
        qHead: "Who Is The Owner of Minecraft?",
        answer: "Microsoft",
        options: [
            "Playstation",
            "Nintendo",
            "Microsoft",
            "Xbox",
        ]
    },

    {
        numb: 2,
        qHead: "When Was Minecraft Released?",
        answer: "2011",
        options: [
            "2010",
            "2011",
            "2012",
            "2013",
        ]
    },

    {
        numb: 3,
        qHead: "Name One Minecraft YouTuber:",
        answer: "Technoblade",
        options: [
            "Dahr Mann",
            "T Series",
            "Kracc Bacc",
            "Technoblade",
        ]
    },

    {
        numb: 4,
        qHead: "Is It Possible to Mine Bedrock with Redstone?",
        answer: "Yes",
        options: [
            "Yes",
            "No",
            "Maybe",
            "IDK",
        ]
    },

    {
        numb: 5,
        qHead: "How Much Money Did Microsoft Buy Minecraft For?",
        answer: "$2.5 Billion",
        options: [
            "$1 Million",
            "$1 Billion",
            "$2.5 Million",
            "$2.5 Billion",
        ]
    },
];

let initials;
//Start button <div class="start-btn"> goes to Welcome Screen <div class="info-box"> display: none; to display: visible; on click
startBtn.onclick = function() {
    infoBox.classList.add("activeInfo");
    initials = prompt("Enter Your Initials to Save Your Score!")
    prompt.textContent = initials;
    localStorage.setItem("initials", initials); 
};

//Welcome screen goes back to Start button <div class="start-btn"> on click 
exitBtn.onclick = function() {
    infoBox.classList.remove("activeInfo");
};


//Welcome screen <button class="restart"> goes Question Screen on start <div class="quiz-box"> display: none; to display: visible;
restartBtn.onclick = function() {
    infoBox.classList.remove("activeInfo");
    quizBox.classList.add("activeQuiz");
    showQuestions(0); //Calling showQuestions function
    queCounter(1); //Passing 1 parameter to queCounter
    startTimer(15); //Calling startTimer function
};

//Creating initial values
let timeValue =  15;
let queCount = 0;
let queNumb = 1;
let userScore = 0;
let counter;

const restartQuiz = resultBox.querySelector(".buttons .restart");
const quitQuiz = resultBox.querySelector(".buttons .quit");

//If restartQuiz button clicked
restartQuiz.onclick = function () {
    window.location.reload();

}
//    quizBox.classList.add("activeQuiz"); //show quiz box
//    resultBox.classList.remove("activeResult"); //hide result box
 //   timeValue = 15; 
//    queCounter = 0;
 //   queNumb = 1;
 //   userScore = 0;
//    showQuestions(queCounter); //calling showQuestions function
//    queCounter(queNumb); //passing que_numb value to queCounter
//    clearInterval(queCount); //clear counter
//    startTimer(timeValue); //calling startTimer function
//    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
//    nextBtn.classList.remove("show"); //hide the next button
//If quitQuiz button clicked, reload the window and prompt for initials

quitQuiz.onclick = function() {
    window.location.reload();
}

//Starting Quiz Container
const nextBtn = document.querySelector("footer .next-btn");
const bottomQuesCounter = document.querySelector("footer .totalq");

//JavaScript structure and logic from https://www.codingnepalweb.com/quiz-app-with-timer-javascript/
//If Next Question button clicked, bring up quiz container and elements
nextBtn.onclick = function(){
    if(queCount < questions.length - 1){ //if question count is less than total question length
        queCount++; //increment the queCount value
        queNumb++; //increment the queNumb value
        showQuestions(queCount); //calling show Questions function
        queCounter(queNumb); //passing queNumb value to queCounter
        clearInterval(counter); //clear counter
        startTimer(timeValue); //calling startTimer function
        //timeText.textContent = "Time Left"; //change the timeText to Time Left
        nextBtn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        showResult(); //calling showResult function
    }
}

//JavaScript structure and logic from https://www.codingnepalweb.com/quiz-app-with-timer-javascript/
//Getting questions and options from array
function showQuestions(index) {
    const queText = document.querySelector (".que-text");

    let queTag = '<span>'+ questions[index].numb + ". " + questions[index].qHead +'</span>';
    let optionTag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    queText.innerHTML = queTag; //adding new span tag inside queTag
    optionList.innerHTML = optionTag; //adding new div tag inside optionTag
    
   const option = optionList.querySelectorAll(".option");
   console.log (option);

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

//JavaScript structure and logic from https://www.codingnepalweb.com/quiz-app-with-timer-javascript/
//Creating the new div tags for icons
//When question answered User clicks <button class="next-btn"> to go to refresh and pull the next question
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
//if user clicked on option
function optionSelected(answer){
    //ClearInterval(counter); //clear counter
    let userAns = answer.textContent; //getting user selected option
    console.log (userAns);
    let correcAns = questions[queCount].answer; //getting correct answer from array
    console.log (correcAns);
    const allOptions = optionList.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");
        for(i=0; i < allOptions; i++){
            if(optionList.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                optionList.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                optionList.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        optionList.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    nextBtn.classList.add("show"); //show the next button if user selected any option
}


//When questions answered Local Storage logs to console 1/0 for correct answer
//When all questions answered on final question sends user to Game Over Screen
//Game Over page has Local Storage for initials and score

var highScores= JSON.parse(localStorage.getItem("highScore")) || [];

//var finalScore = {
// initials: initials, 
// score: userScore,
//}

// highScores.push(finalScore);

// localStorage.setItem("highScore", highScores);

let scoreText = resultBox.querySelector(".score-text");

function showResult(){
    infoBox.classList.remove("activeInfo"); //hide info box
    quizBox.classList.remove("activeQuiz"); //hide quiz box
    resultBox.classList.add("activeResult"); //show result box

    var finalScore = {
        initials: initials, 
        score: userScore,
       }
       
    highScores.push(finalScore);
       
       
    localStorage.setItem("highScore", JSON.stringify(highScores));
    
    let lastScore = highScores[highScores.length -1];
    console.log(lastScore);
    let logInitials = lastScore.initials;
    let logNumber = lastScore.score;
    scoreText.textContent = (logInitials + ' scored ' + logNumber);
    
}


    //if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        //let scoreTag = '<span>Congrats! You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        //scoreText.innerHTML = scoreTag;  //adding new span tag inside score-text
   // }
    //else if(userScore > 1){ // if user scored more than 1
     //   let scoreTag = '<span>Nice, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
    //    scoreText.innerHTML = scoreTag;
   // }
   // else{ // if user scored less than 1
    //    let scoreTag = '<span>Sorry, You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
    //    scoreText.innerHTML = scoreTag;
    //}
    



//Timer function <div class="time-sec"> counts down
//If timer reaches zero <div class="time-sec"> EVENT goes to Final Page
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
    //Some help from JavaScript structure and logic from https://www.codingnepalweb.com/quiz-app-with-timer-javascript/
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            infoBox.classList.remove("activeInfo"); //hide info box
            quizBox.classList.remove("activeQuiz"); //hide quiz box
            resultBox.classList.add("activeResult"); //show result box
        }
    }
}

//JavaScript structure and logic from https://www.codingnepalweb.com/quiz-app-with-timer-javascript/
function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottomQuesCounter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}






//If User misses question <div class="time-sec"> goes down by 3 sec
//If User gets questions right <div class="time-sec"> goes up by 3 sec





