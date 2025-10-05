function createFallingItem() {
  let item = document.createElement("img");
  item.className = "falling";

  // Randomly choose cake, bow, candy, or bubble
  let randomChoice = Math.floor(Math.random() * 4);
  if (randomChoice === 0) {
    item.src = "cake.png";
  } else if (randomChoice === 1) {
    item.src = "bow.png";
  } else if (randomChoice === 2) {
    item.src = "candy.png";
  } else {
    item = document.createElement("div");
    item.className = "falling bubble"; // white bubble instead of image
    let size = Math.random() * 30 + 20; // 20px - 50px
    item.style.width = size + "px";
    item.style.height = size + "px";
  }

  item.style.left = Math.random() * 100 + "vw";
  item.style.animationDuration = (Math.random() * 3 + 3) + "s";
  document.body.appendChild(item);

  setTimeout(() => { item.remove(); }, 6000);
}

// Continuous falling every 300ms
setInterval(createFallingItem, 300);
