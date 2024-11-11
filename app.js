let questions = [];
let remainingQuestions = [];

// Load questions from JSON file
fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        questions = data;
        shuffleQuestions(); // Shuffle questions initially
        loadQuestion();
    })
    .catch(error => console.error('Error loading questions:', error));

// Function to shuffle the questions array
function shuffleQuestions() {
    remainingQuestions = [...questions]; // Copy all questions into the remainingQuestions array
    for (let i = remainingQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [remainingQuestions[i], remainingQuestions[j]] = [remainingQuestions[j], remainingQuestions[i]];
    }
}

// Function to load the next random question
function loadQuestion() {
    if (remainingQuestions.length === 0) {
        document.getElementById("sentence").innerText = "Quiz complete! You've answered all questions.";
        document.getElementById("answer").style.display = "none";
        document.getElementById("hint").style.display = "none";
        document.getElementById("feedback").innerText = "Congratulations!";
        return;
    }

    const question = remainingQuestions.pop(); // Get a random question without replacement
    document.getElementById("sentence").innerText = question.sentence;
    document.getElementById("answer").value = "";
    document.getElementById("hint").innerText = "";
    document.getElementById("feedback").innerText = "";
    document.getElementById("currentQuestion").dataset.correctAnswer = question.correctAnswer; // Store correct answer for checking
    document.getElementById("currentQuestion").dataset.translation = question.translation; // Store translation for hints
}

// Check if the answer is correct
function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswer = document.getElementById("currentQuestion").dataset.correctAnswer;

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").innerText = "Correct!";
        document.getElementById("feedback").style.color = "green";
        setTimeout(loadQuestion, 1000); // Load next question after a brief delay
    } else {
        document.getElementById("feedback").innerText = "Try again!";
        document.getElementById("feedback").style.color = "red";
    }
}

// Show the English meaning of the verb as a hint
function showHint() {
    const hint = document.getElementById("currentQuestion").dataset.translation;
    document.getElementById("hint").innerText = `Hint: ${hint}`;
}