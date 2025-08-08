let mode = "topbottom";
let index = 0;

const outfits = {
  topbottom: [
    {
      hair: "images/hair1.png",
      top: "images/top1.png",
      bottom: "images/skirt1.png",
      shoes: "images/shoes1.png",
      hat: "images/hat1.png",
    },
    {
      hair: "images/hair2.png",
      top: "images/top2.png",
      bottom: "images/skirt2.png",
      shoes: "images/shoes2.png",
      hat: "images/hat2.png",
    },
  ],
  dress: [
    {
      dress: "images/dress1.png",
      hair: "images/hair3.png",
      shoes: "images/shoes3.png",
      hat: "images/hat3.png",
    },
    {
      dress: "images/dress2.png",
      hair: "images/hair4.png",
      shoes: "images/shoes4.png",
      hat: "images/hat4.png",
    },
  ],
};

function setMode(newMode) {
  mode = newMode;
  index = 0;
  updateOutfit();
}

function setBase(baseName) {
  document.getElementById("base").src = `images/${baseName}`;
}

function updateOutfit() {
  const current = outfits[mode][index];

  document.getElementById("hair").src = current.hair || "";
  document.getElementById("top").src = current.top || "";
  document.getElementById("bottom").src = current.bottom || "";
  document.getElementById("dress").src = current.dress || "";
  document.getElementById("shoes").src = current.shoes || "";
  document.getElementById("hat").src = current.hat || "";

  document.getElementById("top").style.display =
    mode === "topbottom" ? "block" : "none";
  document.getElementById("bottom").style.display =
    mode === "topbottom" ? "block" : "none";
  document.getElementById("dress").style.display =
    mode === "dress" ? "block" : "none";
}

function prevOutfit() {
  index = (index - 1 + outfits[mode].length) % outfits[mode].length;
  updateOutfit();
}

function nextOutfit() {
  index = (index + 1) % outfits[mode].length;
  updateOutfit();
}

setMode("topbottom");
