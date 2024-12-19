const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const game = document.getElementById("game");
const surprise = document.getElementById("surprise");

// Avoid Clicking No Button
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Reveal Surprise on Clicking Yes
yesBtn.addEventListener("click", () => {
    game.classList.add("hidden");
    surprise.classList.remove("hidden");
});
