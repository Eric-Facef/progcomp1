function calcular() {

    let mascote, homenagem, leite, kit, suplemento, arroz5, arroz1, feijao2, feijao1, oleo, macarrao, animacao, rAudiovisual, soma, equipe

    mascote = Number(document.getElementById("mascote").value)
    homenagem = Number(document.getElementById("homenagem").value)
    animacao = Number(document.getElementById("animacao").value)
    rAudiovisual = Number(document.getElementById("rAudiovisual").value)
    leite = Number(document.getElementById("leite").value)
    kit = Number(document.getElementById("kitAvulso").value)
    suplemento = Number(document.getElementById("suplementoAvulso").value)
    arroz1 = Number(document.getElementById("arroz5").value)
    arroz5 = Number(document.getElementById("arroz1").value)
    feijao1 = Number(document.getElementById("feijao1").value)
    feijao2 = Number(document.getElementById("feijao2").value)
    oleo = Number(document.getElementById("oleo").value)
    macarrao = Number(document.getElementById("macarrao").value)


    soma = mascote + homenagem + (2 * (leite)) +  arroz1 + (5 * (arroz5)) + feijao1 + (2 * (feijao2)) + oleo + ((macarrao) / 2) +  animacao + rAudiovisual

    equipe = document.getElementById("equipe").value
    if (equipe == "Laranja"){
        if (kit >= 97) {
            soma = soma + 5000 + ((kit-97) * 30)
        }
        else if (kit >= 78) {
            soma = soma + 4000 + ((kit-78) * 30)
        }
        else if (kit >= 49) {
            soma = soma + 2500 + ((kit-49) * 30)
        }
        else if (kit >= 19) {
            soma = soma + 1000 + ((kit-19) * 30)
        }
    }
    if (equipe == "Preta"){
        if (kit >= 103) {
            soma = soma + 5000 + ((kit-103) * 30)
        }
        else if (kit >= 82) {
            soma = soma + 4000 + ((kit-82) * 30)
        }
        else if (kit >= 52) {
            soma = soma + 2500 + ((kit-52) * 30)
        }
        else if (kit >= 21) {
            soma = soma + 1000 + ((kit-21) * 30)
        }
    }
    if (equipe == "Roxa"){
        if (kit >= 102) {
            soma = soma + 5000 + ((kit-102) * 30)
        }
        else if (kit >= 82) {
            soma = soma + 4000 + ((kit-82) * 30)
        }
        else if (kit >= 51) {
            soma = soma + 2500 + ((kit-51) * 30)
        }
        else if (kit >= 20) {
            soma = soma + 1000 + ((kit-20) * 30)
        }
    }
    if (equipe == "Verde"){
        if (kit >= 88) {
            soma = soma + 5000 + ((kit-88) * 30)
        }
        else if (kit >= 70) {
            soma = soma + 4000 + ((kit-70) * 30)
        }
        else if (kit >= 44) {
            soma = soma + 2500 + ((kit-44) * 30)
        }
        else if (kit >= 18) {
            soma = soma + 1000 + ((kit-18) * 30)
        }
    }
    if (equipe == "Vermelha"){
        if (kit >= 93) {
            soma = soma + 5000 + ((kit-93) * 30)
        }
        else if (kit >= 74) {
            soma = soma + 4000 + ((kit-74) * 30)
        }
        else if (kit >= 47) {
            soma = soma + 2500 + ((kit-47) * 30)
        }
        else if (kit >= 19) {
            soma = soma + 1000 + ((kit-19) * 30)
        }
    }

    document.getElementById("soma").innerHTML = `A soma é ${soma}`
}
