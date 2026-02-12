/* -------- VARIABLES -------- */
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

let yesScale = 1;
let noClicks = 0;

/* -------- YES BUTTON SLOW GROW & PUSH NO -------- */
const growInterval = setInterval(() => {
    yesScale += 0.05;
    yesBtn.style.transform = `scale(${yesScale})`;

    // push NO away
    const distance = (yesScale - 1) * 20;
    noBtn.style.transform = `translateX(${distance}px)`;
}, 300);

/* -------- NO BUTTON SHENANIGANS -------- */
const noTexts = [
    "No 🙄",
    "are you sure ah",
    "really meh",
    "last chance leh",
    "I call your husband already 📞",
    "ok I press YES for you 😭"
];

noBtn.addEventListener("click", () => {
    noClicks++;
    let i = Math.min(noClicks, noTexts.length - 1);
    noBtn.innerText = noTexts[i];
});

/* -------- YES BUTTON CLICK -------- */
yesBtn.addEventListener("click", () => {
    clearInterval(growInterval);
    response.innerHTML = "I KNEW IT 😎💖<br>Best decision you've ever made.";
    noBtn.style.display = "none";
    createHearts();
});

/* -------- HEART EXPLOSION -------- */
function createHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.classList.add("heart");
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight - 20 + "px";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
}
