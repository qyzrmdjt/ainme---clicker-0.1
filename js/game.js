// ===== Основная логика =====

let coins = 0;
let clickPower = 1;
let upgradeCost = 10;
let autoClick = 0;
let autoCost = 50;
let multiplier = 1;
let multCost = 1000; // Добавлено для buyMult

// Элементы
const scoreElement = document.getElementById('score');
const powerElement = document.getElementById('power');
const autoElement = document.getElementById('auto');
const tapButton = document.getElementById('tapBtn');
const upgradeButton = document.getElementById('upgradeBtn');
const autoButton = document.getElementById('autoBtn');

// ===== Форматирование =====
function formatNumber(n) {
  if (n >= 1e9) return (n / 1e9).toFixed(2) + 'B';
  if (n >= 1e6) return (n / 1e6).toFixed(2) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K';
  return Math.floor(n).toLocaleString();
}

// ===== Сохранение =====
function saveGame() {
  localStorage.setItem('tapClicker', JSON.stringify({
    coins,
    clickPower,
    upgradeCost,
    autoClick,
    autoCost,
    multiplier,
    multCost,
    stage2UnlockTime: typeof stage2UnlockTime !== 'undefined' ? stage2UnlockTime : 0,
    currentCharacterIndex: typeof currentCharacterIndex !== 'undefined' ? currentCharacterIndex : 0,
    unlockedCharacters: typeof unlockedCharacters !== 'undefined' ? unlockedCharacters : [0],
    shopLevels: typeof SHOP_UPGRADES !== 'undefined' ? SHOP_UPGRADES.map(u => u.level) : []
  }));
}

function loadGame() {
  const saved = localStorage.getItem('tapClicker');
  if (!saved) return;

  const data = JSON.parse(saved);
  coins = data.coins || 0;
  clickPower = data.clickPower || 1;
  upgradeCost = data.upgradeCost || 10;
  autoClick = data.autoClick || 0;
  autoCost = data.autoCost || 50;
  multiplier = data.multiplier || 1;
  multCost = data.multCost || 1000;

  // ЗАЩИТА ОТ СТАРЫХ СОХРАНЕНИЙ
  if (typeof currentCharacterIndex !== 'undefined') {
    currentCharacterIndex = data.currentCharacterIndex || 0;
    if (currentCharacterIndex >= CHARACTERS.length) currentCharacterIndex = 0;
  }
  
if (data.shopLevels && typeof SHOP_UPGRADES !== 'undefined') {
  data.shopLevels.forEach((lvl, i) => {
    if (SHOP_UPGRADES[i]) SHOP_UPGRADES[i].level = lvl || 0;
  });
}

  if (typeof unlockedCharacters !== 'undefined') {
    unlockedCharacters = data.unlockedCharacters || [0];
    unlockedCharacters = unlockedCharacters.filter(i => i < CHARACTERS.length);
    if (!unlockedCharacters.includes(0)) unlockedCharacters.unshift(0);
  }
}

// ===== Тап =====
function onTap() {
  coins += clickPower * multiplier;
  updateScreen();
  if (typeof checkCharacterUnlock === 'function') checkCharacterUnlock(coins);
  saveGame();

if (typeof updateNextCharInfo === 'function') updateNextCharInfo();

}

// ===== Обновление UI =====
function updateScreen() {
  if (scoreElement) scoreElement.textContent = formatNumber(coins);
  if (powerElement) powerElement.textContent = formatNumber(clickPower * multiplier);
  if (autoElement) autoElement.textContent = formatNumber(autoClick * multiplier);

  const upgradeCostEl = document.getElementById('upgradeCost');
  const autoCostEl = document.getElementById('autoCost');
  if (upgradeCostEl) upgradeCostEl.textContent = formatNumber(upgradeCost);
  if (autoCostEl) autoCostEl.textContent = formatNumber(autoCost);

  const shopCoins = document.getElementById('shopCoins');
  if (shopCoins) shopCoins.textContent = formatNumber(coins);
}

// ===== Автокликер =====
setInterval(() => {
  if (autoClick > 0) {
    coins += autoClick * multiplier;
    updateScreen();
    if (typeof checkCharacterUnlock === 'function') checkCharacterUnlock(coins);
    saveGame();
  }
}, 1000);

// ===== Лидерборд =====
const FAKE_PLAYERS = [
  { name: "ShadowBlade", score: 28450000 }, { name: "NeonKitsune", score: 19230000 },
  { name: "VoidWalker", score: 15780000 }, { name: "CrystalQueen", score: 12100000 },
  { name: "DarkSakura", score: 9840000 }, { name: "PixelRonin", score: 7620000 },
  { name: "LunaFox", score: 5430000 }, { name: "StormNeko", score: 3890000 },
  { name: "BlazeTiger", score: 2710000 }, { name: "MysticWolf", score: 1950000 }
];

