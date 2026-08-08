
// ======================================
// CAKE PAGE ANIMATION
// Candle + Fireworks + Confetti
// ======================================


function lightCandle(){

    const candle = document.querySelector(".candle");

    candle.innerHTML="🔥";

    document.getElementById("wish").innerHTML=
    "✨ Make a Wish ❤️✨";

}


// Celebrate Function

function celebrate(){

    document.getElementById("wish").innerHTML =
    "🎉 Happy Birthday Ammu Kutty! 🎉";

    createConfetti();

    fireworks();

    setTimeout(function(){

        window.location.href = "ending.html";

    },4000);

}

// Confetti

function createConfetti(){

    for(let i=0;i<80;i++){

        let confetti=document.createElement("div");

        confetti.innerHTML="🎊";

        confetti.style.position="fixed";
        confetti.style.left=Math.random()*100+"%";
        confetti.style.top="-20px";
        confetti.style.fontSize=
        (Math.random()*20+15)+"px";

        confetti.style.animation=
        "fall 3s linear";

        document.body.appendChild(confetti);


        setTimeout(()=>{

            confetti.remove();

        },3000);

    }

}


// Fireworks

function fireworks(){

    for(let i=0;i<20;i++){

        let fire=document.createElement("div");

        fire.innerHTML="✨";

        fire.style.position="fixed";
        fire.style.left=Math.random()*100+"%";
        fire.style.top=Math.random()*70+"%";
        fire.style.fontSize="40px";

        fire.style.animation=
        "boom 1s";

        document.body.appendChild(fire);


        setTimeout(()=>{

            fire.remove();

        },1000);

    }

}


// Animation CSS add

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

from{
transform:translateY(0);
}

to{
transform:translateY(100vh) rotate(360deg);
}

}


@keyframes boom{

0%{
transform:scale(0);
}

50%{
transform:scale(2);
}

100%{
opacity:0;
}

}

`;

document.head.appendChild(style);