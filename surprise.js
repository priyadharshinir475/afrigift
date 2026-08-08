
// ======================================
// GRAND SURPRISE LETTER
// Part 1A
// ======================================

const openBtn = document.getElementById("openBtn");

const letter = document.getElementById("letter");

const message = document.getElementById("message");

const text = `Happy Birthday Ammu Kutty ❤️🎂

Innaiku unakku romba special-aana day...
Aana enakku, nee en life-la vandha naalum
ovvoru naalum special thaan. 🥹❤️

Un smile paatha pothum,
enakku automatically happiness vandhudum. 😊

Un kooda pesina ovvoru moment-um,
namma share pannina ovvoru memory-um
enakku romba precious. 💖

Un life-la eppovume
santhosham, peace, success,
nalla health, neraya blessings
ellame irukkanum. ✨

Nee ninaikkura ellame
nalla padiya nadakkanum. 🤍

Eppavume happy-a iru,
sirichitte iru,
un dreams ellame achieve pannu. 🌸

Unakku naan eppovume
best wishes pannitu iruppen. ❤️

Once Again...

Happy Birthday Ammu Kutty! 🎂❤️
Un birthday unakku marakka mudiyatha
oru beautiful memory-a irukkanum. 🥹💙`;
let index = 0;

openBtn.addEventListener("click", () => {

    openBtn.style.display = "none";

    letter.classList.remove("hidden");

    typeWriter();

});
// ======================================
// TYPEWRITER EFFECT
// Part 1B
// ======================================

function typeWriter(){

    if(index < text.length){

        if(text.charAt(index) === "\n"){

            message.innerHTML += "<br>";

        }else{

            message.innerHTML += text.charAt(index);

        }

        index++;

        setTimeout(typeWriter,45);

    }else{

        setTimeout(showNextButton,1200);

    }

}
function showNextButton(){

    const btn = document.createElement("button");

    btn.innerHTML = "🎂 Next Surprise";

    btn.id = "nextBtn";

    btn.style.position = "fixed";
    btn.style.bottom = "30px";
    btn.style.left = "50%";
    btn.style.transform = "translateX(-50%)";
    btn.style.zIndex = "9999";

    btn.style.padding = "15px 40px";
    btn.style.border = "none";
    btn.style.borderRadius = "40px";

    btn.style.background =
        "linear-gradient(135deg,#FFD700,#FFF3A0,#C9A227)";

    btn.style.color = "#5A0000";
    btn.style.fontWeight = "bold";
    btn.style.fontSize = "18px";
    btn.style.cursor = "pointer";
    btn.style.boxShadow = "0 0 20px gold";

    btn.onclick = function(){

        window.location.href = "cake.html";

    };

    document.body.appendChild(btn);
}

