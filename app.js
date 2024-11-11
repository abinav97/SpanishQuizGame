// Array of 300 questions embedded directly in app.js
const questions = [
    {"sentence": "Yo _____ en la mañana temprano.", "verb": "correr", "translation": "to run", "correctAnswer": "corro"},
    {"sentence": "Ellos _____ pizza los sábados.", "verb": "comer", "translation": "to eat", "correctAnswer": "comen"},
    {"sentence": "Nosotros _____ a la escuela todos los días.", "verb": "ir", "translation": "to go", "correctAnswer": "vamos"},
    {"sentence": "Ella _____ mucho en su cuaderno.", "verb": "escribir", "translation": "to write", "correctAnswer": "escribe"},
    {"sentence": "Tú _____ en el parque los domingos.", "verb": "caminar", "translation": "to walk", "correctAnswer": "caminas"},
    {"sentence": "Yo _____ la guitarra en mi tiempo libre.", "verb": "tocar", "translation": "to play (an instrument)", "correctAnswer": "toco"},
    {"sentence": "Él _____ el periódico todas las mañanas.", "verb": "leer", "translation": "to read", "correctAnswer": "lee"},
    {"sentence": "Nosotros _____ español en la escuela.", "verb": "aprender", "translation": "to learn", "correctAnswer": "aprendemos"},
    {"sentence": "Tú _____ en la cocina con tu mamá.", "verb": "cocinar", "translation": "to cook", "correctAnswer": "cocinas"},
    {"sentence": "Ellas _____ un carro nuevo.", "verb": "comprar", "translation": "to buy", "correctAnswer": "compran"},
    {"sentence": "Yo _____ la música clásica.", "verb": "escuchar", "translation": "to listen", "correctAnswer": "escucho"},
    {"sentence": "Ellos _____ en una casa grande.", "verb": "vivir", "translation": "to live", "correctAnswer": "viven"},
    {"sentence": "Nosotros _____ frutas en el mercado.", "verb": "comprar", "translation": "to buy", "correctAnswer": "compramos"},
    {"sentence": "Ella _____ en la playa todos los veranos.", "verb": "nadar", "translation": "to swim", "correctAnswer": "nada"},
    {"sentence": "Tú _____ tus libros en la mochila.", "verb": "poner", "translation": "to put", "correctAnswer": "pones"},
    {"sentence": "Yo _____ el pastel en la fiesta.", "verb": "traer", "translation": "to bring", "correctAnswer": "traigo"},
    {"sentence": "Él _____ español e inglés.", "verb": "hablar", "translation": "to speak", "correctAnswer": "habla"},
    {"sentence": "Nosotros _____ temprano para el viaje.", "verb": "salir", "translation": "to leave", "correctAnswer": "salimos"},
    {"sentence": "Ella _____ muy bien el piano.", "verb": "tocar", "translation": "to play (an instrument)", "correctAnswer": "toca"},
    {"sentence": "Tú _____ la puerta cuando llegas a casa.", "verb": "abrir", "translation": "to open", "correctAnswer": "abres"},
    // Add more question objects here to reach 300 total
];

// Initialize the array to track remaining questions and shuffle them
let remainingQuestions = [];
shuffleQuestions(); // Shuffle questions initially
loadQuestion(); // Load the first question

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