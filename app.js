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
    {"sentence": "Ellos _____ temprano en la noche.", "verb": "acostarse", "translation": "to go to bed", "correctAnswer": "se acuestan"},
    {"sentence": "Yo _____ una novela en el autobús.", "verb": "leer", "translation": "to read", "correctAnswer": "leo"},
    {"sentence": "Ella _____ el piano cada tarde.", "verb": "practicar", "translation": "to practice", "correctAnswer": "practica"},
    {"sentence": "Nosotros _____ en el restaurante esta noche.", "verb": "cenar", "translation": "to have dinner", "correctAnswer": "cenamos"},
    {"sentence": "Tú _____ muy rápido cuando corres.", "verb": "correr", "translation": "to run", "correctAnswer": "corres"},
    {"sentence": "Yo _____ en la piscina cuando hace calor.", "verb": "nadar", "translation": "to swim", "correctAnswer": "nado"},
    {"sentence": "Ellos _____ ayuda a sus amigos.", "verb": "dar", "translation": "to give", "correctAnswer": "dan"},
    {"sentence": "Él _____ su tarea todas las noches.", "verb": "hacer", "translation": "to do", "correctAnswer": "hace"},
    {"sentence": "Nosotros _____ por el parque cada mañana.", "verb": "pasear", "translation": "to stroll", "correctAnswer": "paseamos"},
    {"sentence": "Ella _____ su teléfono en la mesa.", "verb": "dejar", "translation": "to leave", "correctAnswer": "deja"},
    {"sentence": "Tú _____ una carta para tus amigos.", "verb": "escribir", "translation": "to write", "correctAnswer": "escribes"},
    {"sentence": "Yo _____ en el coro de la iglesia.", "verb": "cantar", "translation": "to sing", "correctAnswer": "canto"},
    {"sentence": "Ellas _____ el almuerzo al mediodía.", "verb": "comer", "translation": "to eat", "correctAnswer": "comen"},
    {"sentence": "Nosotros _____ la televisión después de la cena.", "verb": "ver", "translation": "to watch", "correctAnswer": "vemos"},
    {"sentence": "Ella _____ la verdad siempre.", "verb": "decir", "translation": "to say", "correctAnswer": "dice"},
    {"sentence": "Tú _____ una siesta en la tarde.", "verb": "tomar", "translation": "to take", "correctAnswer": "tomas"},
    {"sentence": "Yo _____ mi cuarto los sábados.", "verb": "limpiar", "translation": "to clean", "correctAnswer": "limpio"},
    {"sentence": "Él _____ la ciudad cada verano.", "verb": "visitar", "translation": "to visit", "correctAnswer": "visita"},
    {"sentence": "Nosotros _____ al fútbol en el parque.", "verb": "jugar", "translation": "to play (a sport)", "correctAnswer": "jugamos"},
    {"sentence": "Ella _____ la mesa para la cena.", "verb": "poner", "translation": "to set/put", "correctAnswer": "pone"},
    {"sentence": "Tú _____ a tus abuelos los domingos.", "verb": "visitar", "translation": "to visit", "correctAnswer": "visitas"},
    {"sentence": "Yo _____ el autobús todos los días.", "verb": "tomar", "translation": "to take", "correctAnswer": "tomo"},
    {"sentence": "Ellas _____ canciones muy bonitas.", "verb": "cantar", "translation": "to sing", "correctAnswer": "cantan"},
    {"sentence": "Tú _____ muy alto en los partidos.", "verb": "saltar", "translation": "to jump", "correctAnswer": "saltas"},
    {"sentence": "Nosotros _____ en la fiesta anoche.", "verb": "bailar", "translation": "to dance", "correctAnswer": "bailamos"},
    {"sentence": "Él _____ a su perro todos los días.", "verb": "pasear", "translation": "to walk", "correctAnswer": "pasea"},
    {"sentence": "Yo _____ en mi diario cada noche.", "verb": "escribir", "translation": "to write", "correctAnswer": "escribo"},
    {"sentence": "Ellos _____ en la biblioteca después de clase.", "verb": "estudiar", "translation": "to study", "correctAnswer": "estudian"},
    {"sentence": "Tú _____ libros interesantes en la biblioteca.", "verb": "leer", "translation": "to read", "correctAnswer": "lees"},
    {"sentence": "Nosotros _____ a la playa los fines de semana.", "verb": "ir", "translation": "to go", "correctAnswer": "vamos"},
    {"sentence": "Ella _____ a los clientes en la tienda.", "verb": "ayudar", "translation": "to help", "correctAnswer": "ayuda"},
    {"sentence": "Yo _____ por el parque para relajarme.", "verb": "caminar", "translation": "to walk", "correctAnswer": "camino"},
    {"sentence": "Él _____ sus llaves en la mesa.", "verb": "poner", "translation": "to put", "correctAnswer": "pone"},
    {"sentence": "Ellas _____ una casa nueva en el campo.", "verb": "comprar", "translation": "to buy", "correctAnswer": "compran"},
    {"sentence": "Nosotros _____ al cine cada viernes.", "verb": "ir", "translation": "to go", "correctAnswer": "vamos"},
    {"sentence": "Tú _____ temprano para el trabajo.", "verb": "salir", "translation": "to leave", "correctAnswer": "sales"},
    {"sentence": "Yo _____ café en las mañanas.", "verb": "beber", "translation": "to drink", "correctAnswer": "bebo"},
    {"sentence": "Él _____ en la ciudad para visitar a su familia.", "verb": "quedarse", "translation": "to stay", "correctAnswer": "se queda"},
    {"sentence": "Ellos _____ en un restaurante italiano.", "verb": "trabajar", "translation": "to work", "correctAnswer": "trabajan"},
    {"sentence": "Nosotros _____ nuevos libros de ciencia.", "verb": "buscar", "translation": "to search for", "correctAnswer": "buscamos"},
    {"sentence": "Ella _____ la radio todas las mañanas.", "verb": "escuchar", "translation": "to listen", "correctAnswer": "escucha"},
    {"sentence": "Yo _____ a mi hermano pequeño con su tarea.", "verb": "ayudar", "translation": "to help", "correctAnswer": "ayudo"},
    {"sentence": "Ellos _____ temprano para evitar el tráfico.", "verb": "salir", "translation": "to leave", "correctAnswer": "salen"},
    {"sentence": "Tú _____ una carta a tu abuela cada mes.", "verb": "escribir", "translation": "to write", "correctAnswer": "escribes"},
    {"sentence": "Nosotros _____ nuevos lugares en nuestras vacaciones.", "verb": "explorar", "translation": "to explore", "correctAnswer": "exploramos"},
    {"sentence": "Ella _____ cada mañana para mantenerse en forma.", "verb": "correr", "translation": "to run", "correctAnswer": "corre"},
    {"sentence": "Yo _____ la historia de mis antepasados.", "verb": "investigar", "translation": "to research", "correctAnswer": "investigo"},
    {"sentence": "Ellos _____ la televisión después de cenar.", "verb": "ver", "translation": "to watch", "correctAnswer": "ven"},
    {"sentence": "Tú _____ todos los días para ser más fuerte.", "verb": "entrenar", "translation": "to train", "correctAnswer": "entrenas"},
    {"sentence": "Nosotros _____ la cena juntos cada noche.", "verb": "preparar", "translation": "to prepare", "correctAnswer": "preparamos"},
    {"sentence": "Él _____ su café con mucho azúcar.", "verb": "tomar", "translation": "to take/drink", "correctAnswer": "toma"},
    {"sentence": "Yo _____ frutas y verduras en el mercado.", "verb": "comprar", "translation": "to buy", "correctAnswer": "compro"},
    {"sentence": "Ellas _____ a sus abuelos cada verano.", "verb": "visitar", "translation": "to visit", "correctAnswer": "visitan"},
    {"sentence": "Nosotros _____ el clima antes de salir.", "verb": "revisar", "translation": "to check", "correctAnswer": "revisamos"},
    {"sentence": "Ella _____ nuevas recetas cada semana.", "verb": "probar", "translation": "to try", "correctAnswer": "prueba"},
    {"sentence": "Tú _____ en el jardín los fines de semana.", "verb": "trabajar", "translation": "to work", "correctAnswer": "trabajas"},
    {"sentence": "Yo _____ en un equipo de fútbol los domingos.", "verb": "jugar", "translation": "to play", "correctAnswer": "juego"},
    {"sentence": "Él _____ su auto los sábados.", "verb": "limpiar", "translation": "to clean", "correctAnswer": "limpia"},
    {"sentence": "Nosotros _____ las flores en la primavera.", "verb": "plantar", "translation": "to plant", "correctAnswer": "plantamos"},
    {"sentence": "Ellos _____ su cumpleaños en casa.", "verb": "celebrar", "translation": "to celebrate", "correctAnswer": "celebran"},
    {"sentence": "Yo _____ mucho en mi trabajo actual.", "verb": "aprender", "translation": "to learn", "correctAnswer": "aprendo"},
    {"sentence": "Él _____ muchos correos electrónicos al día.", "verb": "enviar", "translation": "to send", "correctAnswer": "envía"},
    {"sentence": "Nosotros _____ juntos en el coro.", "verb": "cantar", "translation": "to sing", "correctAnswer": "cantamos"},
    {"sentence": "Ella _____ el periódico en las mañanas.", "verb": "leer", "translation": "to read", "correctAnswer": "lee"},
    {"sentence": "Ellos _____ de su viaje con muchas historias.", "verb": "volver", "translation": "to return", "correctAnswer": "vuelven"},
    {"sentence": "Tú _____ buenos consejos a tus amigos.", "verb": "dar", "translation": "to give", "correctAnswer": "das"},
    {"sentence": "Nosotros _____ sobre la nueva política de la empresa.", "verb": "hablar", "translation": "to talk", "correctAnswer": "hablamos"},
    {"sentence": "Yo _____ un pastel para la fiesta de cumpleaños.", "verb": "hacer", "translation": "to make", "correctAnswer": "hago"},
    {"sentence": "Él _____ el almuerzo para sus hijos todos los días.", "verb": "preparar", "translation": "to prepare", "correctAnswer": "prepara"},
    {"sentence": "Ellas _____ la radio mientras cocinan.", "verb": "escuchar", "translation": "to listen", "correctAnswer": "escuchan"},
    {"sentence": "Yo _____ mi ropa cada fin de semana.", "verb": "lavar", "translation": "to wash", "correctAnswer": "lavo"},
    {"sentence": "Ellos _____ una casa nueva cerca del parque.", "verb": "construir", "translation": "to build", "correctAnswer": "construyen"},
    {"sentence": "Nosotros _____ la comida para la fiesta.", "verb": "preparar", "translation": "to prepare", "correctAnswer": "preparamos"},
    {"sentence": "Tú _____ muy bien el violín.", "verb": "tocar", "translation": "to play", "correctAnswer": "tocas"},
    {"sentence": "Ella _____ una novela de ciencia ficción.", "verb": "leer", "translation": "to read", "correctAnswer": "lee"},
    {"sentence": "Yo _____ en el gimnasio todos los días.", "verb": "entrenar", "translation": "to train", "correctAnswer": "entreno"},
    {"sentence": "Él _____ en una empresa de tecnología.", "verb": "trabajar", "translation": "to work", "correctAnswer": "trabaja"},
    {"sentence": "Nosotros _____ nuestra casa en invierno.", "verb": "calentar", "translation": "to heat", "correctAnswer": "calentamos"},
    {"sentence": "Tú _____ un café por la mañana.", "verb": "tomar", "translation": "to drink", "correctAnswer": "tomas"},
    {"sentence": "Ellas _____ canciones para el coro.", "verb": "practicar", "translation": "to practice", "correctAnswer": "practican"},
    {"sentence": "Yo _____ en una tienda de ropa los sábados.", "verb": "trabajar", "translation": "to work", "correctAnswer": "trabajo"},
    {"sentence": "Él _____ a sus padres durante las vacaciones.", "verb": "visitar", "translation": "to visit", "correctAnswer": "visita"},
    {"sentence": "Nosotros _____ muchos países en nuestro viaje.", "verb": "visitar", "translation": "to visit", "correctAnswer": "visitamos"},
    {"sentence": "Ella _____ temprano en la mañana.", "verb": "despertarse", "translation": "to wake up", "correctAnswer": "se despierta"},
    {"sentence": "Tú _____ las llaves en la mesa cada noche.", "verb": "dejar", "translation": "to leave", "correctAnswer": "dejas"},
    {"sentence": "Yo _____ la comida en el horno.", "verb": "poner", "translation": "to put", "correctAnswer": "pongo"},
    {"sentence": "Ellos _____ el teléfono al salir de casa.", "verb": "olvidar", "translation": "to forget", "correctAnswer": "olvidan"},
    {"sentence": "Nosotros _____ nuestra tarea antes de la cena.", "verb": "hacer", "translation": "to do", "correctAnswer": "hacemos"},
    {"sentence": "Ella _____ a sus amigos cada fin de semana.", "verb": "llamar", "translation": "to call", "correctAnswer": "llama"},
    {"sentence": "Tú _____ siempre los fines de semana en casa.", "verb": "quedarse", "translation": "to stay", "correctAnswer": "te quedas"},
    {"sentence": "Yo _____ de vacaciones a la playa cada verano.", "verb": "ir", "translation": "to go", "correctAnswer": "voy"},
    {"sentence": "Él _____ los platos después de la cena.", "verb": "lavar", "translation": "to wash", "correctAnswer": "lava"},
    {"sentence": "Nosotros _____ la casa en primavera.", "verb": "limpiar", "translation": "to clean", "correctAnswer": "limpiamos"},
    {"sentence": "Ellas _____ a cocinar nuevas recetas.", "verb": "aprender", "translation": "to learn", "correctAnswer": "aprenden"},
    {"sentence": "Yo _____ con mi perro al parque.", "verb": "caminar", "translation": "to walk", "correctAnswer": "camino"},
    {"sentence": "Él _____ mucho en sus estudios.", "verb": "mejorar", "translation": "to improve", "correctAnswer": "mejora"},
    {"sentence": "Tú _____ tu carro los fines de semana.", "verb": "limpiar", "translation": "to clean", "correctAnswer": "limpias"},
    {"sentence": "Nosotros _____ en bicicleta por la ciudad.", "verb": "andar", "translation": "to ride", "correctAnswer": "andamos"},
    {"sentence": "Ella _____ la cena para su familia cada noche.", "verb": "preparar", "translation": "to prepare", "correctAnswer": "prepara"},
    {"sentence": "Ellos _____ fotos en sus vacaciones.", "verb": "tomar", "translation": "to take", "correctAnswer": "toman"},
    {"sentence": "Tú _____ las instrucciones antes de comenzar.", "verb": "leer", "translation": "to read", "correctAnswer": "lees"},
    {"sentence": "Yo _____ una película el domingo por la noche.", "verb": "ver", "translation": "to watch", "correctAnswer": "veo"},
    {"sentence": "Nosotros _____ música en la fiesta.", "verb": "bailar", "translation": "to dance", "correctAnswer": "bailamos"},
    {"sentence": "Él _____ su computadora en su escritorio.", "verb": "poner", "translation": "to put", "correctAnswer": "pone"},
    {"sentence": "Ella _____ que la fiesta fue muy divertida.", "verb": "decir", "translation": "to say", "correctAnswer": "dice"},
    {"sentence": "Yo _____ una carta para mi amigo en otro país.", "verb": "escribir", "translation": "to write", "correctAnswer": "escribo"},
    {"sentence": "Ellos _____ con sus padres cada fin de semana.", "verb": "cenar", "translation": "to have dinner", "correctAnswer": "cenan"},
    {"sentence": "Nosotros _____ sobre la importancia de la salud.", "verb": "hablar", "translation": "to talk", "correctAnswer": "hablamos"},
    {"sentence": "Tú _____ una camisa nueva para la fiesta.", "verb": "comprar", "translation": "to buy", "correctAnswer": "compras"},
    {"sentence": "Él _____ sus libros en la mochila.", "verb": "guardar", "translation": "to put away", "correctAnswer": "guarda"},
    {"sentence": "Yo _____ mis plantas todos los días.", "verb": "regar", "translation": "to water", "correctAnswer": "riego"},
    {"sentence": "Ella _____ su número de teléfono en mi agenda.", "verb": "anotar", "translation": "to write down", "correctAnswer": "anota"},
    {"sentence": "Nosotros _____ el parque todos los domingos.", "verb": "visitar", "translation": "to visit", "correctAnswer": "visitamos"},
    {"sentence": "Tú _____ el piano en el concierto.", "verb": "tocar", "translation": "to play", "correctAnswer": "tocas"},
    {"sentence": "Ellos _____ muchas películas el fin de semana.", "verb": "ver", "translation": "to watch", "correctAnswer": "ven"},
    {"sentence": "Yo _____ muchas fotos cuando viajo.", "verb": "sacar", "translation": "to take (photos)", "correctAnswer": "saco"},
    {"sentence": "Él _____ la cama después de despertarse.", "verb": "hacer", "translation": "to make", "correctAnswer": "hace"},
    {"sentence": "Nosotros _____ en el río en el verano.", "verb": "nadar", "translation": "to swim", "correctAnswer": "nadamos"},
    {"sentence": "Ella _____ de vacaciones a Europa cada año.", "verb": "ir", "translation": "to go", "correctAnswer": "va"},
    {"sentence": "Tú _____ al gimnasio después de la escuela.", "verb": "ir", "translation": "to go", "correctAnswer": "vas"}
];

