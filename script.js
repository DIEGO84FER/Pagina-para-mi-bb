function validarFecha(){

    const fecha = document.getElementById("fecha").value;

    if(fecha === "2026-05-24"){

        document.getElementById("loginPage").style.display = "none";

        document.getElementById("mainPage").style.display = "block";

        document.getElementById("musica").play();

        iniciarArbol();

    } else {

        document.getElementById("error").innerText =
        "Prueba con el día cuando tuviste a franui y yo te robé un besito :3";

    }
}

function iniciarArbol(){

const trunk =
document.getElementById("trunk");

trunk.style.height = "180px";

setTimeout(()=>{

crearCorazones();
escribirMensaje();
iniciarContador();

document.querySelector("h4").classList.add("aparecer");

},1000);

}

function crearCorazones(){

    const container =
    document.getElementById("hearts");

    const corazones = [
        "❤️",
        "💖",
        "💕",
        "💗"
    ];

    for(let i=0;i<150;i++){

        setTimeout(()=>{



            const heart =
            document.createElement("div");

            heart.classList.add("heart");

            heart.innerHTML =
            corazones[
                Math.floor(
                    Math.random() * corazones.length
                )
            ];

            const angle =
            Math.random() * Math.PI * 2;

            const radius = Math.sqrt(Math.random()) * 100;

            const x = 125 + Math.cos(angle) * radius * 1.4;
            const y = 70 + Math.sin(angle) * radius;

            heart.style.left = x + "px";
            heart.style.top = y + "px";

            container.appendChild(heart);

        }, i * 30);

    }

}

function escribirMensaje(){

const texto =
`Amo pensarte cada día, desde que te conoci por primera vez, y nunca quiero olvidar como me haces sentir... porque incluso
cuando no te veo, siento que te llevo aquí conmigo. Gracias por ser tú, mi niña Michelle, te adoro con 
todo mi corazón <3`;

let i = 0;

const mensaje =
document.getElementById("mensaje");

const intervalo =
setInterval(()=>{

mensaje.innerHTML += texto.charAt(i);

i++;

if(i >= texto.length){

clearInterval(intervalo);

}

},50);

}

function iniciarContador(){

const objetivo =
new Date("June 25, 2026 22:00:00").getTime();

setInterval(()=>{

const ahora =
new Date().getTime();

const diferencia =
objetivo - ahora;

const dias =
Math.floor(diferencia/(1000*60*60*24));

const horas =
Math.floor(
(diferencia%(1000*60*60*24))
/
(1000*60*60)
);

const minutos =
Math.floor(
(diferencia%(1000*60*60))
/
(1000*60)
);

const segundos =
Math.floor(
(diferencia%(1000*60))
/
1000
);

document.getElementById("countdown")
.innerHTML =
`${dias}d ${horas}h ${minutos}m ${segundos}s`;

},1000);

}