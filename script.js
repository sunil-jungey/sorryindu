function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}
function createHeart() {
    const heart =
        document.createElement("span");
    heart.className =
        "sorry-heart";
    heart.textContent =
        Math.random() > 0.45
            ? "🤍"
            : "❤️";
    heart.style.left =
        randomBetween(5, 92) + "vw";
    heart.style.top =
        randomBetween(8, 88) + "vh";
    heart.style.fontSize =
        randomBetween(14, 26) + "px";
    const life =
        randomBetween(6, 10);
    heart.style.setProperty(
        "--life",
        life + "s"
    );
    heart.style.setProperty(
        "--x",
        randomBetween(-25, 25) + "px"
    );
    heart.style.setProperty(
        "--y",
        randomBetween(-25, 25) + "px"
    );
    heart.style.setProperty(
        "--x2",
        randomBetween(-35, 35) + "px"
    );
    heart.style.setProperty(
        "--y2",
        randomBetween(-35, 35) + "px"
    );
    document.body.appendChild(heart);
    setTimeout(function () {
        heart.remove();
    }, (life + 1) * 1000);
}
/* A few soft hearts around the page */
for (let i = 0; i < 10; i++) {
    setTimeout(
        createHeart,
        i * 350
    );
}
/* Keep them appearing gently */
setInterval(
    createHeart,
    1400
);