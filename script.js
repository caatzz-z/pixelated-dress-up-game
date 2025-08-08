let mode = 'topbottom';
let currentCategory = '';
const indices = {
  hair: 0,
  top: 0,
  bottom: 0,
  dress: 0,
  shoes: 0,
  hat: 0
};

const items = {
  hair: ['hair1.png', 'hair2.png', 'hair3.png', 'hair4.png'],
  top: ['top1.png', 'top2.png'],
  bottom: ['skirt1.png', 'skirt2.png'],
  dress: ['dress1.png', 'dress2.png'],
  shoes: ['shoes1.png', 'shoes2.png', 'shoes3.png', 'shoes4.png'],
  hat: ['hat1.png', 'hat2.png', 'hat3.png', 'hat4.png']
};

const categoriesTopBottom = ['hair', 'top', 'bottom', 'shoes', 'hat'];
const categoriesDress = ['hair', 'dress', 'shoes', 'hat'];

function setBase(name) {
  document.getElementById('base').src = `images/${name}`;
}

function setMode(newMode) {
  mode = newMode;
  currentCategory = '';
  showCategoryButtons();
  updateLayers();
}

function showCategoryButtons() {
  const container = document.getElementById('category-buttons');
  container.innerHTML = '';
  const cats = mode === 'dress' ? categoriesDress : categoriesTopBottom;
  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    btn.onclick = () => {
      currentCategory = cat;
      updateLayers();
    };
    container.appendChild(btn);
  });
}

function updateLayers() {
  document.getElementById('top').style.display = (mode === 'topbottom') ? 'block' : 'none';
  document.getElementById('bottom').style.display = (mode === 'topbottom') ? 'block' : 'none';
  document.getElementById('dress').style.display = (mode === 'dress') ? 'block' : 'none';

  for (let key in items) {
    const el = document.getElementById(key);
    const index = indices[key];
    const list = items[key];
    if (el && list && list[index]) {
      el.src = `images/${list[index]}`;
    }
  }
}

function prevItem() {
  if (!currentCategory) return;
  const list = items[currentCategory];
  indices[currentCategory] = (indices[currentCategory] - 1 + list.length) % list.length;
  updateLayers();
}

function nextItem() {
  if (!currentCategory) return;
  const list = items[currentCategory];
  indices[currentCategory] = (indices[currentCategory] + 1) % list.length;
  updateLayers();
}

setMode('topbottom');
