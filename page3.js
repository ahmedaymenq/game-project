const animalsByCategory = {
    'حيوانات أليفة ومزرعة': ['القط', 'الكلب', 'الحصان', 'البقرة', 'الجمل', 'الماعز', 'الخروف', 'الدجاج', 'الأرنب'],
    'حيوانات برية': ['الأسد', 'النمر', 'الفيل', 'الزرافة', 'الدب', 'الثعلب', 'الذئب', 'الغزال', 'القرد', 'الكنغر', 'الباندا', 'الفهد', 'الحمار الوحشي', 'الكوالا'],
    'طيور': ['الصقر', 'النسر', 'البومة', 'الببغاء', 'العصفور', 'النعامة', 'البطريق', 'الحمامة', 'الخفاش', 'الطاووس'],
    'حيوانات بحرية': ['القرش', 'الحوت', 'الدولفين', 'الأخطبوط', 'السمكة', 'فرس البحر', 'السلطعون', 'قنديل البحر', 'نجم البحر', 'الأفعى البحرية'],
    'زواحف وبرمائيات': ['التمساح', 'السلحفاة', 'الأفعى', 'الضفدع', 'السحلية', 'الحرباء'],
    'حشرات': ['النملة', 'النحلة', 'الفراشة', 'البعوضة', 'الذبابة', 'العقرب']
};
const animalCategories = Object.keys(animalsByCategory);

const questions = [
    'هل يمكن أن نجده في المزرعة؟',
    'هل يعيش في البر أم البحر؟',
    'هل هو حيوان مفترس؟',
    'هل يمكن للإنسان أن يربيه في المنزل؟',
    'ماذا يأكل هذا الحيوان عادةً؟',
    'ما هو حجمه مقارنة بحجم القط؟',
    'هل يطير؟',
    'هل يزحف على الأرض؟',
    'هل جسمه مغطى بالفرو أم الريش أم القشور؟',
    'ما هو الصوت الذي يصدره؟',
    'هل هو حيوان أليف أم بري؟',
    'هل يمكن أن نجده في الغابة؟',
    'هل لديه أجنحة؟',
    'هل يعيش في مجموعات أو بمفرده؟',
    'هل هو حيوان ليلي؟',
    'هل يتكاثر بالبيض أم بالولادة؟',
    'هل هو مشهور بلونه؟',
    'هل هو حيوان سريع؟',
    'هل يعيش في مناطق حارة أم باردة؟',
    'هل يستخدمه الإنسان في شيء ما؟',
    'هل يمتلك قروناً؟',
    'هل هو من الحيوانات المهددة بالانقراض؟',
    'هل يمكن أن نراه في حديقة الحيوانات؟',
    'هل يعتبر من الزواحف؟'
];

