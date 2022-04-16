time = {second: new Date().getSeconds() < 10 ? `0${new Date().getSeconds().toString()}` : new Date().getSeconds().toString(), minutes: new Date().getMinutes().toString() < 10 ? `0${new Date().getMinutes().toString()}` : new Date().getMinutes().toString(), hours:new Date().getHours().toString() < 10 ? `0${new Date().getHours().toString()}` : new Date().getHours().toString()};

// definição do tempo

let relogioDigital = document.getElementById("relogioDigital")

relogioDigital.innerHTML = `${time.hours}:${time.minutes}:${time.second}`;

const mudarRelogio = ()=> {
    time = {second: new Date().getSeconds() < 10 ? `0${new Date().getSeconds().toString()}` : new Date().getSeconds().toString(), minutes: new Date().getMinutes().toString() < 10 ? `0${new Date().getMinutes().toString()}` : new Date().getMinutes().toString(), hours:new Date().getHours().toString() < 10 ? `0${new Date().getHours().toString()}` : new Date().getHours().toString()};    
    
    relogioDigital.innerHTML = `${time.hours}:${time.minutes}:${time.second}`;
}


setInterval(mudarRelogio, 1000);
//definições do relogio digital
let ponteiroSegundo = Number(time.second)*6-90;

let ponteiroMinuto = Number(time.minutes)*6-90;

let ponteiroHoras = Number(time.hours) >= 12 ? ((Number(time.hours)-12 + (1/60)*Number(time.minutes))*30-90) : Number(time.hours + (1/60)*Number(time.minutes))*30-90
document.getElementById("ponHours").style.transform = `rotate(${ponteiroHoras}deg)`
document.getElementById("ponSec").style.transform = `rotate(${ponteiroSegundo}deg)`
document.getElementById("ponMin").style.transform = `rotate(${ponteiroMinuto}deg)`

const changePont = ()=>{
    ponteiroSegundo += 6;
    ponteiroMinuto += 0.1;
    ponteiroHoras = Number(time.hours) >= 12 ? ((Number(time.hours)-12 + (1/60)*Number(time.minutes))*30-90) : Number(time.hours + (1/60)*Number(time.minutes))*30-90
    document.getElementById("ponSec").style.transform = `rotate(${ponteiroSegundo}deg)`
    document.getElementById("ponMin").style.transform = `rotate(${ponteiroMinuto}deg)`
    document.getElementById("ponHours").style.transform = `rotate(${ponteiroHoras}deg)`
}   

setInterval(changePont,1000)

// definição do ponteiro de segundos analógico