let remainingQuestions = [];
let passedQuestions = [];

// Initialize and shuffle questions, then load the first question
shuffleQuestions(); 
loadQuestion();

// Shuffle the questions array for a random order
function shuffleQuestions() {
    remainingQuestions = [...questions];
    for (let i = remainingQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [remainingQuestions[i], remainingQuestions[j]] = [remainingQuestions[j], remainingQuestions[i]];
    }
}

// Load the next question
function loadQuestion() {
    if (remainingQuestions.length === 0) {
        document.getElementById("sentence").innerText = "Quiz complete! You've answered all questions.";
        document.getElementById("answer").style.display = "none";
        document.getElementById("hint").style.display = "none";
        document.getElementById("pass").style.display = "none";
        document.getElementById("feedback").innerText = "Congratulations!";
        return;
    }

    const question = remainingQuestions.pop();
    document.getElementById("sentence").innerText = question.sentence;
    document.getElementById("answer").value = "";
    document.getElementById("hint").innerText = "";
    document.getElementById("feedback").innerText = "";
    document.getElementById("currentQuestion").dataset.correctAnswer = question.correctAnswer;
    document.getElementById("currentQuestion").dataset.translation = question.translation;
    document.getElementById("currentQuestion").dataset.sentence = question.sentence;
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
    const hint = document.getElementById("currentQuestion