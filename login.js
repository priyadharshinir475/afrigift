
// ==============================
// GRAND LOGIN PAGE
// ==============================

const form = document.getElementById("loginForm");

const username = document.getElementById("username");

const password = document.getElementById("password");

const music = document.getElementById("bgMusic");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const user = username.value.trim();

    const pass = password.value.trim();

    // Change these later
    const correctUser = "Priyaafri";
    const correctPass = "Forever11";

    if (user === correctUser && pass === correctPass) {

        music.play().catch(() => {});

        document.body.classList.add("login-success");

        setTimeout(() => {

            window.location.href = "gallery.html";

        }, 2500);

    } else {

        alert("Wrong Username or Password ❤️");

        password.value = "";

        password.focus();

    }

});
// ===================================
// GRAND OPENING EFFECTS
// ===================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    createHearts();
    createStars();
    createSparkles();
    createRoses();
    createBalloons();

});

// Floating Hearts

function createHearts(){

    const box=document.getElementById("hearts");

    for(let i=0;i<20;i++){

        let heart=document.createElement("span");

        heart.className="heart";

        heart.innerHTML="❤";

        heart.style.left=Math.random()*100+"%";

        heart.style.animationDuration=(6+Math.random()*6)+"s";

        heart.style.fontSize=(12+Math.random()*24)+"px";

        box.appendChild(heart);

    }

}

// Floating Stars

function createStars(){

    const box=document.getElementById("stars");

    for(let i=0;i<25;i++){

        let star=document.createElement("span");

        star.className="star";

        star.innerHTML="★";

        star.style.left=Math.random()*100+"%";

        star.style.animationDuration=(5+Math.random()*5)+"s";

        star.style.fontSize=(10+Math.random()*18)+"px";

        box.appendChild(star);

    }

}
// ===================================
// ROSES
// ===================================

function createRoses(){

    const box=document.getElementById("roses");

    for(let i=0;i<15;i++){

        let rose=document.createElement("span");

        rose.className="rose";

        rose.innerHTML="🌹";

        rose.style.left=Math.random()*100+"%";

        rose.style.animationDuration=(8+Math.random()*5)+"s";

        rose.style.fontSize=(18+Math.random()*12)+"px";

        box.appendChild(rose);

    }

}

// ===================================
// BALLOONS
// ===================================

function createBalloons(){

    const box=document.getElementById("balloons");

    const colors=["🎈","🎈","🎈"];

    for(let i=0;i<10;i++){

        let balloon=document.createElement("span");

        balloon.className="balloon";

        balloon.innerHTML=colors[Math.floor(Math.random()*colors.length)];

        balloon.style.left=Math.random()*100+"%";

        balloon.style.animationDuration=(10+Math.random()*6)+"s";

        balloon.style.fontSize=(24+Math.random()*12)+"px";

        box.appendChild(balloon);

    }

}

// ===================================
// SPARKLES
// ===================================

function createSparkles(){

    const box=document.getElementById("sparkles");

    for(let i=0;i<30;i++){

        let spark=document.createElement("span");

        spark.className="sparkle";

        spark.innerHTML="✦";

        spark.style.left=Math.random()*100+"%";

        spark.style.top=Math.random()*100+"%";

        spark.style.fontSize=(8+Math.random()*10)+"px";

        box.appendChild(spark);

    }

}