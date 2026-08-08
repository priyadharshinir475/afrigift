// ======================================
// GRAND CINEMATIC GALLERY
// Part 1A
// ======================================

const photo = document.getElementById("photo");
const quote = document.getElementById("quote");
const counter = document.getElementById("count");
const progress = document.getElementById("progress-bar");

const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg",
    "photo6.jpg",
    "photo7.jpg",
    "photo8.jpg",
    "photo9.jpg",
    "photo10.jpg",
    "photo11.jpg",
    "photo12.jpg",
    "photo13.jpg",
    "photo14.jpg",
    "photo15.jpg",
    "photo16.jpg",
    "photo17.jpg",
    "photo18.jpg",
    "photo19.jpg"
];

const quotes = [
    "Every heartbeat of mine whispers your name. ❤️",
    "You are the most beautiful chapter of my life. 💖",
    "Every smile of yours makes my world brighter. ✨",
    "No matter how many birthdays come, my prayers are always with you. 🎂",
    "You are my happiness, my peace, my forever. ❤️",
    "Every memory with you is priceless. 💞",
    "You are the reason behind my smile every day. 😊",
    "My heart always chooses you. 💘",
    "You are the best gift life has given me. 🎁",
    "Your smile is more beautiful than a thousand stars. ⭐",
    "I wish every dream of yours comes true. 🌸",
    "You deserve endless happiness today and always. 💐",
    "Thank you for being a beautiful part of my life. ❤️",
    "Distance can never reduce my love and care for you. 💙",
    "Every moment spent with you is unforgettable. 🥰",
    "You are special today, tomorrow, and forever. 🌹",
    "May this birthday bring endless joy to your heart. 🎉",
    "My prayers and blessings are always with you. 🤍",
    "Once Again... Happy Birthday, My Precious Person. 🎂❤️"
];

let current = 0;

// ======================================
// AUTO SLIDESHOW
// Part 1B
// ======================================

function showPhoto() {

    photo.style.opacity = "0";

    setTimeout(() => {

        photo.src = photos[current];

        quote.innerHTML = quotes[current];

        counter.innerHTML = (current + 1) + " / 19";

        progress.style.width =
            ((current + 1) / 19) * 100 + "%";

        photo.style.opacity = "1";

    }, 500);
}

showPhoto();

setInterval(() => {

    current++;

    if (current >= photos.length) {
        current=0;
      
    }

    showPhoto();

}, 6000);

// ======================================
// FLOATING EFFECTS
// Part 1C
// ======================================

window.addEventListener("load", () => {

    createHearts();
    createStars();
    createSparkles();
    createRoses();
    createBalloons();

});

function createHearts() {

    const box = document.getElementById("hearts");

    for (let i = 0; i < 25; i++) {

        let heart = document.createElement("span");

        heart.className = "heart";
        heart.innerHTML = "❤";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.animationDuration =
            (6 + Math.random() * 6) + "s";

        heart.style.fontSize =
            (15 + Math.random() * 20) + "px";

        box.appendChild(heart);
    }
}

function createStars() {

    const box = document.getElementById("stars");

    for (let i = 0; i < 30; i++) {

        let star = document.createElement("span");

        star.className = "star";
        star.innerHTML = "★";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        star.style.fontSize =
            (10 + Math.random() * 16) + "px";

        box.appendChild(star);
    }
}

function createSparkles() {

 const box = document.getElementById("sparkles");

    for (let i = 0; i < 35; i++) {

        let spark = document.createElement("span");

        spark.className = "sparkle";
        spark.innerHTML = "✦";

        spark.style.left =
            Math.random() * 100 + "%";

        spark.style.top =
            Math.random() * 100 + "%";

        spark.style.fontSize =
            (8 + Math.random() * 10) + "px";

        box.appendChild(spark);
    }
}

// ======================================
// Part 1D - Final Gallery Effects
// ======================================

function createRoses() {

    const box = document.getElementById("roses");

    for (let i = 0; i < 18; i++) {

        let rose = document.createElement("span");

        rose.className = "rose";
        rose.innerHTML = "🌹";

        rose.style.left =
            Math.random() * 100 + "%";

        rose.style.animationDuration =
            (8 + Math.random() * 6) + "s";

        rose.style.fontSize =
            (18 + Math.random() * 12) + "px";

        box.appendChild(rose);
    }
}

function createBalloons() {

    const box = document.getElementById("balloons");

    for (let i = 0; i < 12; i++) {

        let balloon = document.createElement("span");

        balloon.className = "balloon";
        balloon.innerHTML = "🎈";

        balloon.style.left =
            Math.random() * 100 + "%";

        balloon.style.animationDuration =
            (10 + Math.random() * 5) + "s";

        balloon.style.fontSize =
            (25 + Math.random() * 15) + "px";

        box.appendChild(balloon);
    }
}

// ======================================
// Smooth Page Fade
// ======================================

document.body.style.opacity = "0";

window.onload = () => {

    document.body.style.transition = "opacity 2s";
    document.body.style.opacity = "1";
};
