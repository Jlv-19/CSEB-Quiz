// Question model
const questions = [
    {
        questionText: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        questionText: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        questionText: "Which is the largest planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter"
    },
    {
        questionText: "Who developed JavaScript?",
        options: ["Brendan Eich", "James Gosling", "Bjarne Stroustrup", "Guido van Rossum"],
        correctAnswer: "Brendan Eich"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];

// Shuffle the questions array
function shuffleQuestions() {
    shuffledQuestions = [...questions];
    shuffledQuestions.sort(() => Math.random() - 0.5);  // Shuffle array randomly
}

// Load the current question
function loadQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length) {
        const question = shuffledQuestions[currentQuestionIndex];
        document.getElementById('question-text').textContent = question.questionText;

        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = ''; // Clear previous options

        question.options.forEach(option => {
            const optionButton = document.createElement('button');
            optionButton.textContent = option;
            optionButton.classList.add('option-btn');
            optionButton.onclick = () => checkAnswer(option);
            optionsContainer.appendChild(optionButton);
        });
    } else {
        showScore();
    }
}

// Check if the selected answer is correct
function checkAnswer(selectedOption) {
    const correctAnswer = shuffledQuestions[currentQuestionIndex].correctAnswer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    loadQuestion();
}

// Show the score
function showScore() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('score-container').style.display = 'block';
    document.getElementById('score-text').textContent = `Your final score: ${score}`;
}

// Restart the quiz
function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    shuffleQuestions();
    document.getElementById('score-container').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    loadQuestion();
}

// Set up the page
document.getElementById('next-btn').onclick = () => loadQuestion();
document.getElementById('restart-btn').onclick = () => restartQuiz();

// Initialize the quiz
shuffleQuestions();
loadQuestion();
