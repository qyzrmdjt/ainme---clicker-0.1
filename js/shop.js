// ===== Магазин =====
const SHOP_UPGRADES = [
  {
    id: 'power',
    name: 'Сила клика',
    desc: '+1 к силе клика',
    icon: '👊',
    baseCost: 50,
    costMult: 1.35,
    level: 0,
    maxLevel: 100,
    effect: () => { clickPower += 1; }
  },
  {
    id: 'power_big',
    name: 'Мощный удар',
    desc: '+5 к силе клика',
    icon: '💥',
    baseCost: 500,
    costMult: 1.45,
    level: 0,
    maxLevel: 50,
    effect: () => { clickPower += 5; }
  },
  {
    id: 'auto',
    name: 'Автокликер',
    desc: '+1 автоклик / сек',
    icon: '🤖',
    baseCost: 200,
    costMult: 1.4,
    level: 0,
    maxLevel: 80,
    effect: () => { autoClick += 1; }
  },
  {
    id: 'auto_big',
    name: 'Ферма кликов',
    desc: '+5 автокликов / сек',
    icon: '🏭',
    baseCost: 2000,
    costMult: 1.5,
    level: 0,
    maxLevel: 40,
    effect: () => { autoClick += 5; }
  },
  {
    id: 'mult',
    name: 'Множитель',
    desc: '+0.1 к множителю',
    icon: '✨',
    baseCost: 1000,
    costMult: 1.6,
    level: 0,
    maxLevel: 50,
    effect: () => { multiplier = +(multiplier + 0.1).toFixed(1); }
  },
  {
    id: 'mult_big',
    name: 'Мега-множитель',
    desc: '+0.5 к множителю',
    icon: '🌟',
    baseCost: 15000,
    costMult: 1.7,
    level: 0,
    maxLevel: 20,
    effect: () => { multiplier = +(multiplier + 0.5).toFixed(1); }
  },
  {
    id: 'power_ultra',
    name: 'Ультра-удар',
    desc: '+25 к силе клика',
    icon: '⚡',
    baseCost: 50000,
    costMult: 1.55,
    level: 0,
    maxLevel: 30,
    effect: () => { clickPower += 25; }
  },
  {
    id: 'auto_ultra',
    name: 'Авто-империя',
    desc: '+25 автокликов / сек',
    icon: '🚀',
    baseCost: 100000,
    costMult: 1.6,
    level: 0,
    maxLevel: 25,
    effect: () => { autoClick += 25; }
  }
];

function getShopCost(upg) {
  return Math.floor(upg.baseCost * Math.pow(upg.costMult, upg.level));
}

function renderShop() {
  const list = document.getElementById('shopList');
  const coinsEl = document.getElementById('shopCoins');
  if (!list) return;

  if (coinsEl) {
    coinsEl.textContent = typeof formatNumber === 'function' ? formatNumber(coins) : Math.floor(coins);
  }

  list.innerHTML = SHOP_UPGRADES.map(upg => {
    const cost = getShopCost(upg);
    const canBuy = coins >= cost && upg.level < upg.maxLevel;
    const maxed = upg.level >= upg.maxLevel;

    return `
      <div class="shop-item ${maxed ? 'locked' : ''}">
        <div class="shop-icon">${upg.icon}</div>
        <div class="shop-info">
          <div class="shop-name">${upg.name}</div>
          <div class="shop-desc">${upg.desc}</div>
          <div class="shop-level">Уровень: ${upg.level}${upg.maxLevel ? ' / ' + upg.maxLevel : ''}</div>
        </div>
        <button class="shop-buy" data-id="${upg.id}" ${canBuy ? '' : 'disabled'}>
          ${maxed ? 'MAX' : '◆ ' + (typeof formatNumber === 'function' ? formatNumber(cost) : cost)}
        </button>
      </div>
    `;
  }).join('');

  list.querySelectorAll('.shop-buy').forEach(btn => {
    btn.addEventListener('click', () => buyShopUpgrade(btn.dataset.id));
  });
}

function buyShopUpgrade(id) {
  const upg = SHOP_UPGRADES.find(u => u.id === id);
  if (!upg) return;
  if (upg.level >= upg.maxLevel) return;

  const cost = getShopCost(upg);
  if (coins < cost) {
    alert('Не хватает монет!');
    return;
  }

  coins -= cost;
  upg.level += 1;
  upg.effect();

  updateScreen();
  saveGame();
  renderShop();
}

// Кнопки на главном экране
function buyUpgrade() {
  if (coins >= upgradeCost) {
    coins -= upgradeCost;
    clickPower += 1;
    upgradeCost = Math.floor(upgradeCost * 1.35);
    updateScreen();
    saveGame();
  }
}

function buyAuto() {
  if (coins >= autoCost) {
    coins -= autoCost;
    autoClick += 1;
    autoCost = Math.floor(autoCost * 1.4);
    updateScreen();
    saveGame();
  }
}