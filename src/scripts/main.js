AOS.init();

const dataDoEvento = new Date("Feb 12, 2026, 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / (diaEmMs));
    const horasAteOEvento = Math.floor((distanciaAteOEvento % (diaEmMs)) / (horasEmMs));
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % (horasEmMs)) / (minutosEmMs));
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % (minutosEmMs)) / 1000);

    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    document.getElementById("contador").innerHTML = "Começa em <br>" + diasAteOEvento + " dias, " + horasAteOEvento + " horas, " + minutosAteOEvento + " minutos e " + segundosAteOEvento + " segundos";

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = "Já começou!";
    }
}, 1000);