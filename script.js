const quizData = [
   
    
    {
        question: "What is the largest planet in our solar system?",
        options: ["Mars", "Saturn", "Jupiter", "Neptune"],
        correctAnswer: "Jupiter"
    },
 
   
  {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
        correctAnswer: "Au"
    },
    
    {
        question: "What is the tallest mountain in the world?",
        options: ["Mount Kilimanjaro", "Mount Everest", "Mount McKinley", "Mount Fuji"],
        correctAnswer: "Mount Everest"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Venus", "Mercury", "Uranus"],
        correctAnswer: "Mars"
    }
   
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const resultElement = document.getElementById("result");
    
    questionElement.textContent = quizData[currentQuestion].question;
    optionsElement.innerHTML = "";

    quizData[currentQuestion].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("btn");
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
    });

    resultElement.textContent = `Score: ${score}/${currentQuestion}`;
}

function checkAnswer(selectedOption) {
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        const resultElement = document.getElementById("result");
        resultElement.textContent = `Quiz Completed. Final Score: ${score}/${quizData.length}`;
        document.getElementById("options").innerHTML = "";
        document.getElementById("next-btn").style.display = "none";
    }
}

document.getElementById("next-btn").addEventListener("click", loadQuestion);

loadQuestion();

