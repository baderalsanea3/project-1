// cached elements
    const questionEl = document.getElementById("question");
const choice1El = document.getElementById("choice1");
const choice2El = document.getElementById("choice2");
const choice3El = document.getElementById("choice3");
const choice4El = document.getElementById("choice4");

console.log(questionEl);
console.log(choice1El);
console.log(choice2El);
console.log(choice3El);
console.log(choice4El);

let questionIndex = 0;
let points = 0
let possiblePoints = 4
const questions = [
  {
    question: "Ballon d'Or 2005?",
    choices: ["Messi", "Kaka", "Ronaldinho", "Cannavaro"],
    answer: "Ronaldinho"
  },
  {
    question: "Ballon d'Or 2006?",
    choices: ["Messi", "Kaka", "Ronaldinho", "Cannavaro"],
    answer: "Cannavaro"
  },
  {
    question: "Ballon d'Or 2007?",
    choices: ["Messi", "Kaka", "Ronaldinho", "Cannavaro"],
    answer: "Kaka"
  },
  {
    question: "Ballon d'Or 2009?",
    choices: ["Messi", "Kaka", "Ronaldinho", "Cannavaro"],
    answer: "Messi"
  }
];

let userChoice;
let time = 30;

function renderQuestions(){
questionEl.textContent = questions[questionIndex].question;

choice1El.textContent = questions[questionIndex].choices[0];
choice2El.textContent = questions[questionIndex].choices[1];
choice3El.textContent = questions[questionIndex].choices[2];
choice4El.textContent = questions[questionIndex].choices[3];

choice1El.style.backgroundColor = 'initial'
choice2El.style.backgroundColor = 'initial'
choice3El.style.backgroundColor = 'initial'
choice4El.style.backgroundColor = 'initial'

}
function start() {
  console.log("Game Started");
//   change the display of game over element to display block
  console.log(questions[questionIndex])

//   2. change text content for question and choices to match questions[questionIndex]
renderQuestions()


}

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", start);


function increaseLevel() {
    if (questionIndex === questions.length - 1) {
        console.log("Game Over");
        return;
    }

    questionIndex++;
    renderQuestions();
}

// Add event listener to all 4 choices
// when the choice is clicked console.log()
// write if statement to check is what the user clicked on === questions[questionIndex].answer

const choices = [choice1El, choice2El, choice3El, choice4El];

choices.forEach(function(choice) {
  choice.addEventListener("click", function() {
    userChoice = choice.textContent;
    console.log(userChoice);

    if (userChoice === questions[questionIndex].answer) {
      console.log("Correct!");
      points += possiblePoints
      choice.style.backgroundColor = 'green'
      setTimeout(()=>{
        increaseLevel()
      },2000)
  
    } else {
      console.log("Wrong!");
      possiblePoints -= 1
      choice.style.backgroundColor = 'red'
    }
    checkGameOver()

  });
});

// 1. check if questionIndex === questions.length -1
// 2. IF it is then console.log('Game Over')
// 3. 
function checkGameOver() {
    if (questionIndex === questions.length - 1) {
        console.log("Game Over");
    }
}

// 1. when the choice is correct give feedback that its correct like background color green

// 2. Write function to increase the questionIndex and change textcontent for questionEl, choiceEl

