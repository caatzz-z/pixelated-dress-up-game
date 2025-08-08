let mode = 'topbottom';
let currentCategory = 'hair';
let currentIndexes = { hair: 0, top: 0, bottom: 0, dress: 0, shoes: 0, hat: 0 };
const items = {
  hair: ["hair1.png","hair2.png","hair3.png","hair4.png"],
  top: ["top1.png","top2.png"],
  bottom: ["skirt1.png","skirt2.png"],
  dress: ["dress1.png","dress2.png"],
  shoes: ["shoes1.png","shoes2.png","shoes3.png","shoes4.png"],
  hat: ["hat1.png","hat2.png","hat3.png","hat4.png"]
};
function setMode(newMode) {
  mode = newMode;
  currentCategory = mode === "dress" ? "dress" : "hair";
  renderButtons();
  updateCharacter();
}
function setBase(name) {
  document.getElementById("base").src = "images/" + name;
}
function renderButtons() {
  const container = document.getElementById("category-buttons");
  container.innerHTML = "";
  const cats = mode === "dress"
    ? ["hair","dress","shoes","hat"]
    : ["hair","top","bottom","shoes","hat"];
  cats.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    btn.onclick = () => { currentCategory = cat; };
    container.appendChild(btn);
  });
}
function updateCharacter() {
  const layers = ["hair","top","bottom","dress","shoes","hat"];
  layers.forEach(layer => {
    const el = document.getElementById(layer);
    if (mode === "dress" && (layer === "top"||layer==="bottom"))
      return el.style.display="none";
    if (mode==="topbottom" && layer==="dress")
      return el.style.display="none";
    const idx = currentIndexes[layer] || 0;
    const img = items[layer] && items[layer][idx];
    el.src = img ? "images/" + img : "";
    el.style.display = img ? "block" : "none";
  });
}
function prevItem() {
  if (!items[currentCategory]) return;
  const len = items[currentCategory].length;
  currentIndexes[currentCategory] = (currentIndexes[currentCategory] - 1 + len) % len;
  updateCharacter();
}
function nextItem() {
  if (!items[currentCategory]) return;
  const len = items[currentCategory].length;
  currentIndexes[currentCategory] = (currentIndexes[currentCategory] + 1) % len;
  updateCharacter();
}
setMode('topbottom');
setBase('base_light.png');
