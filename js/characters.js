const CHARACTERS = [
  // ===== 1 Этап =====
  {
    id: 'mia',
    name: 'Mia',
    rarity: 'D',
    stars: 1,
    image: 'assets/characters/Mia.png',
    gradient: 'linear-gradient(160deg, #2e1065 0%, #e60c1e 40%, #9d174d 100%)',
    cost: 0,
    age: '17',
    hobby: 'Коты, выпечка',
    lore: 'Тихая девушка из окраины города. Говорит мало, но всегда появляется, когда кому-то нужна помощь. Её кот будто чувствует опасность раньше людей. Говорят, однажды она одним взглядом успокоила целую улицу во время грозы.'
  },
  {
    id: 'yuna',
    name: 'Yuna',
    rarity: 'D',
    stars: 1,
    image: 'assets/characters/Yuna.png',
    gradient: 'linear-gradient(160deg, #0c4a6e 0%, #1e3a5f 40%, #312e81 100%)',
    cost: 5000,
    age: '18',
    hobby: 'Астрономия, дневники',
    lore: 'Каждую ночь записывает положение звёзд. Уверена, что небо иногда «отвечает» ей короткими вспышками. Однажды предсказала падение метеорита за три дня — и никто не поверил, пока он не упал в озеро.'
  },
  {
    id: 'sara',
    name: 'Sara',
    rarity: 'C',
    stars: 2,
    image: 'assets/characters/Sara.png',
    gradient: 'linear-gradient(160deg, #1e1b4b 0%, #4c1d95 45%, #831843 100%)',
    cost: 25000,
    age: '16',
    hobby: 'Танцы, розыгрыши',
    lore: 'Энергия, которую невозможно игнорировать. Обожает устраивать сюрпризы и ненавидит скуку. Ходят слухи, что когда она смеётся по-настоящему, вокруг на пару секунд становятся ярче фонари.'
  },
  {
    id: 'luna',
    name: 'Luna',
    rarity: 'C',
    stars: 2,
    image: 'assets/characters/Luna.png',
    gradient: 'linear-gradient(160deg, #0f172a 0%, #334155 50%, #94a3b8 100%)',
    cost: 80000,
    age: '19',
    hobby: 'Ночные прогулки, чай',
    lore: 'Почти не бывает на солнце. Говорит, что лунный свет «питает» её лучше любого сна. В полнолуние её глаза становятся серебристыми — и тогда она слышит шёпот тех, кто далеко.'
  },
  {
    id: 'violetta',
    name: 'Violetta',
    rarity: 'B',
    stars: 3,
    image: 'assets/characters/Violetta.png',
    gradient: 'linear-gradient(160deg, #4c1d95 0%, #7e22ce 50%, #d946ef 100%)',
    cost: 250000,
    age: '20',
    hobby: 'Духи, старые книги',
    lore: 'Пахнет фиалками даже зимой. Коллекционирует редкие ароматы и запрещённые трактаты. Утверждает, что некоторые запахи могут открывать двери в чужие воспоминания.'
  },
  {
    id: 'akari',
    name: 'Akari',
    rarity: 'B',
    stars: 3,
    image: 'assets/characters/Akari.png',
    gradient: 'linear-gradient(160deg, #450a0a 0%, #9a3412 40%, #b45309 100%)',
    cost: 700000,
    age: '17',
    hobby: 'Фонарики, фестивали',
    lore: 'Носит с собой маленький бумажный фонарь, который никогда не гаснет. Говорит, что внутри него живёт крошечный огонёк-хранитель. В самые тёмные ночи он указывает путь домой.'
  },
  {
    id: 'reyne',
    name: 'Reyne',
    rarity: 'A',
    stars: 4,
    image: 'assets/characters/reyne.png',
    gradient: 'linear-gradient(160deg, #18181b 0%, #3f3f46 50%, #71717a 100%)',
    cost: 2000000,
    age: '21',
    hobby: 'Фехтование, молчание',
    lore: 'Почти не говорит о прошлом. На её клинке выгравированы имена, которые она отказывается объяснять. Когда держит оружие — становится другой: спокойной, точной и немного страшной.'
  },
  {
    id: 'shiro',
    name: 'Shiro',
    rarity: 'A',
    stars: 4,
    image: 'assets/characters/shiro.png',
    gradient: 'linear-gradient(160deg, #fafafa 0%, #e4e4e7 50%, #a1a1aa 100%)',
    cost: 5000000,
    age: '18',
    hobby: 'Уборка, белые цветы',
    lore: 'Выглядит хрупкой, но однажды в одиночку остановила обвал в старом храме. Говорит, что «чистота» — это не только порядок, но и защита. Белые лепестки вокруг неё иногда появляются сами.'
  },
  {
    id: 'kayo',
    name: 'Kayo',
    rarity: 'S',
    stars: 5,
    image: 'assets/characters/Kayo.png',
    gradient: 'linear-gradient(160deg, #451a03 0%, #92400e 50%, #f59e0b 100%)',
    cost: 12000000,
    age: '19',
    hobby: 'Клён, фотография',
    lore: 'Любит осень больше жизни. Собирает красные листья и фотографирует закаты. Утверждает, что в золотой час время течёт медленнее — и она научилась этим пользоваться.'
  },
  {
    id: 'haru',
    name: 'Haru',
    rarity: 'S',
    stars: 5,
    image: 'assets/characters/Haru.png',
    gradient: 'linear-gradient(160deg, #334155 0%, #475569 50%, #cbd5e1 100%)',
    cost: 30000000,
    age: '18',
    hobby: 'Садоводство, дождь',
    lore: 'Где бы она ни прошла — через несколько дней вырастают цветы. Не волшебство, говорит она, просто «земля её слушается». После дождя на её ладонях остаются светящиеся капли.'
  },

  // ===== 2 Этап =====
  {
    id: 'morgana',
    name: 'Morgana',
    rarity: 'SS',
    stars: 6,
    image: 'assets/characters/stage2/Morgana.png',
    gradient: 'linear-gradient(160deg, #111827 0%, #4c1d95 50%, #dc2626 100%)',
    cost: 80000000,
    age: '?',
    hobby: 'Тени, шахматы',
    lore: 'Никто не помнит, когда она появилась. Играет в шахматы с собственными тенями и всегда побеждает. Говорят, проигравший ей партию забывает одно важное воспоминание.'
  },
  {
    id: 'amber',
    name: 'Amber',
    rarity: 'SS',
    stars: 6,
    image: 'assets/characters/stage2/Amber.png',
    gradient: 'linear-gradient(160deg, #f97316 0%, #ef4444 50%, #fde047 100%)',
    cost: 150000000,
    age: '22',
    hobby: 'Огонь, танцы с факелами',
    lore: 'Её волосы иногда вспыхивают сами. Не обжигает — только предупреждает. В янтаре, который она носит на шее, будто застыло чужое солнце.'
  },
  {
    id: 'crystal',
    name: 'Crystal',
    rarity: 'SS',
    stars: 6,
    image: 'assets/characters/stage2/crystal.png',
    gradient: 'linear-gradient(160deg, #0ea5e9 0%, #38bdf8 50%, #e0f2fe 100%)',
    cost: 300000000,
    age: '20',
    hobby: 'Лёд, минералы',
    lore: 'Касается воды — и та на мгновение становится стеклом. Коллекционирует прозрачные камни. Чем холоднее вокруг, тем яснее она думает. Боится только одного: растаять.'
  },
  {
    id: 'selene',
    name: 'Selene',
    rarity: 'SS',
    stars: 6,
    image: 'assets/characters/stage2/selene.png',
    gradient: 'linear-gradient(160deg, #1e3a8a 0%, #4f46e5 50%, #c7d2fe 100%)',
    cost: 600000000,
    age: '23',
    hobby: 'Сны, лунные ритуалы',
    lore: 'Появляется чаще всего ночью. Люди, которым она снится, просыпаются с ответом на вопрос, который ещё не успели задать. Её тень иногда движется отдельно от тела.'
  },
  {
    id: 'eliria',
    name: 'Eliria',
    rarity: 'SSR',
    stars: 7,
    image: 'assets/characters/stage2/eliria.png',
    gradient: 'linear-gradient(160deg, #ec4899 0%, #f472b6 50%, #fbcfe8 100%)',
    cost: 1200000000,
    age: '?',
    hobby: 'Цветы из других миров',
    lore: 'Говорит на языке, которого нет ни в одном словаре. Из её волос иногда падают лепестки, которых нет на этой земле. Улыбается так, будто уже знает твой конец — и он хороший.'
  },
  {
    id: 'ren2',
    name: 'Ren',
    rarity: 'SSR',
    stars: 7,
    image: 'assets/characters/stage2/ren.png',
    gradient: 'linear-gradient(160deg, #db2777 0%, #9d174d 50%, #fce7f3 100%)',
    cost: 2500000000,
    age: '19',
    hobby: 'Маски, обман',
    lore: 'Носит улыбку как оружие. Может быть лучшей подругой или худшим кошмаром — зависит от настроения. Однажды целый день прожила под чужим именем, и никто не заметил.'
  },
  {
    id: 'ivy',
    name: 'Ivy',
    rarity: 'SSR',
    stars: 7,
    image: 'assets/characters/stage2/ivy.png',
    gradient: 'linear-gradient(160deg, #0f766e 0%, #14b8a6 50%, #ccfbf1 100%)',
    cost: 5000000000,
    age: '21',
    hobby: 'Растения, руины',
    lore: 'Где она долго сидит — прорастает плющ. Медленная, упрямая, неотвратимая. Говорит, что города временны, а корни — вечны. Под её ногтями всегда земля.'
  },
  {
    id: 'aurora',
    name: 'Aurora',
    rarity: 'SSS',
    stars: 8,
    image: 'assets/characters/stage2/aurora.png',
    gradient: 'linear-gradient(160deg, #fbbf24 0%, #f59e0b 50%, #fef3c7 100%)',
    cost: 10000000000,
    age: '24',
    hobby: 'Рассветы, обещания',
    lore: 'Последняя. Та, кто встречает тех, кто дошёл до конца. Её присутствие ощущается как первое тепло после долгой зимы. Говорит только одно: «Ты уже достаточно силён, чтобы начать заново».'
  },

  // ===== Финал =====
  {
    id: 'thanks',
    name: 'Спасибо!',
    rarity: 'EX',
    stars: 8,
    image: null,
    gradient: 'linear-gradient(160deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
    cost: 15000000000,
    age: '—',
    hobby: '—',
    lore: 'Ты прошёл весь путь до конца.\n\nСпасибо, что играл!\n\nЕсть идеи для обновлений?\nНапиши: nitainthemaid@email.com'
  }
];

