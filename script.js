const riddles = [
    { question: "What has keys but can't open locks?", answer: "piano", hint: "It's a musical instrument." },
    { question: "What has a head, a tail, is brown, and has no legs?", answer: "penny", hint: "It's a type of currency." },
    { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "m", hint: "It's a letter." },
    { question: "What has words but never speaks?", answer: "book", hint: "It's often found on a shelf." },
    { question: "What can travel around the world while staying in a corner?", answer: "stamp", hint: "You often find it on an envelope." },
    { question: "What has a neck but no head?", answer: "bottle", hint: "It's often used to hold liquids." },
    { question: "The more you take, the more you leave behind. What am I?", answer: "footsteps", hint: "Think about what you leave when you walk." },
    { question: "What gets wetter as it dries?", answer: "towel", hint: "It's used after a shower or swim." },
    { question: "What belongs to you but others use it more than you?", answer: "name", hint: "It's part of your identity." },
    { question: "I’m tall when I’m young and short when I’m old. What am I?", answer: "candle", hint: "It provides light when burning." },
    { question: "What has hands but can’t clap?", answer: "clock", hint: "It helps you keep track of time." },
    { question: "What can run but never walks, has a mouth but never talks?", answer: "river", hint: "It's often found in nature." },
    { question: "What goes up but never comes down?", answer: "age", hint: "It's something everyone has." },
    { question: "What has many teeth but can’t bite?", answer: "comb", hint: "It's used to style hair." },
    { question: "What has one eye but can’t see?", answer: "needle", hint: "It's commonly used for sewing." },
    { question: "What is so fragile that saying its name breaks it?", answer: "silence", hint: "Sometimes, less is more." },
    { question: "What comes once in a year, twice in a month, four times in a week, and six times in a day?", answer: "even numbers", hint: "Think about sequences of time and numbers." },
    { question: "What has an eye but cannot see?", answer: "storm", hint: "It can be dangerous and brings wind and rain." },
    { question: "What has cities, but no houses; forests, but no trees; and rivers, but no water?", answer: "map", hint: "You use it to find your way." },
    { question: "What begins with T, ends with T, and has T in it?", answer: "teapot", hint: "It's used to make a popular hot drink." },
    { question: "What has to be broken before you can use it?", answer: "egg", hint: "It’s commonly eaten for breakfast." },
    { question: "What goes up and down but does not move?", answer: "stairs", hint: "Think about levels in a building." },
    { question: "What has keys but can't open locks?", answer: "piano", hint: "It plays music." },
    { question: "What runs but never gets tired?", answer: "refrigerator", hint: "It's an appliance in the kitchen." },
    { question: "What kind of room has no doors or windows?", answer: "mushroom", hint: "You might eat this as a topping on pizza." },
    { question: "What is full of holes but still holds water?", answer: "sponge", hint: "It's used for cleaning." },
    { question: "The more you take away, the larger it becomes. What am I?", answer: "hole", hint: "It’s created by removing material." },
    { question: "What has legs but doesn’t walk?", answer: "table", hint: "It's often used for meals or work." },
    { question: "What kind of coat is best put on wet?", answer: "paint", hint: "It adds color to walls." },
    { question: "What has a bottom at the top?", answer: "legs", hint: "Everyone has two of these." },
    { question: "What is always in front of you but can’t be seen?", answer: "future", hint: "It hasn’t happened yet." },
    { question: "What is lighter than a feather yet the strongest man can’t hold it for long?", answer: "breath", hint: "It's something you need to stay alive." },
    { question: "What has a head, a tail, is brown, and has no legs?", answer: "penny", hint: "It's a small, round object used in transactions." },
    { question: "I have no life, but I can die. What am I?", answer: "battery", hint: "It powers devices." },
    { question: "The more it dries, the wetter it becomes. What is it?", answer: "towel", hint: "You use it after a bath." },
    { question: "What goes through towns and over hills but never moves?", answer: "road", hint: "It connects places." },
    { question: "What has keys but can't open locks?", answer: "keyboard", hint: "It's part of a computer." },
    { question: "What has a bark but no bite?", answer: "tree", hint: "It's found in a forest." },
    { question: "I can fly without wings. I can cry without eyes. Whenever I go, darkness flies. What am I?", answer: "cloud", hint: "It's found in the sky." },
    { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "m", hint: "Think about letters in the words." },
    { question: "I have branches but no fruit, trunk, or leaves. What am I?", answer: "bank", hint: "It's a place for money." },
    { question: "What has ears but can’t hear?", answer: "corn", hint: "It's a vegetable." },
    { question: "What kind of band never plays music?", answer: "rubber band", hint: "It's stretchy." },
    { question: "What has wheels and flies but is not an aircraft?", answer: "garbage truck", hint: "It comes by weekly for pickup." },
    { question: "What can be cracked, made, told, and played?", answer: "joke", hint: "It makes people laugh." },
    { question: "What comes down but never goes up?", answer: "rain", hint: "It falls from clouds." },
    { question: "What has a ring but no finger?", answer: "telephone", hint: "It helps you communicate." },
    { question: "What comes once in a day but leaves at night?", answer: "sun", hint: "It brings daylight." },
    { question: "What has one head, one foot, and four legs?", answer: "bed", hint: "You sleep on it." },
    { question: "I can only live where there is light, but I die if light shines on me. What am I?", answer: "shadow", hint: "It follows you on a sunny day." },
    { question: "What breaks but never falls?", answer: "day", hint: "It starts in the morning." },
    { question: "What falls but never breaks?", answer: "night", hint: "It comes after the day." },
    { question: "What goes up when rain comes down?", answer: "umbrella", hint: "You use it to stay dry." },
    { question: "What is harder to catch the faster you run?", answer: "breath", hint: "It’s essential for life." },
    { question: "What has a bed but never sleeps?", answer: "river", hint: "It flows and moves continuously." },
    { question: "What has four fingers and a thumb but is not alive?", answer: "glove", hint: "It’s worn in cold weather." },
    { question: "What can you catch but not throw?", answer: "cold", hint: "It can make you sneeze." },
    { question: "What has a thumb and four fingers but is not a hand?", answer: "glove", hint: "It covers your fingers." },
    { question: "What can run but never walks?", answer: "water", hint: "It flows in rivers and streams." },
    { question: "What has teeth but doesn’t bite?", answer: "comb", hint: "It helps style your hair." },
    { question: "What has many keys but cannot open a single door?", answer: "piano", hint: "It's a musical instrument." },
    { question: "What has two hands but no arms?", answer: "clock", hint: "It hangs on a wall or sits on a table." },
    { question: "What gets wetter and wetter the more it dries?", answer: "towel", hint: "You use it to dry things off." },
    { question: "I’m not alive, but I can grow; I don’t have lungs, but I need air; what am I?", answer: "fire", hint: "It’s hot and can be dangerous." },
    { question: "What kind of tree can you carry in your hand?", answer: "palm", hint: "It’s also part of your body." },
    { question: "What comes once in a year, twice in a moment, but never in a day?", answer: "letter M", hint: "Think about letters in these words." },
    { question: "What has a face and two hands but no arms or legs?", answer: "clock", hint: "It helps you keep track of time." },
    { question: "What flies without wings?", answer: "time", hint: "It’s hard to catch." },
    { question: "What is full of holes but can still hold water?", answer: "sponge", hint: "It’s useful for cleaning." },
    { question: "What has a foot but no leg?", answer: "ruler", hint: "It measures length." },
    { question: "I get wetter the more I dry. What am I?", answer: "towel", hint: "It absorbs water." },
    { question: "What can travel all around the world without leaving its corner?", answer: "stamp", hint: "It’s attached to mail." },
    { question: "What has a neck but no head?", answer: "bottle", hint: "It holds liquids." },
    { question: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "m", hint: "Think of letters in words." },
    { question: "What has four legs but can’t walk?", answer: "table", hint: "It’s used to hold things." },
    { question: "What has a head, a tail, is brown, and has no legs?", answer: "penny", hint: "It’s a small coin." },
    { question: "I’m tall when I’m young, and I’m short when I’m old. What am I?", answer: "candle", hint: "It provides light as it melts." }
];

document.addEventListener('DOMContentLoaded', () => {
    const tokenForm = document.getElementById('token-form');
    const tokenInput = document.getElementById('token');
    const tokenSection = document.getElementById('token-section');
    const caseSensitiveWarning = document.getElementById('case-sensitive-warning');
    const riddleSection = document.getElementById('riddle-section');
    const trackerSection = document.getElementById('tracker-section');
    const riddleElement = document.getElementById('riddle');
    const hintElement = document.getElementById('hint');
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
            tokenSection.style.display = 'none';
            caseSensitiveWarning.style.display = 'none';
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
        hintElement.textContent = `Hint: ${riddle.hint}`;
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
