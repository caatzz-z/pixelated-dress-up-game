const categories = {
  dress: ['dress', 'hair', 'hat', 'shoes'],
  topbottom: ['top', 'bottom', 'hair', 'hat', 'shoes']
};

const items = {
  hair: ['hair1.png', 'hair2.png', 'hair3.png', 'hair4.png'],
  hat: ['hat1.png', 'hat2.png', 'hat3.png', 'hat4.png'],
  shoes: ['shoes1.png', 'shoes2.png', 'shoes3.png', 'shoes4.png'],
  dress: ['dress1.png', 'dress2.png'],
  top: ['top1.png', 'top2.png'],
  bottom: ['skirt1.png', 'skirt2.png']
};

let currentMode = 'topbottom';
let indices = {
  hair: 0,
  hat: 0,
  shoes: 0,
  dress: 0,
  top: 0,
  bottom: 0
};

function setMode(mode) {
  currentMode = mode;
  updateButtons();
  updateImages();
}

function setBase(baseName) {
  document.getElementById('base').src = `images/${baseName}`;
}

function changeItem(cat, direction) {
  const list = items[cat];
  indices[cat] = (indices[cat] + direction + list.length) % list.length;
  updateImages();
}

function updateButtons() {
  const navContainer = document.querySelector('.nav-buttons');
  navContainer.innerHTML = ''; // Clear buttons

  categories[currentMode].forEach(cat => {
    const label = document.createElement('span');
    label.textContent = cat.toUpperCase();

    const left = document.createElement('button');
    left.textContent = '<';
    left.onclick = () => changeItem(cat, -1);

    const right = document.createElement('button');
    right.textContent = '>';
    right.onclick = () => changeItem(cat, 1);

    navContainer.appendChild(label);
    navContainer.appendChild(left);
    navContainer.appendChild(right);
  });
}

function updateImages() {
  categories.dress.concat(categories.topbottom).forEach(cat => {
    const el = document.getElementById(cat);
    if (categories[currentMode].includes(cat)) {
      el.style.display = 'block';
      el.src = `images/${items[cat][indices[cat]]}`;
    } else {
      el.style.display = 'none';
    }
  });
}

window.onload = function () {
  setMode('topbottom');
  setBase('base_light.png');
};