function getLeaderboard() {
  const players = [...FAKE_PLAYERS, { name: "Ты", score: Math.floor(coins) }];
  players.sort((a, b) => b.score - a.score);
  return players;
}

function renderTop3() {
  const container = document.getElementById('top3Bar');
  if (!container) return;

  const players = getLeaderboard().slice(0, 3);
  const order = [players[1], players[0], players[2]];
  const places = [2, 1, 3];
  const medals = ['🥈', '🥇', '🥉'];

  container.innerHTML = order.map((p, i) => {
    if (!p) return '';
    return `
      <div class="podium-place place${places[i]}">
        <div class="podium-rank">${places[i]}</div>
        <div class="podium-medal">${medals[i]}</div>
        <div class="podium-name">${p.name}</div>
        <div class="podium-score">${formatNumber(p.score)}</div>
      </div>
    `;
  }).join('');
}


function renderLeaderboard() {
  const list = document.getElementById('leaderboardList');
  const myRankEl = document.getElementById('myRank');
  const myScoreEl = document.getElementById('myScore');
  if (!list) return;

  const players = getLeaderboard();
  const myIndex = players.findIndex(p => p.name === "Ты");

  if (myRankEl) myRankEl.textContent = `#${myIndex + 1}`;
  if (myScoreEl) myScoreEl.textContent = formatNumber(coins);

  list.innerHTML = players.map((p, i) => `
    <div class="leader-item ${i < 3 ? 'top' + (i + 1) : ''}">
      <div class="leader-place">${i + 1}</div>
      <div class="leader-info">
        <div class="leader-name">${p.name}${p.name === "Ты" ? " (вы)" : ""}</div>
        <div class="leader-score">${formatNumber(p.score)} ◆</div>
      </div>
    </div>
  `).join('');
}

// ===== Экраны =====
function showScreen(screenId) {
  const home = document.getElementById('homeScreen');
  const stats = document.getElementById('statsScreen');
  const shop = document.getElementById('shopScreen');
  const menu = document.getElementById('menuScreen');

  // Скрываем все экраны
  if (home) home.style.display = 'none';

  [stats, shop, menu].forEach(el => {
    if (!el) return;
    el.classList.add('hidden');
    el.style.display = 'none';
  });

  document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));

  // HOME
  if (screenId === 'home' && home) {
    home.style.display = 'block';
    document.querySelector('[data-screen="home"]')?.classList.add('active');
  }

  // STATS
  if (screenId === 'stats' && stats) {
    stats.classList.remove('hidden');
    stats.style.display = 'block';
    document.querySelector('[data-screen="stats"]')?.classList.add('active');
    if (typeof renderTop3 === 'function') renderTop3();
    if (typeof renderLeaderboard === 'function') renderLeaderboard();
  }

  // SHOP
  if (screenId === 'shop' && shop) {
    shop.classList.remove('hidden');
    shop.style.cssText = `
      display: block !important;
      position: fixed !important;
      top: 0; left: 0; right: 0; bottom: 70px;
      background: #0a0a12 !important;
      z-index: 9999 !important;
      padding: 40px 16px 24px !important;
      overflow-y: auto !important;
      color: white !important;
    `;
    document.querySelector('[data-screen="shop"]')?.classList.add('active');
    if (typeof renderShop === 'function') renderShop();
  }

  // MENU (коллекция персонажей)
  if (screenId === 'menu' && menu) {
    menu.classList.remove('hidden');
    menu.style.cssText = `
      display: block !important;
      position: fixed !important;
      top: 0; left: 0; right: 0; bottom: 70px;
      background: #0a0a12 !important;
      z-index: 9999 !important;
      padding: 40px 16px 24px !important;
      overflow-y: auto !important;
      color: white !important;
    `;
    document.querySelector('[data-screen="menu"]')?.classList.add('active');
    if (typeof renderCharactersMenu === 'function') renderCharactersMenu();
  }
}

// Навигация
document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => {
    const screen = btn.dataset.screen;
    if (['home', 'stats', 'shop', 'menu'].includes(screen)) {
      showScreen(screen);
    }
  });
});

// ===== Сброс =====
function resetGame() {
  if (confirm('Точно сбросить весь прогресс?')) {
    localStorage.removeItem('tapClicker');
    localStorage.removeItem('stage2UnlockTime');
    location.reload();
  }
}

// ===== Запуск =====
function startGame() {
  loadGame();

  stage2UnlockTime = Number(localStorage.getItem('stage2UnlockTime')) || 0;

  updateScreen();

  if (typeof applyCharacterBackground === 'function') applyCharacterBackground();
  if (typeof updateNextCharInfo === 'function') updateNextCharInfo();
  if (typeof loadRerollTime === 'function') loadRerollTime();

  if (tapButton) tapButton.addEventListener('click', onTap);
  if (upgradeButton) upgradeButton.addEventListener('click', buyUpgrade);
  if (autoButton) autoButton.addEventListener('click', buyAuto);

  showScreen('home');
}

