
// ======================================
// FINAL ENDING MESSAGE ❤️✨
// TYPEWRITER EFFECT
// ======================================


let message =
"Finally namma surprise-oda last page-ku vandhutom... ❤️\n\n"+
"Indha small surprise unakku konjamavathu happiness kuduthirukkum nu namburen. 🥹✨\n\n"+
"Namma share pannina ovvoru memory-um romba special. 💙\n\n"+
"Un life full-ah happiness, success, peace and beautiful moments niraya irukkanum. 🌸\n\n"+
"Un dreams ellame seekiram nijamaaganum. ✨\n\n"+
"Always happy-a iru, Ammu Kutty! ❤️\n\n"+
"Once Again... Happy Birthday Azhaku pullaa!🎂🐥\n\n"+
"Stay Happy... Stay Blessed... Always! 💙🩷";
let index = 0;

let textBox = document.getElementById("finalMessage");



function typeFinalMessage(){

    if(index < message.length){

        if(message.charAt(index)==="\n"){

            textBox.innerHTML += "<br>";

        }

        else{

            textBox.innerHTML += message.charAt(index);

        }


        index++;

        setTimeout(typeFinalMessage,50);

    }

}



function restart(){

    window.location.href="index.html";

}



window.onload=function(){

    typeFinalMessage();

}