function calcular() {
    // vamos criar duas variaveis
    // JS as variaveis não posuem tipo
    let mascote, homenagem, leite, kit, suplemento, soma, equipe
    // recupera o valor do mascote digitado pelo usuario
    mascote = Number(document.getElementById("mascote").value)
    // recupera o valor da homenagem digitado pelo usuario
    homenagem = Number(document.getElementById("homenagem").value)
    // recupera a quantidade de litros de leite
    leite = Number(document.getElementById("leite").value)
    // recupera a qtde de kits avulso 
    kit = Number(document.getElementById("kit").value)
    // recupera a qtde de suplemento avulso
    suplemento = Number(document.getElementById("suplemento").value)
    // calcular a soma
    soma = mascote + homenagem + (2 * (leite))
    // vamos calcular a pontuação considerando metas de kits e suple.
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
   
    // retorna o valor ao HTML
    // template string
    document.getElementById("soma").innerHTML = `A soma é ${soma}`
}