const riddles = [
    { question: "What has keys but can't open locks?", answer: "piano" },
    { question: "What has a head, a tail, is brown, and has no legs?", answer: "penny" },
    { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "m" },
    { question: "What has words but never speaks?", answer: "book" },
    { question: "What can travel around the world while staying in a corner?", answer: "stamp" },
    { question: "What has a neck but no head?", answer: "bottle" },
    { question: "The more you take, the more you leave behind. What am I?", answer: "footsteps" },
    { question: "What gets wetter as it dries?", answer: "towel" },
    { question: "What belongs to you but others use it more than you?", answer: "name" },
    { question: "I’m tall when I’m young and short when I’m old. What am I?", answer: "candle" },
    { question: "What has hands but can’t clap?", answer: "clock" },
    { question: "What can run but never walks, has a mouth but never talks?", answer: "river" },
    { question: "What goes up but never comes down?", answer: "age" },
    { question: "What has many teeth but can’t bite?", answer: "comb" },
    { question: "What has one eye but can’t see?", answer: "needle" },
    { question: "What is so fragile that saying its name breaks it?", answer: "silence" },
    { question: "What comes once in a year, twice in a month, four times in a week, and six times in a day?", answer: "even numbers" },
    { question: "What has an eye but cannot see?", answer: "storm" },
    { question: "What has cities, but no houses; forests, but no trees; and rivers, but no water?", answer: "map" },
    { question: "What begins with T, ends with T, and has T in it?", answer: "teapot" },
    { question: "What has to be broken before you can use it?", answer: "egg" },
    { question: "What goes up and down but does not move?", answer: "stairs" },
    { question: "What has keys but can't open locks?", answer: "piano" },
    { question: "What runs but never gets tired?", answer: "refrigerator" },
    { question: "What kind of room has no doors or windows?", answer: "mushroom" },
    { question: "What is full of holes but still holds water?", answer: "sponge" },
    { question: "The more you take away, the larger it becomes. What am I?", answer: "hole" },
    { question: "What has legs but doesn’t walk?", answer: "table" },
    { question: "What kind of coat is best put on wet?", answer: "paint" },
    { question: "What has a bottom at the top?", answer: "legs" },
    { question: "What is always in front of you but can’t be seen?", answer: "future" },
    { question: "What is lighter than a feather yet the strongest man can’t hold it for long?", answer: "breath" },
    { question: "What has a head, a tail, is brown, and has no legs?", answer: "penny" },
    { question: "I have no life, but I can die. What am I?", answer: "battery" },
    { question: "The more it dries, the wetter it becomes. What is it?", answer: "towel" },
    { question: "What goes through towns and over hills but never moves?", answer: "road" },
    { question: "What has keys but can't open locks?", answer: "keyboard" },
    { question: "What has a bark but no bite?", answer: "tree" },
    { question: "I can fly without wings. I can cry without eyes. Whenever I go, darkness flies. What am I?", answer: "cloud" },
    { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "m" },
    { question: "I have branches but no fruit, trunk, or leaves. What am I?", answer: "bank" },
    { question: "What has ears but can’t hear?", answer: "corn" },
    { question: "What kind of band never plays music?", answer: "rubber band" },
    { question: "What has wheels and flies but is not an aircraft?", answer: "garbage truck" },
    { question: "What can be cracked, made, told, and played?", answer: "joke" },
    { question: "What comes down but never goes up?", answer: "rain" },
    { question: "What has a ring but no finger?", answer: "telephone" },
    { question: "What comes once in a day but leaves at night?", answer: "sun" },
    { question: "What has one head, one foot, and four legs?", answer: "bed" },
    { question: "I can only live where there is light, but I die if light shines on me. What am I?", answer: "shadow" },
    { question: "What breaks but never falls?", answer: "day" },
    { question: "What falls but never breaks?", answer: "night" },
    { question: "What goes up when rain comes down?", answer: "umbrella" },
    { question: "What is harder to catch the faster you run?", answer: "breath" },
    { question: "What has a bed but never sleeps?", answer: "river" },
    { question: "What has four fingers and a thumb but is not alive?", answer: "glove" },
    { question: "What can you catch but not throw?", answer: "cold" },
    { question: "What has a thumb and four fingers but is not a hand?", answer: "glove" },
    { question: "What can run but never walks?", answer: "water" },
    { question: "What has teeth but doesn’t bite?", answer: "comb" },
    { question: "What has many keys but cannot open a single door?", answer: "piano" },
    { question: "What has two hands but no arms?", answer: "clock" },
    { question: "What goes up and down but never moves?", answer: "stairs" },
    { question: "What gets wetter and wetter the more it dries?", answer: "towel" },
    { question: "I’m not alive, but I can grow; I don’t have lungs, but I need air; what am I?", answer: "fire" },
    { question: "What kind of tree can you carry in your hand?", answer: "palm" },
    { question: "What comes once in a year, twice in a moment, but never in a day?", answer: "letter M" },
    { question: "What has a face and two hands but no arms or legs?", answer: "clock" },
    { question: "I’m not alive but can grow, I don’t have lungs but need air, what am I?", answer: "fire" },
    { question: "What flies without wings?", answer: "time" },
    { question: "What is full of holes but can still hold water?", answer: "sponge" },
    { question: "What has a foot but no leg?", answer: "ruler" },
    { question: "I get wetter the more I dry. What am I?", answer: "towel" },
    { question: "What can travel all around the world without leaving its corner?", answer: "stamp" },
    { question: "What has a neck but no head?", answer: "bottle" },
    { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "m" },
    { question: "What has four legs but can’t walk?", answer: "table" },
    { question: "What has a head, a tail, is brown, and has no legs?", answer: "penny" },
    { question: "I’m tall when I’m young, and I’m short when I’m old. What am I?", answer: "candle" }
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
        answerHistoryElement.innerHTML = answerHistory.map(entry => `<li>${entry.date}: ${entry.text}</li>`).join('');
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

        const date = today.toLocaleDateString();

        if (userAnswer === riddle.answer) {
            resultElement.textContent = "Correct!";
            answerHistory.push({ date, text: `Correct: ${userAnswer}` });
            score += 1;
        } else {
            resultElement.textContent = "Try again!";
            answerHistory.push({ date, text: `Incorrect: ${userAnswer}` });
        }

        localStorage.setItem(`answerHistory_${token}`, JSON.stringify(answerHistory));
        localStorage.setItem(`score_${token}`, JSON.stringify(score));
        updateTracker();
        answerInput.value = '';
    });
});
