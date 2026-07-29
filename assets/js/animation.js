function createShootingStar() {

    const star = document.createElement("div");

    star.className = "shooting-star";

    star.style.top = Math.random() * 35 + "%";
    star.style.left = "-250px";

    const duration = Math.random() * 1.5 + 2;

    star.style.animationDuration = duration + "s";

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, duration * 1000);

}

function startShootingStars() {

    createShootingStar();

    setInterval(() => {

        createShootingStar();

    }, Math.random() * 5000 + 7000);

}

startShootingStars();