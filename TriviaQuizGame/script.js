/*
    Trivia Quiz Game:
    Develop a trivia quiz game where users can answer multiple-choice questions. 
    The questions and answers can be stored in an array of objects, and the game 
    should keep track of the user's score.
*/
// Create an array of objects containing trivia questions, correct answer, possible answers
// Display the questions and possible answers
// Handle on click user input, check the selected answer against the correct answer
// Update the user score

let triviaQuestions = [
    {
        question: "What is the capital of France?",
        correctAnswer: "Paris",
        options: ["Berlin", "Madrid", "Rome", "Paris"]
    },
    {   
        question: "Which planet is known as the Red Planet?",
        correctAnswer: "Mars",
        options: ["Venus", "Jupiter", "Mars", "Saturn"]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        correctAnswer: "William Shakespeare",
        options: ["Charles Dickens", "Jane Austen", "Mark Twain", "William Shakespeare"]
    },
    {
        question: "In which year did the Titanic sink?",
        correctAnswer: "1912",
        options: ["1905", "1912", "1920", "1931"]
    }
]

const trivia = document.getElementById('trivia');
const question = document.getElementById('question');


let currentQuestionIndex = 0;
let userScore = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("option");

    const currentQuestion = triviaQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = triviaQuestions[currentQuestionIndex];
    if (currentQuestion.options[selectedIndex] === currentQuestion.correctAnswer) {
        userScore++;
    }
    nextQuestion();
}

function nextQuestion(){
    currentQuestionIndex++;
            if (currentQuestionIndex < triviaQuestions.length) {
                displayQuestion();
            } else {
                alert(`Your score: ${userScore}/${triviaQuestions.length}`);
            }
}
displayQuestion();