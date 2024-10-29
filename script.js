const riddles = [
    { question: "What has keys but can't open locks?", answer: "piano" },
    { question: "What has a head, a tail, is brown, and has no legs?", answer: "penny" },
    { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "m" }
];

document.addEventListener('DOMContentLoaded', () => {
    const tokenForm = document.getElementById('token-form');
    const tokenInput = document.getElementById('token');
    const riddleSection = document.getElementById('riddle-section');
    const trackerSection = document.getElementById('tracker-section');
    const riddleElement = document.getElementById('riddle');
    const resultElement = document.getElementById('result');
    const answerForm = document.getElementById('answer-form');
    const answerInput = document.getElementById('answer');
    const answerHistoryElement = document.getElementById('answer-history');
    const scoreElement = document.getElementById('score');

    let token = '';

    tokenForm.addEventListener('submit', (event) => {
        event.preventDefault();
        token = tokenInput.value.trim();
        if (token) {
            tokenForm.style.display = 'none';
            riddleSection.style.display = 'block';
            trackerSection.style.display = 'block';
            loadRiddle();
            updateTracker();
        }
    });

    function loadRiddle() {
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
        const riddle = riddles[dayOfYear % riddles.length];
        riddleElement.textContent = riddle.question;
    }

    function updateTracker() {
        const answerHistory = JSON.parse(localStorage.getItem(`answerHistory_${token}`)) || [];
        const score = JSON.parse(localStorage.getItem(`score_${token}`)) || 0;
        answerHistoryElement.innerHTML = answerHistory.map(entry => `<li>${entry}</li>`).join('');
        scoreElement.textContent = `Score: ${score}`;
    }

    answerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const userAnswer = answerInput.value.trim().toLowerCase();
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
        const riddle = riddles[dayOfYear % riddles.length];
        let answerHistory = JSON.parse(localStorage.getItem(`answerHistory_${token}`)) || [];
        let score = JSON.parse(localStorage.getItem(`score_${token}`)) || 0;

        if (userAnswer === riddle.answer) {
            resultElement.textContent = "Correct!";
            answerHistory.push(`Correct: ${userAnswer}`);
            score += 1;
        } else {
            resultElement.textContent = "Try again!";
            answerHistory.push(`Incorrect: ${userAnswer}`);
        }

        localStorage.setItem(`answerHistory_${token}`, JSON.stringify(answerHistory));
        localStorage.setItem(`score_${token}`, JSON.stringify(score));
        updateTracker();
        answerInput.value = '';
    });
});