var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector("#time");
var startButton = document.querySelector("#start");
var timer;
var timerCount;
var currentQuestion;
var theQuestions =[ 
  {
     question: "what year did the first Star Wars come out?", 
     answers: [
          "1977",
          "1982",
          "2005"
     ],
     answer: "1977"
  },
  {
      question: "how many Star War movies had been made?",
      answers: [
           "5",
           "10",
           "9",
      ],
      answer: "9"
      
  },
  {
      question: " who directed the episode 1-6 ",
      answers: [
        "George Lucas",
        "J.J. Abrams",
        "Rian Johnson",
      ],
      answer: "Geroge Lucas"
          
      
  }
]
// The startGame function is called when the start button is clicked
function startGame() {
  isWin = false;
  timerCount = 20;
  currentQuestion = 0;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  
  startTimer()
  document.getElementById("start-screen").setAttribute("class", "hide")
  document.getElementById("questions").setAttribute("class", "")
  showQuestion()
}

function showQuestion(){
  document.getElementById("question-title").textContent = theQuestions[currentQuestion].question;
  let choiceContainer = document.getElementById("choices");
  choiceContainer.innerHTML = "";
  theQuestions[currentQuestion].answers.forEach(choice => {
    let newButton = document.createElement("button");
    newButton.textContent = choice;
    newButton.addEventListener("click", checkAnswer);
    choiceContainer.appendChild(newButton)
  })
}

function checkAnswer() {
  
  if( this.value !== theQuestions[currentQuestion].answer){
    window.alert("you are wrong")
  }
  else {
    window.alert("right")
  }
}
function winGame() {
  window.alert("you win")
}
function loseGame() {
  window.alert('you lose')
}
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }

  startButton.addEventListener("click", startGame)