const animalProperties = {
    'القط': 'حيوان أليف، من فصيلة السنوريات، يصدر صوت "مواء".',
    'الكلب': 'حيوان أليف، يستخدم للحراسة والصيد، يصدر صوت "نباح".',
    'الحصان': 'حيوان مزرعة كبير، يستخدم للركوب والنقل، يصدر صوت "صهيل".',
    'البقرة': 'حيوان مزرعة، مصدر للحليب واللحوم، يصدر صوت "خوار".',
    'الجمل': 'يسمى سفينة الصحراء، يعيش في الصحراء، يصدر صوت "رغاء".',
    'الماعز': 'حيوان مزرعة صغير، يصدر صوت "مأمأة".',
    'الخروف': 'حيوان مزرعة مغطى بالصوف، يصدر صوت "ثغاء".',
    'الدجاج': 'طائر مزرعة، مصدر للبيض واللحوم، يصدر صوت "صياح" و "نقنقة".',
    'الأرنب': 'حيوان أليف صغير، يأكل الجزر والخضروات، سريع الحركة.',
    'الأسد': 'ملك الغابة، حيوان بري ومفترس، يصدر صوت "زئير".',
    'النمر': 'حيوان بري مفترس، يتميز بالخطوط السوداء، يعيش في الغابات.',
    'الفيل': 'أكبر حيوان بري، لديه خرطوم طويل وأذنان كبيرتان، يصدر صوت "نهيم".',
    'الزرافة': 'أطول حيوان في العالم، يتميز برقبته الطويلة.',
    'الدب': 'حيوان بري ضخم، يتواجد في الغابات القطبية، يصدر صوت "قهقاع".',
    'الثعلب': 'حيوان بري من فصيلة الكلبيات، معروف بالذكاء والمكر.',
    'الذئب': 'حيوان بري مفترس، يعيش في مجموعات تسمى "قطيع".',
    'الغزال': 'حيوان بري رشيق، يتميز بالقرون، سريع الجري.',
    'القرد': 'حيوان ذكي، يعيش في الغابات، يتغذى على الفاكهة.',
    'الكنغر': 'حيوان يعيش في أستراليا، يتميز بوجود جراب لحمل صغاره.',
    'الباندا': 'دب يعيش في الصين، يتغذى على نبات الخيزران.',
    'الفهد': 'أسرع حيوان على وجه الأرض، يتميز بالبقع السوداء.',
    'الحمار الوحشي': 'يشبه الحصان ولكنه مخطط بالأبيض والأسود.',
    'الكوالا': 'حيوان بري، يعيش في أستراليا، يتغذى على أوراق شجرة الكينا.',
    'الصقر': 'طائر جارح، يتميز بقوة بصره، يصدر صوت "صرصرة".',
    'النسر': 'طائر جارح كبير، يصدر صوت "صفير".',
    'البومة': 'طائر ليلي، يتميز بقدرته على دوران رأسه 180 درجة، يصدر صوت "هتاف".',
    'الببغاء': 'طائر جميل ملون، يستطيع تقليد الأصوات والكلمات.',
    'العصفور': 'طائر صغير، يصدر صوت "زقزقة".',
    'النعامة': 'أكبر طائر في العالم، لا يمكنه الطيران ولكنه سريع الجري.',
    'البطريق': 'طائر لا يطير، يعيش في نصف الكرة الجنوبي بما في ذلك المناطق الباردة والمعتدلة.',
    'الحمامة': 'طائر رمادي اللون، يُستخدم قديماً لنقل الرسائل، يصدر صوت "هديل".',
    'الخفاش': 'الثديي الوحيد الذي يستطيع الطيران، ينشط ليلاً.',
    'الطاووس': 'طائر مزين بذنبه الملون الجميل، يصدر صوت "صراخ".',
    'القرش': 'سمكة مفترسة تعيش في البحر، معروف بأسنانها الحادة.',
    'الحوت': 'أضخم حيوان في العالم، يعيش في المحيطات.',
    'الدولفين': 'حيوان بحري ذكي، يشتهر بكونه صديقاً للإنسان.',
    'الأخطبوط': 'حيوان بحري لديه 8 أذرع، يغير لونه للتمويه.',
    'السمكة': 'تعيش في الماء وتتنفس بالخياشيم.',
    'فرس البحر': 'سمكة غريبة الشكل، تشبه الحصان.',
    'السلطعون': 'يعيش على الشواطئ، لديه درع صلب ومخالب قوية.',
    'قنديل البحر': 'حيوان بحري شفاف، لديه لوامس لاسعة.',
    'نجم البحر': 'حيوان بحري على شكل نجمة، لديه عدة أذرع.',
    'الأفعى البحرية': 'زاحف يعيش في البحر، جسمه طويل ومرن.',
    'التمساح': 'حيوان برمائي ضخم، فمه طويل وأسنانه حادة، يصدر صوت "فحيح".',
    'السلحفاة': 'زاحف بطيء، له درع صلب يحميه.',
    'الأفعى': 'زاحف سام أو غير سام، جسمه طويل ومرن، لا يملك أرجلاً.',
    'الضفدع': 'حيوان برمائي، يبدأ حياته في الماء، يصدر صوت "نقيق".',
    'السحلية': 'زاحف صغير، يشبه التمساح لكنه أصغر حجماً.',
    'الحرباء': 'زاحف يتغير لونه حسب البيئة المحيطة.',
    'النملة': 'حشرة اجتماعية صغيرة، تعيش في مستعمرات.',
    'النحلة': 'حشرة طائرة، تنتج العسل وتلقح الأزهار.',
    'الفراشة': 'حشرة جميلة ملونة، تبدأ حياتها كيرقة.',
    'البعوضة': 'حشرة طائرة صغيرة، تتغذى على الدم.',
    'الذبابة': 'حشرة طائرة مزعجة، تحمل الجراثيم.',
    'العقرب': 'حشرة سامة، لديها ذيل ينتهي بإبرة سامة.',
};const gameArea = document.getElementById('game-area');
const startBtn = document.getElementById('start-btn');
const playerSetupArea = document.getElementById('player-setup-area');
const numPlayersInput = document.getElementById('num-players');
const playerSetupForm = document.getElementById('player-setup-form');

