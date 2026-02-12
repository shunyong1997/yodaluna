const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

let yesScale = 1;

/* YES slowly grow */
const growInterval = setInterval(() => {
    yesScale += 0.05;
    yesBtn.style.transform = `scale(${yesScale})`;

    pushNoAway();
}, 300);


/* move NO further away based on YES size */
function pushNoAway() {
    const distance = (yesScale - 1) * 20;  // how strong the push

    noBtn.style.transform = `translateX(${distance}px)`;
}


/* if she press NO */
let noClicks = 0;

noBtn.addEventListener("click", () => {
    noClicks++;

    if (noClicks > 3) {
        noBtn.innerText = "eh choose properly leh 😭";
    }
});


/* if she press YES */
yesBtn.addEventListener("click", () => {
    clearInterval(growInterval);

    response.innerHTML = "I KNEW IT 😎💖<br>Best decision you've ever made.";
    noBtn.style.display = "none";

    createHearts();
});


/* hearts fly up */
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