let currentCharacterIndex = 0;
let unlockedCharacters = [0];

// ===== Этапы =====
const STAGE1_LAST_INDEX = 9;          // Haru
const STAGE2_UNLOCK_DELAY = 3600;     // 1 час (в секундах)
let stage2UnlockTime = 0;

function getCurrentCharacter() {
  return CHARACTERS[currentCharacterIndex];
}

function applyCharacterBackground() {
  const char = getCurrentCharacter();
  const bg = document.getElementById('characterBg');
  if (!bg || !char) return;

  bg.style.background = char.gradient;
  bg.style.backgroundImage = '';

  if (char.image) {
    const img = new Image();
    img.onload = function () {
      bg.style.backgroundImage = `url('${char.image}')`;
      bg.style.backgroundSize = 'cover';
      bg.style.backgroundPosition = 'center top';
      bg.style.backgroundRepeat = 'no-repeat';
    };
    img.onerror = function () {
      console.error('Файл не найден:', char.image);
    };
    img.src = char.image;
  }

  const nameEl = document.getElementById('heroName');
  const rankEl = document.getElementById('heroRank');
  const starsEl = document.getElementById('heroStars');

  if (nameEl) nameEl.textContent = char.name;
  if (rankEl) rankEl.textContent = char.rarity;
  if (starsEl) starsEl.textContent = '★'.repeat(char.stars) + '☆'.repeat(Math.max(0, 8 - char.stars));
}

