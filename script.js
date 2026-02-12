const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

/* ------------------ */
/* YES auto grow      */
/* ------------------ */
let yesScale = 1;

setInterval(() => {
    yesScale += 0.02;   // speed of growth
    yesBtn.style.transform = `scale(${yesScale})`;
}, 200);


/* ------------------ */
/* NO shrink on click */
/* ------------------ */
let noScale = 1;

noBtn.addEventListener("click", () => {
    noScale -= 0.1;

    if (noScale <= 0.4) {
        noBtn.innerText = "ok fine 😭";
    }

    if (noScale <= 0.2) {
        noBtn.style.display = "none";
    }

    noBtn.style.transform = `scale(${noScale})`;
});


/* ------------------ */
/* YES pressed        */
/* ------------------ */
yesBtn.addEventListener("click", () => {
    response.innerHTML = "I KNEW IT <br>Best decision you've ever made.";
    noBtn.style.display = "none";

    createHearts();
});


/* ------------------ */
/* Heart explosion    */
/* ------------------ */
function createHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.classList.add("heart");
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight - 20 + "px";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}
