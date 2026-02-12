/* -------- VARIABLES -------- */

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

let yesScale = 1;
let noClicks = 0;

const noTexts = [
    "No 🙄",
    "are you sure ah",
    "really meh",
    "last chance leh",
    "I call your husband already 📞",
    "ok I press YES for you 😭"
];

/* NO click */
noBtn.addEventListener("click", () => {
    noClicks++;
    let i = Math.min(noClicks, noTexts.length - 1);
    noBtn.innerText = noTexts[i];

    // YES grows and overlays NO
    yesScale += 0.1;
    yesBtn.style.transform = `scale(${yesScale})`;
});

/* YES click */
yesBtn.addEventListener("click", () => {
    response.innerHTML = "I KNEW IT 😎💖<br>Best decision you've ever made.";
    noBtn.style.display = "none";
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