// ===== Следующий персонаж (цена) =====
function getNextLockedCharacter() {
  for (let i = 0; i < CHARACTERS.length; i++) {
    if (unlockedCharacters.includes(i)) continue;

    // 2 этап ещё закрыт
    if (i > STAGE1_LAST_INDEX) {
      if (!stage2UnlockTime || Date.now() < stage2UnlockTime) {
        return null;
      }
    }
    return { index: i, char: CHARACTERS[i] };
  }
  return null;
}

function updateNextCharInfo() {
  const nameEl = document.getElementById('nextCharName');
  const costEl = document.getElementById('nextCharCost');
  if (!nameEl || !costEl) return;

  // Ждём 2 этап
  if (unlockedCharacters.includes(STAGE1_LAST_INDEX) &&
      !unlockedCharacters.some(i => i > STAGE1_LAST_INDEX)) {

    const left = Math.max(0, Math.ceil((stage2UnlockTime - Date.now()) / 1000));
    if (left > 0) {
      const h = Math.floor(left / 3600);
      const m = Math.floor((left % 3600) / 60);
      const s = left % 60;
      nameEl.textContent = '2 Этап';
      costEl.textContent = `Через ${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
      return;
    }
  }

  const next = getNextLockedCharacter();
  if (!next) {
    nameEl.textContent = 'Все открыты!';
    costEl.textContent = '—';
    return;
  }

  nameEl.textContent = `${next.char.name} (${next.char.rarity})`;
  costEl.textContent = '◆ ' + (typeof formatNumber === 'function' ? formatNumber(next.char.cost) : next.char.cost);
}

function checkCharacterUnlock(score) {
  let changed = false;

  for (let i = 0; i < CHARACTERS.length; i++) {
    if (unlockedCharacters.includes(i)) continue;

    // Блокируем 2 этап
    if (i > STAGE1_LAST_INDEX) {
      if (!stage2UnlockTime || Date.now() < stage2UnlockTime) continue;
    }

    if (score >= CHARACTERS[i].cost) {
      unlockedCharacters.push(i);
      currentCharacterIndex = i;
      applyCharacterBackground();
      changed = true;

      // Завершили 1 этап → запускаем таймер на 2 этап
      if (i === STAGE1_LAST_INDEX) {
        stage2UnlockTime = Date.now() + STAGE2_UNLOCK_DELAY * 1000;
        localStorage.setItem('stage2UnlockTime', stage2UnlockTime);
        alert('Вы завершили 1 этап!\n2 этап откроется через 1 час.');
      }

      if (i === CHARACTERS.length - 1) {
        alert('Поздравляем! Вы прошли оба этапа!');
      }
    }
  }

  updateNextCharInfo();
  if (changed && typeof saveGame === 'function') saveGame();
}

// ===== Reroll =====
let rerollCooldown = 0;
const REROLL_COOLDOWN = 0; // 0 = всегда бесплатно

function updateRerollButton() {
  const btn = document.getElementById('rerollBtn');
  if (!btn) return;
  const costEl = btn.querySelector('.btn-cost');
  if (!costEl) return;

  if (rerollCooldown > 0) {
    btn.disabled = true;
    btn.style.opacity = '0.5';
    const h = Math.floor(rerollCooldown / 3600);
    const m = Math.floor((rerollCooldown % 3600) / 60);
    const s = rerollCooldown % 60;
    costEl.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    costEl.classList.remove('free');
  } else {
    btn.disabled = false;
    btn.style.opacity = '1';
    costEl.textContent = 'Free';
    costEl.classList.add('free');
  }
}

function startRerollCooldown() {
  rerollCooldown = REROLL_COOLDOWN;
  updateRerollButton();
  if (rerollCooldown > 0) {
    localStorage.setItem('rerollEndTime', Date.now() + rerollCooldown * 1000);
  } else {
    localStorage.removeItem('rerollEndTime');
  }
}

function loadRerollTime() {
  if (REROLL_COOLDOWN === 0) {
    localStorage.removeItem('rerollEndTime');
    rerollCooldown = 0;
    updateRerollButton();
    return;
  }
  const endTime = localStorage.getItem('rerollEndTime');
  if (endTime) {
    const remaining = Math.ceil((endTime - Date.now()) / 1000);
    rerollCooldown = remaining > 0 ? remaining : 0;
  }
  updateRerollButton();
}

setInterval(() => {
  if (rerollCooldown > 0) {
    rerollCooldown--;
    updateRerollButton();
    if (rerollCooldown <= 0) localStorage.removeItem('rerollEndTime');
  }
  // Обновляем таймер 2 этапа
  updateNextCharInfo();
}, 1000);

function rerollCharacter() {
  if (rerollCooldown > 0) return;
  if (unlockedCharacters.length <= 1) {
    alert('Сначала открой больше персонажей!');
    return;
  }

  let next = unlockedCharacters.indexOf(currentCharacterIndex) + 1;
  if (next >= unlockedCharacters.length) next = 0;

  currentCharacterIndex = unlockedCharacters[next];
  applyCharacterBackground();
  startRerollCooldown();
  if (typeof saveGame === 'function') saveGame();
}



function renderCharactersMenu() {
  const grid = document.getElementById('charsGrid');
  if (!grid || typeof CHARACTERS === 'undefined') return;
  if (!Array.isArray(unlockedCharacters)) unlockedCharacters = [0];

  const normal = CHARACTERS.filter(c => c.id !== 'thanks');
  const finale = CHARACTERS.find(c => c.id === 'thanks');

  // Обычные карточки 3 в ряд
  let html = normal.map((char) => {
    const index = CHARACTERS.indexOf(char);
    const opened = unlockedCharacters.includes(index);

    return `
      <div class="char-card ${opened ? 'unlocked' : 'locked'}" data-index="${index}">
        ${char.image ? `<img src="${char.image}" alt="${char.name}" onerror="this.style.display='none'">` : ''}
        <div class="char-card-info">
          <div class="char-card-name">${opened ? char.name : '???'}</div>
          <div class="char-card-rank">${opened ? char.rarity + ' · ' + '★'.repeat(Math.min(char.stars, 5)) : 'Закрыт'}</div>
        </div>
      </div>
    `;
  }).join('');

  // Финальная карточка по центру внизу
  if (finale) {
    const index = CHARACTERS.indexOf(finale);
    const opened = unlockedCharacters.includes(index);

    html += `
      <div class="char-card finale ${opened ? 'unlocked' : 'locked'}" data-index="${index}">
        <div class="finale-inner">
          <div class="finale-icon">${opened ? '✨' : '🔒'}</div>
          <div class="char-card-name">${opened ? finale.name : '???'}</div>
          <div class="char-card-rank">${opened ? 'Финал игры' : 'Пройди весь путь'}</div>
        </div>
      </div>
    `;
  }

  grid.innerHTML = html;

   // ====== ЗАМЕНИТЕ ЭТОТ БЛОК ======
  grid.querySelectorAll('.char-card.unlocked').forEach(card => {
    card.style.cursor = 'pointer';
    card.setAttribute('onclick', `openCharacterModal(${card.dataset.index})`);
  });

  if (screenId === 'menu' && menu) {
    menu.classList.remove('hidden');
    document.querySelector('[data-screen="menu"]')?.classList.add('active');
    // ОБЯЗАТЕЛЬНО ВЫЗЫВАЕМ!
    if (typeof renderCharactersMenu === 'function') renderCharactersMenu();
  };
}


function openCharacterModal(index) {
  const char = CHARACTERS[index];
  if (!char) return;

  const modal = document.getElementById('charModal');
  if (!modal) {
    console.error('Нет #charModal в HTML');
    return;
  }

  const isUnlocked = unlockedCharacters.includes(index);
  const modalImg = document.getElementById('charModalImg') || modal.querySelector('img');
  const modalName = document.getElementById('charModalName') || modal.querySelector('.char-modal-name');
  const modalRank = document.getElementById('charModalRank') || modal.querySelector('.char-modal-rank');
  const modalLore = document.getElementById('charModalLore') || modal.querySelector('.char-modal-lore');

  if (modalName) modalName.textContent = isUnlocked ? char.name : '???';
  if (modalRank) {
    modalRank.textContent = isUnlocked
      ? `${char.rarity} · ${'★'.repeat(Math.min(char.stars || 1, 5))}`
      : 'Закрыто';
  }

  if (modalLore) {
    modalLore.style.whiteSpace = 'pre-line';
    modalLore.textContent = isUnlocked
      ? (char.lore || 'История пока неизвестна...')
      : '🔒 Этот персонаж ещё не открыт.';
  }

  if (modalImg) {
    if (isUnlocked && char.image) {
      modalImg.src = char.image;
      modalImg.style.display = 'block';
      modalImg.onerror = () => { modalImg.style.display = 'none'; };
    } else {
      modalImg.style.display = 'none';
    }
  }

  modal.classList.remove('hidden');
}

function closeCharacterModal() {
  const modal = document.getElementById('charModal');
  if (modal) modal.classList.add('hidden');
}

// Закрытие модалки
document.addEventListener('click', (e) => {
  const modal = document.getElementById('charModal');
  if (!modal || modal.classList.contains('hidden')) return;

  if (e.target.id === 'charModalClose' || e.target === modal) {
    closeCharacterModal();
  }
});