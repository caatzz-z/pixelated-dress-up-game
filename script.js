let mode = 'topbottom';
let currentCategory = 'hair';
let currentIndexes = {
  hair: 0,
  top: 0,
  bottom: 0,
  dress: 0,
  shoes: 0,
  hat: 0
};

const items = {
  hair: ["hair1.png", "hair2.png", "hair3.png", "hair4.png"],
  top: ["top1.png", "top2.png"],
  bottom: ["skirt1.png", "skirt2.png"],
  dress: ["dress1.png", "dress2.png"],
  shoes: ["shoes1.png", "shoes2.png", "shoes3.png", "shoes4.png"],
  hat: ["hat1.png", "hat2.png", "hat3.png", "hat4.png"]
};

const categoriesTopBottom = ["hair", "top", "bottom", "shoes", "hat"];
const categoriesDress = ["hair", "dress", "shoes", "hat"];

function setMode(newMode) {
  mode = newMode;
  currentCategory = mode === "dress" ? "dress" : "top";
  showCategoryButtons();
  updateLayers();
}

function setBase(name) {
  document.getElementById("base").src = "images/" + name;
}

function showCategoryButtons() {
  const container = document.getElementById("category-buttons");
  container.innerHTML = "";
  const cats = mode === "dress" ? categoriesDress : categoriesTopBottom;

  cats.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    btn.onclick = () => {
      currentCategory = cat;
      updateLayers();
    };
    container.appendChild(btn);
  });
}

function updateLayers() {
  const allLayers = ["hair", "top", "bottom", "dress", "shoes", "hat"];
  allLayers.forEach(layer => {
    const el = document.getElementById(layer);
    if (mode === "dress" && (layer === "top" || layer === "bottom")) {
      el.style.display = "none";
      return;
    }
    if (mode === "topbottom" && layer === "dress") {
      el.style.display = "none";
      return;
    }

    const index = currentIndexes[layer];
    const src = items[layer] && items[layer][index];
    el.src = src ? "images/" + src : "";
    el.style.display = "block";
  });
}

function prevItem() {
  if (!items[currentCategory]) return;
  const max = items[currentCategory].length;
  currentIndexes[currentCategory] = (currentIndexes[currentCatego]()