const animalInfoDiv = document.getElementById('animal-info');
const showInfoBtn = document.getElementById('show-info-btn');
const animalList = document.getElementById('animal-list');
const animalSearchInput = document.getElementById('animal-search');

const buttonClickSound = document.getElementById('button-click-sound');
const winSound = document.getElementById('win-sound');
const loseSound = document.getElementById('lose-sound');

let players = [];
let secretAnimal = '';
let secretCategory = '';
let outsidePlayerIndex = -1;
let currentPlayerIndex = 0;
let currentRound = 0;
const maxRounds = 5;
let votes = {};
let shuffledQuestions = [];

document.addEventListener('DOMContentLoaded', () => {
    buttonClickSound.load(); 
    winSound.load(); 
    loseSound.load(); 

    gameArea.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            buttonClickSound.currentTime = 0;
            buttonClickSound.play();
        }
    });

    const savedPlayers = localStorage.getItem('playerNames');
    generateAnimalList();

    if (savedPlayers) {
        startBtn.classList.add('hidden');
        gameArea.innerHTML = `
            <p>تم العثور على أسماء من اللعبة السابقة.</p>
            <button id="use-previous-btn" onclick="usePreviousPlayers()">استخدام الأسماء السابقة</button>
            <button id="start-new-btn" onclick="startNewGame()">إدخال أسماء جديدة</button>
        `;
    } else {
        startBtn.addEventListener('click', startNewGame);
    }
});
/* القسم الثالث: وظائف إعداد اللعبة والواجهة */
function generateAnimalList() {
    animalList.innerHTML = '';
    for (const animal in animalProperties) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${animal}</strong>: <span>${animalProperties[animal]}</span>`;
        animalList.appendChild(li);
    }
}

showInfoBtn.addEventListener('click', () => {
    animalInfoDiv.classList.toggle('hidden');
    if (animalInfoDiv.classList.contains('hidden')) {
        showInfoBtn.textContent = 'شاهد الحيوانات وصفاتها';
    } else {
        showInfoBtn.textContent = 'إخفاء القائمة';
    }
});

function searchAnimals() {
    const searchTerm = animalSearchInput.value.toLowerCase();
    const listItems = animalList.getElementsByTagName('li');

    for (let i = 0; i < listItems.length; i++) {
        const listItem = listItems[i];
        const animalName = listItem.getElementsByTagName('strong')[0].textContent.toLowerCase();
        
        if (animalName.includes(searchTerm)) {
            listItem.style.display = '';
        } else {
            listItem.style.display = 'none';
        }
    }
}
animalSearchInput.addEventListener('input', searchAnimals);

function startNewGame() {
    gameArea.classList.add('hidden');
    playerSetupArea.classList.remove('hidden');
    showInfoBtn.classList.add('hidden');
    animalInfoDiv.classList.add('hidden');
}

function usePreviousPlayers() {
    players = JSON.parse(localStorage.getItem('playerNames'));
    if (players.length < 3) {
        alert('الأسماء المحفوظة غير صالحة. يرجى إدخال أسماء جديدة.');
        localStorage.removeItem('playerNames');
        startNewGame();
        return;
    }
    startGame(true);
}

playerSetupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const numPlayers = parseInt(numPlayersInput.value);
    if (isNaN(numPlayers) || numPlayers < 3 || numPlayers > 10) {
        alert('يجب أن يكون عدد اللاعبين بين 3 و 10.');
        return;
    }
    
    let playerNamesHTML = '';
    for (let i = 0; i < numPlayers; i++) {
        playerNamesHTML += `<input type="text" class="player-name-input" id="player-name-${i}" placeholder="اسم اللاعب ${i + 1}" required>`;
    }
    playerNamesHTML += '<button type="button" id="confirm-names-btn">ابدأ اللعبة</button>';
    
    playerSetupForm.innerHTML = playerNamesHTML;
    
    document.getElementById('confirm-names-btn').addEventListener('click', () => {
        players = [];
        let allNamesEntered = true;
        const nameInputs = document.querySelectorAll('.player-name-input');
        const enteredNames = new Set();
        
        for (let input of nameInputs) {
            const name = input.value.trim();
            if (name === '') {
                allNamesEntered = false;
                break;
            }
            if (enteredNames.has(name)) {
                alert(`الاسم "${name}" مكرر. يرجى إدخال أسماء مختلفة.`);
                return;
            }
            enteredNames.add(name);
            players.push(name);
        }
        if (!allNamesEntered) {
            alert('الرجاء إدخال أسماء جميع اللاعبين.');
            return;
        }
        startGame(false);
    });
});function startGame(useSavedNames = false) {
    playerSetupArea.classList.add('hidden');
    gameArea.classList.remove('hidden');
    startBtn.classList.add('hidden');
    showInfoBtn.classList.add('hidden');
    animalInfoDiv.classList.add('hidden');
    
    if (!useSavedNames) {
        localStorage.setItem('playerNames', JSON.stringify(players));
    }

    secretCategory = animalCategories[Math.floor(Math.random() * animalCategories.length)];
    const categoryAnimals = animalsByCategory[secretCategory];
    secretAnimal = categoryAnimals[Math.floor(Math.random() * categoryAnimals.length)];

    outsidePlayerIndex = Math.floor(Math.random() * players.length);
    currentPlayerIndex = 0;
    currentRound = 0;
    votes = {};
    
    displayRoleMessage();
}

function displayRoleMessage() {
    if (currentPlayerIndex < players.length) {
        const player = players[currentPlayerIndex];
        gameArea.innerHTML = `
            <p>مرر الهاتف إلى <strong>${player}</strong></p>
            <button onclick="revealRole()">جاهز</button>
        `;
    } else {
        startQuestionRound();
    }
}

function revealRole() {
    const player = players[currentPlayerIndex];
    let roleMessage;
    
    if (currentPlayerIndex === outsidePlayerIndex) {
        roleMessage = `يا <strong>${player}</strong>، أنت برا السالفة.<br> <span class="secret-info secret-animal">تلميح: ${secretCategory}</span>`;
    } else {
        const animalProps = animalProperties[secretAnimal];
        roleMessage = `يا <strong>${player}</strong>، أنت داخل السالفة.<br> الحيوان السري هو: <span class="secret-info secret-animal">${secretAnimal}</span>.<br> <div class="animal-props"><strong>صفاته:</strong> <span>${animalProps}</span></div>`;
    }
    
    gameArea.innerHTML = `
        <div class="message-box">
            <p>${roleMessage}</p>
        </div>
        <button onclick="nextPlayer()">تم</button>
    `;
}

function nextPlayer() {
    currentPlayerIndex++;
    displayRoleMessage();
}

function startQuestionRound() {
    currentRound = 0;
    currentPlayerIndex = 0;
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    nextQuestion();
}

function nextQuestion() {
    if (currentRound < maxRounds) {
        const asker = players[currentPlayerIndex];
        const answererIndex = (currentPlayerIndex + 1) % players.length;
        const answerer = players[answererIndex];
        
        const currentQuestion = shuffledQuestions.shift();
        
        gameArea.innerHTML = `
            <h2>الجولة ${currentRound + 1} من ${maxRounds}</h2>
            <p><strong>${asker}</strong> يسأل <strong>${answerer}</strong>:</p>
            <p class="message-box">${currentQuestion}</p>
            <button onclick="nextTurn()">مرر الهاتف بعد الإجابة</button>
        `;
        
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        currentRound++;
    } else {
        startVote();
    }
}

function nextTurn() {
    nextQuestion();
}

function startVote() {
    currentPlayerIndex = 0;
    
    gameArea.innerHTML = `
        <h2>انتهت الجولة!</h2>
        <p>حان وقت التصويت. مرروا الهاتف ليتفق الجميع على من هو "برا السالفة".</p>
        <button onclick="takeVote()">لنبدأ التصويت</button>
    `;
}

function takeVote() {
    if (currentPlayerIndex < players.length) {
        const voter = players[currentPlayerIndex];
        
        let voteOptionsHTML = '';
        players.forEach((player, index) => {
            if (index !== currentPlayerIndex) {
                voteOptionsHTML += `<button onclick="processVote(${index})">${player}</button>`;
            }
        });
        
        gameArea.innerHTML = `
            <p>مرر الهاتف إلى <strong>${voter}</strong></p>
            <p>صوت على من تظن أنه "برا السالفة":</p>
            <div class="vote-options">${voteOptionsHTML}</div>
        `;
    } else {
        revealResults();
    }
}

function processVote(votedPlayerIndex) {
    const votedPlayerName = players[votedPlayerIndex];
    votes[votedPlayerName] = (votes[votedPlayerName] || 0) + 1;
    
    currentPlayerIndex++;
    takeVote();
}
/* القسم الخامس: وظائف النهاية والتخمين والنتائج */
function revealResults() {
    const outsidePlayerName = players[outsidePlayerIndex];
    
    gameArea.innerHTML = `
        <h2>انتهى التصويت!</h2>
        <p>اللاعب الذي كان "برا السالفة" هو: <strong>${outsidePlayerName}</strong>.</p>
        <p class="message-box">الآن لديه فرصة أخيرة ليفوز!</p>
        <button onclick="outsidePlayerGuess()">مرر الهاتف لـ ${outsidePlayerName}</button>
    `;
}

function outsidePlayerGuess() {
    const outsidePlayerName = players[outsidePlayerIndex];
    
    const categoryAnimals = animalsByCategory[secretCategory];
    
    let guessOptions = [secretAnimal];
    
    const otherAnimalsInSameCategory = categoryAnimals.filter(animal => animal !== secretAnimal);
    const shuffledCategoryAnimals = otherAnimalsInSameCategory.sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < 7 && i < shuffledCategoryAnimals.length; i++) {
        guessOptions.push(shuffledCategoryAnimals[i]);
    }
    
    guessOptions.sort(() => Math.random() - 0.5);
    
    let guessHTML = '';
    guessOptions.forEach(animal => {
        guessHTML += `<button onclick="checkGuess(this, '${animal}')">${animal}</button>`;
    });
    
    gameArea.innerHTML = `
        <h2>تخمين الحيوان السري</h2>
        <p>مرر الهاتف إلى <strong>${outsidePlayerName}</strong>.</p>
        <p>اختر الحيوان الذي تعتقد أنه كان كلمة السر:</p>
        <div class="vote-options">${guessHTML}</div>
    `;
}

function checkGuess(buttonElement, guessedAnimal) {
    document.querySelectorAll('.vote-options button').forEach(btn => {
        btn.classList.add('disabled-btn');
    });
    
    if (guessedAnimal === secretAnimal) {
        buttonElement.classList.add('correct-guess');
        winSound.currentTime = 0;
        winSound.play();
        setTimeout(() => {
            gameArea.innerHTML = `
                <h2>الفائز هو: <strong>${players[outsidePlayerIndex]}</strong>!</h2>
                <p class="message-box">لقد خمن الحيوان السري بشكل صحيح!</p>
                <button onclick="window.location.reload()">لعبة جديدة</button>
            `;
        }, 1500);
    } else {
        buttonElement.classList.add('wrong-guess');
        loseSound.currentTime = 0;
        loseSound.play();
        
        setTimeout(() => {
            const allButtons = document.querySelectorAll('.vote-options button');
            allButtons.forEach(btn => {
                if (btn.textContent === secretAnimal) {
                    btn.classList.remove('disabled-btn');
                    btn.classList.add('correct-guess');
                }
            });
        }, 500);

        setTimeout(() => {
            gameArea.innerHTML = `
                <h2>لم يتمكن من التخمين!</h2>
                <p class="message-box">اللاعب "برا السالفة" لم ينجح. الفائزون هم من داخل السالفة!</p>
                <p>الحيوان السري كان: <strong>${secretAnimal}</strong></p>
                <button onclick="window.location.reload()">لعبة جديدة</button>
            `;
        }, 2500);
    }
}