window.addEventListener('load', () => {
  if (typeof initYandex === 'function') initYandex();
  startGame();
});


// ==== Управление музыкой ====

// Функция запуска музыки при первом клике игрока
function tryPlayMusic() {
    const bgm = document.getElementById('bgm');
    if (bgm) {
        bgm.volume = 0.5; // Установите комфортную громкость
        bgm.play().catch(e => console.log("Музыка не может играть, проверьте путь или формат файла", e));
    }
    document.removeEventListener('click', tryPlayMusic);
}

// Добавляем обработчик на первое взаимодействие (клик)
document.addEventListener('click', tryPlayMusic);

// Переключение музыки при сворачивании вкладки (Требование Яндекс Игр)
document.addEventListener('visibilitychange', function() {
    const bgm = document.getElementById('bgm');
    if (document.hidden) {
        bgm.pause(); // Останавливаем звук, если игрок ушел со вкладки
    } else {
        bgm.play().catch(() => {}); // Возобновляем, когда вернулся
    }
});

// Кнопка вкл/выкл звука (обязательное требование для модерации)
function toggleMute() {
    const bgm = document.getElementById('bgm');
    if (!bgm) return;

    if (bgm.muted) {
        bgm.muted = false;
        document.getElementById('muteBtn').textContent = '🔊';
    } else {
        bgm.muted = true;
        document.getElementById('muteBtn').textContent = '🔇';
    }
}


// ===== Музыка (Перемешивание всех треков) =====

// 1. Полный список треков (убедитесь, что они лежат в папке assets/audio/)
const musicTracks = [
    'assets/audio/Awake.mp3',
    'assets/audio/BadNewsSingle.mp3',
    'assets/audio/BattleTheme.mp3',
    'assets/audio/CloudCover.mp3',
    'assets/audio/CrimsonCanyon.mp3',
    'assets/audio/Crocus.mp3',
    'assets/audio/DeepWoods.mp3',
    'assets/audio/DogDays.mp3',
    'assets/audio/Drift.mp3',
    'assets/audio/FireflyField.mp3',
    'assets/audio/FullSteam.mp3',
    'assets/audio/Gentle.mp3',
    'assets/audio/GoneFishin.mp3',
    'assets/audio/GoodnightHolly.mp3',
    'assets/audio/GrassyPlains.mp3',
    'assets/audio/Homecoming.mp3',
    'assets/audio/LastDance.mp3',
    'assets/audio/LastStand.mp3',
    'assets/audio/Memory.mp3',
    'assets/audio/MovingOn.mp3',
    'assets/audio/NewDay.mp3',
    'assets/audio/Nightlife.mp3',
    'assets/audio/OrchardSunset.mp3',
    'assets/audio/PastureSpring.mp3',
    'assets/audio/RestNow.mp3',
    'assets/audio/RustingSkyline.mp3',
    'assets/audio/SandAndSurfboards.mp3',
    'assets/audio/SceneFromAbove.mp3',
    'assets/audio/SeafoamValley.mp3',
    'assets/audio/SecretOfTheDungeon.mp3',
    'assets/audio/ShardLake.mp3',
    'assets/audio/SnowdropWaltz.mp3',
    'assets/audio/Snowdeln.mp3',
    'assets/audio/TheCityWakes.mp3',
    'assets/audio/TheSunStillRises.mp3',
    'assets/audio/TwilightStroll.mp3',
    'assets/audio/Withered.mp3'
];

// 2. Логика случайного проигрывания
const bgm = document.getElementById('bgm');
let shuffledTracks = [];
let currentTrackIndex = 0;

// Функция перемешивания (Фишер-Йетс)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Запуск следующего трека
function playNextTrack() {
    // Если массив закончился, перемешиваем заново
    if (currentTrackIndex >= shuffledTracks.length) {
        shuffledTracks = shuffleArray([...musicTracks]);
        currentTrackIndex = 0;
    }

    bgm.src = shuffledTracks[currentTrackIndex];
    bgm.volume = 0.5; // 50% громкость
    bgm.play().catch(e => console.log('Ошибка воспроизведения:', e));

    currentTrackIndex++;
}

// Когда трек закончился - играем следующий случайный
bgm.onended = playNextTrack;

// Запуск при первом клике игрока
function tryPlayMusic() {
    if (!bgm.src) {
        shuffledTracks = shuffleArray([...musicTracks]);
        currentTrackIndex = 0;
        playNextTrack();
    }
    // Снимаем обработчик, так как он нужен только для первого клика
    document.removeEventListener('click', tryPlayMusic);
}

document.addEventListener('click', tryPlayMusic);

// Пауза при сворачивании (для модерации Яндекс Игр)
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        bgm.pause();
    } else {
        bgm.play().catch(() => {});
    }
});

// Кнопка вкл/выкл звука
function toggleMute() {
    if (!bgm) return;
    bgm.muted = !bgm.muted;
    document.getElementById('muteBtn').textContent = bgm.muted ? '🔇' : '🔊';
}